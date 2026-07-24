import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white text-center py-4 sm:py-6 px-4 border-t border-gray-800 mt-auto w-full">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-1 sm:gap-2">
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300">
          Copyright &copy; {currentYear} Get Me A Coffee &bull; All rights reserved.
        </p>

        <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
          Empowering creators to fund their projects and connect directly with their supporters.
        </p>
      </div>
    </footer>
  )
}

export default Footer