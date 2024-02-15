import React, { useEffect, useState } from "react";
import { FileUploader, TableFile } from "../components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FileType } from "../../../typings";
import { getDownloadURL } from "firebase/storage";

function Uploads() {
  const [skeletonLoader, setSkeletonLoader] = useState<FileType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docsResult = await getDocs(collection(db, "files"));
        const newSkeletonLoader = docsResult.docs.map((doc) => ({
          id: doc.id,
          filename: doc.data().filename || doc.id,
          timestamp:
            doc.data().timestamp &&
            new Date(doc.data().timestamp.seconds * 1000),
          fullName: doc.data().fullName,
          downloadURL: doc.data().downloadURL,
          type: doc.data().type,
          size: doc.data().size,
        }));
        setSkeletonLoader(newSkeletonLoader);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect runs once when the component mounts

  return (
    <div className='flex flex-col justify-between'>
      <FileUploader />
      <TableFile skeletonLoader={skeletonLoader} />
    </div>
  );
}

export default Uploads;
