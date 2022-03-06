import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/assets/logo-text-color.png'

import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Nav() {
  const router = useRouter()

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
      setNavbarOpen((prev) => !prev)
      console.log(router.pathname)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <header className="bg-stone-900">
      <nav className="flex max-w-7xl flex-wrap items-center mx-auto justify-between p-4 lg:p-8">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <Link href="/">
            <a
              className={`${
                router.pathname == '/' ? 'text-white' : 'text-purple-200'
              } font-brand text-lg uppercase tracking-tight text-purple-200 lg:text-xl`}
            >
              Outland Web Solutions
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={handleToggle}
            className="flex items-center rounded border border-purple-400 px-3 py-2 text-purple-200 hover:border-white hover:text-white"
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            navbarOpen ? 'block' : 'hidden'
          } w-full flex-grow lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="text-md m-0 block list-none p-0 font-brand uppercase lg:flex lg:flex-grow lg:justify-end">
            <li>
              <Link href="/news">
                <a
                  onClick={() => closeMenu()}
                  className={`${
                    router.pathname == '/news'
                      ? 'text-white'
                      : 'text-purple-200'
                  } mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block`}
                >
                  News
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a
                  onClick={() => closeMenu()}
                  className={`${
                    router.pathname == '/services'
                      ? 'text-white'
                      : 'text-purple-200'
                  } mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block`}
                >
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  onClick={() => closeMenu()}
                  className={`${
                    router.pathname == '/contact'
                      ? 'text-white'
                      : 'text-purple-200'
                  } mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
