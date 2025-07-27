import { ChevronRight } from "lucide-react";
import Title from "../../../components/ui/Title";
import DashboardHeader from "../../DashboardHeader";
import { activityData } from "./activityData";
import { statsData } from "./statsData";

const Dashboard = () => {
  return (
    <section>
      <DashboardHeader titleShow={true} />
      <div>
        <h2 className="lg:text-[32px] text-2xl font-semibold leading-[140%] text-[#222E48]">
          Welcome back, Alex!
        </h2>
        <p className="text-xl font-medium leading-[140%] text-[#222E4880] mt-4">
          Your NAPLAN Progress Overview
        </p>
      </div>
      <div className="mt-[50px] max-w-[730px]">
        <div>
          <Title>Quick Stats</Title>
          <div className="mt-6 grid grid-cols-3 gap-5">
            {statsData.map(({ color, icon, info, number, title, bgColor, borderColor }) => (
              <div
                key={title}
                className={`full-border-gradient rounded-[20px] p-0.5`}
                style={{ "--border-color1": borderColor[0], "--border-color2": borderColor[1] } as React.CSSProperties}
              >
                <div className="bg-[#F7F8F9] rounded-[18px]">
                  <div
                    style={{ backgroundColor: `${bgColor}` }}
                    className="p-5 rounded-[18px] "
                  >
                    <div
                      style={{ backgroundColor: `${color}` }}
                      className="w-[59px] h-[59px] flex justify-center items-center rounded-full shadow-[0_-4px_4px_0_rgba(0,0,0,0.15)_inset,_0_4px_4px_0_rgba(255,255,255,0.50)_inset]"
                    >
                      {icon}
                    </div>
                    <div className="space-y-2.5 mt-6">
                      <p
                        style={{ color: color }}
                        className="text-sm font-semibold"
                      >
                        {title}
                      </p>
                      <p className="text-lg font-semibold text-[#222E48]">
                        {number}
                      </p>
                      <p className="text-sm font-semibold text-[#222E4880]">
                        {info}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[60px]">
          <Title>Recent Activity</Title>
          <div className="mt-6 grid grid-cols-2 gap-5">
            {activityData.map(({ icon, iconBgColor, timing, title }) => (
              <div
                key={title}
                className="p-5 bg-white shadow-[0_4px_20px_0_rgba(238,238,238,0.50)] rounded-xl flex items-center gap-3"
              >
                <div
                  style={{ backgroundColor: `${iconBgColor}` }}
                  className="shrink-0 grow w-[59px] h-[59px] flex justify-center items-center rounded-full shadow-[0_-4px_4px_0_rgba(0,0,0,0.15)_inset,_0_4px_4px_0_rgba(255,255,255,0.50)_inset]"
                >
                  {icon}
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-[#222E48]">
                      {title}
                    </p>
                    <p className="text-sm font-semibold text-[#222E4880]">
                      {timing}
                    </p>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
