import React from 'react';
import { X } from 'lucide-react';

function StateModal({ stateName, municipalities, onClose, onMunicipalityClick }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-center text-[#3dae2b] mb-4">
          Principais Municípios de {stateName}
        </h2>

        {municipalities.length === 0 ? (
          <p className="text-center text-gray-600">
            Nenhum município listado para este estado.
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {municipalities.map((municipality, index) => (
              <li
                key={index}
                className="py-3 px-4 hover:bg-gray-50 cursor-pointer transition rounded"
                onClick={() => onMunicipalityClick(municipality)}
              >
                <span className="text-gray-800 font-medium">{municipality}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default StateModal;
