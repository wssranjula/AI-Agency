"use client"
import { useState } from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const works = [
  {
    background: "bg-blue-100",
    imageUrl: "/images/2.jpg",
    title: "AI Customer Service Agent",
    description: "RAG-based agent using QDrant for private knowledge base integration",
    link: "https://www.youragency.com/projects/ai-customer-service",
    tags: ["RAG", "QDrant", "Customer Service"]
  },
  {
    background: "bg-green-100",
    imageUrl: "/images/cryd.jpg",
    title: "Intelligent Outlook Add-in",
    description: "Azure OpenAI-powered email response generation and action item extraction",
    link: "https://www.youragency.com/projects/outlook-addin",
    tags: ["Azure OpenAI", "Outlook", "Email AI"]
  },
  {
    background: "bg-yellow-100",
    imageUrl: "/images/flow.png",
    title: "AI Content Generation Suite",
    description: "Web scraping and AI-driven blog article generation system",
    link: "https://www.youragency.com/projects/content-generation",
    tags: ["Web Scraping", "Content Generation", "AI Writing"]
  },
  {
    background: "bg-purple-100",
    imageUrl: "/images/3.jpg",
    title: "Outbound AI Calling Agent",
    description: "AI-powered system for appointment confirmations and customer interactions",
    link: "https://www.youragency.com/projects/ai-calling-agent",
    tags: ["Voice AI", "Appointment Scheduling", "Customer Interaction"]
  },
  {
    background: "bg-red-100",
    imageUrl: "/images/aibud.png",
    title: "Intelligent Document Processing",
    description: "OCR and NER models for advanced data extraction from various document types",
    link: "https://www.youragency.com/projects/document-processing",
    tags: ["OCR", "NER", "Document Processing"]
  },
  {
    background: "bg-indigo-100",
    imageUrl: "/images/res.JPG",
    title: "AI-Powered Resume Filtering",
    description: "Automated system for screening and shortlisting candidate resumes",
    link: "https://www.youragency.com/projects/resume-filtering",
    tags: ["Resume Screening", "HR Tech", "AI Recruitment"]
  },
];

export function BlurFadeDemo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="showcase" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our AI Solutions Showcase</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map(({ imageUrl, title, description, link, background, tags }, idx) => (
            <BlurFade
              key={title}
              delay={0.25 + idx * 0.05}
              inView
              className={`rounded-lg ${background} p-4 shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <Link href={link} target="_blank" rel="noreferrer" className="block h-full">
                <div 
                  className="relative overflow-hidden rounded-lg aspect-video mb-4"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out"
                    src={imageUrl}
                    alt={title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {hoveredIndex === idx && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                      <span className="text-white text-lg font-semibold">View Project</span>
                    </motion.div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="bg-white px-2 py-1 rounded-full text-sm text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}