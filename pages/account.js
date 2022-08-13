import { useState } from "react";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";

const Account = () => {
  const { user, isWeb3Enabled, authenticate, isAuthenticated, Moralis, deactivateWeb3 } =
    useMoralis();

  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [bannerImage, setBannerImage] = useState();
  const [connected, setConnected] = useState();

  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };

  const handleBannerImage = (e) => {
    const file = e.target.files[0];
    setBannerImage(URL.createObjectURL(file));
  };

  const handleConnect = async () => {
    await authenticate();
    if (typeof window !== "undefined") {
      localStorage.setItem("walletConnected", true);
      setConnected(true);
    }
  };

  const handleDisconnect = async () => {
    await deactivateWeb3();
    if (typeof window !== "undefined") {
      localStorage.setItem("walletConnected", false);
      setConnected(false);
    }
  };

  const inputStyle =
    "form-control bg-transparent block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-clip-padding border-2 border-solid border-neutral-700 rounded transition ease-in-out m-0 focus:text-white  focus:border-gray-400 focus:outline-none";
  return (
    <div>
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
                      {profilePic != undefined ? (
                        <div className="hover:bg-gray-100 hover:border-gray-30">
                          <img
                            src={profilePic}
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
                      {bannerImage != undefined ? (
                        <div className="hover:bg-gray-100 hover:border-gray-30">
                          <img
                            src={bannerImage}
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
          />
          <div className="font-bold text-xl pt-5 text-white">Wallet</div>
          <div className="flex flex-col gap-4">
            { connected ? (
              <div className="flex flex-col">
                <div className="text-gray-400 text-xl">
                {user.attributes.ethAddress}
              </div>

              <div
              className="mt-2 text-violet-400 border border-violet-500 hover:bg-violet-500 hover:text-white p-3 rounded-lg w-fit"
              onClick={() => handleDisconnect()}
            >
              Disconnect Wallet
            </div>
              </div>
              
              
            ) : (
              <div
              className="mt-2 text-violet-400 border border-violet-500 hover:bg-violet-500 hover:text-white p-3 rounded-lg w-fit"
              onClick={() => handleConnect()}
            >
              Connect Wallet
            </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
