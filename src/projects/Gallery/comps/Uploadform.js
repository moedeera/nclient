import React, { useEffect, useState } from "react";

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
        <input
          type="file"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div className="error">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
      </form>
    </div>
  );
};
