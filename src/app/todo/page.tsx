"use client";

import { Checkbox } from "@/components/ui/checkbox";
import TodoItem from "@/types/TodoItem";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { GripVertical } from "lucide-react";

const INITIAL_DATA: TodoItem[] = [];
const NEW_TASK: TodoItem = {
  title: "To do",
  isCompleted: false,
};

const Todo = () => {
  const [data, setData] = useState<TodoItem[]>(INITIAL_DATA);
  const [value, setValue] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number>(-1);
  const [parent] = useAutoAnimate({ duration: 100 });

  const handleAddTask = () => {
    setValue("");
    setIsEditing(-1);
    setData((data) => [...data, NEW_TASK]);
  };

  const handleEditTodo = (e: any) => {
    e.preventDefault();
    const temp = [...data];
    temp.splice(isEditing, 1, {
      title: value,
      isCompleted: false,
    });
    setData(temp);
    setValue("");
    setIsEditing(-1);
  };

  const handleCheckTodo = (index: number) => {
    const temp = data.map((item, idx) =>
      idx !== index
        ? item
        : {
            title: data[index].title,
            isCompleted: !data[index].isCompleted,
          }
    );
    setData(temp);
  };

  return (
    <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-gray-100">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-center text-2xl font-semibold mb-4">
          My Todo list
        </h1>
        <Button onClick={handleAddTask} className="w-full">
          +Task
        </Button>
      </div>

      <div ref={parent} className="flex flex-col space-y-3.5 mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center space-x-2 w-full py-4 px-4 rounded-md shadow-md bg-white"
          >
            <Checkbox
              checked={item.isCompleted}
              id="terms2"
              onClick={() => {
                handleCheckTodo(index);
              }}
            />
            <>
              {isEditing === index ? (
                <form
                  className="w-full"
                  onSubmit={(e) => {
                    handleEditTodo(e);
                  }}
                >
                  <input
                    autoFocus
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="Jot something down..."
                    className="text-sm font-light rounded-md w-full bg-transparent focus:outline-none"
                  />
                </form>
              ) : (
                <p
                  onClick={() => {
                    setIsEditing(index);
                    setValue(item.title);
                  }}
                  className={`
                text-sm font-light leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 break-all transition duration-150 w-full
                ${item.isCompleted && "line-through"}
              `}
                >
                  {item.title}
                </p>
              )}
            </>
            <GripVertical className="justify-self-end cursor-pointer text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
