import { useEffect } from "react";
import { circleText } from "@common/utilits";

const VideoSection = ({service}) => {
  useEffect(() => {
	circleText();
  }, []);

  return (
    <>
      	{/* Onovo Video */}
		<section className="onovo-section mt-2">
			<div className="container">

				{/* video */}
				<div className="onovo-video" data-onovo-overlay data-onovo-scroll>
					<video width="300" height="220" controls>
					  <source src={service.service.video} type="video/mp4"/>
					</video>		
				</div>

			</div>
		</section>
    </>
  );
};

export default VideoSection;