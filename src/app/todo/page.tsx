"use client";

import { Checkbox } from "@/components/ui/checkbox";
import TodoItem from "@/types/TodoItem";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { GripVertical, Plus, Trash } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { successToast } from "@/lib/toast";

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
    successToast("Item added");
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

  // a little function to help us with reordering the result
  const reorder = (list: TodoItem[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(data, result.source.index, result.destination.index);

    setData(items);
  };

  return (
    <div className="space-y-2.5">
      <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-gray-200">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">My Todo list</h1>
          </div>
          <div className="flex flex-row justify-between">
          <Button onClick={handleAddTask} className="w-fit" variant="ghost">
            <Plus />
          </Button>

          <Button onClick={handleAddTask} className="w-fit" variant="ghost">
            <Trash />
          </Button>
          </div>
       
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div
                ref={parent}
                className="flex flex-col space-y-2.5 max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-gray-200"
              >
                {data.map((item, index) => (
                  <Draggable
                    key={index}
                    draggableId={`${item}-${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="flex flex-row items-center space-x-3 w-full py-4 px-4 rounded-md shadow-md bg-white "
                      >
                        <Checkbox
                          checked={item.isCompleted}
                          id="terms2"
                          onClick={() => {
                            handleCheckTodo(index);
                          }}
                          className="mr-1"
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
                                onBlur={(e) => {
                                  handleEditTodo(e);
                                }}
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
                        text-sm font-light leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 break-words transition duration-150 w-full
                        ${item.isCompleted && "line-through"}
                      `}
                            >
                              {item.title}
                            </p>
                          )}
                        </>
                        <div {...provided.dragHandleProps}>
                          <GripVertical className="justify-self-end cursor-pointer text-gray-400" />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Todo;
