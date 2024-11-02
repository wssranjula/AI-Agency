"use client";

import Head from 'next/head';
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import ChatWidget from "@/components/chat-widget";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";

const services = [
  {
    icon: "/images/s_6.png",
    title: "AI-Powered Customer Service Solutions",
    description:
      "Revolutionize your support with AI agents that handle queries, access databases, and perform operations seamlessly.",
  },
  {
    icon: "/images/s_1.png",
    title: "Intelligent Document Processing",
    description:
      "Streamline workflows with advanced OCR and NER solutions for efficient data extraction from various documents.",
  },
  {
    icon: "/images/s_5.png",
    title: "AI Content Generation and Web Scraping",
    description:
      "Elevate your content strategy with AI-driven creation and comprehensive web scraping for data-backed articles.",
  },
  {
    icon: "/images/s_3.png",
    title: "Business Process Automation",
    description:
      "Boost productivity with custom AI solutions for email processing, action item tracking, and workflow optimization.",
  },
  {
    icon: "/images/s_4.png",
    title: "Intelligent Data Analytics",
    description:
      "Uncover valuable insights with AI-powered analytics, including seamless database integration and knowledge graph implementations.",
  },
  {
    icon: "/images/s_2.png",
    title: "AI-Enhanced Recruitment Solutions",
    description:
      "Streamline your hiring process with AI-driven resume screening and intelligent candidate assessment tools.",
  },
];

