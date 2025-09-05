import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (You can connect this to backend/email service)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen w-dv bg-green-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        <div className="bg-teal-900 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-green-100">
            Have questions about football matches, events, or training sessions? Reach out and let's connect.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3"><Mail size={20}/> contact@boomScore.com</p>
            <p className="flex items-center gap-3"><Phone size={20}/> +233 000 000 456</p>
            <p className="flex items-center gap-3"><MapPin size={20}/> Accra, Ghana</p>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-gray-200"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-200"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gray-200"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-200"><Youtube size={24} /></a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-teal-900 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
