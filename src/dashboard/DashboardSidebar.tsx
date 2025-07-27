import { Link, useLocation } from "react-router";

const navList = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Test",
    path: "/dashboard/test",
  },
  {
    label: "History",
    path: "/dashboard/history",
  },
  {
    label: "Resources",
    path: "/dashboard/resources",
  },
  {
    label: "Feedback",
    path: "/dashboard/feedback",
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
  },
];

const DashboardSidebar = () => {
  const pathName = useLocation().pathname;
  return (
    <div>
      <Link to={"/"}>
        <img
          src="/logo.png"
          alt="logo"
          className="max-w-[197px] h-[41px] object-contain"
        />
      </Link>
      <nav className="mt-[61px]">
        <ul>
          {navList.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`pl-5 pt-[17px] pb-[15px] font-semibold leading-[125%] text-[#222E4880] flex items-center gap-4 rounded-xl ${
                  pathName === path
                    ? "bg-[#007DFC] text-white shadow-[0_-3px_14.2px_0_rgba(0,0,0,0.25)_inset,_0_4px_5.8px_0_rgba(255,255,255,0.35)_inset]"
                    : ""
                } `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
