// app/about-us/page.tsx
import type { Metadata } from 'next'
import CEOMessage from '@/components/about/Founder'
import Journey from '@/components/about/Journey'
import AboutBanner from '@/components/global/banner2'
import AboutSection from '@/components/home/AboutSection'
import WhyChoose from '@/components/home/whychoose'
import { Aboutabout } from '@/data/homeData'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Us – Freedom Air Services, New Delhi since 1997',
  description:
    'Freedom Air Services has supported airlines, charter and diplomatic flights in India since 1997. Meet the team behind our trip-support operations.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Us – Freedom Air Services, New Delhi since 1997',
    description:
      'Freedom Air Services has supported airlines, charter and diplomatic flights in India since 1997. Meet the team behind our trip-support operations.',
    url: '/about-us',
    siteName: 'Freedom Air Services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Freedom Air Services' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – Freedom Air Services, New Delhi since 1997',
    description:
      'Freedom Air Services has supported airlines, charter and diplomatic flights in India since 1997.',
    images: ['/og-image.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freedomair.in/' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://freedomair.in/about-us' },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutBanner />
      <AboutSection data={Aboutabout} isHome={false} />
      <CEOMessage />
      <Journey />
      <WhyChoose />
    </>
  )
}