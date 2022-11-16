import React from 'react';
import DashboardDocuVuStorage from '../components/DashboardDocuVuStorage';
import NoUploads from '../components/NoUploads';
import SystemInfo from '../components/SystemInfo';


const Dashboard = () =>{
    return (
		<div className="flex flex-col gap-4">
			<DashboardDocuVuStorage />
			<div className="flex flex-row gap-4">
			<SystemInfo />
			</div>
			<div className="flex flex-row gap-4">
				<NoUploads />
			</div>
			<div className="flex flex-row gap-4 w-full">
	
			</div>
		</div>
	)
}
	
export default Dashboard;