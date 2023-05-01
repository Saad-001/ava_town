import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AvatarItem from "./AvatarItem";
import PageInition from "./PageInition";

const Avatars = ({ avatarData }) => {
  const [activePage, setActivePage] = useState(1);
  const [newAvatarData, setNewAvatarData] = useState([]);
  const [dataLength, setDataLength] = useState();
  const [categroy, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const location = useLocation();

  useEffect(() => {
    const filteredData = (genre, sex = "") => {
      let result = avatarData.filter((avatar) => avatar.categroy !== genre);
      setDataLength(result.length);
      if (sex) {
        result = result.filter((avatar) => avatar.gender === sex);
        setDataLength(result.length);
      }
      return result;
    };

    const limit = 12;
    const startIndex = (activePage - 1) * limit;
    const endIndex = activePage * limit;
    let newAvatarData;

    if (!categroy) {
      newAvatarData = avatarData.slice(startIndex, endIndex);
      setNewAvatarData(newAvatarData);
      setDataLength(avatarData.length);
    }

    let filters = location.pathname.split("/");

    if (filters.length > 2) {
      if (filters.length <= 3) {
        setGender("");
      }
      if (filters.length > 2) {
        setCategory(filters[2]);
      }
      if (filters.length > 3) {
        setGender(filters[3]);
      }
    }

    if (categroy || gender) {
      newAvatarData = filteredData(categroy, gender).slice(
        startIndex,
        endIndex
      );
      setNewAvatarData(newAvatarData);
    }
  }, [avatarData, activePage, categroy, gender, location.pathname]);

  const handlePrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < 2) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div className="w-4/5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-semibold">
          {location.pathname.includes("fullAvatar")
            ? "Full Avatar"
            : "All items"}
          {location.pathname.includes("humanBased")
            ? " > " + "Human Based"
            : ""}
          {gender
            ? " > " + gender.charAt(0).toUpperCase() + gender.slice(1)
            : ""}
        </h3>
        <div>
          <select className="w-full p-0.5 pt-0 text-gray-700 bg-white rounded-sm shadow-sm border-gray-900 border-2 outline-none">
            <option defaultValue>sort by featured</option>
            <option>Featured</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Cutomer Review</option>
            <option>New</option>
            <option>Polygon:Low to High</option>
            <option>Polygon:High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-2 gap-y-4">
        {newAvatarData.length > 0 &&
          newAvatarData.map((avatar) => (
            <AvatarItem info={avatar} key={avatar.id} />
          ))}
      </div>
      <div className="flex justify-center items-center my-16">
        {newAvatarData.length > 0 && (
          <PageInition
            activePage={activePage}
            setActivePage={setActivePage}
            handlePrev={handlePrev}
            handleNext={handleNext}
            dataLength={dataLength}
          />
        )}
      </div>
    </div>
  );
};

export default Avatars;
