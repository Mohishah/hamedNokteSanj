
const Services4Section = ({ service, item }) => {

  return (
    <>
        {/* Onovo Services */}
		<section className="onovo-section gap-bottom-140 mt-5 pt-5">
			<div className="container">

				{/* Heading */}
				<div className="onovo-heading gap-bottom-40">
					<div className="onovo-subtitle-1">
						<span>{service.service.title}</span>
					</div>
					<h2 className="onovo-title-2">
						<span>{service.service.subtitle}</span>
					</h2>
					<div className="onovo-subtitle mt-5">
						<div dangerouslySetInnerHTML={{__html : service.service.text}} />
					</div>
				</div>

				{/* Services items */}
				<div className="onovo-services-list mt-5">

                    {item.map((item, key) => (
					<div key={`services4-item-${key}`} className="onovo-service-item-list p-5">
						<div className="onovo-service-item-list-inner">
							<div className="image onovo-hover-1">
								<a href={`/services/${item.id}`}>
									<img src={item.image} alt={item.title} />
								</a>
							</div>
							<div className="num">
								<span> 0{key+1}. </span>
							</div>
							<h5 className="title me-5">
								<a href={`/services/${item.id}`}>
									<span>{item.title}</span>
								</a>
							</h5>
							<div className="onovo-text me-5">
								<div>
									<div dangerouslySetInnerHTML={{__html : item.content.slice(0,100)}} />
								</div>
							</div>
						</div>
					</div>
                    ))}

				</div>
				
			</div>
		</section>
    </>
  );
};

export default Services4Section;