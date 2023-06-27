import Title from "@/components/shared/Title";

const Day = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex flex-row p-4">
      <div className="flex flex-col lg:flex-col space-y-4 lg:space-y-2 lg:space-x-4 p-4 lg:w-1/3">
        <Title size="h2">Daily Plan</Title>
        <span>{dateString}</span>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <Title size="h3">Top Priorities</Title>
            <div className="flex flex-col space-y-2">
              <div className="border rounded p-2">Priority 1</div>
              <div className="border rounded p-2">Priority 2</div>
              <div className="border rounded p-2">Priority 3</div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-full lg:w-full">
            <Title size="h3">To-Do List</Title>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Todo 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Todo 2</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="flex flex-col space-y-4 lg:w-2/3">
          <div className="flex flex-col ">
            <div className="flex justify-center items-center">
              <Title size="h2" className="mt-6">
                Schedule
              </Title>
            </div>
            <div className="flex flex-row justify-around">
              <div className="border rounded p-2">Left</div>
              <div className="border rounded p-2">Right</div>
              
            </div>
          </div>
          <div className="flex flex-col ">
            <Title size="h3">Notes</Title>
            <textarea className="border rounded p-2 w-full h-32"></textarea>
          </div>
        </div>
      
    </div>
  );
};

export default Day;
