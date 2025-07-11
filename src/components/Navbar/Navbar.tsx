import React, { useState } from "react";
import { Link } from "react-router";

interface NavItem {
     id: number;
     path: string;
     label: string;
}

const Navbar: React.FC = () => {
     const [activeItem, setActiveItem] = useState<string>("Home"); // Track active item

     const navItems: NavItem[] = [
          { id: 1, path: "/", label: "Home" },
          { id: 2, path: "/how-it-works", label: "How it works" },
          { id: 3, path: "/#", label: "Practice test" },
          { id: 4, path: "/pricing", label: "Pricing plan" },
          { id: 5, path: "/faq", label: "FAQ" },
          { id: 6, path: "/for-schools", label: "For schools" },
     ];

     const handleItemClick = (label: string) => {
          setActiveItem(label);
     };

     return (
          <div className="h-12 w-[994px] flex items-center">
               <nav className="w-full h-full bg-[#007dfc]/10 py-2 px-14 rounded-[25px]">
                    <ul className="h-full flex items-center justify-between text-center">
                         {navItems.map((item) => (
                              <li key={item.id}>
                                   <Link
                                        to={item.path}
                                        onClick={() => handleItemClick(item.label)}
                                        className={`
          px-4 py-1.5 rounded-[25px] transition-all duration-200 text-nowrap font-semibold inline-block
          ${
               activeItem === item.label
                    ? "bg-[#007dfc] text-white"
                    : "text-[#222E48] hover:bg-[#007dfc]/20 hover:text-[#007dfc]"
          }
     `}>
                                        {item.label}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               </nav>
          </div>
     );
};

export default Navbar;
