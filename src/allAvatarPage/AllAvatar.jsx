import Avatars from "../components/avatars/Avatars";
import Sidebar from "../components/sidebar/Sidebar";
import data from "../data/data.js";

const AllAvatar = () => {
  return (
    <div className="flex justify-between px-1 mt-5">
      <Sidebar />
      <Avatars avatarData={data} />
    </div>
  );
};

export default AllAvatar;
