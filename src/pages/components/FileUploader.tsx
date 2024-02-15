// Import necessary Firebase modules
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";
import { db, storage } from "../../../firebase";

const FileUploader = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      // Add a Toast Notification for onabort and onerror
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadPost = async (selectedFile: File) => {
    if (loading || !user) return;

    setLoading(true);

    // The collection reference here has a path so all files from all users stays at the same place
    const docRef = await addDoc(collection(db, "files"), {
      userId: user.id,
      filename: selectedFile.name,
      fullName: user.fullName,
      profileImg: user.imageUrl,
      timestamp: serverTimestamp(),
      type: selectedFile.type,
      size: selectedFile.size,
    });

    // Update Storage path to a common location for all users
    const imageRef = ref(storage, `files/${docRef.id}/${selectedFile.name}`);

    // Upload the file to Storage by the helper function (uploadBytes)
    await uploadBytes(imageRef, selectedFile);

    // Get the downloadURL
    const downloadURL = await getDownloadURL(imageRef);

    // Update Firestore document with the download URL
    await updateDoc(doc(db, "files", docRef.id), {
      downloadURL: downloadURL,
    });

    setLoading(false);
  };

  // Maximum upload size for files
  const maxSize = 20971520;

  return (
    <Dropzone onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return (
          <section className='border border-dashed border-slate-400 rounded-2xl h-[200px] flex items-center justify-center mx-10'>
            <div
              {...getRootProps()}
              className={`items-center text-center flex flex-col space-y-2 justify-center w-full h-full ${
                isDragActive ? " rounded-2xl bg-[#5e00ab54] text-white" : ""
              }`}
            >
              <input {...getInputProps()} />
              <div className='text-5xl text-gray-400'>
                <MdCloudUpload />
              </div>
              {!isDragActive && "Click to upload or drag and drop"}
              {isDragActive && !isDragReject && "Drop to upload this file"}
              {isDragReject && "LOL, file type is not accepted"}
              {isFileTooLarge && (
                <div className='text-danger mt-2'>File is Above 20MB</div>
              )}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};

export default FileUploader;
