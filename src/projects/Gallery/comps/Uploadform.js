import React, { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const Uploadform = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log(file);
  }, [file]);

  const changeHandler = (e) => {
    console.log("changed", e.target.files[0]);
    const allowedTypes = ["image/png", "image/jpeg"];
    let selected = e.target.files[0];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select valid file type");
    }
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="file"
            onChange={(e) => {
              changeHandler(e);
            }}
          />
          <span>+</span>
        </label>
        <div className="error">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <div>{<ProgressBar file={file} setFile={setFile} />}</div>}
        </div>
      </form>
    </div>
  );
};
