import React, { useEffect, useState } from "react";
import axios from "axios";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

function Showfiles({ refreshTrigger }) {
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(true);
  const handleDelete = async (imageId) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Delete Image?",
      text: "This is not reversible.",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33", // red
      cancelButtonColor: "#3085d6", // blue
    });
    if (result.isConfirmed) {
      try {
        // Call your delete API here
        await axios.delete(
          `https://be.assignmentstack.com/api/aws-media/${imageId}/`
        );
        setImages((prevImages) =>
          prevImages.filter((img) => img.id !== imageId)
        );

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your image has been deleted.",
          timer: 3000,
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Failed to delete",
          text: error.message || "Something went wrong.",
        });
      }
    }
  };
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://be.assignmentstack.com/api/aws-media/"
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [refreshTrigger]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {images.length > 0 && (
        <h2 className="text-3xl font-semibold mb-6 text-center">
          AWS RDS Database
        </h2>
      )}

      {loading ? (
        <p className="text-center text-gray-500">Loading images...</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md relative"
            >
              <img
                src={image.img}
                alt={`Uploaded ${image.id}`}
                className="w-full h-48 object-cover transition-transform hover:scale-105"
              />
              <XCircleIcon
                onClick={() => handleDelete(image.id)}
                className="h-6 w-6 text-blue-500 absolute top-2 left-2 z-10 cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Showfiles;
