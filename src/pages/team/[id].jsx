import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";


const TeamDetail = ( { team } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={team.name} />

      	{/* Onovo Team Detail */}
		<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">

				{/* Team Card */}
				<div className="onovo-team-detail">
					<div className="row gap-140 gap-top-60 gap-bottom-0">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<img loading="lazy" src={team.image} className="team-detail-img" alt={team.name} />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
							<h2>
								<span data-splitting data-onovo-scroll>{team.name}</span>
							</h2>
							<h5>
								<span data-splitting data-onovo-scroll>{team.role}</span>
							</h5>
							{typeof team.info != "undefined" &&
							<div className="onovo-team-info">
								<ul>
									{team.info.map((item, key) => (
									<li key={`info-item-${key}`}>
										<div className="title">
											<span data-splitting data-onovo-scroll>{item.label}</span>
										</div>
										<div className="onovo-text">
											<div data-splitting data-onovo-scroll>
												<p>{item.value}</p>
											</div>
										</div>
									</li>
									))}
								</ul>
							</div>
							}
							{typeof team.social != "undefined" &&
							<div className="onovo-social-1 mb-5">
								<ul>
									{team.social.map((item, key) => (
									<li key={`teamsocial-item-${key}`}>
										<a className="onovo-social-link" href={item.role} title={item.title} target="_blank">
											<img src={item.image} />
										</a>
									</li>
									))}
								</ul>
							</div>
							}
						</div>
					</div>
				</div>
		
				{team.content != "" &&
				<div className="onovo-text gap-top-140">
					<div dangerouslySetInnerHTML={{__html : team.content}} />
				</div>
				}


			</div>
		</section>

    </Layouts>
  );
};
export default TeamDetail;

export async function getStaticPaths() {
	const res = await fetch('http://127.0.0.1:8000/team')
	const team = await res.json()
	const paths = team.team.map(u=>{
		return { params: { id: `${u.id}` } }
	})
	return {
		paths,
		fallback: "blocking"
	}
  }

export async function getStaticProps(context){
	const { params } = context
	const res = await fetch(`http://127.0.0.1:8000/team/${params.id}`)
	const team = await res.json()
	return {
		props : {
		  team : team,
		},
		revalidate : 10
	}
}