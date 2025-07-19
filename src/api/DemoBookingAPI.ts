import { DemoBooking } from "@/types/DemoBooking";
import axios from "axios";

export const publicAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createDemoBooking = async (
  demoBooking: DemoBooking
): Promise<DemoBooking> => {
  const response = await publicAPI.post<DemoBooking>(
    "/api/1.0/demo_booking",
    demoBooking
  );
  return response.data;
};

export const getAllDemoBooking = async (
  startTime: string,
  window: number // in days
): Promise<DemoBooking[]> => {
  const response = await publicAPI.get<DemoBooking[]>(
    `/api/1.0/demo_booking?start_time=${startTime}&window=${window}`
  );
  return response.data;
};
