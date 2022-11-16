import React from "react";
import DashboardDocuVuStorage from "../components/DashboardDocuVuStorage";
import NoUploads from "../components/NoUploads";
import SystemInfo from "../components/SystemInfo";
import NoUsage from "../components/NoUsage";

const Dashboard = () => {
  return (
    <div className="bg-red-400 w-[77rem] h-[34rem]">
      <div className="flex flex-col gap-4 overflow-auto">
        {/* <div className='py-2 text-lg ml-2 font-normal'>
                <h1>Dashboard</h1>
            </div> */}
        <DashboardDocuVuStorage />
        <div className="flex flex-row gap-4">
          <SystemInfo />
          <NoUploads />
          <NoUsage />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
