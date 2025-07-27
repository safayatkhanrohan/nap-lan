const DashboardHeader = ({ titleShow }: { titleShow?: boolean }) => {
  return (
    <header className="flex justify-between items-center pt-10 pr-10">
      <p className="text-lg leading-[140%] font-medium text-[rgba(34,46,72,0.70)]">
        {titleShow && <span>Dashboard</span>}
      </p>
      <div>
        <div className="w-11 h-11 flex justify-center items-center rounded-full bg-white shadow-[0_4px_20px_0_rgba(238,238,238,0.50)] cursor-pointer">
          <Bell />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

export const Bell = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.33325 4.16667C8.33325 3.72464 8.50885 3.30072 8.82141 2.98816C9.13397 2.67559 9.55789 2.5 9.99992 2.5C10.4419 2.5 10.8659 2.67559 11.1784 2.98816C11.491 3.30072 11.6666 3.72464 11.6666 4.16667C12.6236 4.61919 13.4394 5.32361 14.0266 6.20442C14.6138 7.08523 14.9503 8.10923 14.9999 9.16667V11.6667C15.0626 12.1848 15.2461 12.6809 15.5356 13.1151C15.8251 13.5493 16.2125 13.9095 16.6666 14.1667H3.33325C3.78737 13.9095 4.17476 13.5493 4.46424 13.1151C4.75372 12.6809 4.93721 12.1848 4.99992 11.6667V9.16667C5.04955 8.10923 5.386 7.08523 5.97321 6.20442C6.56042 5.32361 7.37624 4.61919 8.33325 4.16667"
        stroke="#222E48"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.64697 14.7059V15.4902C7.64697 16.1143 7.89487 16.7128 8.33613 17.154C8.77739 17.5953 9.37588 17.8432 9.99991 17.8432C10.624 17.8432 11.2224 17.5953 11.6637 17.154C12.105 16.7128 12.3529 16.1143 12.3529 15.4902V14.7059"
        stroke="#222E48"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="14.9673"
        cy="6.7451"
        r="3.2451"
        fill="#FD6A6A"
        stroke="white"
      />
    </svg>
  );
};
