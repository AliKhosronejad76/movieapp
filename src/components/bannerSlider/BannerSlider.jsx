import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item";
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
export default function BannerSlider(){

  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className="cursor-pointer bg-[#000] opacity-90 rounded-full w-[44px] h-[44px] lg:w-[55px] lg:h-[55px] flex items-center justify-center absolute text-white top-[41%] left-[7px] text-xl lg:text-4xl ">
        <IoIosArrowBack/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="cursor-pointer bg-[#000] opacity-90 rounded-full w-[44px] h-[44px] lg:w-[55px] lg:h-[55px] flex items-center justify-center absolute text-white top-[41%] right-[7px] text-xl lg:text-4xl z-30">
        <IoIosArrowForward/>
      </div>
    );
  }

    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
       
      };

    return(
        <Slider {...settings} >
          <Item img={"/img/bg.jpeg"}/>
          <Item img={"https://cdn.nody.ir/files/2021/06/16/nody-%D8%B9%DA%A9%D8%B3-%D9%84%D8%A7%DA%A9-%D9%BE%D8%B4%D8%AA-%D9%87%D8%A7%DB%8C-%D9%86%DB%8C%D9%86%D8%AC%D8%A7-%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84-1623854849.jpg"}/>
          <Item img={"https://cdn.nody.ir/files/2021/06/16/nody-%D8%B9%DA%A9%D8%B3-%D8%B5%D9%81%D8%AD%D9%87-%D9%84%D8%A7%DA%A9-%D9%BE%D8%B4%D8%AA-%D9%87%D8%A7%DB%8C-%D9%86%DB%8C%D9%86%D8%AC%D8%A7-1623854841.jpg"}/>
         
        </Slider>
    )
}