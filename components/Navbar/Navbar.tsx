'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', searchTerm)
  }

  return (
    <nav className="fixed top-0 flex items-center justify-between p-4 md:px-12 text-gray-800 shadow z-50 bg-[#080707] gap-4 md:gap-0 w-full">
      <div className="flex items-center font-bold text-xl text-white">
        <Link href={'/'}>LOGO BRAND</Link>
      </div>

      <form onSubmit={handleSearchSubmit} className="flex items-center mx-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-48 md:w-64 p-1 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-300 text-sm"
        />
      </form>
    </nav>
  )
}

export default Navbar
