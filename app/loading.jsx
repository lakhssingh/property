"use client";
import ClipLoader from "react-spinners/CircleLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const loading = () => {
  return <ClipLoader color="#3b82f6" cssOverride={override} size={150} />;
};

export default loading;
