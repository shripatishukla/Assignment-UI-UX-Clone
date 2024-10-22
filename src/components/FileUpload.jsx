import React from 'react';

const FileUpload = () => {
  return (
    <>
      <div className="w-full max-w-lg mx-auto  mt-10 mb-6 p-6  rounded-lg shadow-md">
       
        <div className="border-4 border-dashed border-gray-300 rounded-lg p-10 mb-4 text-center">
          <p className="text-gray-500">Drag and drop a file here or</p>
          <input type="file" className="hidden" id="fileInput" />
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => document.getElementById('fileInput').click()}
          >
            Choose File
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="language" className="block text-lg font-medium text-gray-700 mb-2">
            Select Language
          </label>
          <select id="language" className="block w-full p-3 border border-gray-300 rounded-lg">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
        </div>

        
        <div className="flex justify-center">
  <button className="w-1/4 my-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded">
    Translate
  </button>
</div>
      </div>

      <hr className="w-1 h-96 bg-gray-200 border-0 dark:bg-red-700 my-8" />

<div className = "m-8">
  <p className="text-blue-600 p-1 text-center">#Best Feature</p>
  <p className="text-4xl text-center font-semibold leading-relaxed">Why Choose Our Translator?</p>
</div>

    </>
  );
};

export default FileUpload;
