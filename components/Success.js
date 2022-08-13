import React from "react";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <h2 className="text-center text-white text-xl font-semibold">
        Completed Successfully
      </h2>
      <button
        className=" border px-4 p-2 border-white text-lg text-white font-semibold rounded-3xl"
        onClick={() => {
          router.push("/");
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Success;
