
const AwardsSection = ({about}) => {
    return (
      <>
        {/* Onovo Awards */}
		<section className="onovo-section gap-bottom-140">
			<div className="container">

				{/* Heading */}
				<div className="onovo-heading">
					<h5 className="onovo-subtitle-1">
                        <span dangerouslySetInnerHTML={{__html : about.award.title}} />
					</h5>
				</div>

				{/* Awards items */}
				<div className="row gap-row">

                    {about.award.awardItem.map((item, key) => (
					<div key={`awards-item-${key}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<p><img src={item.image} alt={item.title} /></p>
						<span dangerouslySetInnerHTML={{__html : item.title}} />
					</div>
                    ))}

				</div>
				
			</div>
		</section>
      </>
    );
};

export default AwardsSection;