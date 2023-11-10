import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineUpload } from "react-icons/ai";
export const WriteReview = () => {
  const [uploadedfiles, setUploadedFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="flex justify-center items-center w-full font-mullish ">
      {/* <div className="flex justify-center items-center w-10/12 bg-red-800 "> */}
      <div className="p-7 flex justify-center items-center flex-col border-2 border-gray-400 w-8/12 rounded-xl ">
        <p className="text-2xl text-bold m-2">Write a Review</p>
        <form className="w-full flex justify-center items-center flex-col ">
          <textarea
            className="border-2 border-gray-400 h-80 w-11/12 p-4 rounded-md "
            placeholder="Write your reviews and thoughts here"
          />
          <div
            {...getRootProps()}
            className="border-2 border-gray-400 text-center w-11/12 p-4 rounded-md m-2 cursor-pointer"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
             <p className="text-xl text-gray-500 flex justify-center items-center"><AiOutlineUpload className="m-2"/>  Drop the files here ...</p>
            ) : (
              <p className="text-xl text-gray-500 flex justify-center items-center">
               <AiOutlineUpload className="m-2"/> Drag 'n' drop some files here, or click to select files
              </p>
            )}
          </div>
          <p className="text-bold text-lg ">Uploaded Files :</p>
          {uploadedfiles.map((el) => {
            return (
              <li key={el.path} className="text-semibold">
                {el.name}
              </li>
            );
          })}
          <button className="bg-blue-400 text-white rounded-md w-11/12 p-3 transition ease-in-out delay-250  hover:bg-gray-800 duration-300 text-bold  m-2 ">
            Submit
          </button>{" "}
        </form>
      </div>
      {/* </div>     */}
    </div>
  );
};
