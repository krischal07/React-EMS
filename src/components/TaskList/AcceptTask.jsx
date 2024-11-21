import React from "react";

const AcceptTask = ({ data }) => {
  console.log("elem is", data.title);

  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl text-white">
      <div className="flex justify-between items-center text-sm">
        <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
        <h3 className="text-sm">{data.date}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-bold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex justify-between mt-4 ">
        <button className="bg-green-500 py-1 px-2 text-sm">
          Mark As Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark As Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
