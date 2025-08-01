"use client";
import { CustomOption, CustomPopout } from "@/app/ui-components/CustomPopout";
import { DemoBooking } from "@/types/DemoBooking";
import { Timer } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { format, setHours, setMinutes } from "date-fns";
import { createDemoBooking, getAllDemoBooking } from "@/api/DemoBookingAPI";
import {
  allTimeZones,
  getAllMonthsOfYear,
  getDaysOfMonth,
} from "@/utils/datetime";
import { isSameMinute } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";

interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

const defaultSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
  "12:00 AM",
];

const BookMeetingForm = () => {
  const companySizeOptions = [
    { label: "1 - 20", value: "1 - 20" },
    { label: "20 - 100", value: "20 - 100" },
    { label: "100 - 500", value: "100 - 500" },
    { label: "500 - 1000", value: "500 - 1000" },
    { label: "1000+", value: "1000+" },
  ];
  const eventCountOptions = [
    { label: "0 - 1M", value: "0 - 1M" },
    { label: "1M - 10M", value: "1M - 10M" },
    { label: "10M - 100M", value: "10M - 100M" },
    { label: "100M - 500M", value: "100M - 500M" },
    { label: "500M - 1B", value: "500M - 1B" },
    { label: "1B - 10B", value: "1B - 10B" },
    { label: "10B - 50B", value: "10B - 50B" },
    { label: "50B - 100B", value: "50B - 100B" },
    { label: "100B+", value: "100B+" },
  ];

  const defaultDemoBooking: DemoBooking = {
    name: "",
    role: "",
    comp_name: "",
    emp_count: "",
    event_count: "",
    email: "",
    comment: "",
    start_time: new Date(),
    duration: 30,
  };

  const { control, register, handleSubmit, formState } = useForm<DemoBooking>({
    defaultValues: defaultDemoBooking,
    mode: "onSubmit",
  });

  const { isDirty, isValid, errors } = formState;

  const currentYear = new Date().getFullYear();
  const currentMonthIndex = new Date().getMonth(); // 0–11
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonthIndex);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [allDays, setAllDays] = useState(
    getDaysOfMonth(currentMonthIndex, currentYear)
  );
  const [bookedSlots, setBookedSlots] = useState<DemoBooking[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>("");

  useEffect(() => {
    setSelectedTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  // ask deepak
  useEffect(() => {
    if (!selectedDay) return;

    // Combine selected date with time
    const dateTime = setHours(setMinutes(selectedDay, 0), 0);

    // Convert to UTC ISO string
    const startTime = new Date(dateTime).toISOString(); // example: 2025-06-10T15:30:00.000Z

    // Pass formatted startTime to API
    getAllDemoBooking(startTime, 1).then((bookings) => {
      setBookedSlots(bookings);

      const updatedSlots = defaultSlots.map((time) => {
        const [timePart, meridian] = time.split(" ");
        let [hour, minute] = timePart.split(":").map(Number);

        // Convert to 24-hour format
        if (meridian === "PM" && hour !== 12) hour += 12;
        if (meridian === "AM" && hour === 12) hour = 0;

        // Create naive date from selectedDay and time
        const naiveDate = setHours(
          setMinutes(new Date(selectedDay), minute),
          hour
        );

        // Convert local time in selected timezone to UTC
        const slotDate = toZonedTime(naiveDate, selectedTimeZone);

        const isBooked = bookings.some((booking: DemoBooking) =>
          isSameMinute(new Date(booking.start_time), slotDate)
        );

        return {
          time,
          isAvailable: !isBooked,
        };
      });
      setTimeSlots(updatedSlots);
    });
  }, [selectedMonth, selectedDay, selectedTimeZone]);

  // Update days when selectedMonth changes
  useEffect(() => {
    const updatedDays = getDaysOfMonth(selectedMonth, currentYear);
    setAllDays(updatedDays);
    setStartIndex(0); // reset scroll to beginning
    setSelectedDay(null);
  }, [selectedMonth, currentYear]);

  const monthOptions: CustomOption[] = getAllMonthsOfYear(currentYear);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 7));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(allDays.length - 7, prev + 7));
  };

  const onSubmit = (formData: DemoBooking) => {
    if (!selectedMonth || !selectedDay || !selectedTime) {
      alert("Please select a month, day, and time.");
      return;
    }

    const [timePart, meridian] = selectedTime.split(" ");
    let [hour, minute] = timePart.split(":").map(Number);
    if (meridian === "PM" && hour !== 12) hour += 12;
    if (meridian === "AM" && hour === 12) hour = 0;

    const localDate = setHours(setMinutes(new Date(selectedDay), minute), hour);
    const startDateTime = fromZonedTime(localDate, selectedTimeZone);

    const payload: DemoBooking = {
      ...formData,
      start_time: startDateTime,
      duration: 30,
      emp_count: formData.emp_count,
      event_count: formData.event_count,
    };

    createDemoBooking(payload)
      .then((res) => {
        alert("Booking successful!");
      })
      .catch((err) => {
        alert("Something went wrong.");
      });
  };

  return (
    <div className="flex flex-col h-full hide-scrollbar">
      <div className="flex flex-col lg:flex-row gap-8 ">
        <div className="flex flex-col justify-center text-white space-y-3 w-full ">
          <p className="text-gray-200">
            We are happy to answer questions and get you acquainted with
            Datablit.
          </p>
          <p>
            <span className="text-[#4747ad] m-2">✓</span>
            <span className="text-gray-200">Schedule a demo</span>
          </p>
          <p>
            <span className="text-[#4747ad] m-2">✓</span>
            <span className="text-gray-200">Get billing and tech support</span>
          </p>
          <p>
            <span className="text-[#4747ad] m-2">✓</span>
            <span className="text-gray-200">
              Explore use cases for your team
            </span>
          </p>
          <p>
            <span className="text-gray-200 m-2 flex items-center gap-1.5 ">
              <Timer size={16} /> Duration: 30 min
            </span>
            <span className="text-sm text-gray-400"> Select date and time</span>
          </p>

          <div className="flex flex-row gap-2">
            <CustomPopout
              options={monthOptions}
              value={selectedMonth}
              onChange={(value) => setSelectedMonth(value)}
              placeholder="Select a month"
              size="formsize"
              className=" placeholder:text-xs w-sm bg-black  border border-white/10 hover:bg-white/10 transition  placeholder:text-gray-400 text-white"
            />
            <CustomPopout
              options={allTimeZones.map((timeZone) => ({
                label: timeZone,
                value: timeZone,
              }))}
              value={selectedTimeZone}
              onChange={(value) => setSelectedTimeZone(value)}
              size="formsize"
              className="placeholder:text-xs w-sm bg-black  border border-white/10 hover:bg-white/10 transition placeholder:text-gray-400 text-white"
            />
          </div>

          {/* Arrow + Day Card Carousel */}
          <div className="flex items-center justify-between gap-2">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="text-white disabled:opacity-40 text-2xl px-2"
            >
              ◀
            </button>

            {/* Visible 7 Days */}
            <div className="grid grid-cols-7 gap-2 flex-grow">
              {allDays.slice(startIndex, startIndex + 7).map(({ date }) => {
                const isSelected =
                  selectedDay?.toDateString() === date.toDateString();
                return (
                  <div
                    key={date.toISOString()}
                    onClick={() => setSelectedDay(date)}
                    className={`p-3 text-center rounded-md border cursor-pointer border-white/10 bg-white/5 shadow-sm ${
                      isSelected ? "border-blue-400 bg-blue-600" : ""
                    }`}
                  >
                    <div className="text-lg font-medium">
                      {format(date, "d")}
                    </div>
                    <div className="text-xs text-gray-400">
                      {format(date, "EEEE")}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={startIndex + 7 >= allDays.length}
              className="text-white disabled:opacity-40 text-2xl px-2"
            >
              ▶
            </button>
          </div>
          {selectedDay && (
            <div>
              <h3 className="mb-2 text-sm font-semibold text-gray-400">
                Availability on {format(selectedDay, "MMMM d, yyyy")}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {timeSlots.map((timeSlot) => {
                  return (
                    <button
                      key={timeSlot.time}
                      className={`
        px-1 py-1 text-center rounded-md border backdrop-blur-sm shadow-sm 
        text-sm whitespace-nowrap 
        ${
          !timeSlot.isAvailable
            ? "bg-green-600 border-green-400 text-white cursor-not-allowed"
            : selectedTime == timeSlot.time
            ? "bg-blue-600 border-blue-400 text-white"
            : "bg-white/5 hover:bg-blue-600 hover:border-blue-400 border-white/10 text-white"
        }
      `}
                      onClick={() =>
                        timeSlot.isAvailable && setSelectedTime(timeSlot.time)
                      }
                      disabled={!timeSlot.isAvailable}
                    >
                      {timeSlot.time}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center w-full lg:w-1/2 ">
          <form
            className=" items-start "
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className=" mb-4 flex flex-col m-4 ">
              <label
                htmlFor="name"
                className="mb-2 block text-md font-medium text-white"
              >
                Name
              </label>
              <input
                placeholder=""
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                  maxLength: {
                    value: 100,
                    message: "maximum 100 characters allowed",
                  },
                  pattern: {
                    value: /^[A-Za-z]+( [A-Za-z]+)?$/,
                    message: "Enter one or two words using only A-Z and a-z",
                  },
                })}
                className="p-1.5  placeholder:text-sm focus:border-[#4747AD] focus:border-2 focus:outline-none w-sm bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition  placeholder:text-gray-400 text-white"
              />
              <p className="text-red-700 text-sm align-text-bottom mt-1">
                {errors.name?.message}
              </p>
            </div>
            <div className="  flex flex-col m-4 ">
              <label
                htmlFor="comp_name"
                className="mb-2 block text-md font-medium text-white"
              >
                Company Name
              </label>
              <input
                placeholder=""
                {...register("comp_name", {
                  required: {
                    value: true,
                    message: "company name is required",
                  },
                  maxLength: {
                    value: 100,
                    message: "maximum 100 characters allowed",
                  },
                  pattern: {
                    value: /^[A-Za-z]+( [A-Za-z]+)?$/,
                    message: "Enter one or two words using only A-Z and a-z",
                  },
                })}
                className="p-1.5  placeholder:text-sm focus:border-[#4747AD] focus:border-2 focus:outline-none w-sm bg-white/5  border border-white/10 hover:bg-white/10 transition  placeholder:text-gray-400 text-white"
              />
              <p className="text-red-700 text-sm align-text-bottom mt-1">
                {errors.name?.message}
              </p>
            </div>
            <div className="  flex flex-col m-4 ">
              <label
                htmlFor="email"
                className="mb-2 block text-md font-medium text-white"
              >
                Business Email
              </label>
              <input
                placeholder=""
                {...register("email", {
                  required: "Business email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="p-1.5  placeholder:text-sm focus:border-[#4747AD] focus:border-2 focus:outline-none w-sm bg-white/5 border border-white/10 hover:bg-white/10 transition  placeholder:text-gray-400 text-white"
              />
              <p className="text-red-700 text-sm align-text-bottom mt-1">
                {errors.name?.message}
              </p>
            </div>
            <div className="m-4 flex flex-col">
              <label
                htmlFor="emp_count"
                className="mb-2 block text-md font-medium text-white"
              >
                Company size
              </label>{" "}
              <Controller
                name="emp_count"
                control={control}
                rules={{ required: "Company size is required" }}
                render={({ field }) => (
                  <CustomPopout
                    options={companySizeOptions}
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                    placeholder="Please select one"
                    size="formsize"
                    className="placeholder:text-xs w-sm bg-black  border border-white/10 hover:bg-white/10 transition placeholder:text-gray-400 text-white"
                  />
                )}
              />
              <p className="text-red-700 text-sm align-text-bottom mt-1">
                {errors.emp_count?.message}
              </p>
            </div>
            <div className="  flex flex-col m-4 ">
              <label
                htmlFor="role"
                className="mb-2 block text-md font-medium text-white"
              >
                Role
              </label>
              <input
                placeholder=""
                {...register("role", {
                  maxLength: {
                    value: 100,
                    message: "maximum 100 characters allowed",
                  },
                  pattern: {
                    value: /^[A-Za-z]+( [A-Za-z]+)?$/,
                    message: "Enter one or two words using only A-Z and a-z",
                  },
                })}
                className="p-1.5  placeholder:text-sm focus:border-[#4747AD] focus:border-2 focus:outline-none w-sm bg-white/5 border border-white/10 hover:bg-white/10 transition  placeholder:text-gray-400 text-white"
              />
              <p className="text-red-700 text-sm align-text-bottom mt-1">
                {errors.role?.message}
              </p>
            </div>
            <div className="m-4 flex flex-col">
              <label
                htmlFor="event_count"
                className="mb-2 block text-md font-medium text-white"
              >
                Estimated Event Volume
              </label>{" "}
              <Controller
                name="event_count"
                control={control}
                rules={{
                  required: "Estimated event count is required",
                }}
                render={({ field }) => (
                  <CustomPopout
                    options={eventCountOptions}
                    value={field.value}
                    onChange={(val) => field.onChange(val)} // val is a string
                    placeholder="Please select one"
                    size="formsize"
                    className="placeholder:text-xs w-sm bg-white/5 border border-white/10 hover:bg-white/10 transition placeholder:text-gray-400 text-white"
                  />
                )}
              />
              <p className="text-red-700 text-sm align-text-bottom mt-1">
                {errors.event_count?.message}
              </p>
            </div>
            <div className="flex justify-end m-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookMeetingForm;
