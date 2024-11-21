import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl text-white">
      <div className="flex justify-between items-center text-sm">
        <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
        <h3 className="text-sm">{data.date}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-bold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-2">
        <button className="w-1/2 bg-blue-500">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
