import Image from "next/image";
import ToolBar from './components/toolbar';
import ProjectCard from './components/projectcard';
import * as motion from "motion/react-client";
import SkillsTabs from "./components/skillsTabs";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans pt-2 bg-zinc-50 overflow-x-hidden">
        <ToolBar />
        <div className="w-full md:w-1/2 ml-auto mr-auto mt-20 mb-20 flex flex-row gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-50 w-50 shrink-0 grow-0 items-center justify-center rounded-full bg-green-300 text-green-700">
            <Image src="/images/Profile_image.png" width={400} height={400} className="rounded-full" alt="Picture of Aaron"/>
          </motion.div>
          <div> 
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-green-700 text-3xl font-bold mt-auto mb-3 md:text-left"> 
              Hello, I'm Aaron Han.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            className="text-black font-bold text-xl md:text-left"> Currently a computer science student at the University of Waterloo, I aspire to build software projects as my way to serve other people. 
              You can check out my projects, experience, and other information here. 
            </motion.p>
          </div>
        </div>
        <div id="Projects_title" className="w-full bg-gray-900 mt-10 shrink-0">
          <div className="w-2/3 ml-auto mr-auto pt-10 pb-10">
            <h2 className="text-white font-bold text-4xl mb-10"> Projects </h2>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10 justify-around md:flex-row"> 
                <ProjectCard title="PyroBlog" description="PyroBlog is a blogging platform that allows users to create and share blog posts with others. Built with NextJS with Tailwind, it features a user-friendly interface with personal customizations." link="https://github.com/Pyrocarbine/PyroBlog" />
                <ProjectCard title="Spotibine" description="Spotibine is a web-based application that allows the user to create custom song sequences on Spotify Web. Users can play medleys on a playlist in shuffle mode without having to manually queue them." link="https://github.com/Pyrocarbine/Spotibine" />     
              </div>
              <div className="flex flex-col gap-10 justify-around md:flex-row"> 
                <ProjectCard title="Octical" description={<>Octical is an application that informs the user of the density of a public space. Users can submit images to the application, which will be analyzed to determine and update crowd density information. </>} link="https://github.com/Octical/Octical"/>
                <ProjectCard title="Chip-8 Emulator" description={<>A simple emulator to allow Chip-8 files to be runnable with C++. Compatible with keyboard controls and tested with this <a className="text-blue-300" href="https://github.com/Timendus/chip8-test-suite">test suite</a>.</>} link="https://github.com/Pyrocarbine/Chip-8-Emulator" />
              </div> 
            </div>
          </div>
        </div>
        <div id="Skills_title" className="w-full bg-green-palette-light snap-start shrink-0">
          <div className="w-2/3 ml-auto mr-auto pt-10 pb-10">
            <h2 className="text-green-palette-dark font-bold text-4xl mb-10"> Skills </h2>
            <SkillsTabs />
          </div>
        </div>
        <Footer />
    </div>
  );
}
