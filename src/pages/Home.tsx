import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { colors } from "../color";
import AboutMe from "../components/Home/AboutMe";
import Blog from "../components/Home/Blog";
import ContactMe from "../components/Home/ContactMe";
import MyProjects from "../components/Home/MyProjects";
import Welcome from "../components/Home/Welcome";

let prevScroll = 0;
const Home = () => {
  const showContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {});
  // useEffect(() => {
  //   const smoothScroll = () => {
  //     const isNext = prevScroll < window.scrollY;
  //     prevScroll = window.scrollY;
  //     if (isNext) {
  //       gsap.to(showContainer.current, {
  //         duration: 2,
  //         y: `-=1vh`,
  //         ease: "Power4.easeOut",
  //       });
  //     } else {
  //       gsap.to(showContainer.current, {
  //         duration: 2,
  //         y: `+=1vh`,
  //         ease: "Power4.easeOut",
  //       });
  //     }
  //   };
  //   window.addEventListener("scroll", smoothScroll);
  //   return () => window.removeEventListener("scroll", smoothScroll);
  // });

  return (
    <Container>
      <Welcome />
      <MyProjects />
      <AboutMe />
      <Blog />
      <ContactMe />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  /* transform: translateY(100vh); */
  background-color: ${colors.lightBlack};
`;
