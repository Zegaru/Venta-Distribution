import { useState } from 'react';
import { Link } from 'react-router-dom';

import SolidButton from './SolidButton';
import OutlineButton from './OutlineButton';
import { Transition } from '@headlessui/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-sm bg-gray-snow lg:static lg:overflow-y-visible">
      <div className="mx-auto max-w-[1140px] hidden lg:block">
        <div className="relative py-8 flex justify-between items-center border-gray-200 border-b-[1px] pr-4 lg:pr-6">
          <div className="flex items-center justify-start flex-1 space-x-10 font-semibold leading-5">
            <a href="/" className="pr-10 transition-colors hover:text-primary">
              ABOUT
              <br />
              COMPANY.
            </a>
            <a href="/" className="transition-colors hover:text-primary">
              BLOG
            </a>
            <a
              href="/"
              className="text-2xl font-bold text-blue-400 transition-colors hover:text-primary"
            >
              VK
            </a>
            <a
              href="/"
              className="text-2xl font-bold text-blue-400 transition-colors hover:text-primary"
            >
              F
            </a>
          </div>
          <div className="flex flex-1 md:left-0 md:inset-y-0 lg:static xl:col-span-2">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex flex-col items-center pl-10">
                {/*
                <img
                  className="block w-auto h-12"
                  src={logo}
                  alt="Workflow"
                ></img>
                */}
                <span className="ml-4 text-6xl font-light text-primary">
                  venta
                </span>
                <span className="ml-4 text-base font-bold tracking-widest text-primary">
                  DISTRIBUTION
                </span>
              </Link>
            </div>
          </div>
          <div className="flex space-x-6">
            <SolidButton className="flex-1">BECOME A DISTRIBUTOR</SolidButton>
            <OutlineButton className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </OutlineButton>
          </div>
        </div>
      </div>
      <div className="py-8 mx-auto max-w-[1140px] pb-16 hidden lg:block">
        <div className="relative flex items-center justify-between font-semibold text-gray-600">
          <a href="/" className="hover:text-primary">
            WHOLE CATALOG
          </a>
          <div className="h-[4px] w-[4px] bg-primary transform rotate-45"></div>
          <a href="/" className="hover:text-primary">
            WINE
          </a>
          <div className="h-[4px] w-[4px] bg-primary transform rotate-45"></div>
          <a href="/" className="hover:text-primary">
            BEER
          </a>
          <div className="h-[4px] w-[4px] bg-primary transform rotate-45"></div>
          <a href="/" className="hover:text-primary">
            WHISKEY
          </a>
          <div className="h-[4px] w-[4px] bg-primary transform rotate-45"></div>
          <a href="/" className="hover:text-primary">
            VODKA
          </a>
          <div className="h-[4px] w-[4px] bg-primary transform rotate-45"></div>
          <a href="/" className="hover:text-primary">
            COGNAC
          </a>
        </div>
      </div>
      <div className="flex justify-between lg:hidden">
        <Link to="/" className="flex flex-col items-center">
          <span className="ml-4 text-5xl font-light text-primary">venta</span>
          <span className="ml-4 text-sm font-bold tracking-widest text-primary">
            DISTRIBUTION
          </span>
        </Link>
        <button
          className="p-6"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <Transition show={isMenuOpen} className="lg:hidden">
        <div className="relative flex flex-col items-center py-8 space-y-4 font-semibold text-gray-600">
          <a href="/" className="font-light hover:text-primary">
            WHOLE CATALOG
          </a>
          <a href="/" className="font-light hover:text-primary">
            WINE
          </a>
          <a href="/" className="font-light hover:text-primary">
            BEER
          </a>
          <a href="/" className="font-light hover:text-primary">
            WHISKEY
          </a>
          <a href="/" className="font-light hover:text-primary">
            VODKA
          </a>
          <a href="/" className="font-light hover:text-primary">
            COGNAC
          </a>
          <a
            href="/"
            className="font-light transition-colors hover:text-primary"
          >
            ABOUT COMPANY
          </a>
          <a
            href="/"
            className="font-light transition-colors hover:text-primary"
          >
            BLOG
          </a>

          <div className="flex space-x-12">
            <a
              href="/"
              className="text-2xl font-bold text-blue-400 transition-colors hover:text-primary"
            >
              VK
            </a>
            <a
              href="/"
              className="text-2xl font-bold text-blue-400 transition-colors hover:text-primary"
            >
              F
            </a>
          </div>

          <div className="flex space-x-6">
            <SolidButton className="flex-1">BECOME A DISTRIBUTOR</SolidButton>
            <OutlineButton className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </OutlineButton>
          </div>
        </div>
      </Transition>
    </header>
  );
}
