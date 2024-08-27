import Layouts from "@layouts/Layouts";

import Date from '@library/date';
import ImageView from "@components/ImageView";

import { useRouter } from 'next/router';

import PageBanner from "@components/PageBanner";

import {
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  TelegramShareButton
} from "react-share";

const PostsDetail = ( props ) => {
  
  const postData = props.postData;

  const { asPath } = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const shareUrl = `${origin}${asPath}`;
  console.log(shareUrl);

  return (
    <Layouts>
      <PageBanner pageTitle={postData.title} pageDesc={""} />

      {/* Onovo Blog Detail */}
			<section className="onovo-section onovo-post gap-top-140">
				<div className="container">

					{/* Image */}
					<div className="onovo-post-pic" data-onovo-overlay data-onovo-scroll>
						<img src={postData.image} alt={postData.title} />
					</div>

					{/* Post*/}
					<div className="onovo-post-wrapper">
						<div className="onovo-post-content">

							{/* Date */}
							<div className="onovo-post-date">
								<span className="date ms-5"><Date dateString={postData.date} /></span>نویسنده : <a href="#" onClick={(e) => {e.preventDefault();}}>{postData.author.fullname}</a>
							</div>

							{/* Content */}
							<div className="onovo-post-text">
								<div className="post-content">
                  				<div dangerouslySetInnerHTML={{ __html: postData.content1 }} />


                      <div className="row gap-row mb-5">
                          {postData.gallery.map((item, key) => (
                          <div key={`gallery-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                              <a className="mfp-image" href={item.image}>
                                <img src={item.image} alt="post" />
                              </a>
                          </div>
                          ))}
                      </div>


                    <div dangerouslySetInnerHTML={{ __html: postData.content2 }} />
 
								</div>
							</div>

							{/* Info */}
							<div className="onovo-post-bottom">
								<div className="onovo-post-bottom-content">

									{/* Categories */}
									<div className="onovo-post-categories onovo-lnk lnk--white">
										<span>دسته بندی :</span>
										<a href="#" className="me-4" onClick={(e) => {e.preventDefault();}}>{postData.categories.title}</a>
									</div>

								

									{/* Social*/}
									<div className="social-share onovo-post-socials onovo-social-2">
										<span>اشتراک گذاری :</span>
										<ul className="me-5">
                                        	<li>
											  <TelegramShareButton
                                        	    className="onovo-social-link onovo-hover-2"
                                        	    url={shareUrl}
                                        	    quote={postData.title}
                                        	  >
                                        	    <i className="icon fab fa-telegram" />
												</TelegramShareButton>
											</li>
                                        	<li>
                                        	  <TwitterShareButton 
                                        	    className="onovo-social-link onovo-hover-2"
                                        	    url={shareUrl}
                                        	    title={postData.title}
                                        	  >
                                        	    <i className="icon fab fa-twitter"></i>
                                        	  </TwitterShareButton>
                                        	</li>
                                        	<li>
                                        	  <LinkedinShareButton 
                                        	    className="onovo-social-link onovo-hover-2"
                                        	    url={shareUrl}
                                        	    title={postData.title}
                                        	    source={shareUrl}
                                        	  >
                                        	    <i className="icon fab fa-linkedin" />
                                        	  </LinkedinShareButton>
                                        	</li>
                                        	<li>
                                        	  <RedditShareButton 
                                        	    className="onovo-social-link onovo-hover-2"
                                        	    url={shareUrl}
                                        	    title={postData.title}
                                        	  >
                                        	    <i className="icon fab fa-reddit" />
                                        	  </RedditShareButton>
                                        	</li>
                                        	<li>
                                        	  <PinterestShareButton 
                                        	    className="onovo-social-link onovo-hover-2"
                                        	    url={shareUrl}
                                        	    media={postData.image}
                                        	    description={postData.title}
                                        	  >
                                        	    <i className="icon fab fa-pinterest" />
                                        	  </PinterestShareButton>
                                        	</li>
										</ul>
									</div>

								</div>
							</div>


						</div>
					</div>

				</div>
			</section>
      
      <ImageView />
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
	const res = await fetch('http://127.0.0.1:8000/blog')
	const blog = await res.json()
	const paths = blog.posts.map(u=>{
		return { params: { id: `${u.id}` } }
	})
	return {
		paths,
		fallback: true
	}
}

export async function getStaticProps(context){
	const { params } = context
	const res = await fetch(`http://127.0.0.1:8000/blog/${params.id}`)
	const postData = await res.json()
	return {
		props : {
		  postData : postData,
		},
		revalidate : 10
	}
}