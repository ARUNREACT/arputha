'use client'

import logo from '../logo.svg';
import '../App.css';

import { HomeIcon } from '@heroicons/react/20/solid';
import { MenuIcon } from '@heroicons/react/24/outline';
import { Cog6ToothIcon, ServerIcon } from '@heroicons/react/24/outline';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/20/solid';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import logoImage from '../asset/arputha-logo.png';
import techImage from '../asset/3.png';
import productImg from '../asset/product.jpg';
import serviceImg from '../asset/services.jpg';


import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: ServerIcon,
  },
]
const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$19',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$49',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Automation', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Submit ticket', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
        <div className="bg-white">
      {/* Header */}
      

      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 py-36 sm:pb-8">
          <img
            alt=""
            src="https://img.freepik.com/free-photo/motherboard-background_23-2151733811.jpg?t=st=1743766224~exp=1743769824~hmac=abf2a6ef3350de18c36f9287a396f181910a61fff5af732d74d60dd547c6afc0&w=1380"
            className="absolute inset-0 -z-10 size-full object-cover opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="mx-auto max-w-8xl py-16 sm:py-48 lg:py-32">
              <div className="text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                  Innovative Solutions for Defense, Security, and Industrial Advancements
                </h1>
                <p className="mt-8 text-md font-medium text-pretty text-white sm:text-xl/8">
                  Designing and manufacturing advanced systems like LED lighting for BMP II Tanks and IoT-based security solutions.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-10xl sm:text-center">
              <h2 className="text-base/7 font-semibold text-orange-600">Innovative Solutions for a Smarter Future</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-10xl sm:text-balance">
                Transforming Ideas into Advanced Technologies for Defense, Security, and Industry.
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                At Arputha Advanced Systems, we specialize in designing, developing, and manufacturing cutting-edge electronic products that power industries, enhance security, and drive defense technologies. From LED lighting for military tanks to IoT-based security alarms and EV chargers, we create smarter, safer environments for residential, commercial, and industrial sectors. As iDEX DISC 6 winners, we are committed to delivering high-value solutions that elevate market presence and brand equity.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                alt="App screenshot"
                src="https://img.freepik.com/free-photo/people-repairing-computer-chips_23-2150880942.jpg?t=st=1743767660~exp=1743771260~hmac=7eaf5eadc4dbc2290629cd155b76c58f49641a56e87b6005a2ee0c3c606728a6&w=996"
                width={2432}
                height={1442}
                className="mb-[-12%] rounded-xl ring-1 shadow-2xl ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 pb-24">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
            {/* Details section */}
            <section aria-labelledby="details-heading">
              <div className="flex flex-col items-center text-center">
                <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Services
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  We specialize in creating innovative products from concept to market-ready solutions. Our team excels in designing,prototyping, and testing to ensure the highest quality and functionality.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                <div className="h-96 p-8">
                <h2 className="text-center pb-6 text-2xl font-bold tracking-tight text-orange-500 sm:text-3xl">Product development</h2>
                  <img
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    src="https://img.freepik.com/free-photo/female-inventor-working-new-creation_23-2149067252.jpg?t=st=1743754069~exp=1743757669~hmac=18960471c02616b0e5f0ffc2ffc39a6ec8a25c8912bbc0f312da5bb62151d8e6&w=996"
                    className="h-full w-full rounded-lg"
                  />
                  <p className="mt-8 text-base text-gray-500">
                    We specialize in creating innovative products from concept to market-ready solutions. Our team excels in designing,prototyping, and testing to ensure the highest quality and functionality.
                  </p>
                </div>
                <div className="h-96 p-8">
                  <h2 className="text-center pb-6 text-2xl font-bold tracking-tight text-orange-500 sm:text-3xl">Engineering Services</h2>
                  <img
                    alt="Front zipper pouch with included key ring."
                    src="https://img.freepik.com/free-photo/workers-control-room_1359-316.jpg?t=st=1743753670~exp=1743757270~hmac=ad0ba07da138e1b7f950bb0a3fe7422b5fc69ac09499a3750c45cf8ffd1ac905&w=996"
                    className="h-full w-full rounded-lg object-cover"
                  />
                  <p className="mt-8 text-base text-gray-500">
                    We offer comprehensive engineering services, including system design, integration, and optimization. Our expertise spans across various domains, ensuring tailored solutions that meet specific client needs
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Powering Innovation with Advanced Electronics
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg/8 text-pretty text-white">
            From defense systems to smart IoT solutions and EV technologies, Arputha Advanced Systems delivers 
            high-impact products engineered for real-world performance. Partner with us to bring your ideas to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact us
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>

      </main>
    </div>
  );
}

export default Home;
