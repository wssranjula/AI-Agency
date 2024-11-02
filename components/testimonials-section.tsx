'use client'

import { cn } from "@/lib/utils"
import Marquee from "@/components/ui/marquee"
import Image from "next/image"

const reviews = [
  {
    name: "Mike Payne",
    username: "@mikepayne",
    body: "Intelliflow has transformed our business operations. Their AI solutions have streamlined our processes and significantly improved our customer service. The ROI has been remarkable.",
    img: "https://avatar.vercel.sh/mikepayne",
  },
  {
    name: "Jordan Brisson",
    username: "@jordanbrisson",
    body: "Working with Intelliflow for over a year has been a game-changer. Their AI-powered solutions have helped us scale our operations and stay ahead of the competition. Highly recommended!",
    img: "https://avatar.vercel.sh/jordanbrisson",
  },
  {
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    body: "Intelliflow's AI-powered customer service solution has revolutionized how we interact with our clients. It's like having a 24/7 support team that never sleeps!",
    img: "https://avatar.vercel.sh/sarahjohnson",
  },
  {
    name: "Alex Chen",
    username: "@alexchen",
    body: "The intelligent document processing system from Intelliflow has cut our data entry time by 75%. It's an incredible boost to our productivity.",
    img: "https://avatar.vercel.sh/alexchen",
  },
  {
    name: "Emily Rodriguez",
    username: "@emilyrodriguez",
    body: "Intelliflow's AI content generation tool has transformed our content strategy. We're producing more engaging, data-driven content faster than ever before.",
    img: "https://avatar.vercel.sh/emilyrodriguez",
  },
  {
    name: "David Kim",
    username: "@davidkim",
    body: "The business process automation solutions from Intelliflow have streamlined our operations significantly. We're seeing improved efficiency across all departments.",
    img: "https://avatar.vercel.sh/davidkim",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt={`${name}'s avatar`} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">{body}</blockquote>
    </figure>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">What Our Clients Say</h2>
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-100 dark:from-gray-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-100 dark:from-gray-900"></div>
        </div>
      </div>
    </section>
  )
}