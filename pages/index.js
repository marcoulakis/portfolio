import Head from "next/head";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import avatar from "../public/avatar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import app1 from "../public/app1.png";
import app4 from "../public/app4.png";
import app2 from "../public/app2.png";
import app3 from "../public/app3.png";
import app5 from "../public/app5.png";
import app6 from "../public/app6.png";
import profile from "../public/profile.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isFlip, setIsFlip] = useState (false);

  const changeFlipState = () => {
    if(isFlip){
      setIsFlip(false)
    }else{
      setIsFlip(true)
    }
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Marcoulakis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">marcoulakis</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" hover:scale-110 duration-100 cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button
                  className="hover:scale-110 duration-100 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border shadow-lg-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/1t5FvMmjCgqw5COoSdENWLrM3x_SYCCDFgXfRxsjuYUU/edit?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Marcoulakis
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and CS Student.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Developer offering expert solutions for programming<br/>
            and app development needs. Join me down below<br/>
            and let's unleash the full potential of your project!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a className="hover:scale-110 duration-100" cursor-pointer href={"https://www.instagram.com/_marcoulakis/"} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
              <a className="hover:scale-110 duration-100" cursor-pointer href={"https://www.linkedin.com/in/marcoulakis/"} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a className="hover:scale-110 duration-100" cursor-pointer href={"https://github.com/marcoulakis"} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div onClick={changeFlipState} className="hover:scale-110 duration-100 cursor-pointer mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <ReactCardFlip isFlipped={isFlip} flipSpeedBackToFront={0.1}  flipSpeedFrontToBack={0.1}>
              <div onClick={changeFlipState} className="mx-auto rounded-full w-60 h-60 md:h-96 md:w-96">
                <Image src={avatar} layout="fill" objectFit="cover" />

                </div>
                <div onClick={changeFlipState} className=" mx-auto rounded-full w-60 h-60 md:h-96 md:w-96">
                <Image src={profile} layout="fill" objectFit="cover" />

                </div>
              </ReactCardFlip>
            </div>


          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I was born and currently live in São Paulo, Brazil. Also, when I was 
              younger I grew up in Portugal, where I got passionate about programming.
              I'm a Full-Stack developer, I build, publish and manage apps and products for <span className="text-teal-500">front-end </span>
              and <span className="text-teal-500">back-end </span> needs. 
              In addition, I also work with <span className="text-teal-500">database </span> and 
              <span className="text-teal-500"> AI</span>. I'm currently enrolled in bachelor's 
              degree in computer science, and have finished a technical course in game development.

            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services in software development market.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 hover:scale-110 duration-100">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                App Design
              </h3>
              <p className="py-2">
                Creating simple and useful designs suited for your 
                needs following core UX and UI design theory.
              </p>
              <h4 className="py-4 text-teal-600">Some Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 duration-100">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Coding Front-End Projects
              </h3>
              <p className="py-2">
                Building efficient and impactful applications, making 
                your project ready to release.
              </p>
              <h4 className="py-4 text-teal-600">Some Front-End Tools I Use</h4>
              <p className="text-gray-800 py-1">React Native</p>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Swift</p>
              <p className="text-gray-800 py-1">C# with .NET</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 duration-100">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Making Back-End Projects</h3>
              <p className="py-2">
                Developing the <span className="text-teal-700">backstage</span> part of your app,  
                making it work over the interned using servers.
              </p>
              <h4 className="py-4 text-teal-600">Some Back-End Tools I Use</h4>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">SQL</p>
              <p className="text-gray-800 py-1">MongoDB</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have some personal project that I have been working on.
              Some of them are public  <br/>and available, not just for use, but also for
              open-source community on GitHub.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Check some out bellow.
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <a className="border shadow-lg rounded-lg basis-1/3 flex-1 hover:scale-110 duration-100 cursor-pointer" href="https://play.google.com/store/apps/details?id=teleprompter.camera" target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={app1}
                />
            </a>

            <a className="border shadow-lg rounded-lg basis-1/3 flex-1 hover:scale-110 duration-100 cursor-pointer" href="http://souls-custody-the-witchs-jail.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={app2}
              />
            </a>
            <a className="border shadow-lg rounded-lg basis-1/3 flex-1 hover:scale-110 duration-100 cursor-pointer" href="http://multiplayerpong.vercel.app" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={app3}
              />
            </a>
            <a className="border shadow-lg rounded-lg basis-1/3 flex-1 hover:scale-110 duration-100 cursor-pointer" href="https://github.com/marcoulakis/youtube-downloader" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={app4}
              />
            </a>
            <a className="border shadow-lg rounded-lg basis-1/3 flex-1 hover:scale-110 duration-100 cursor-pointer" href="https://github.com/marcoulakis/file-cryptographer" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={app5}
              />
            </a>
            <a className="border shadow-lg rounded-lg basis-1/3 flex-1 hover:scale-110 duration-100 cursor-pointer" href="https://github.com/marcoulakis/email-api" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={app6}
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
