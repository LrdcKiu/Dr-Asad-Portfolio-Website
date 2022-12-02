import React from "react";
import "../styles/Awards.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// import SwiperCore, { Autoplay } from 'swiper';

// import required modules
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import award_icon from "../assets/award 1.png";

export default function Awards() {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <div className="wrapper-awards">
      <div className="heading">
        <h2>awards</h2>
      </div>
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={3}
        speed={100}
        spaceBetween={1}
        loop={true}
        autoplay={true}
        breakpoints={{
          200: {
            width: 576,
            slidesPerView: 1,
          },
          // 899:{

          // }
          900: {
            width: 900,
            slidesPerView: 2,
          },
        }}
        className="awards"
        id="awards"
      >
        <SwiperSlide className="slide">
          <div className="award">
            <span className="year">2006</span>
            <div className="icon">
              <img src={award_icon} alt="" />
            </div>
            <div className="content">
              <span>
                Awarded "Gold medal" from Karakoram international University
                Gilgit Pakistan in recognition of getting first class first
                position in order of merit in all the existing departments of
                University during Masters Degree program.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="award">
            <span className="year">2010</span>
            <div className="icon">
              <img src={award_icon} alt="" />
            </div>
            <div className="content">
              <span>
                Won the 'Chancellors scholarship' of University of Science and
                Technology Beijing and availed till the completion of doctoral
                degree.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="award">
            <span className="year">2013</span>
            <div className="icon">
              <img src={award_icon} alt="" />
            </div>
            <div className="content">
              <span>
                Awarded "Certificate of excellence" from University of Science
                and Technology Beijing.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="award">
            <span className="year">2013</span>
            <div className="icon">
              <img src={award_icon} alt="" />
            </div>
            <div className="content">
              <span>
                The research article, "Optimal approach of three dimensional
                microstructure reconstructions and visualizations" has been
                featured on the front cover of the issue (June 2013: Volume 3,
                Number 2) in the journal "Materials express" as highlights.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="award">
            <span className="year">2016</span>
            <div className="icon">
              <img src={award_icon} alt="" />
            </div>
            <div className="content">
              <span>
                Ranked 29th among 122 young productive scientists of Pakistan in
                the field of engineering applications, ranking released by
                Pakistan Council for Science and Technology.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="award">
            <span className="year">2017</span>
            <div className="icon">
              <img src={award_icon} alt="" />
            </div>
            <div className="content">
              <span>
                Ranked 51st among 260 young productive scientists of Pakistan in
                the field of engineering applications, ranking released by
                Pakistan Council for Science and Technology.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="award">
            <span className="year">2019</span>
            <div className="icon">
              <img src={award_icon} alt="" />
            </div>
            <div className="content">
              <span>
                Received international award '2nd prize in Natural Sciences'
                from Chinese Society for Stereology and Image Analysis, Ministry
                of Science and Technology China.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="award">
            <span className="year">2020</span>
            <div className="icon">
              <img src={award_icon} alt="" />
            </div>
            <div className="content">
              <span>
                Received international award "2021 TMS Light Metals and
                Extraction & Processing Divisions Energy BEST PAPER AWARD" from
                TMS, USA.
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
