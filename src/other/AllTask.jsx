import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.empData);

  return (
    <div className=" bg-[#2c3539] rounded p-5 mt-5 h-66 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white">
        <div className="w-1/5  text-lg font-medium">Employee Name</div>
        <h3 className="w-1/5  text-lg font-medium">New Task </h3>
        <h5 className="w-1/5 text-lg font-medium ">Active Task</h5>
        <h5 className="w-1/5  text-lg font-medium">Completed</h5>
        <h5 className="w-1/5  text-lg font-medium">Failed</h5>
      </div>

      <div className="h-[80%] ">
        {authData.empData.map((elem) => {
          console.log(elem);

          return (
            <div className=" mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-500">
              <div className="w-1/5 text-white  text-lg font-medium">
                {elem.firstName}
              </div>
              <h3 className="w-1/5 text-blue-600 text-lg font-medium">
                {elem.taskCount.newTask}{" "}
              </h3>
              <h5 className="w-1/5 text-yellow-400 text-lg font-medium">
                {elem.taskCount.active}
              </h5>
              <h5 className="w-1/5 text-pink-600 text-lg font-medium">
                {elem.taskCount.completed}
              </h5>
              <h5 className="w-1/5 text-red-600 text-lg font-medium">
                {elem.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
