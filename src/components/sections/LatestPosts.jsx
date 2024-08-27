import Date from '@library/date';
import Link from "next/link";

const LatestPostsSection = ( { posts } ) => {
    return (
        <>
            {/* Onovo Blog */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">

					{/* Heading */}
					<div className="onovo-heading align-center gap-bottom-40">
						<div className="onovo-subtitle-1">
                            <span dangerouslySetInnerHTML={{__html: 'وبلاگ'}} />
						</div>
						<h2 className="onovo-title-2">
                            <span dangerouslySetInnerHTML={{__html: "آخرین مقالات :"}} />
						</h2>
					</div>

					{/* Blog items */}
					<div className="row">
                        {posts.slice(0, 3).map((item, key) => (
						<div key={`latest-post-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<div className="onovo-blog-item">
								<div className="image" data-onovo-overlay data-onovo-scroll>
									<Link href={`/blog/${item.id}`}>
										<img decoding="async" src={item.image} width="400" height="240" alt={item.title} />
									</Link>
								</div>
								<div className="desc">
									<div className="info">
										<div className="date ms-5"><Date dateString={item.date} /></div>
                                        {item.categories.title}
									</div>
									<h5 className="title">
										<Link href={`/blog/${item.id}`}>
											<span>{item.title}</span>
										</Link>
									</h5>
									<div className="onovo-text">
										<div>
											<p>
                                                {item.short}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						))}
					</div>

					{/* Button */}
					<div className="align-center">
						<Link className="onovo-btn onovo-hover-btn" href="/blog">
							<i className="arrow ms-1">
								<span />
							</i>
							<span>مشاهده بیشتر</span>
						</Link>
					</div>

				</div>
			</section>
        </>
    );
};

export default LatestPostsSection;