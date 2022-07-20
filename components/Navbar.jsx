import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { ConnectButton } from "web3uikit"
import Link from "next/link";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="pb-20">
			<nav className=" shadow-sm fixed w-full z-10 bg-white">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									Creator<span className="text-violet-900">Space</span>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										href="/"
										passHref
										
									>
										<p className="cursor-pointer text-violet-900 font-semibold px-3 py-2 text-md hover:font-black">Home</p>
									</Link>
									<Link
										href="/launch"
										passHref
										
									>
										<p className="cursor-pointer  hover:bg-violet-900 text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold">Create NFT</p>
										
									</Link>
									<Link
										href="/"
										passHref
									>
										<p className="cursor-pointer hover:bg-violet-900 text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold">Library</p>
									</Link>

									<Link
										href="/"
										passHref
									>
										<p className="cursor-pointer hover:bg-violet-900 text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold">Services</p>
									</Link>

									<ConnectButton moralisAuth={false}/>
								</div>
							</div>
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
					</div>
				</div>

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
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>

								<Link
									href="/work"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Projects
								</Link>
								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<ConnectButton moralisAuth={false}/>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;

// import { ConnectButton } from "web3uikit"

// export default function Header() {
//     return (
//         <nav className="p-5 border-b-2 flex flex-row">
//             <h1 className="py-4 px-4 font-bold text-3xl"> Creator space</h1>
//             <div className="ml-auto py-2 px-4">
//                 <ConnectButton moralisAuth={false}/>
//             </div>
//         </nav>
//     )
// }