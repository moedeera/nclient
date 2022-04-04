import { useState, useEffect } from "react";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../../Gallery/Firebase/config";

const useDatabase = (postFile) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!postFile) {
      return null;
    }
    // references
    const storageRef = projectStorage.ref(postFile.name);

    const collectionRef = projectFirestore.collection("posts");

    storageRef.put(postFile).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({
          url,
          createdAt,
        });
        setUrl(url);
      }
    );
  }, [postFile]);

  return { progress, url, error };
};

export default useDatabase;
