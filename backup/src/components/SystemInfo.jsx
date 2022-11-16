import React from 'react'


const SystemInfo = () => {
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col border-t-4 border-0 border-gray-400">
			<strong className="text-gray-700 font-medium">System Information</strong>
			<div className="mt-3 w-full flex-1 text-xs">
                <span className="text-sm text-black font-bold">Device Name</span>
                <span className="text-basic text-black font-semibold ml-10">UIC-FG101FTK19002009</span>
			</div>
            <div className="mt-3 w-full flex-1 text-xs">
                <span className="text-sm text-black font-bold">Serial Number</span>
                <span className="text-basic text-black font-semibold ml-10">FG101FTK19002009</span>
			</div>
            <div className="mt-3 w-full flex-1 text-xs">
                <span className="text-sm text-black font-bold">Framework</span>
                <span className="text-basic text-black font-semibold ml-10">UIC-FG101FTK19002009</span>
			</div>
            <div className="mt-3 w-full flex-1 text-xs">
                <span className="text-sm text-black font-bold">System Time</span>
                <span className="text-basic text-black font-semibold ml-10">UIC-FG101FTK19002009</span>
			</div>
            <div className="mt-3 w-full flex-1 text-xs">
                <span className="text-sm text-black font-bold">IP address</span>
                <span className="text-basic text-black font-semibold ml-10">UIC-FG101FTK19002009</span>
			</div>
            <div className="mt-3 w-full flex-1 text-xs">
                <span className="text-sm text-black font-bold">Processor</span>
                <span className="text-basic text-black font-semibold ml-10">UIC-FG101FTK19002009</span>
			</div>
		</div>
	)
}

export default SystemInfo;