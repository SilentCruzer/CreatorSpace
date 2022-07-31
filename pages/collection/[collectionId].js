import React from "react";
import { useRouter } from "next/router";
import ArtistBanner from "../../components/collections/ArtistBanner";
import ArtistTrending from "../../components/collections/ArtistTrending";

const ViewCollection = (props) => {
  // const router = useRouter();
  // const metadata = JSON.parse(router.query.metadata);
  // console.log(metadata);

  const fallbackImg = "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg";
  return (
    <div className="h-full flex flex-col gap-2 px-16">
      <ArtistBanner />
      <ul className="flex flex-wrap gap-4 pt-10 text-lg font-medium text-center text-gray-500 dark:text-gray-400 items-center">
          <li className="mr-2">
            <h1
              className="inline-block  text-white font-semibold text-3xl rounded-lg"
            >
              All collections
            </h1>
          </li>
          <li className="mr-2">
            <h1
              className="inline-block rounded-lg text-white hover:text-gray-900 text-2xl hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Fantasy wars
            </h1>
          </li>
        </ul>
        <ArtistTrending />
    </div>
  );
};

export default ViewCollection;
