"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link' 
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home () {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['coding' , 'web development', 'python' , 'tailwind' , 'Machine Learning' ,  ] ,
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      {/* Hero Section Start */}
      <section className='container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center'>
        <div className='w-full text-center lg:text-left lg:w-1/2 lg:-mt-8'>
          <h1 className='text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl'>
            A <span className='font-semibold'>free repository</span> for
            community <br className='hidden lg:block' /> components using{' '}
            <span className='font-semibold underline decoration-primary'>
            <span ref={el} />
            </span>
          </h1>
          <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
            Open source Tailwind UI components and templates to{' '}
            <br className='hidden lg:block' /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className='mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20'>
            <form
              action='https://www.creative-tim.com/twcomponents/search'
              className='flex flex-wrap justify-between md:flex-row'
            ></form>
          </div>
        </div>
        <div className='w-full mt-4 lg:mt-0 lg:w-1/2'>
          <img
            src='https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg'
            alt='tailwind css components'
            width={600} // Set appropriate width
            height={400} // Set appropriate height
            className='w-full h-full max-w-md mx-auto'
          />
        </div>
      </section>
      {/* Hero Section End */}

      {/* Pricing Section Start */}
      <section className='py-12 '>
        <div className='container px-4 mx-auto '>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
              Pricing Plans
            </h2>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
              Choose the plan that suits you best
            </p>
          </div>

          <div className='flex flex-wrap justify-center'>
            {/* Basic Plan */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center transform transition duration-500 hover:scale-105'>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
                  Basic
                </h3>
                <p className='mt-4 text-gray-500 dark:text-gray-300'>
                  $10/month
                </p>
                <ul className='mt-6 mb-6 space-y-4'>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Access to basic features
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Community support
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Limited integrations
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Limited Backups
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Paid Maintenance
                  </li>
                </ul>
                <Button variant='outline' className='mx-1'>
                  Get Started
                </Button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500'>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
                  Standard
                </h3>
                <p className='mt-4 text-gray-500 dark:text-gray-300'>
                  $29/Month
                </p>
                <span className='inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full'>
                  BestSeller
                </span>
                <ul className='mt-6 mb-6 space-y-4'>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Everything in Free
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Priority support
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Advanced integrations
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ More Precise
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Sleek & Robust
                  </li>
                </ul>
                <Button variant='outline' className='mx-1'>
                  Get Started
                </Button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-300 hover:scale-105 text-center'>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
                  Premium
                </h3>
                <p className='mt-4 text-gray-500 dark:text-gray-300'>
                  $30/month
                </p>
                <ul className='mt-6 mb-6 space-y-4'>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Everything in Pro
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Dedicated account manager
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Custom solutions
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Free Maintenance
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ 24/7 Chat Support
                  </li>
                </ul>
                <Button variant='outline' className='mx-1'>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}

      {/* Testominals Section Start */}
      <section className='py-12 '>
        <div className='container px-4 mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
              Testimonials
            </h2>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
              What our customers say about us
            </p>
          </div>

          <div className='flex flex-wrap justify-center'>
            {/* Testimonial 1 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 flex items-center'>
                <Image
                  src='https://via.placeholder.com/60'
                  alt='John Doe'
                  width={60}
                  height={60}
                  className='w-16 h-16 rounded-full mr-4'
                />
                <div>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    This service has changed my life! I cant imagine going back
                    to how things were.
                  </p>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    John Doe
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-300'>
                    CEO, Company A
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 flex items-center'>
                <Image
                  src='https://via.placeholder.com/60'
                  alt='Jane Smith'
                  width={60}
                  height={60}
                  className='w-16 h-16 rounded-full mr-4'
                />
                <div>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Incredible experience! The team is always there to help and
                    support.
                  </p>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    Jane Smith
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-300'>
                    Marketing Manager, Company B
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 flex items-center'>
                <Image
                  src='https://via.placeholder.com/60'
                  alt='Alice Johnson'
                  width={60}
                  height={60}
                  className='w-16 h-16 rounded-full mr-4'
                />
                <div>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    I highly recommend this! It has made my work so much easier.
                  </p>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    Alice Johnson
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-300'>
                    Product Owner, Company C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testomonals Section End */}

      {/* Blog Section Start */}
      <section className='py-12 '>
        <div className='container px-4 mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
              Discover Our Top Blogs
            </h2>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
              Dive into our latest insights and articles that inspire and
              inform.
            </p>
          </div>

          <div className='flex flex-wrap justify-center'>
            {/* Blog 1 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className=' rounded-lg shadow-lg  transform transition duration-500 hover:scale-105 dark:border-2'>
                <Image
                  src='/nextjs.jpg'
                  alt='Blog 1'
                  width={300}
                  height={200}
                  className='rounded-t-lg w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                    What&apos;s new NextJs 15?
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Next.js 15 introduces exciting features including enhanced
                    performance optimizations, improved image handling, and new
                    routing capabilities. Discover how these updates streamline
                    development and elevate user experiences, making it easier
                    than ever to build efficient web apps.
                  </p>
                  <Button variant='outline' className='m-2'>
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className=' rounded-lg shadow-lg  transform transition duration-500 hover:scale-105 dark:border-2'>
                <Image
                  src='/top5.jpg'
                  alt='Blog 2'
                  width={300}
                  height={200}
                  className='rounded-t-lg w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                    Programming Languages for 2025!
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Explore the top 5 programming languages to master in 2025,
                    focusing on their unique features, job market demand, and
                    future trends. This guide will help you make informed
                    decisions on which languages to learn to stay ahead in the
                    tech industry.
                  </p>
                  <Button variant='outline' className='m-2'>
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className=' rounded-lg shadow-lg  transform transition duration-500 hover:scale-105 dark:border-2'>
                <Image
                  src='/ai.jpg'
                  alt='Blog 3'
                  width={300}
                  height={200}
                  className='rounded-t-lg w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                    The Future of Web Development
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Discover the key trends in web development for 2025, such as
                    the rise of AI-powered tools, heightened focus on
                    accessibility. Learn how these developments are transforming
                    web applications and what developers must understand to
                    remain competitive future.
                  </p>
                  <Button variant='outline' className='m-2'>
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* import Link from 'next/link'; // Import Link for navigation */}

          <div className='text-center mt-8'>
            <Link href='/blog'>
              <Button variant='outline' className='mx-auto'>
                More Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </main>
  )
}
