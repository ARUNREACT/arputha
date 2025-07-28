// src/components/Header.js
import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '../asset/arputha-logo.png';
import armol from '../asset/armol.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Certificates', href: '/Certificates' },
  { name: 'Contact us', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white block shadow-lg">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              alt="Logo"
              src={logoImage}
              className="sm:h-24 w-[8rem] sm:w-[16rem] w-auto object-cove"
            />
          </a>
        </div>
        <div className="flex lg:hidden order-3 order-sm-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-24 justify-center">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-xl font-semibold text-black">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex lg:flex-1 justify-center order-1 order-sm-3">
          <div> 
          <span className="text-end block font-bold">TM</span>
            <a href="/" className="">
              <img
                alt="Logo"
                src={armol}
                className="w-16 sm:h-24 sm:w-28 w-auto object-cover"
              />
            </a>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={logoImage}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
} 
