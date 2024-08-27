import { useEffect } from "react";
import { servShowcaseHover } from "@common/utilits";

const Services3Section = ({ services,header }) => {
  useEffect(() => {
    servShowcaseHover();
  }, []);

  return (
    <>
        {/* Onovo Services */}
        <section className="onovo-section onovo-section-bg gap-top-140 gap-bottom-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

                        {/* Heading */}
                        <div className="onovo-heading gap-bottom-60">
                            <div className="onovo-subtitle-1">
                                <span>خدمات ما</span>
                            </div>
                            <h2 className="onovo-title-2" dangerouslySetInnerHTML={{__html: header.pageDesc.subtitle}}/>
                        </div>

                    </div>
                </div>

                {/* Services Showcase */}
                <div className="onovo-services-showcase">
                    <div className="row">
                        <div className="col-xs-0 col-sm-0 col-md-0 col-lg-7"></div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="onovo-subtitle-1">
                                <span>دسته بندی خدمات  :</span>
                            </div>

                            {/*items*/}
                            <div className="items">
                                <span className="img-circle onovo-circle-move" />

                                <ul>
                                    {services.slice(0, 4).map((item, key) => (
                                    <li key={`services3-item-${key}`}>
                                        <div className="image">
                                            <span className="img" style={{"backgroundImage": "url("+item.image+")"}} />
                                        </div>
                                        <h5 className="title">
                                            <a href={`/services/${item.id}`}>
                                                <span className="num">
                                                     {key+1}.0
                                                </span>
                                                <span className="name">
                                                    <span className="onovo-lnk">
                                                        {item.title}
                                                    </span>
                                                </span>
                                            </a>
                                        </h5>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <a href="/services" className="onovo-btn onovo-hover-btn btn--border">
                                <i className="arrow ms-1">
                                    <span />
                                </i>
                                <span>مشاهده بیشتر</span>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  );
};

export default Services3Section;