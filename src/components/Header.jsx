import React from 'react'
import { Button } from '@/components/ui/button.jsx'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-blue-900">
            Emendas Municipais
          </h1>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

