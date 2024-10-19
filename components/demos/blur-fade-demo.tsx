import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/2.jpg",
    title: "AI Customer Service Agent",
    description: "RAG-based agent using QDrant for private knowledge base integration",
    link: "https://www.youragency.com/projects/ai-customer-service",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/cryd.jpg",
    title: "Intelligent Outlook Add-in",
    description: "Azure OpenAI-powered email response generation and action item extraction",
    link: "https://www.youragency.com/projects/outlook-addin",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/flow.png",
    title: "AI Content Generation Suite",
    description: "Web scraping and AI-driven blog article generation system",
    link: "https://www.youragency.com/projects/content-generation",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/3.jpg",
    title: "Outbound AI Calling Agent",
    description: "AI-powered system for appointment confirmations and customer interactions",
    link: "https://www.youragency.com/projects/ai-calling-agent",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/aibud.png",
    title: "Intelligent Document Processing",
    description: "OCR and NER models for advanced data extraction from various document types",
    link: "https://www.youragency.com/projects/document-processing",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/res.JPG",
    title: "AI-Powered Resume Filtering",
    description: "Automated system for screening and shortlisting candidate resumes",
    link: "https://www.youragency.com/projects/resume-filtering",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link,description }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
              <p> {description}</p>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
