
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import Services2Section from "@components/sections/Services4";
import VideoSection from "@components/sections/Video";

const Services = ({service,item}) => {

  return (
    <Layouts>
      <PageBanner pageTitle={"خدمات ما"} pageDesc={service.pageDesc.subtitle} />

      <Services2Section service={service} item={item} noPaddingBottom />

      <VideoSection service={service} />

    </Layouts>
  );
};
export default Services;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/service/")
  const service = await res.json()
  const res2 = await fetch("http://127.0.0.1:8000/service/item")
  const item =await res2.json()
  return{
      props : {
          service : service,
          item : item
      },
      revalidate : 10,
  }
}