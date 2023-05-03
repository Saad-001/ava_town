import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import copied_img from "../../assets/Logo/Copied.png";
import copy_btn from "../../assets/Logo/CopyLink.png";
import copy_icon from "../../assets/Logo/copy_icon.png";

const AvatarItem = ({ info }) => {
  const { id, img, title, likes, name, price, desc, isWished } = info;
  const [wished, setWished] = useState(isWished);
  const [heartColor, setHeartColor] = useState(false);
  const [showCopyBtn, setShowCopyBtn] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  let path = location.pathname + "/";

  const handleSetColor = () => {
    setWished(!wished);
    setHeartColor(!heartColor);
  };

  const handleMouseOver = () => {
    setShowCopyBtn(true);
  };

  const handleMouseLeave = () => {
    setShowCopyBtn(false);
  };

  const handleCopyBtnClick = () => {
    const link = window.location.href + "/" + id;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="relative">
      <Link to={`${location.pathname !== "/" ? path + id : id}`}>
        <img
          alt="Avatar image"
          src={img}
          className="h-64 w-full object-cover sm:h-72 rounded-md"
        />
        <button className="absolute flex items-center p-1 z-10 justify-around top-3 right-3 w-14 h-6 text-white text-lg rounded-md bg-[#531d868f]">
          <MdOutlineAddShoppingCart />
          <span className="text-sm font-semibold">Add</span>
        </button>
        <h3 className="mt-2 text-lg font-semibold text-gray-900 sm:text-xl">
          {title}
        </h3>
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-row">
            <AiFillStar className="text-[#F9AE3F]" />
            <AiFillStar className="text-[#F9AE3F]" />
            <AiFillStar className="text-[#F9AE3F]" />
            <AiFillStar className="text-[#F9AE3F]" />
            <AiFillStar className="text-[#F9AE3F]" />
          </div>
          <div className="text-gray-500 text-sm font-semibold">{likes}</div>
        </div>
        <div className="mr-4 cursor-pointer">
          <HiOutlineHeart
            fill={`${wished ? "red" : "white"}`}
            stroke={`${!wished ? "gray" : "red"}`}
            className={`text-xl text-right`}
            onClick={handleSetColor}
          />
        </div>
      </div>
      <div className="flex items-center gap-3 mt-1 text-gray-500 text-sm font-semibold">
        <img src={img} alt="avatar icon" className="h-6 w-6 rounded-full" />
        {name}
      </div>
      <p className="mt-2 font-semibold">
        <span className="text-sm">$</span>{" "}
        <span className="text-2xl">{price}</span>
      </p>
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 bg-[#3CD4F5] rounded-full"></div>
        <p className="text-md font-semibold">PC Only</p>
      </div>
      <div className="flex justify-between items-center gap-1 relative">
        <p className="mt-2 text-gray-900 font-semibold">{desc}</p>
        <button
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className=""
        >
          <img src={copy_icon} className="h-6 w-7 mt-3" alt="copy icon img" />
          <img
            src={copy_btn}
            alt="copy button img"
            className={`absolute top-0 -right-7 ${
              showCopyBtn ? "block" : "hidden"
            }`}
            onClick={handleCopyBtnClick}
          />
          <img
            src={copied_img}
            alt="copy button img"
            className={`absolute -top-5 -right-2 ${
              copied ? "block" : "hidden"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default AvatarItem;