export default function Component() {
  return (
    <>
      <Head>
        <title>Intelliflow | AI-Powered Business Solutions for Enterprise Growth</title>
        <meta name="description" content="Transform your business with Intelliflow's AI-powered solutions. Boost productivity, streamline operations, and gain valuable insights with our cutting-edge AI technology." />
        <meta name="keywords" content="AI solutions, business automation, intelligent analytics, customer service AI, document processing, AI recruitment" />
        <meta property="og:title" content="Intelliflow | AI-Powered Business Solutions" />
        <meta property="og:description" content="Transform your business with Intelliflow's AI-powered solutions. Book a free consultation or try our AI assistant now." />
        <meta property="og:image" content="/logo/l1.png" />
        <meta property="og:url" content="https://intelliflow.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://intelliflow.ai" />
      </Head>
      <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <header>
          <Element
            name="top"
            className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
     xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
     justify-between py-6 px-4 md:px-8 mx-6"
          >
            <Link href={"/"}>
              <Image
                src={"/logo/l1.png"}
                alt="Intelliflow Logo"
                width={1000}
                height={1000}
                className="w-28"
              />
            </Link>

            <nav className="absolute right-1/2 translate-x-1/2 transform">
              <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
                <Link href={"/showcase"} className="hover:text-blue-500">
                  Showcase
                </Link>

                <ScrollLink
                  to="services"
                  smooth={true}
                  className="hover:text-blue-500"
                >
                  Services
                </ScrollLink>

                <ScrollLink
                  to="process"
                  smooth={true}
                  className="hover:text-blue-500"
                >
                  Process
                </ScrollLink>

                <ScrollLink
                  to="testimonials"
                  smooth={true}
                  className="hover:text-blue-500"
                >
                  Testimonials
                </ScrollLink>
              </div>
            </nav>

            <div className="flex items-center gap-x-4">
              <a href="tel:+94763520324" className="hidden lg:flex">
                <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
                  (+9476)-352-0324
                </button>
              </a>

              <Link
                href={"/meeting"}
                className="
    py-3 
    px-6
    text-lg 
    hover:bg-[#abcbff]
    rounded-[6px]
    border-2
    border-black
    text-white
    bg-[#121212]
    transition
    duration-200
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
              >
                Book a call
              </Link>
            </div>
          </Element>
        </header>

        <main className="md:pb-10">
          <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
            <AnimatedShinyTextDemo />

            <h1>
              <CoverDemo />
            </h1>
            <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Transform your business with AI - Streamline operations, enhance customer experiences, and unlock data-driven insights with our tailored AI solutions.
            </p>

            <div className="flex md:justify-center items-center gap-x-4">
              <Link
                href="/meeting"
                className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              >
                Book Free Consultation
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const chatWidget = document.getElementById('chat-widget');
                  if (chatWidget) {
                    chatWidget.style.display = 'block';
                    chatWidget.focus();
                  }
                }}
                className="bg-white py-3 px-10 md:px-16 md:text-xl border-4 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              >
                Try AI Assistant
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-blue-500" />
                  Assess: We analyze your business needs and opportunities 
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-blue-500" />
                  Strategize: We develop a custom AI implementation plan
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-blue-500" />
                  Implement: We deploy tailored AI solutions seamlessly
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-blue-500" />
                  Evolve: We continuously optimize for maximum ROI
                </p>
              </BoxReveal>
            </div>

            <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
              <div className="md:w-2/5">
                <h2 className="text-2xl font-medium text-gray-600 w-4/5">
                  Trusted by fast-growing businesses worldwide
                </h2>

                <div className="flex my-6 gap-x-5 w-full">
                  <div>
                    <h3 className="text-blue-500 text-3xl md:text-5xl">
                      <NumberTicker value={1000} /> +
                      <p className="text-gray-500 text-sm md:text-md">
                        Happy Clients
                      </p>
                    </h3>
                  </div>

                  <div className="w-px bg-gray-300 self-stretch"></div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                      <NumberTicker value={100} /> +
                      <p className="text-gray-500 text-sm md:text-md">
                        Projects Completed
                      </p>
                    </h3>
                  </div>
                </div>
              </div>

              <section className="overflow-hidden mt-10 md:w-4/5">
                <InfiniteMovingLogos
                  speed="slow"
                  direction="left"
                  items={[
                    {
                      logo: "/logo/langchain.svg",
                      name: "langchain",
                    },
                    {
                      logo: "/logo/openai.png",
                      name: "openai",
                    },
                    {
                      logo: "/logo/msoft.svg",
                      name: "msoft",
                    },
                    {
                      logo: "/logo/flowise.png",
                      name: "flowise",
                    },
                    {
                      logo: "/logo/make.png",
                      name: "make",
                    },
                    {
                      logo: "/logo/zapier.png",
                      name: "zapier",
                    },
                  ]}
                />
              </section>
            </div>
          </section>
        </main>

        <Element name="services">
          <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
            <h2>
              <WordPullUpDemo />
            </h2>
            <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
              Tailored AI solutions to elevate your business performance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
                >
                  <Image
                    src={service.icon}
                    width={10000}
                    height={10000}
                    
                    className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                    alt={service.title}
                  />
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                  <Link
                    href="/meeting"
                    className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </Element>

        <section className="py-20">
          <ScrollBasedVelocityDemo />
        </section>

        <Element name="process">
          <section className="md:px-0 mx-6 md:mx-auto">
            <h2 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
              Our{" "}
              <span className="text-blue-500 flex gap-x-1 items-center">
                {" "}
                <Image
                  src={"/icons/squiggle.svg"}
                  width={10000}
                  height={10000}
                  className="w-6"
                  alt="Squiggle"
                />
                Creative
                <Image
                  src={"/icons/star.svg"}
                  width={10000}
                  height={10000}
                  className="w-6 mb-8"
                  alt="Star"
                />
              </span>{" "}
              Process
            </h2>

            <p className="text-center py-4  md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
              All of our services are designed to help your business to get
              noticed.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <AnimatedBeamMultipleOutputDemo />
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
                <BoxRevealDemo />
              </div>
            </div>
          </section>
        </Element>

        <Element name="testimonials">
          <section className="bg-gray-100 py-16">
            <div className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
              <div className="flex flex-col gap-y-5 md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Clients Say</h2>
                <blockquote className="text-lg md:text-2xl ">
                  "Intelliflow has transformed our business operations. Their AI solutions have streamlined our processes and significantly improved our customer service. The ROI has been remarkable."
                </blockquote>
                <div className="flex items-center gap-x-1">
                  <IconStarFilled className="text-4xl text-yellow-500" />
                  <IconStarFilled className="text-4xl text-yellow-500" />
                  <IconStarFilled className="text-4xl text-yellow-500" />
                  <IconStarFilled className="text-4xl text-yellow-500" />
                  <IconStarFilled className="text-4xl text-yellow-500" />
                </div>
                <cite className="text-xl font-medium">
                  Mike Payne <br />
                  CEO, Payne Enterprises
                </cite>
              </div>
              <div className="flex flex-col gap-y-5 md:w-1/2">
                <blockquote className="text-lg md:text-2xl ">
                  "Working with Intelliflow for over a year has been a game-changer. Their AI-powered solutions have helped us scale our operations and stay ahead of the competition. Highly recommended!"
                </blockquote>
                <div className="flex items-center gap-x-1">
                  <IconStarFilled className="text-4xl text-yellow-500" />
                  <IconStarFilled className="text-4xl text-yellow-500" />
                  <IconStarFilled className="text-4xl text-yellow-500" />
                  <IconStarFilled className="text-4xl text-yellow-500" />
                  <IconStarFilled className="text-4xl text-yellow-500" />
                </div>
                <cite className="text-xl font-medium">
                  Jordan Brisson <br />
                  CEO, Atlas Massage
                </cite>
              </div>
            </div>
          </section>
        </Element>

        <Element name="guarentees">
          <ShootingStarsAndStarsBackgroundDemo />
        </Element>

        <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <LetsMakeThingsHappenSection />
        </section>

        
        <footer className="bg-[#fafafa] py-10 px-6 md:px-0 md:mx-auto border-t">
          <div className="flex flex-col justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
            <Image
              src={"/logo/l1.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="Intelliflow Logo"
            />
            <p className="text-left text-xl text-gray-500">+9476-352-0324</p>
            <p className="text-left text-xl text-gray-500">
              contact@intelliflow.ai
            </p>
          </div>

          <div className="flex md:justify-center gap-x-4 mt-10">
            © 2025 Intelliflow. All Rights Reserved.
            <Link href="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-blue-500">
              Terms of Service
            </Link>
          </div>
        </footer>
        <ChatWidget  />
      </div>
    </>
  );
}