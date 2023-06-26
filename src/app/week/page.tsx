import WeekCalendar from "@/components/WeekCalendar/WeekCalendar";

const week = () => {
  return(
    <div>
      <WeekCalendar/>
      <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-sky-100">
        Task List
      </div>
    </div>
  );
};

export default week;