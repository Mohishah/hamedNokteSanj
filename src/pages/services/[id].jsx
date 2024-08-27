import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Accordion from 'react-bootstrap/Accordion';

const ServiceDetail = ( { items } ) => {

  return (
    <Layouts>
		<PageBanner pageTitle={items.item.title} />

		{/* Onovo Service Detail */}
		<section className="onovo-section gap-top-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

					{/* Image */}
					<div className="gap-bottom-50">
						<img src={items.item.image} alt={items.item.title} />
					</div>

					<div className="onovo-text">
						<h3>{items.item.title}</h3>
						<div dangerouslySetInnerHTML={{__html : items.item.content}} />
					</div>


						<h3>{items.faq.title_faq}</h3>

						{/* Faq items */}
						<Accordion>
						<div className="onovo-faq-items">
						{items.faq.faqItems.map((item, key) => (
						<Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
						<div className="onovo-faq-item onovo-collapse-item">
							<Accordion.Header>
							<h5 className="title onovo-collapse-btn">
							<span>{item.label}</span>
							<i className="arrow" />
							</h5>
							</Accordion.Header>
							<Accordion.Body>
							<div className="onovo-text">
								<div dangerouslySetInnerHTML={{__html : item.text}} />
							</div>
							</Accordion.Body>
						</div>
						</Accordion.Item>
						))}
						</div>
						</Accordion>



						<div className="onovo-text gap-top-50">
						<h3>{items.item.title2}</h3>
						<div dangerouslySetInnerHTML={{__html : items.item.content2}} />
						</div>

              
					</div>
					
				</div>
			</div>
		</section>
      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
	const res = await fetch('http://127.0.0.1:8000/service/item')
	const item = await res.json()
	const paths = item.map(u=>{
		return { params: { id: `${u.id}` } }
	})
	return {
		paths,
		fallback: 'blocking'
	}
  }

  export async function getStaticProps(context){
	const { params } = context
	const res = await fetch(`http://127.0.0.1:8000/service/item/${params.id}`)
	const items = await res.json()
	return {
		props : {
		  items : items,
		},
		revalidate : 10
	}
  }