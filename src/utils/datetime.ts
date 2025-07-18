import { CustomOption } from "@/app/ui-components/CustomPopout";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  setMonth,
  setYear,
  startOfMonth,
} from "date-fns";

export const getAllMonthsOfYear = (year: number): CustomOption[] => {
  return Array.from({ length: 12 }, (_, index) => {
    const date = startOfMonth(setMonth(setYear(new Date(), year), index));
    return {
      label: format(date, "MMMM yyyy"), // e.g., "June 2025"
      value: index, // month index (0 = January, 11 = December)
    };
  });
};

export const getDaysOfMonth = (monthIndex: number, year: number) => {
  const start = startOfMonth(setMonth(setYear(new Date(), year), monthIndex));
  const end = endOfMonth(start);
  const days = eachDayOfInterval({ start, end });

  return days.map((date) => ({
    label: `${format(date, "EEEE")} ${format(date, "d")}`,
    dayOfWeek: getDay(date),
    date,
  }));
};

export const allTimeZones = Intl.supportedValuesOf("timeZone");
