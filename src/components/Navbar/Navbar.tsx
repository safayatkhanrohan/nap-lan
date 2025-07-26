import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ChevronDown, ChevronRight, X } from "lucide-react";

interface NavItem {
     id: number;
     path: string;
     label: string;
     subItems?: { label: string; path: string }[];
}

interface NavbarProps {
     mobileOpen?: boolean;
     setMobileOpen?: (open: boolean) => void;
}

const navItems: NavItem[] = [
     { id: 1, path: "/", label: "Home" },
     { id: 2, path: "/how-it-works", label: "How it works" },
     {
          id: 3,
          path: "/practice-test",
          label: "Practice test",
          subItems: [
               { label: "English Test", path: "#" },
               { label: "Math Test", path: "#" },
               { label: "Science Test", path: "#" }
          ]
     },
     { id: 4, path: "/pricing", label: "Pricing plan" },
     { id: 5, path: "/faq", label: "FAQ" },
     { id: 6, path: "/for-schools", label: "For schools" },
];

const Navbar: React.FC<NavbarProps> = ({ mobileOpen, setMobileOpen }) => {
     const location = useLocation();
     const navigate = useNavigate();
     const [activeItem, setActiveItem] = useState<string>("");
     const [isScrolled, setIsScrolled] = useState(false);
     const dropdownRef = useRef<HTMLDivElement>(null);
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
     const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

     console.log("Current location:", location.pathname);

     const handleDropdownToggle = () => {
          setIsDropdownOpen(!isDropdownOpen);
     };

     const handleMobileDropdownToggle = () => {
          setMobileDropdownOpen(!mobileDropdownOpen);
     };

     const handleItemClick = (label: string) => {
          setActiveItem(label);
          if (setMobileOpen) {
               setMobileOpen(false);
          }
     };

     useEffect(() => {
          // Set active item based on current path
          const currentPath = location.pathname;
          const activeNavItem = navItems.find((item) => item.path === currentPath);
          if (activeNavItem) {
               setActiveItem(activeNavItem.label);
          } else {
               setActiveItem("");
          }
     }, [location.pathname]);

     // Handle scroll effect for mobile navbar
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 10) {
                    setIsScrolled(true);
               } else {
                    setIsScrolled(false);
               }
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     // Prevent body scroll when mobile nav is open
     useEffect(() => {
          if (mobileOpen) {
               document.body.style.overflow = "hidden";
          } else {
               document.body.style.overflow = "auto";
          }

          return () => {
               document.body.style.overflow = "auto";
          };
     }, [mobileOpen]);

     return (
          <>
               {/* Desktop Navigation */}
               <div className="hidden md:flex w-full max-w-[994px] items-center justify-center">
                    <nav className="w-full h-full bg-[#007dfc]/10 py-2 px-4 md:px-14 rounded-[25px]">
                         <ul className="h-full flex items-center justify-between text-center">
                              {navItems.map((item) => (
                                   <li key={item.id}>
                                        {
                                             item.label === "Practice test" ? (
                                                  <div ref={dropdownRef} className="relative">
                                                       <p
                                                            className={`font-semibold cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-[25px] transition-all duration-200
                        ${activeItem === item.label ? "bg-[#007dfc] text-white" : "text-[#222E48] hover:bg-[#007dfc]/20 hover:text-[#007dfc]"}
                      `}
                                                            onClick={handleDropdownToggle}
                                                       >
                                                            Practice test
                                                            <ChevronDown
                                                                 size={16}
                                                                 className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                                            />
                                                       </p>
                                                       {isDropdownOpen && (
                                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 py-2 overflow-hidden">
                                                                 <ul>
                                                                      {item.subItems?.map((subItem, index) => (
                                                                           <li key={index}>
                                                                                <Link
                                                                                     to={subItem.path}
                                                                                     onClick={() => {
                                                                                          handleItemClick(item.label);
                                                                                          setIsDropdownOpen(false);
                                                                                     }}
                                                                                     className="block px-4 py-2 hover:bg-[#007dfc]/10 text-sm text-[#222E48]"
                                                                                >
                                                                                     {subItem.label}
                                                                                </Link>
                                                                           </li>
                                                                      ))}
                                                                 </ul>
                                                            </div>
                                                       )}
                                                  </div>
                                             ) : (
                                                  <Link
                                                       to={item.path}
                                                       onClick={() => handleItemClick(item.label)}
                                                       className={`
                    px-3 py-1.5 rounded-[25px] transition-all duration-200 font-semibold inline-block
                    text-sm md:text-base
                    ${activeItem === item.label
                                                                 ? "bg-[#007dfc] text-white"
                                                                 : "text-[#222E48] hover:bg-[#007dfc]/20 hover:text-[#007dfc]"
                                                            }
                  `}
                                                  >
                                                       {item.label}
                                                  </Link>
                                             )
                                        }
                                   </li>
                              ))}
                         </ul>
                    </nav>
               </div>

               {/* Mobile Navigation Drawer */}
               {mobileOpen && (
                    <div
                         className="fixed inset-0 bg-black/50 z-40 md:hidden"
                         onClick={() => setMobileOpen && setMobileOpen(false)}
                    />
               )}

               <div
                    className={`
          fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
               >
                    <div className={`p-4 border-b ${isScrolled ? "bg-white" : "bg-white"}`}>
                         <div className="flex justify-between items-center">
                              <h2 className="text-xl font-bold text-[#007dfc]">Menu</h2>
                              <button
                                   onClick={() => setMobileOpen && setMobileOpen(false)}
                                   className="text-gray-500 hover:text-gray-700"
                              >
                                   <X size={24} />
                              </button>
                         </div>
                    </div>

                    <nav className="py-4 overflow-y-auto h-[calc(100%-60px)]">
                         <ul className="flex flex-col">
                              {navItems.map((item) => (
                                   <li key={item.id} className="border-b border-gray-100">
                                        {item.subItems ? (
                                             <>
                                                  <div
                                                       onClick={handleMobileDropdownToggle}
                                                       className={`
                        flex justify-between items-center px-6 py-4 text-lg transition-all duration-200 cursor-pointer
                        ${activeItem === item.label ? "bg-[#007dfc] text-white" : "text-[#222E48] hover:bg-gray-50"}
                      `}
                                                  >
                                                       {item.label}
                                                       <ChevronRight
                                                            size={18}
                                                            className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-90" : "rotate-0"}`}
                                                       />
                                                  </div>
                                                  {mobileDropdownOpen && (
                                                       <ul className="bg-gray-50 pl-8">
                                                            {item.subItems.map((subItem, index) => (
                                                                 <li key={index} className="border-t border-gray-200">
                                                                      <Link
                                                                           to={subItem.path}
                                                                           onClick={() => handleItemClick(item.label)}
                                                                           className="block px-4 py-3 text-base text-[#222E48] hover:bg-[#007dfc]/10"
                                                                      >
                                                                           {subItem.label}
                                                                      </Link>
                                                                 </li>
                                                            ))}
                                                       </ul>
                                                  )}
                                             </>
                                        ) : (
                                             <Link
                                                  to={item.path}
                                                  onClick={() => handleItemClick(item.label)}
                                                  className={`
                      block px-6 py-4 text-lg transition-all duration-200
                      ${activeItem === item.label
                                                            ? "bg-[#007dfc] text-white"
                                                            : "text-[#222E48] hover:bg-gray-50"
                                                       }
                    `}
                                             >
                                                  {item.label}
                                             </Link>
                                        )}
                                   </li>
                              ))}
                         </ul>

                         <div className="px-6 py-8 flex flex-col gap-4">
                              <button
                                   onClick={() => {
                                        if (setMobileOpen) setMobileOpen(false);
                                        navigate("/login");
                                   }}
                                   className="w-full py-3 px-4 border border-[#007dfc] text-[#007dfc] rounded-lg font-medium hover:bg-[#007dfc]/10 transition-colors"
                              >
                                   Login
                              </button>
                              <button
                                   onClick={() => {
                                        if (setMobileOpen) setMobileOpen(false);
                                        navigate("/register");
                                   }}
                                   className="w-full py-3 px-4 bg-[#007dfc] text-white rounded-lg font-medium hover:bg-[#0069d9] transition-colors"
                              >
                                   Sign Up
                              </button>
                         </div>
                    </nav>
               </div>
          </>
     );
};

export default Navbar;