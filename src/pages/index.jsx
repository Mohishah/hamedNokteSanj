import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { circleText } from "@common/utilits";

import Services3Section from "@components/sections/Services3";
import AboutSection from "@components/sections/About";
import ShowcaseSection from "@components/sections/Showcase";
import Team2Section from "@components/sections/Team2"

const HeroSection = dynamic( () => import("@components/sections/Hero"), { ssr: false } );
const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const LatestPostsSlider = dynamic( () => import("@components/sections/LatestPosts"), { ssr: false } );

const Home1 = ({about,blog,team,item,header,project,home}) => {
  
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts>
      <>
        <HeroSection home={home} />
        <Services3Section services={item} header={header} />
        <AboutSection home={home} />
        <HistorySlider about={about} />
        <ShowcaseSection projects={project} />
        <Team2Section team={team} />
        <LatestPostsSlider posts={blog.posts} />
      </>
    </Layouts>
  );
};

export default Home1;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/about/")
  const about = await res.json()
  const res2 = await fetch("http://127.0.0.1:8000/blog/")
  const blog = await res2.json()
  const res3 = await fetch("http://127.0.0.1:8000/team/")
  const team = await res3.json()
  const res4 = await fetch("http://127.0.0.1:8000/service/item")
  const item =await res4.json()
  const res5 = await fetch("http://127.0.0.1:8000/service/")
  const header =await res5.json()
  const res6 = await fetch("http://127.0.0.1:8000/project/")
  const project =await res6.json()
  const res7 = await fetch("http://127.0.0.1:8000/")
  const home =await res7.json()
  return{
      props : {
          about : about,
          blog : blog,
          team : team,
          item : item,
          header : header,
          project : project,
          home : home,
      },
      revalidate : 10,
  }
}