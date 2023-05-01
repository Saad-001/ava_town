import ImageGallery from "react-image-gallery";

const MyImageGallery = ({ images }) => {
  return (
    <ImageGallery
      items={images}
      showNav={false}
      useBrowserFullscreen={false}
      isRTL={false}
      showPlayButton={false}
    />
  );
};

export default MyImageGallery;
