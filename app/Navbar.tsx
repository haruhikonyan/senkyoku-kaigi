'use client';

import { testhoge } from '@/actions/search-tunes';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <a
            href="#"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            Navbar
          </a>

          <button
            type="button"
            onClick={() => testhoge()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            hoge
          </button>

          <button
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:gap-4 w-full lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:gap-4 mt-4 lg:mt-0">
              <li>
                <a
                  className="block py-2 px-3 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                  href="#"
                >
                  Link
                </a>
              </li>
              <li className="relative">
                <button
                  className="block py-2 px-3 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full text-left"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  type="button"
                >
                  Dropdown ▼
                </button>
                {isDropdownOpen && (
                  <ul className="lg:absolute lg:top-full lg:left-0 lg:mt-1 lg:w-48 bg-white dark:bg-gray-700 lg:shadow-lg rounded">
                    <li>
                      <a
                        className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="my-1 border-gray-300 dark:border-gray-600" />
                    </li>
                    <li>
                      <a
                        className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  className="block py-2 px-3 text-gray-400 pointer-events-none"
                  href="#"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="flex gap-2 mt-4 lg:mt-0">
              <input
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
