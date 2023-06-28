const Day = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex flex-row px-6 pb-4 ">
      <div className="flex flex-col space-y-4 lg:space-x-4 p-4 lg:w-1/3">
        <h1 className="title-h1">Daily Plan</h1>
        <p className="w-fit px-4 py-4 shadow-lg rounded-lg bg-blue-100">{dateString}</p>

          <div className="flex flex-col">
            <h3 className="title-h3">Top Priorities</h3>
            <div className="flex flex-col space-y-2">
              <div className="border rounded p-2 bg-red-100">Priority 1</div>
              <div className="border rounded p-2 bg-red-100">Priority 2</div>
              <div className="border rounded p-2 bg-red-100">Priority 3</div>
            </div>
          </div>

          <div className="flex flex-col p-4 shadow-lg rounded-lg bg-lime-100">
            <h3 className="title-h3">To-Do List</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox"/>
                <span>Todo 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Todo 2</span>
              </div>
            </div>
          </div>
        
      </div>

      <div className="flex flex-col p-4 lg:w-2/3">
        <div className="flex flex-col ">
          <div className="flex justify-center items-center">
            <h2 className="title-h2">Schedule</h2>
          </div>
          <div className="flex flex-row justify-around">
            <div className="border rounded p-2">Left</div>
            <div className="border rounded p-2">Right</div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="title-h3">Notes</h3>
          <textarea className="border rounded p-2 w-full h-32 bg-orange-100"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Day;
