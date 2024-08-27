import Link from "next/link";

const AboutSection = ({home}) => {
    return (
      <>
        {/* Onovo About */}
        <section className="onovo-section gap-bottom-140 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-12">

                    {/* Heading */}
                    <div className="onovo-heading gap-bottom-40">
                      <div className="onovo-subtitle-1 mt-5">
                        <span>{home.about.title}</span>
                      </div>
                      <h2 className="onovo-title-2">
                        <span dangerouslySetInnerHTML={{__html: home.about.subtitle}} />
                      </h2>
                    </div>

                  </div>

                </div>

                {/* Description */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h5 className="text-uppercase">{home.about.title1}</h5>
                    <p dangerouslySetInnerHTML={{__html: home.about.text1}} />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                    <h5 className="text-uppercase">{home.about.title2}</h5>
                    <p dangerouslySetInnerHTML={{__html: home.about.text2}} />
                  </div>
                </div>
                    <div className="col-12 align-center mt-5">
                    <Link className="onovo-btn onovo-hover-btn " href="/about">
                      <i className="arrow ms-1"><span /></i>
                      <span>اطلاعات بیشتر</span>
                    </Link>
                    </div>

              </div>

            </div>
          </div>
        </section>
      </>
    );
};

export default AboutSection;