import { useAuthContext } from "context/AuthContext/AuthProvider";

const TopBar = () => {
  const {
    userInfo: { user },
    handleLogout,
  } = useAuthContext();

  return (
    <div className="bg-white h-[72px] w-full flex flex-row justify-between items-center px-[24px] md:px-[120px] shadow-md z-[1]">
      <div className="flex items-center">
        <div>
          <img
            src={user.avatar}
            alt={`${user.name.first} ${user.name.last}`}
            className="h-[48px] w-[48px] rounded-full object-cover"
          />
        </div>
        <div className="ml-[16px] text-[1rem] text-[#6D8187] font-normal text-base leading-5 font-montserrat">{`${user.name.first} ${user.name.last}`}</div>
      </div>
      <div className="text-[#6D8187] text-[1rem] border-none outline-none w-auto h-auto decoration-0">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default TopBar;
