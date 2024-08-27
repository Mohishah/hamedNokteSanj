import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import CountUp from 'react-countup';
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import PartnersSection from "@components/sections/Partners"
import AwardsSection from "@components/sections/Awards"

const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );

export async function getStaticProps(){
    const res = await fetch("http://127.0.0.1:8000/about/")
    const about = await res.json()
    return{
        props : {
            about
        },
        revalidate : 10,
    }
}

const About = ({about}) => {

  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts>
    	<PageBanner pageTitle={"درباره ما"} pageDesc={about.pageDesc.subtitle} />
      
      	{/* Onovo About */}
	  	<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

						{/* Heading */}
						<div className="onovo-heading gap-bottom-60">
							<div className="onovo-subtitle-1">
								<span>{about.about.title}</span>
							</div>
							<h2 className="onovo-title-2">
								<span>{about.about.subtitle}</span>
							</h2>
							<div className="onovo-text">
								<p>{about.about.description}</p>
							</div>
						</div>

					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

						{/* Image */}
						<img src={about.about.image} alt="" />

					</div>
				</div>

				{/* Numbers items */}
				<div className="row gap-row gap-bottom-100 mt-5">
					{about.about.counter.map((item,key)=>(
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={`counter-${key}`}>
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value={item.value}>
								<CountUp end={item.value} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> + </div>
							<div className="label">{item.label}</div>
						</div>
					</div>
					))}
				</div>


				{/* Gallery */}
				<div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<a className="mfp-image">
							<img src={about.gallery.image1} alt="" />
						</a>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<a className="mfp-image">
							<img src={about.gallery.image2} alt="" />
						</a>
					</div>
				</div>

			</div>
		</section>


		<AwardsSection about={about} />

      	<HistorySlider about={about} />

      	<PartnersSection about={about} paddingTop={10} />
      
    </Layouts>
  );
};
export default About;
