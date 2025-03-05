"use client"
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';
import { title } from 'process';
function HoverCard() {
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];
  return (
    <div className=''>
      <div className=''>
        <div className='mt-10 text-center'>
          <h1>hvcds</h1>
          <p>hzgdvhjd</p>
        </div>
        <div className='mt-10'>
          <HoverEffect items={featuredWebinars.map(webinar =>({
            title : webinar.title,
            description:webinar.description,
            link:`/${webinar.slug}`
          }
             
          ))}></HoverEffect>
        </div>
        <div className='mt-10 text-center'>
          <Link href={'/'}>
            View All courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HoverCard