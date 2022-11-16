import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import PreviewScanner from "./PreviewScanner";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineScan } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";

const ViewScan = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start w-full h-full">
      <div className="flex flex-col gap-4 bg-white shadow-xl rounded-xl w-[34rem] h-[530px] ml-10">
        <div className="flex flex-row justify-start gap-4 p-2">
          <div className="flex justify-center w-[45px] h-[40px] -ml-1 mt-0 mb-4 bg-gray-200 rounded-lg">
            <button
              onClick={() => navigate("/documents/machineconnectivity")}
              className="text-[22px] text-black relative"
            >
              <RiArrowGoBackLine />
            </button>
          </div>
          <div>
            <h1 className="text-lg mt-2 font-semibold">Scanner</h1>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="px-10">
            <span className="text-[13x] text-gray-400">
              Please select a scanner
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-4 h-[100px]">
          <div className="px-5">
            <select
              id="Scanner"
              className="p-1 border-dotted border border-gray-700 outline-0"
            >
              <option value disabled>
                Please select a scanner
              </option>
              <option value="1">CamDS</option>
              <option value="2">KODAK Scanner:i1210/i220</option>
              <option value="3">KODAK Scanner:i1310/i320</option>
              <option value="4">KODAK Scanner:i1410/i420</option>
              <option value="5">KODAK Scanner:Ngenuity 9000</option>
              <option value="6">Kofax Sotware VES-TWAIN</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="px-10">
            <span className="text-gray-400">
              Audtodetect Color, Letter Size, 300 DPI, Front Sides
            </span>
          </div>
          <div className="px-5">
            <span className="text-[13x] text-black font-semibold">
              Or use a predefined scan setting
            </span>
          </div>
          <div className="px-10">
            <div className="pb-3">
              <input type="radio" id="rdAuto" className="" />
              <label htmlFor="rdAuto" className="pl-1 text-[15px]">
                Autodetect Color Mode
              </label>
            </div>
            <div className="pb-3">
              <input type="radio" id="rdBW" className="" />
              <label htmlFor="rdBW" className="pl-1 text-[15px]">
                Black and White Document
              </label>
            </div>
            <div className="pb-3">
              <input type="radio" id="rdColorDocu" className="" />
              <label htmlFor="rdColorDocu" className="pl-1 text-[15px]">
                Color Document
              </label>
            </div>
            <div className="pb-3">
              <input type="radio" id="rdGray" className="" />
              <label htmlFor="rdGray" className="pl-1 text-[15px]">
                Grayscale Document
              </label>
            </div>
            <div className="pb-3">
              <input type="radio" id="rdBW" className="" />
              <label htmlFor="rdBW" className="pl-1 text-[15px]">
                Color Photograph
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 px-10 pb-2">
          {/* */}
          <div className="dropdown inline-block relative">
            <div className="bg-[#0972B8] text-white cursor-pointer font-semibold py-2 px-4 rounded inline-flex items-center mr-6">
              <AiOutlineScan size={15} className="mr-2" />
              <span className="mr-1 text-[12px]">
                <h1>New File</h1>
              </span>
            </div>
            <div className="dropdown-menu origin-top-right z-10 absolute hidden text-gray-700 pt-1 w-[180px] h-auto ml-[110px] -mt-28 rounded-md">
              <div className="bg-transparent w-full h-full ">
                <div className="flex w-full">
                  <div className="w-full">
                    <div className="relative pt-3">
                      <button
                        type="submit"
                        id="scanSave"
                        className="pr-5 rounded-lg h-10 w-full border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-sm"
                        onClick={() => alert("/documents/uploadscanfile")}
                      >
                        <TfiSave
                          size={15}
                          className="text-white text-[13px sm:absolute sm:top-[65%] sm:left-[7%] -translate-y-1/2"
                        />
                        Save
                      </button>
                    </div>
                    <div className="relative pt-3">
                      <button
                        type="submit"
                        id="scanUpload"
                        className="text-center pl-3 rounded-lg h-10 w-full border-[1px] border-[#17203F] bg-[#17203F] text-white text-sm"
                        onClick={() => navigate("/documents/uploadscanfile")}
                      >
                        <BsCloudUpload
                          size={15}
                          className="text-white text-sm sm:absolute sm:top-[60%] sm:left-[7%] -translate-y-1/2"
                        />
                        Upload Files
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* */}
        </div>
      </div>
      <div className="flex flex-row gap-4 bg-red-200 w-full h-auto shadow-xl rounded-xl ml-4">
        <div className="w-full">
          <PreviewScanner />
        </div>
      </div>
    </div>
  );
};
export default ViewScan;
