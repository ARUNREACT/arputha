// src/pages/Contact.js
import React from 'react';

export default function Contact() {
  return (
    <div>
    <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="https://www.openproject.org/assets/images/contact/hero-contact-4cf9fa21.png"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolut inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >

        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-46">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Contact us
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                Reach out to our team for inquiries, partnerships, or support — we're here to help.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/about"
                  className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  About us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
         
        </div>
      </div>
      <div className="bg-white py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
                <div>
                  <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">Locations</h2>
                  <p className="mt-4 text-base/7 text-gray-600">
                    With locations across the region, we're always within reach to support your needs.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base/7 font-semibold text-gray-900">Arputha Advanced Systems Private Limited</h3>
                    <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
                      <p>No 2,1st Floor, Vetri layout</p>
                      <p>Vilankurichi main road, cheran ma nagar</p>
                      <p>Coimbatore-35, Tamilnadu</p>
                      <p>Phone: 7305216414</p>
                      <p>GSTIN: 33AAVCA2418C1ZY</p>
                    </address>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base/7 font-semibold text-gray-900">Arputha Technologies</h3>
                    <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
                      <p>No.2, Vetri Layout,</p>
                      <p>Cheran ma nagar,</p>
                      <p>Coimbatore-641035,</p>
                      <p>Ph:7305216414</p>
                      <p>GSTIN :33AHFPN2389D1ZG</p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mx-auto bg-slate-900">
          <div className="mx-auto">
            <div className="mx-auto">
                <iframe
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31327.633599342214!2d76.96960715218974!3d11.042060811628298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857e931be9ef3%3A0x1d789b8f77e3f311!2sArputha%20Technologies!5e0!3m2!1sen!2sin!4v1743767548343!5m2!1sen!2sin"
                />
                
            </div>
          </div>
        </div>
      </div>
  );
}
