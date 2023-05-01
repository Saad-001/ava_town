import { useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [openFullAvatar, setOpenfullAvatar] = useState(false);
  const [openHuman, setOpenHuman] = useState(false);

  const handleOpenFullAvatar = () => {
    setOpenfullAvatar(!openFullAvatar);
    if (openHuman) {
      setOpenHuman(!openHuman);
    }
  };

  const handleOpenHuman = () => {
    setOpenHuman(!openHuman);
  };

  return (
    <>
      <ul className="list-inside pl-4 font-semibold">
        <NavLink
          to="/fullAvatar"
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
          onClick={handleOpenFullAvatar}
        >
          Full avatar
        </NavLink>
        <li
          className={`pl-4 ${
            openFullAvatar ? "block" : "hidden"
          } font-semibold`}
        >
          <NavLink
            to="/fullAvatar/humanBased"
            className={({ isActive }) =>
              isActive ? "underline" : "no-underline"
            }
            onClick={handleOpenHuman}
          >
            Human based
          </NavLink>
          <ul className="list-inside">
            <li className={`pl-4 ${openHuman ? "block" : "hidden"}`}>
              <NavLink
                to="/fullAvatar/humanBased/male"
                className={({ isActive }) =>
                  isActive ? "underline pl-4" : "no-underline pl-4"
                }
              >
                Male
              </NavLink>
            </li>
            <li className={`pl-4 ${openHuman ? "block" : "hidden"}`}>
              <NavLink
                to="/fullAvatar/humanBased/female"
                className={({ isActive }) =>
                  isActive ? "underline pl-4" : "no-underline pl-4"
                }
              >
                Female
              </NavLink>
            </li>
            <li className={`pl-4 ${openHuman ? "block" : "hidden"}`}>
              <NavLink
                to="/fullAvatar/humanBased/unisex"
                className={({ isActive }) =>
                  isActive ? "underline pl-4" : "no-underline pl-4"
                }
              >
                Unisex
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className={`pl-4 ${
            openFullAvatar && !openHuman ? "block" : "hidden"
          } font-semibold`}
        >
          <NavLink className="">Animal & mythical creature base</NavLink>
        </li>
        <li
          className={`pl-4 ${
            openFullAvatar && !openHuman ? "block" : "hidden"
          } font-semibold`}
        >
          <NavLink>Robot based</NavLink>
        </li>
        <li
          className={`${!openHuman ? "block" : "hidden"} ${
            !openFullAvatar && !openHuman ? "" : "pl-4"
          } font-semibold`}
        >
          <NavLink>Others</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Category;
