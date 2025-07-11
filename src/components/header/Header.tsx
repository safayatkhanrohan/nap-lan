import { ChevronDown, Mail, Phone, Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ButtonOutline from "../button/ButtonOutline";
import ButtonCircle from "../button/ButtonCircle";
import Navbar from "../Navbar/Navbar";

const Header = () => {
     const [showSearchInput, setShowSearchInput] = useState(false);
     const [searchQuery, setSearchQuery] = useState("");
     const [showCategories, setShowCategories] = useState(false);
     const dropdownRef = useRef<HTMLDivElement>(null);
     const searchRef = useRef<HTMLFormElement>(null);

     // Sample categories data
     const categories = [
          "Mathematics",
          "English",
          "Science",
          "History",
          "Geography",
          "Art",
          "Music",
          "Technology",
          "Languages",
          "Professional Development",
     ];

     // Close dropdown when clicking outside
     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setShowCategories(false);
               }
               if (
                    searchRef.current &&
                    !searchRef.current.contains(event.target as Node) &&  
                    searchQuery === ""
               ) {
                    setShowSearchInput(false);
               }
          };

          document.addEventListener("mousedown", handleClickOutside);
          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     }, [searchQuery]);

     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (searchQuery.trim()) {
               console.log("Searching for:", searchQuery);
               alert(`Searching for: ${searchQuery}`); // Replace with actual search logic
          }
     };

     return (
          <header className="w-full flex flex-col items-center justify-between h-[210px] relative overflow-x-clip">
                {/* Background gradient and blur effect */}
               <div
                    className="absolute w-[460px] h-[460px] -left-[105px] -top-[132px] bg-[#E6700B] opacity-20 blur-[150px]"
                    style={{
                         filter: "blur(150px)",
                    }}
               />
               <div
                    className="absolute w-[460px] h-[460px] -right-[105px] -top-[132px] bg-[#007dfc] opacity-20 blur-[150px]"
                    style={{
                         filter: "blur(150px)",
                    }}
               />
               {/* top header */}
               <div className="h-[50px] w-full bg-gradient-to-l from-[rgba(0,125,252,0.25)] to-[rgba(230,112,11,0.25)] flex items-center justify-center">
                    <div className="flex justify-between items-center text-[#222E48]/70 text-lg w-[1062px] font-light">
                         <div className="flex items-center">
                              <span className="mr-2">
                                   <Mail />
                              </span>
                              Contact an advisor
                         </div>
                         <div>NAPLAN - The National Assessment Program - Literacy and Numeracy</div>
                         <div className="flex items-center">
                              <span className="mr-2">
                                   <Phone />
                              </span>
                              (308) 555-0121
                         </div>
                    </div>
               </div>

               {/* main header */}
               <div className="h-12 w-[1062px] flex items-center justify-between">
                    <div
                         className="relative w-[230px] h-full px-6 py-3.5 rounded-[100px] bg-[#007dfc]/10 flex items-center justify-between"
                         ref={dropdownRef}>
                         {showSearchInput ? (
                              <form onSubmit={handleSearch} className="w-full" ref={searchRef}>
                                   <div className="flex items-center">
                                        <input
                                             type="text"
                                             value={searchQuery}
                                             onChange={(e) => setSearchQuery(e.target.value)}
                                             placeholder="Search..."
                                             className="w-full bg-transparent outline-none text-sm"
                                             autoFocus
                                        />
                                        {searchQuery && (
                                             <button
                                                  type="button"
                                                  className="text-[#007dfc] ml-2"
                                                  onClick={() => setSearchQuery("")}>
                                                  <X size={18} />
                                             </button>
                                        )}
                                   </div>
                              </form>
                         ) : (
                              <>
                                   <div
                                        className="flex items-center gap-2 justify-center cursor-pointer"
                                        onClick={() => setShowCategories(!showCategories)}>
                                        Categories
                                        <span>
                                             <ChevronDown size={16} />
                                        </span>
                                   </div>
                                   {showCategories && (
                                        <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg z-10 py-2 max-h-60 overflow-y-auto">
                                             {categories.map((category, index) => (
                                                  <div
                                                       key={index}
                                                       className="px-4 py-2 hover:bg-[#007dfc]/10 cursor-pointer"
                                                       onClick={() => {
                                                            console.log(
                                                                 "Selected category:",
                                                                 category
                                                            );
                                                            setShowCategories(false);
                                                            // You could also set this as a search filter
                                                       }}>
                                                       {category}
                                                  </div>
                                             ))}
                                        </div>
                                   )}
                                   <Search
                                        className="text-[#007dfc] cursor-pointer"
                                        onClick={() => {
                                             setShowSearchInput(true);
                                             setShowCategories(false);
                                        }}
                                   />
                              </>
                         )}
                    </div>
                    <div className="flex-shrink-0 h-full">
                         <img
                              src="/logo.png"
                              alt="Logo"
                              className="h-full w-auto object-contain"
                              onError={(e) => {
                                   (e.target as HTMLImageElement).style.display =
                                        "none"; /* Hide if error */
                              }}
                         />
                    </div>
                    <div className="flex justify-between items-center gap-1">
                         <ButtonOutline type="button" btnText="Login" />
                         <ButtonCircle />
                    </div>
               </div>

               {/* Navbar */}
               <Navbar />
          </header>
     );
};

export default Header;
