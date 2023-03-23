import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { eventsSliderList } from "../data/dataEventsSlider";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Events = () => {
  const Next = () => {
    Slider.current.slickNext();
  };
  const Previous = () => {
    Slider.current.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    lazyLoad: true,
  };

  return (
    <div id={"Events"} className="w-full bg-white-NL">
      <div className="w-full relative bg-red-NL rounded-2.2xl smallest:rounded-2.5xl md:rounded-3.5xl xl:rounded-5xl pb-14 md:pb-20 lg:pb-32 2xl:pb-40 smallest:px-10 sm:px-10 lg:px-20 xl:px-[134px]">
        <div className="2xl:max-w-[1300px] mx-auto">
          <h1 className="font-poppinsBold text-white-NL text-center text-[28px] md:text-[35px] lg:text-[40px] pt-[50px] sm:pt-[60px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] pb-[10px] md:pb-[40px] lg:pb-[50px] xl:pb-[40px]">
            Our Events
          </h1>
          <div className="relative mx-auto overflow-hidden px-7 sm:px-16 md:px-28 lg:px-40 xl:px-60 2xl:px-64">
            <button onClick={Previous}>
              <ChevronLeftIcon className="hidden md:block text-white-NL w-12 lg:w-14 xl:w-16 absolute left-0 ml-8 translate-y-28 md:translate-y-36 lg:translate-y-44 mb-5 lg:ml-16 xl:ml-40" />
            </button>
            <Slider ref={(a) => (Slider.current = a)} {...sliderSettings}>
              {eventsSliderList.map((item) => (
                <div className="w-full mx-auto px-[26px] sm:px-[40px] md:px-[50px] 2xl:px-[60px] text-center">
                  <img
                    src={item.img}
                    className="w-full mx-auto"
                    width={item.width}
                    alt={item.title}
                  />
                  <h2 className="font-poppinsSemi text-[17px] smallest:text-[19px] md:text-[26px] lg:text-[28px] text-white-NL py-7 md:py-9">
                    {item.title}
                  </h2>
                  <a
                    className="font-poppinsMedium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white-NL"
                    href="#!"
                  >
                    <button className="px-4 sm:px-6 md:px-7 py-1.5 sm:py-2 bg-pink-NL hover:bg-opacity-80 rounded-[14px]">
                      Get To Know
                    </button>
                  </a>
                </div>
              ))}
            </Slider>
            <button onClick={Next}>
              <ChevronRightIcon className="hidden md:block text-white-NL w-12 lg:w-14 xl:w-16 absolute translate-y-32 md:translate-y-40 lg:translate-y-[193px] right-0 mr-8 top-0 lg:mr-16 xl:mr-40 mb-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
