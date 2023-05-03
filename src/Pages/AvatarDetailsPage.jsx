import { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { useLocation, useParams } from "react-router-dom";
import copied_img from "../assets/Logo/Copied.png";
import copy_btn from "../assets/Logo/CopyLink.png";
import copy_icon from "../assets/Logo/copy_icon.png";
import MyImageGallery from "../components/imageGallery/MyImageGallery";
import Layout from "../components/layout/Layout";
import Tabs from "../components/tab/Tabs";
import cartCountContext from "../context/cartCountContext";
import data from "../data/data";

const AvatarDetailsPage = () => {
  const [avatarData, setAvatarData] = useState({});
  const [wished, setWished] = useState(false);
  const [heartColor, setHeartColor] = useState(false);
  const [showCopyBtn, setShowCopyBtn] = useState(false);
  const [copied, setCopied] = useState(false);
  const { setCartCount } = useContext(cartCountContext);
  const location = useLocation();
  const paths = location.pathname.split("/");

  const params = useParams();
  const { id } = params;
  const {
    id: avatarId,
    title,
    img,
    likes,
    price,
    gender,
    category,
  } = avatarData;

  const images = [
    {
      original: img,
      thumbnail: img,
    },
    {
      original: img,
      thumbnail: img,
    },
  ];

  const bg_color = {
    background: "rgb(57,28,132)",
    // eslint-disable-next-line no-dupe-keys
    background:
      "linear-gradient(90deg, rgba(57,28,132,1) 21%, rgba(92,30,135,1) 44%, rgba(119,31,138,1) 100%)",
  };

  useEffect(() => {
    const getMatchedAvatar = () => {
      const result = data.filter((item) => item.id == id);
      return result;
    };
    const avatar = getMatchedAvatar();
    setAvatarData(avatar[0]);
  }, [id]);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleSetColor = () => {
    setWished(!wished);
    setHeartColor(!heartColor);
  };

  const getAvatarPath = () => {
    if (paths.length === 2) {
      return "All Items / " + "Avatar / " + avatarId;
    } else if (paths.length === 3) {
      return "Full Avatar" + " / " + "Avatar / " + avatarId;
    } else if (paths.length === 4) {
      return (
        "Full Avatar" + " / " + "Human Based" + " / " + "Avatar / " + avatarId
      );
    } else if (paths.length === 5) {
      return (
        "Full Avatar" +
        " / " +
        "Human Based" +
        " / " +
        paths[3].charAt(0).toUpperCase() +
        paths[3].slice(1) +
        " / " +
        "Avatar / " +
        avatarId
      );
    }
  };

  const matchGender = (sexType) => {
    if (sexType === gender) {
      return gender;
    }
    return sexType;
  };

  const handleMouseOver = () => {
    setShowCopyBtn(true);
  };

  const handleMouseLeave = () => {
    setShowCopyBtn(false);
  };

  const handleCopyBtnClick = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="my-5">
          <h3 className="text-sm font-semibold text-[#64288cb3]">
            {getAvatarPath()}
          </h3>
        </div>
        <div className="flex gap-20">
          <div className="w-2/5">
            {/* <img src={img} className="" alt="" /> */}
            <MyImageGallery images={images} />
          </div>
          <div className="w-3/6">
            <div className="flex justify-between items-center gap-5 relative">
              <h2 className="text-4xl font-bold text-gray-700">{title}</h2>
              <div className="">
                <button
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  <img
                    src={copy_icon}
                    className="h-6 w-7 mt-3"
                    alt="copy icon img"
                  />
                  <img
                    src={copy_btn}
                    alt="copy button img"
                    className={`absolute top-0 -right-12 w-24 ${
                      showCopyBtn ? "block" : "hidden"
                    }`}
                    onClick={handleCopyBtnClick}
                  />
                  <img
                    src={copied_img}
                    alt="copy button img"
                    className={`absolute -top-5 -right-10 ${
                      copied ? "block" : "hidden"
                    }`}
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-items-start gap-4 my-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-row">
                  <AiFillStar className="text-[#F9AE3F]" />
                  <AiFillStar className="text-[#F9AE3F]" />
                  <AiFillStar className="text-[#F9AE3F]" />
                  <AiFillStar className="text-[#F9AE3F]" />
                  <AiFillStar className="text-[#F9AE3F]" />
                </div>
                <div className="text-gray-500 text-sm font-semibold">
                  {likes}
                </div>
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
            <div className="text-md text-gray-600 border-b border-gray-200 pb-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi ex officia tenetur maxime laboriosam voluptatibus
                soluta sit quo, dicta voluptas beatae inventore nemo ullam
                repellat? Iusto rerum neque magnam sapiente.
              </p>
            </div>
            <div className="my-3 flex items-center gap-8">
              <h4 className="text-md text-gray-600">
                Availability : <span className="text-green-600">In Stock</span>
              </h4>
              <h4 className="text-md text-gray-600">
                Avatar Type :{" "}
                <span className="font-semibold">{category?.toUpperCase()}</span>
              </h4>
            </div>
            <div className="mb-5">
              <p className="text-lg text-gray-600 my-2">Gender</p>
              <div className="flex items-center gap-3">
                <p
                  className={`px-2 py-1 text-md text-white ${
                    gender === "male" ? "bg-[#611e8785]" : "bg-gray-300"
                  } rounded-sm`}
                >
                  {matchGender("male").toUpperCase()}
                </p>
                <p
                  className={`px-2 py-1 text-md text-white ${
                    gender === "female" ? "bg-[#611e8785]" : "bg-gray-300"
                  } rounded-sm`}
                >
                  {matchGender("female").toUpperCase()}
                </p>
                <p
                  className={`px-2 py-1 text-md text-white ${
                    gender === "unisex" ? "bg-[#611e8785]" : "bg-gray-300"
                  } rounded-sm`}
                >
                  {matchGender("unisex").toUpperCase()}
                </p>
              </div>
            </div>
            <div>
              <p className="text-md text-gray-600">Price </p>
              <p className="font-semibold">
                <span className="text-sm">$</span>{" "}
                <span className="text-2xl">{price}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 my-5">
              <button
                style={bg_color}
                className="text-lg rounded-sm px-3 py-2 text-white hover:scale-110 hover:shadow-xl transform transition duration-500"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <button
                style={bg_color}
                className="text-lg rounded-sm px-3 py-2 text-white hover:scale-110 hover:shadow-xl transform transition duration-500"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Tabs avatarData={avatarData} />
        </div>
      </div>
    </Layout>
  );
};

export default AvatarDetailsPage;
