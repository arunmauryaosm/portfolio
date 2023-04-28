import React from 'react'
import { styles } from './style'
import { SectionWrapper } from './hoc'

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col bg-black">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white-800">

            <span class="ml-3 text-xl sm:text-sm">Portfolio</span>
          </a>
          <p class="text-lg text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200  sm:mt-0 mt-4">Arun Maurya</p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

          <p class="text-lg text-white  sm:pl-4 sm:border-l-2 sm:border-gray-200  sm:mt-0 ">© 2023 - arunmaurya.in</p>

          </span>
        </div>
      </footer>
    </div>
  )
}

export default SectionWrapper(Footer, "footer")
