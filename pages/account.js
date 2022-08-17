import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { NFTStorage } from "nft.storage";
import Spinner from "../components/Spinner";
import Success from "../components/Success";

const Account = () => {
  const {
    user,
    authenticate,
    Moralis,
    deactivateWeb3,
  } = useMoralis();

  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [bannerImage, setBannerImage] = useState();
  const [profileSrc, setProfileSrc] = useState();
  const [bannerSrc, setBannerSrc] = useState();
  const [connected, setConnected] = useState();
  const [isLoading, setIsLoading] = useState("notStarted");
  const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE });

  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    setProfileSrc(URL.createObjectURL(file));
  };

  const handleBannerImage = (e) => {
    const file = e.target.files[0];
    setBannerImage(file);
    setBannerSrc(URL.createObjectURL(file));
  };

  const handleConnect = async () => {
    await authenticate();
    if (typeof window !== "undefined") {
      localStorage.setItem("walletConnected", true);
      setConnected(true);
    }
  };

  const handleDisconnect = async () => {
    await deactivateWeb3();0
    if (typeof window !== "undefined") {
      localStorage.setItem("walletConnected", false);
      localStorage.removeItem("Username")
      localStorage.removeItem("userAddress")
      localStorage.removeItem("profilePic")
      localStorage.removeItem("bannerImage")
      setConnected(false);
    }
  };

  const handleApply = async () => {
    setIsLoading("started");
    const ipfs = await client.store({
      name: "profilePic",
      description: "Used to easily navigate UI",
      image: profilePic,
      bannerImage,
    });

    const profileIpfs = ipfs.data.image.href;
    const bannerIpfs = ipfs.data.bannerImage.href;


    const dbArtist = Moralis.Object.extend("Artists");
    const query = new Moralis.Query(dbArtist);
    query.equalTo("userAddress", user.attributes.ethAddress);
    const results = await query.first();
    if (results) {
      results.set("username", username);
      results.set("profilePic", profileIpfs);
      results.set("bannerImage", bannerIpfs);
      await results.save();
    } else {
      const db = new dbArtist();
      db.set("userAddress", user.attributes.ethAddress);
      db.set("username", username);
      db.set("profilePic", profileIpfs);
      db.set("bannerImage", bannerIpfs);

      await db.save();
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("Username", username);
      localStorage.setItem("userAddress", user.attributes.ethAddress);
      localStorage.setItem(
        "profilePic",
        profileIpfs.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
      localStorage.setItem(
        "bannerImage",
        bannerIpfs.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
    }
    setIsLoading("completed");
  };

  const inputStyle =
    "form-control bg-transparent block w-full px-3 py-1.5 text-base font-normal text-gray-200 bgaccount-clip-padding border-2 border-solid border-neutral-700 rounded transition ease-in-out m-0 focus:text-white  focus:border-gray-400 focus:outline-none";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUsername(localStorage.getItem("Username"));
      setProfileSrc(localStorage.getItem("profilePic"));
      setBannerSrc(localStorage.getItem("bannerImage"));
    }
  }, [connected]);
  return (
    <div>
      {isLoading == "notStarted" ? (
        <></>
      ) : isLoading == "started" ? (
        <Spinner />
      ) : isLoading == "completed" ? (
        <Success />
      ) : (
        <></>
      )}
      <div className="px-64 py-10 text-white">
        <h1 className="text-4xl text-white font-bold">Profile</h1>
        <form>
          <div className="flex">
            <div>
              <div className="m-4">
                <h1 className="text-white text-2xl font-bold">Profile Image</h1>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-96 h-80 border-4 border-neutral-700 border-dashed hover:bg-neutral-700 hover:border-gray-300 rounded-xl">
                    <div className="flex flex-col items-center m-auto">
                      {profileSrc != undefined ? (
                        <div className="hover:bg-gray-100 hover:border-gray-30">
                          <img
                            src={profileSrc}
                            className="object-fill h-80 w-96 rounded-xl p-1 "
                          />
                        </div>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      className="opacity-0"
                      onChange={handleProfilePic}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div className="m-4">
                <h1 className="text-white text-2xl font-bold">Banner Image</h1>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-96 h-80 border-4 border-neutral-700 border-dashed hover:bg-neutral-700 hover:border-gray-300 rounded-xl">
                    <div className="flex flex-col items-center m-auto">
                      {bannerSrc != undefined ? (
                        <div className="hover:bg-gray-100 hover:border-gray-30">
                          <img
                            src={bannerSrc}
                            className="object-fill h-80 w-96 rounded-xl p-1 "
                          />
                        </div>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      className="opacity-0"
                      onChange={handleBannerImage}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <h2 className=" font-bold text-xl pt-5 text-white">
            Username<span className=" text-red-600"> *</span>
          </h2>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className={inputStyle}
            id="exampleFormControlInput1"
            placeholder="Eg: SilentRave, SynthManiac...."
            value={username}
          />
          <div className="font-bold text-xl pt-5 text-white">Wallet</div>
          <div className="flex flex-col gap-4">
            { connected ? (
              <div className="flex flex-col">
                <div className="text-gray-400 text-xl">
                  {user.attributes.ethAddress}
                </div>

                <div
                  className="mt-2 text-violet-400 border border-violet-500 hover:bg-violet-500 hover:text-white hover:cursor-pointer p-3 rounded-lg w-fit"
                  onClick={() => handleDisconnect()}
                >
                  Disconnect Wallet
                </div>
              </div>
            ) : (
              <div
                className="mt-2 text-violet-400 border border-violet-500 hover:bg-violet-500 hover:text-white hover:cursor-pointer p-3 rounded-lg w-fit"
                onClick={() => handleConnect()}
              >
                Connect Wallet
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <div
              className="mt-2 text-green-200 border border-green-300 hover:bg-green-700 hover:text-white hover:cursor-pointer p-3 px-5 rounded-lg w-fit"
              onClick={() => handleApply()}
            >
              Apply
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
