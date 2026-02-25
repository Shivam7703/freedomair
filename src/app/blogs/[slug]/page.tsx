import React from 'react';
import Banner from '@/components/global/banner';
import { blogData } from '@/data/homeData';
import Aside from '@/components/service/aside';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

// Static Params for Export Mode
export async function generateStaticParams() {
  return blogData.blogs.map((blog: any) => {
    const slug = blog.title.toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")  // remove punctuation
  .trim()
  .replace(/\s+/g, "-");
    return { slug };
  });
}

const Page = ({ params }: Props) => {
  const decodedSlug = decodeURIComponent(params.slug).toLowerCase();

  const singleBlog = blogData.blogs.find((blog: any) => {
    const blogSlug = blog.title.toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")  // remove punctuation
  .trim()
  .replace(/\s+/g, "-");
    return blogSlug === decodedSlug;
  });

  if (!singleBlog) {
    notFound();
  }

  return (
    <>
      <Banner
        img=""
        title={`${singleBlog.title.slice(0, 20)}...`}
        para=""
        slug={`blogs / ${singleBlog.title.toLowerCase()}`}
      />

      <div className="flex flex-wrap justify-between gap-y-7 lg:px-28 md:p-20 sm:p-16 p-7 relative min-h-screen w-full">
        <div className="md:w-[64%] w-full">
          <Image
            src={singleBlog.img}
            alt={singleBlog.title}
            className="w-full object-cover max-h-[550px]"
            width={1000}
            height={550}
          />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: singleBlog.text2 }}
          />
        </div>

        <div className="md:w-[27%] w-full md:sticky top-10 space-y-5 sm:space-y-12 h-full">
          <Aside title={`${singleBlog.title.slice(0, 28)}...`} />
        </div>
      </div>
    </>
  );
};

export default Page;
