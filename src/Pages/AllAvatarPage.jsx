import Avatars from "../components/avatars/Avatars";
import Layout from "../components/layout/Layout";
import Sidebar from "../components/sidebar/Sidebar";
import data from "../data/data.js";

const AllAvatarPage = () => {
  return (
    <Layout>
      <div className="flex justify-between px-2 mt-5">
        <Sidebar />
        <Avatars avatarData={data} />
      </div>
    </Layout>
  );
};

export default AllAvatarPage;
