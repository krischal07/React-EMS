import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
// 2;37
const TaskList = ({ data }) => {
  console.log("this is data", data);
  console.log("this is data.task ", data.tasks);
  //   console.log("Hello");

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full  mt-10"
    >
      {data.tasks.map((elem, idx) => {
        // <h1 className="text-white">Hello guys</h1>;
        console.log("this is elem ", elem);
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
      {/* <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl"></div> */}
    </div>
  );
};

export default TaskList;
