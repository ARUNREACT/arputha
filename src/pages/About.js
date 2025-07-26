// src/pages/Contact.js
import React from 'react';
import nagarajLogo from '../asset/nagaraj.png';
import tank from '../asset/Product-photos.jpg';
import Karthika from '../asset/team/Karthika.jpg';
import Ravindran from '../asset/team/Ravindran.png';
import Sankar from '../asset/team/Sankar.png';
import Saravanan from '../asset/team/Saravanan.png';
import Varadarajan from '../asset/team/Varadarajan.jpg';
import Customers from '../components/Customers';

const management = [
   {
    name: 'Ravindran M.Tech (IIT)',
    role: 'CTO ,Ex-DGQA',
    imageUrl:Ravindran,
  },
  {
    name: 'Sankar ',
    role: 'BD & Sales – Tanks& Armoured vehicles',
    imageUrl:Sankar,
  },
  {
    name: 'Ms.Karthika ',
    role: 'Director',
    imageUrl:Karthika,
  }
]

const advisor = [
  {
    name:'Saravanan',
    role:'SME',
    imageUrl:Saravanan,
  },
  {
    name:'DR. T. K. Varadarajan',
    role:'DGQA',
    imageUrl:Varadarajan,
  }
]

export default function About() {
  return ( 
    <div className="relative isolate">
      <svg aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]">
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div aria-hidden="true" className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
          className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        >
          
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-36 sm:pb-32 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                About us
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
               Arputha Advanced Systems Pvt. Ltd. is a tech-driven startup specializing in advanced electronics for defense. As iDEX DISC 6 winners, we are developing LED lighting and control systems for BMP II tanks.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-gray-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Contact us
                </a>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <img
                    alt=""
                    src="https://img.freepik.com/free-photo/female-inventor-working-new-creation_23-2149067252.jpg?t=st=1743758314~exp=1743761914~hmac=f94806b58d151e4534e019f1624d8a544475b97b54c91f2630b7b47398f55e3c&w=996"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    alt=""
                    src="https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg?t=st=1743758290~exp=1743761890~hmac=d10b80b704ff439dfd8b046984e5422a5bec79f532f55c18cb0de18be9711dee&w=996"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="https://img.freepik.com/free-photo/computer-motherboard-with-dolls_1286-36.jpg?t=st=1743758269~exp=1743761869~hmac=7feb2fd46229db29b5eca75bdbe4f0fd8f827879632d24f92ee3c0d5999a8faf&w=900"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    alt=""
                    src="https://img.freepik.com/free-photo/solar-panel-plant-manager-checking-progress-done-by-programmer-close-up_482257-117879.jpg?t=st=1743758217~exp=1743761817~hmac=574984de568673b4ed88114c31383f5467924073853e358512221d2d2142eacc&w=996"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="https://img.freepik.com/free-photo/engineer-looking-cad-software-3d-prototype-design-concept-container-working-overtime-construction-company_482257-5171.jpg?t=st=1743758182~exp=1743761782~hmac=4230a5525a1e11e72753e0112e9874e19cbecfd4e15c53c3e01f298b04fafdb3&w=996"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-8">
        <div className="relative pt-16 lg:pt-20">
          <div className="mx-auto w-full sm:max-w-7xl px-6 lg:px-8">
            <img
              alt="tank"
              src={tank}
              className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className='flex justify-center max-w-7xl mx-auto'>
        <video className='sm:w-full w-full' controls>
          <source src="/lightings-fixed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <Customers/>

       <section className="bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4 flex items-center justify-center h-full">
              <div className="border-2 p-4 sm:h-96 sm:w-96 rounded-full">
                <img
                  alt=""
                  src={nagarajLogo}
                  className="object-cover w-full rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="text-base/7 text-gray-700 lg:max-w-lg">
                <p className="text-base/7 font-semibold text-orange-600">Founder and Director</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Mr. Nagaraj
                  <span className='text-orange-600 text-2xl ml-2'>M.Tech,MBA</span>
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6">
                    Mr. Nagaraj: With over 15 years of experience in the field of embedded systems, Mr. Nagaraj has   honed   his   expertise   at   prestigious
                    companies such as BOSCH, Ashok Leyland, and   Pricol.   His   extensive
                    background   in   designing   and   developing cutting-edge embedded solutions makes him
                    a pivotal force in driving our technological innovations. His leadership and technical acumen ensure that our products remain at the forefront of innovation.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex">
                <a href="/contact" className="text-base/7 font-semibold text-orange-600">
                  Contact us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl gap-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Meet our team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <h2 className="block text-3xl font-semibold py-8 text-center">Management Team</h2>
          <ul role="list" className="flex flex-wrap md:flex-nowrap justify-around max-w-6xl mx-auto">
            {management.map((person) => (
              <li key={person.name} className="w-[90%]">
                <div className="m-6">
                  <div className='flex justify-center'>
                    <img alt="" src={person.imageUrl} className="h-36 w-36 object-cover rounded-full" />
                  </div>
                  <div className="text-center pt-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-md font-semibold text-orange-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="block text-3xl font-semibold py-8 text-center">Advisor Team</h2>
          <ul role="list" className="sm:flex justify-evenly max-w-6xl mx-auto">
            {advisor.map((person) => (
              <li key={person.name} className="w-[90%]">
                <div className="m-6">
                  <div className='flex justify-center'>
                    <img alt="" src={person.imageUrl} className="h-36 w-36 object-cover rounded-full" />
                  </div>
                  <div className="text-center pt-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-md font-semibold text-orange-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>

  );
}
