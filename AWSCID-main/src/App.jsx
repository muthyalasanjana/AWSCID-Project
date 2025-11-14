import { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";
import Showfiles from "./components/Showfiles";

function App() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const resetFileInput = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!file) {
      setIsLoading(false);

      Swal.fire({
        icon: "error",
        title: "No File Selected",
        text: "Please choose a file before uploading.",
      });
      return;
    }
    const formData = new FormData();
    const api_url = "https://be.assignmentstack.com/api/aws-media/";
    formData.append("img", file);
    try {
      const response = await axios.post(api_url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        showCloseButton: true,
        icon: "success",
        title: "Upload Successful",
        text: "Your file has been uploaded.",
      });

      resetFileInput();
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "Something went wrong while uploading the file.",
      });
      resetFileInput();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-lg px-6 text-center my-5">
          Design and Deployment of a Scalable Web Application Using AWS CI/CD
          <br />
          Pipeline with RDS and S3 Integration
        </h1>
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h1 className="text-center text-xl pb-8 ">Upload to S3 Bucket</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-150 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading && <ClipLoader size={20} color="#ffffff" />}
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </form>
        </div>
        <Showfiles refreshTrigger={refreshKey} />{" "}
      </div>
    </>
  );
}

export default App;
