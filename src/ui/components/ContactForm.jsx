'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    oggetto: '',
    messaggio: '',
    privacyCheckbox: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      cognome: '',
      email: '',
      telefono: '',
      oggetto: '',
      messaggio: '',
      privacyCheckbox: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!executeRecaptcha) {
      setLoading(false);
      return;
    }

    try {
      // Genera il token reCAPTCHA
      const token = await executeRecaptcha('submit_contact_form');

      // Invia i dati al server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      resetForm();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl md:w-[50%] w-full flex flex-col gap-6">
      <div className="grid grid-cols-12 gap-4">
        <input
          required
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="md:col-span-6 col-span-12 bg-white p-4 rounded-xl"
          placeholder="Nome *"
        />
        <input
          required
          type="text"
          id="cognome"
          name="cognome"
          value={formData.cognome}
          onChange={handleChange}
          className="md:col-span-6 col-span-12 bg-white p-4 rounded-xl"
          placeholder="Cognome *"
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="md:col-span-6 col-span-12 bg-white p-4 rounded-xl"
          placeholder="Email *"
        />
        <input
          required
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="md:col-span-6 col-span-12 bg-white p-4 rounded-xl"
          placeholder="Telefono *"
        />
      </div>
      <input
        type="text"
        id="oggetto"
        name="oggetto"
        value={formData.oggetto}
        onChange={handleChange}
        className="col-span-6 bg-white p-4 rounded-xl"
        placeholder="Oggetto"
      />
      <textarea
        required
        rows={5}
        cols={33}
        id="messaggio"
        name="messaggio"
        value={formData.messaggio}
        onChange={handleChange}
        className="col-span-6 bg-white p-4 rounded-xl"
        placeholder="Messaggio *"
      />
      <div className="flex gap-3">
        <input
          required
          type="checkbox"
          id="privacyCheckbox"
          name="privacyCheckbox"
          value={formData.privacyCheckbox}
          onChange={handleChange}
          className="accent-cta-100/75"
        />
        <label htmlFor="privacyCheckbox">
          Ho letto ed accetto i{' '}
          <Link href="/privacy" className="text-primary-300 hover:underline">
            Termini e Condizioni della Privacy
          </Link>{' '}
          *
          <br/>
        </label>
      </div>
      <button
        type="submit"
        className="cursor-pointer md:w-[30%] text-xl font-semibold bg-cta-100 hover:bg-secondary-light transition-colors duration-300 text-primary-900 p-3 rounded-xl shadow-lg">
        Invia
      </button>
    </form>
  );
}
