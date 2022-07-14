import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
    return (
		<div className="pb-2">
			<nav className="p-6 border-b-2 flex flex-row justify-between items-center">
			
            <h1 className=" font-bold text-2xl cursor-pointer">
									Creator<span className="text-violet-900">Space</span>
								</h1>
            <div className="flex flex-row items-center invisible md:visible ">
				<div className="cursor-pointer text-violet-900 font-semibold px-3 py-2 text-md hover:font-black">
				<Link href="/" >
                    <a className="mr-1 p-1">Home</a>
                </Link>	
				</div>
                <div className="cursor-pointer hover:bg-purple-900 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
					<Link href="/sell-nft">
                    <a className="mr-1 p-1">Sell NFT</a>
                </Link>
				</div>
                
                <ConnectButton moralisAuth={false} />
            </div>
			<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
						
        </nav>
		<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden border-b-2 " id="mobile-menu">
							<ul
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<li className="pl-5">
								<Link
									href="/	"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>	
								</li>

								<li li className="pl-5"><Link
									href="/sell-nft"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Sell NFT
								</Link></li>
								<li>
									<ConnectButton moralisAuth={false}/>
								</li>
								
							</ul>
						</div>
					)}
				</Transition>
		</div>
        
    )
}