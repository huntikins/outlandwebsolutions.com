import Link from "next/link";

export default function Footer() {
    const date = new Date().getFullYear();

    return (
      <footer className="bg-stone-900 ">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between lg:flex-row">
          <nav className="items-center justify-between p-4 lg:p-8">
            <div className="mr-6 flex flex-shrink-0 items-center text-white">
              <Link href="/">
                <a className="font-brand text-lg uppercase tracking-tight text-purple-200 lg:text-xl">
                  Outland Web Solutions
                </a>
              </Link>
            </div>
            <div className="w-full flex-grow pt-8 text-purple-200 lg:flex lg:w-auto lg:items-center">
              <ul className="text-md m-0 flex list-none p-0 font-brand uppercase ">
                <li>
                  <Link href="/news">
                    <a className="mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block">
                      News
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block">
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className=" px-4 lg:px-6 py-8 text-purple-200 lg:flex lg:w-auto lg:items-center">
            <ul className="text-md m-0 block lg:flex list-none p-0 font-brand uppercase">
              <li>
                <Link href="https://twitter.com/weboutland">
                  <a className="mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block">
                    <svg
                      role="img"
                      className=" h-8 fill-purple-200"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com/outlandwebsolutions">
                  <a className="mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block">
                    <svg
                      role="img"
                      className=" h-8 fill-purple-200"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
            </div>
            <p className="text-center text-stone-900 bg-purple-200 py-2">&copy; { date } Outland Web Solutions</p>
      </footer>
    )
}