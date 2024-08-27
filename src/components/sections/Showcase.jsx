import Link from "next/link";
import { useEffect } from "react";

import { showcaseHover } from "@common/utilits";

const ShowcaseSection = ( { projects } ) => {
	useEffect(() => {
		showcaseHover();
	}, []);

    return (
        <>
            {/* Onovo Showcase */}
			<section className="onovo-section gap-bottom-140 mt-5" style={{"borderBottom": "1px solid #555"}}>
				<div className="container">

					{/* Heading */}
					<div className="onovo-heading gap-bottom-40">
						<div className="onovo-subtitle-1">
							<span>نمومه کارها</span>
						</div>
						<h2 className="onovo-title-2 mt-5">
							<span>{projects.pageDesc.subtitle}</span>
						</h2>
					</div>

					{/* Showcase */}
					<div className="onovo-showcase gap-bottom-40">

						{/* Showcase items */}
						<div className="onovo-showcase-items">
                            {projects.project.slice(0, 4).map((item, key) => (
							<div key={`showcase-item-${key}`} className="onovo-showcase-item">
								<div className="category">
									<a href={`/projects/${item.id}`}>
										<span data-splitting data-onovo-scroll>
											{item.category_slug}
										</span>
									</a>
								</div>
								<h3 className="title">
									<a href={`/projects/${item.id}`}>
										<span className="onovo-lnk" data-splitting data-onovo-scroll>{item.title}</span>
									</a>
								</h3>
								<div className="image" data-onovo-overlay data-onovo-scroll>
									<span className="img" style={{"backgroundImage": "url(" + item.image + ")"}} />
								</div>
							</div>
                            ))}
						</div>
                        
					</div>

					{/* Button */}
					<Link className="onovo-btn onovo-hover-btn" href='/projects'>
						<i className="arrow ms-1">
							<span />
						</i>
						<span>مشاهده بیشتر</span>
					</Link>

				</div>
			</section>
        </>
    );
};

export default ShowcaseSection;