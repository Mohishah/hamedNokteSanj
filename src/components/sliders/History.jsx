import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const HistorySlider = ({about}) => {
  return (
    <>
        {/* Onovo History */}
        <section className="onovo-section onovo-section-bg gap-top-140 gap-bottom-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">

                        {/* Heading */}
                        <div className="onovo-heading gap-bottom-80">
                            <div className="onovo-subtitle-1">
                                <span dangerouslySetInnerHTML={{__html: about.history.title}} />
                            </div>
                            <h2 className="onovo-title-2">
                                <span dangerouslySetInnerHTML={{__html: about.history.subtitle}} />
                            </h2>
                        </div>

                    </div>

                </div>

                {/* History swiper */}
                <div className="onovo-history-slider">
                    <Swiper
                        {...sliderProps.historySlider}
                        className="swiper-container js-history-slider"
                    >
                        <div className="swiper-wrapper">
                            
                            {about.history.historyItems.map((item, key) => (
                            <SwiperSlide key={`history-slide-${key}`} className="swiper-slide">
                                <div className="onovo-history-item">
                                    <div className="image" style={{"backgroundImage": "url("+item.image+")"}} data-onovo-overlay />
                                    <div className="desc me-5">
                                        <div className="subtitle onovo-text-white">
                                            <div data-splitting>{item.subtitle}</div>
                                        </div>
                                        <h5 className="title">
                                            <span data-splitting>{item.year}</span>
                                        </h5>
                                        <div className="text">
                                            <div data-splitting>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))}

                        </div>

                        {/* navs */}
                        <div className="onovo-navs js-history-navs">
                            <div className="onovo-prev js-history-prev onovo-hover-2">
                                <i />
                            </div>
                            <div className="onovo-paginations-container">
                                <div className="onovo-paginations js-history-pagination" />
                                <div className="swiper-nav-active" />
                            </div>
                            <div className="onovo-next js-history-next onovo-hover-2">
                                <i />
                            </div>
                        </div>

                    </Swiper>
                </div>


            </div>
        </section>
    </>
  );
};
export default HistorySlider;
