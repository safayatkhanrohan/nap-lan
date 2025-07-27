import { Outlet } from "react-router";
import DashboardSidebar from "../dashboard/dashboardSidebar";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
