import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import girl1 from "../../assets/images/home/girl1.jpg";
import girl2 from "../../assets/images/home/girl2.jpg";
import girl3 from "../../assets/images/home/girl3.jpg";

const Slider = () => {
  const sliders = [
    {
      imgSrc: girl1,

      imgText: "Image text1",
    },
    {
      imgSrc: girl2,

      imgText: "Image text 2",
    },
    {
      imgSrc: girl3,

      imgText: "image text 3",
    },
  ];
  return <Carousel data={sliders} />;
};

export default Slider;
