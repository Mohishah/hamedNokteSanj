import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import ImageView from "@components/ImageView";

import { useRouter } from 'next/router';

import {
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  TelegramShareButton
} from "react-share";

const ProjectDetail = ( props ) => {
  
  const postData = props.postData;
  let prev_id, next_id, prev_key, next_key = 0;

  props.projects.project.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  })

  props.projects.project.forEach(function(item, key){
    if ( key == prev_key ) {
      prev_id = item.id;
    }
    if ( key == next_key ) {
      next_id = item.id;
    }
  });

  const { asPath } = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const shareUrl = `${origin}${asPath}`;

  return (
    <Layouts>
      <PageBanner pageTitle={postData.title} pageDesc={postData.category_slug} />
      
      {/* Onovo Project Detail */}
			<section className="onovo-section gap-top-140">
				<div className="container">

					{/* Image */}
					<div className="gap-bottom-80">
            <div className="project-image">
						  <img src={postData.image} alt={postData.title} />
            </div>
					</div>

					<div className="row gap-bottom-80">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

              {postData.description != "" &&
              <>
                {/* Description */}
                <div className="onovo-text">
                  <div dangerouslySetInnerHTML={{__html : postData.description}} />
                </div>
              </>
              }

						</div>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 offset-lg-1">

							{/* Project Info */}
							<div className="onovo-project-info onovo-text-white text-uppercase">
								<ul>
                  {typeof postData.item != "undefined" &&
                  <>
                    {postData.item.map((item, key) => (
                    <li key={`details-item-${key}`}>
                      <div><strong>{item.label}</strong></div>
                      <div>{item.value}</div>
                    </li>
                    ))}
                  </>
                  }
									
									<li>
										<div><strong>اشتراک گذاری :</strong></div>
										<div className="onovo-share">
											<div className="social-share onovo-post-socials onovo-social-2">
												<ul>
													<li>
                            <TelegramShareButton
                              className="onovo-social-link onovo-hover-2"
                              url={shareUrl}
                              title={postData.title}
                            >
															<i className="icon fab fa-telegram" />
														</TelegramShareButton>
													</li>
													<li>
														<TwitterShareButton 
                              className="onovo-social-link onovo-hover-2"
                              url={shareUrl}
                              title={postData.title}
                              hashtag={'#'+postData.category_slug}
                            >
															<i className="icon fab fa-twitter"></i>
														</TwitterShareButton>
													</li>
													<li>
														<LinkedinShareButton 
                              className="onovo-social-link onovo-hover-2"
                              url={shareUrl}
                              title={postData.title}
                              summary={postData.category_slug}
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
									</li>

								</ul>
							</div>
							
						</div>
					</div>
          
          {typeof postData.gallery != "undefined" &&
          <>
					{/* Gallery items */}
					<div className="row gap-row gallery-items onovo-custom-gallery">

            {postData.gallery.map((item, key) => (
						<div key={`gallery-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<div className="gallery-item">
								<a className="mfp-image">
									<img src={item.image} alt={item.alt} />
								</a>
							</div>
						</div>
            ))}

					</div>
          </>
          }

          {typeof postData.addtional != "undefined" &&
          <>
					{/* Description */}
					<div className="onovo-text gap-top-80">
						<h6 className="text-uppercase">{postData.addtional.heading}</h6>
						<div dangerouslySetInnerHTML={{__html : postData.addtional.content}} />
					</div>
          </>
          }

				</div>
			</section>

			{/* Onovo Navs */}
			<section className="onovo-section">
				<div className="container">

					{/* Navigation */}
					<div className="onovo-page-navigation">
						<div className="onovo-page-navigation-content">
              {prev_id != 0 && prev_id != undefined &&
							<Link href={`/projects/${prev_id}`} className="page-navigation__prev">
								<span className="onovo-prev onovo-hover-2">
									<i />
								</span>
							</Link>
              }
							<Link href="/projects" className="page-navigation__posts">
								<i className="fas fa-th" />
							</Link>
              {next_id != 0 && next_id != undefined &&
							<Link href={`/projects/${next_id}`} className="page-navigation__next">
								<span className="onovo-next onovo-hover-2">
									<i />
								</span>
							</Link>
              }
						</div>
					</div>
					
				</div>
			</section>
      
      <ImageView />

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/project')
  const project = await res.json()
  const paths = project.project.map(u=>{
      return { params: { id: `${u.id}` } }
  })
  return {
      paths,
      fallback: true
  }
}

export async function getStaticProps(context){
  const { params } = context
  const res = await fetch(`http://127.0.0.1:8000/project/${params.id}`)
  const postData = await res.json()
  const res2 =await fetch("http://127.0.0.1:8000/project/")
  const projects = await res2.json()
  return {
      props : {
        postData : postData,
        projects : projects,
      },
      revalidate : 10
  }
}