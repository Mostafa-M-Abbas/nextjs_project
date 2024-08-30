"use client"
import { Circles } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Circles
        height="80"
        width="80"
        color="blue"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
