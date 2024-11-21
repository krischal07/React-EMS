import React, { useState } from "react";

const CreateTask = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(taskTitle, date, assignTo, category, description);
    setTaskTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");

    setTask({
      taskTitle,
      date,
      assignTo,
      category,
      description,
      active: false,
      newTask: true,
      failed: true,
      completed: false,
    });
    console.log("new task set", task);
  };

  const [task, setTask] = useState("");

  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState();
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="mt-10">
      <form
        className="bg-[#2c3539] flex w-full items-start  justify-between gap-16 text-white"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="px-7 py-5 w-1/2 ">
          <h3>Task Title</h3>
          <input
            type="text"
            placeholder="Make a Task"
            className="text-white rounded w-full h-1/5/2 p-1 bg-[#2c3539] border-2 border-white"
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
          />
          <div className="mt-3">
            <h3>Date</h3>
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              className="text-white rounded w-full h-1/5/2 p-1 bg-[#2c3539] border-2 border-white"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <h3>Assign To</h3>
            <input
              type="text"
              placeholder="Employee Name"
              className="text-white rounded w-full h-1/5/2 p-1 bg-[#2c3539] border-2 border-white"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <h3>Category</h3>
            <input
              type="text"
              placeholder="design,dev,qa"
              className="text-white rounded w-full h-1/5/2 p-1 bg-[#2c3539] border-2 border-white "
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col  px-7 py-5 w-1/2">
          <h3>Description</h3>
          <textarea
            name=""
            id=""
            className=" bg-[#2c3539] border-2  h-[135px] rounded"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button className="bg-emerald-400 mt-5 h-[50px] font-semibold rounded">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
