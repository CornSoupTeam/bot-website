export default function Navbar() {
  return (
    <nav className="border-gray-200 fixed top-0 w-full border-b py-2.5 bg-white bg-opacity-75 backdrop-blur-xl z-10">
      <div className="container mx-auto w-full max-w-7xl py-2 px-6 flex flex-wrap items-center justify-between">
        <div className="flex w-auto h-[30px] relative cursor-pointer">
          <a className="text-2xl font-bold" href="/">
            Cornbot
          </a>
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ul>
        </div>
      </div>
    </nav>
  );
}
