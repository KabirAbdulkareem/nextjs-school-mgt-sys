import Image from "next/image";
import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold my-4">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      {/* Announcements */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-kbSkyLight rounded-md p-4 ">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem Ipsum generators</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>

        <div className="bg-kbPurpleLight rounded-md p-4 ">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem Ipsum generators</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>

        <div className="bg-kbYellowLight rounded-md p-4 ">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem Ipsum generators</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
