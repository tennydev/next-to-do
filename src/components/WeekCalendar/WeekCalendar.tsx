"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const WeekCalendar = () => {
  const [date, setDate] = useState<Date | undefined>();

  const startOfWeek = new Date();
  const endOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));

  return (
    <div className="max-w-fit mb-3 mx-auto p-3 shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          hidden={{
            before: startOfWeek,
            after: endOfWeek
          }}
          disableNavigation
          components={{
            Caption: () => null,
            CaptionLabel: () => null
          }}
        />
      </div>
    </div>
  );
};

export default WeekCalendar;