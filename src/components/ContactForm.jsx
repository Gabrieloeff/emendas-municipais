import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', mensagem: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', mensagem: '' });
      } else {
        setStatus('Erro ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('Erro de conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200 text-gray-800 w-full max-w-lg">
      <div className="flex justify-center mb-4">
        <img src="/emendasmunicipais.png" alt="Logo Portal de Emendas" className="h-14 object-contain" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#3dae2b]"
          placeholder="Digite seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#3dae2b]"
          placeholder="Digite seu e-mail"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          rows="4"
          required
          className="w-full px-4 py-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#3dae2b]"
          placeholder="Digite sua mensagem"
        />
      </div>

      {status && (
        <p className={`text-sm text-center ${status.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          className="bg-[#3dae2b] text-white font-semibold px-6 py-2 rounded hover:bg-[#34a322] transition"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
