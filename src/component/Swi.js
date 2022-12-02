// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpTemplate from "./ExpTemplate";
import Experience from "../modules/Experience";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/swiper.css";

export default function Swi() {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      <Experience />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={3}
        speed={100}
        navigation
        loop={true}
        autoplay={true}
        breakpoints={{
          200: {
            width: 576,
            slidesPerView: 1,
          },
          500: {
            navigation: false,
          },
          900: {
            width: 900,
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
        className="exp"
      >
        <SwiperSlide>
          {" "}
          <ExpTemplate
            date="July, 2013 - June 2019"
            designation="Assistant Professor"
            location="Department of Mathematical Sciences, Karakoram International University Gilgit, Pakistan"
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <ExpTemplate
            date="Semester fall, 2012"
            designation="Volunteer Lecturer"
            location="University of Science and Technology Beijing, China"
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <ExpTemplate
            date="March 2006 - July 2013"
            designation="Lecturer"
            location="Department of Mathematical Sciences,Karakoram International University Gilgit, Pakistan"
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <ExpTemplate
            date="2015 - present"
            designation="HEC Approved Ph.D Supervisor"
            location=""
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <ExpTemplate
            date=""
            designation="Departmental Graduate Advisor"
            location="Department of Mathematical Sciences, Karakoram International University Gilgit, Pakistan"
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          <ExpTemplate
            date=""
            designation="Coordinator and Founding Editor-in-Chief"
            location='KIU research journal "Journal of Mountain Area Research"'
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          <ExpTemplate
            date="March 2017 - April 2017"
            designation="Consultant"
            location="United Nations (United Nations Observer/Monitor for 6th census of Pakistan)"
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          <ExpTemplate
            date="2018 - present"
            designation="Chairman"
            location="Department of Mathematical Sciences, Karakoram International University Gilgit"
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          <ExpTemplate
            date="June, 2019 - present"
            designation="Associate Professor"
            location="Department of Mathematical Sciences, Karakoram International University Gilgit"
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          <ExpTemplate
            date="2016 - 2017"
            designation="Head of department"
            location="Department of Mathematical Sciences, Karakoram International University Gilgit"
          ></ExpTemplate>
        </SwiperSlide>
        <SwiperSlide>
          <ExpTemplate
            date=""
            designation="Reviewing articles for several international SCI and EI journals "
            location=""
          ></ExpTemplate>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
