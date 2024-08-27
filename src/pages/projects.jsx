import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic( () => import("@components/ProjectsGrid"), { ssr: false } );

const Portfolio = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"نمونه کارها"} pageDesc={props.projects.pageDesc.subtitle} />

      <ProjectsGrid projects={props.projects} category={props.category} layout={"grid"} />
      
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/project/")
  const projects = await res.json()
  const res1 = await fetch("http://127.0.0.1:8000/project/category")
  const category = await res1.json()
  return{
      props : {
          projects,
          category,
      },
      revalidate : 10,
  }
}