import React from "react";
import { useRouter } from "next/router";

const ViewColection = (props) => {
  const router = useRouter();
  const metadata = JSON.parse(router.query.metadata);
  console.log(metadata);

  const fallbackImg = "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg";
  return (
    <div className="py-12 lg:px-36 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metadata.map((item, index) => (
        <div key={index}>
          <div className="bg-white rounded-lg border border-gray-200 shadow-md max-w-xs">
            <a href="#">
              <img
                className="rounded-t-lg object-fill md:h-80 w-full"
                src={ item.image != "" ? item.image.replace("ipfs://", "https://ipfs.io/ipfs/") : fallbackImg}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {item.nftName}
                </h5>
              </a>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewColection;
