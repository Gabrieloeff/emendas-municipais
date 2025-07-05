import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-50 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <img
            src="/Logo emendas municipais.svg"
            alt="Logo Emendas Municipais"
            className="h-10 w-auto"
          />

          <a
            href="https://soloncloud.web.app/admin/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3dae2b] text-white font-semibold px-5 py-2 rounded hover:bg-[#34a322] transition"
          >
            Acessar Sistema 
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
