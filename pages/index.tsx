/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { HiArrowUpCircle } from "react-icons/hi2";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
// import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocals";

type Props = {
  // pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ experiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="bg-[#181818] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 
    overflow-x-hidden scrollbar scrollbar-gray-400/20 scrollbar-thumb-[#00ADB5]/80
    "
    >
      <Head>
        <title>Rdev Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <HiArrowUpCircle className="text-[#00ADB5] h-10 w-10 animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  // const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      // pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
