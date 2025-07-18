export type DemoBooking = {
  start_time: Date; // ISO 8601 format eg. 2025-06-10T15:30:00Z
  duration: number;
  name: string;
  role: string;
  comp_name: string;
  emp_count: string;
  event_count: string;
  email: string;
  comment: string;
  created_at?: string;
};
