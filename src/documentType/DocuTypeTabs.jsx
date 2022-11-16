import React from "react";
import { useState } from 'react';
import Details from "./tabs/Details";
import Routing from "./tabs/Routing";




const DocuTypeTabs = ({color}) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
           <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600 bg-[#0972B8]"
                    : "text-bg-[#0972B8] bg-" + color + "-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600 bg-[#0972B8]"
                    : "text-bg-[#0972B8] bg-" + color + "-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Index
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600 bg-[#0972B8]"
                    : "text-bg-[#0972B8] bg-" + color + "-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Routing
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Details />
                </div>
                <div className={`${openTab === 2 ? "block" : "hidden"}`} id="link2">
                    Index
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Routing />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DocuTypeTabs;