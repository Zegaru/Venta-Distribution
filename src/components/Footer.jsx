import { Link } from 'react-router-dom';
import SolidButton from './SolidButton';

export default function Footer() {
  return (
    <footer className="body-font mx-auto max-w-[1140px] sm:px-6 xl:px-0 border-t-[1px] border-gray-300">
      <div className="items-center px-8 mt-12 space-y-6 xl:px-0 xl:space-y-0 xl:space-x-8 xl:flex">
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex flex-col items-center">
            <span className="ml-4 text-6xl font-light text-primary">venta</span>
            <span className="ml-4 text-base font-bold tracking-widest text-primary">
              DISTRIBUTION
            </span>
          </Link>
        </div>
        <div className="space-y-2 sm:space-y-0 sm:space-x-8 sm:flex">
          <div className="flex-1 text-sm text-gray-500 xl:pl-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p>
              Russia,{' '}
              <span className="font-semibold text-gray-700">
                Forage Proezd, 44,
              </span>
            </p>
            <p>Moscow region, 141000</p>
          </div>
          <div className="text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href="tel:+7 (495) 137-77-45" className="group hover:underline hover:text-primary">
              +7 (495){' '}
              <span className="font-semibold text-gray-700 group-hover:text-primary">137-77-45</span>
            </a>
            <p>10:00 - 20:00</p>
          </div>
          <div className="flex flex-col text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:info@ventadistribution.ru" className="underline hover:text-primary">
              info@ventadistribution.ru
            </a>
            <a href="mailto:pmi@ventadistribution.ru" className="underline hover:text-primary">
              pmi@ventadistribution.ru
            </a>
          </div>
        </div>
        <div className="text-center xl:mt-0">
          <SolidButton className="w-full sm:w-auto sm:mx-auto">REQUEST A CALL</SolidButton>
          <p className="mt-2 text-[0.6rem] text-gray-500">
            We will call you back within 15 minutes
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-wrap w-full py-8 mt-4 md:items-center xl:items-start md:flex-row md:flex-nowrap">
        <div className="flex-wrap justify-between flex-grow order-first px-8 text-center sm:px-0 sm:flex md:text-left">
          <div>
            <h2 className="mb-6 text-3xl font-light tracking-wide title-font font-journalism">
              CATALOG
            </h2>
            <nav className="grid grid-cols-2 mb-10 text-gray-600 list-none gap-x-12 gap-y-2">
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Whole catalog
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Wine
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Beer
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Whiskey
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Vodka
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Cognac
                </a>
              </li>
            </nav>
          </div>

          <div className="mt-8 md:mt-0">
            <h2 className="mb-6 text-3xl font-light tracking-wide title-font font-journalism">
              VENTA DISTRIBUTION
            </h2>
            <nav className="mb-10 space-y-2 list-none">
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  About company
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base font-bold underline transition-all text-primary hover:text-gray-800"
                >
                  Become a distributor
                </a>
              </li>
            </nav>
          </div>

          <div className="mt-8 md:mt-0">
            <h2 className="mb-6 text-3xl font-light tracking-wide title-font font-journalism">
              SOCIAL NETWORKS
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center font-light group md:text-left"
                >
                  <span className="mr-2 text-2xl font-bold text-blue-400 transition-all group-hover:text-primary">
                    VK
                  </span>
                  <span className="underline transition-all group-hover:text-primary">
                    Contact
                  </span>
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/"
                  className="flex items-center justify-center font-light group md:text-left"
                >
                  <span className="mr-2 text-2xl font-bold text-blue-400 transition-all group-hover:text-primary">
                    F
                  </span>
                  <span className="underline transition-all group-hover:text-primary">
                    Facebook
                  </span>
                </a>
              </li>
            </nav>
          </div>

          <div className="mt-8 md:mt-0">
            <h2 className="mb-6 text-3xl font-light tracking-wide title-font font-journalism">
              INFORMATION
            </h2>
            <nav className="mb-10 space-y-2 list-none">
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Conditions
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base font-light underline transition-all hover:text-primary"
                >
                  Processing pers. data
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <p className="my-4 text-xs font-light text-center">
        Venta Distribution © 2019 All rights reserved. Website development:
      </p>
    </footer>
  );
}
