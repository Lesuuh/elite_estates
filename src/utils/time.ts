import { formatDistanceToNow, differenceInDays, format } from "date-fns";

export const timeAgoOrDate = (dateString?: string | null) => {
  if (!dateString) return "-"; // fallback for missing dates

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "-"; // invalid date fallback

  const daysDiff = differenceInDays(new Date(), date);

  if (daysDiff < 7) {
    return formatDistanceToNow(date, { addSuffix: true });
  } else {
    return format(date, "MMM dd, yyyy"); // Jan 20, 2026
  }
};
