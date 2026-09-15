// src/pages/public/Home.jsx
import { useState } from 'react';
import WorkspaceCard from '../../components/workspacecard';

// Dummy data (Nanti data ini akan di-fetch dari Backend API)
const MOCK_WORKSPACES = [
  {
    id: 1,
    name: "Urban Oasis Coworking",
    description: "Ruang kerja terbuka dengan pencahayaan alami, cocok untuk freelancer dan tim kecil. Tersedia kopi gratis.",
    capacity: 1,
    pricePerHour: 50000,
    imageUrl: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Executive Meeting Room",
    description: "Ruang rapat kedap suara dilengkapi dengan proyektor 4K dan papan tulis pintar.",
    capacity: 8,
    pricePerHour: 150000,
    imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Focus Pod",
    description: "Bilik privat satu orang untuk sesi deep work atau panggilan video tanpa gangguan.",
    capacity: 1,
    pricePerHour: 35000,
    imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800"
  }
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Temukan Ruang Kerja Idealmu</h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Pesan coworking space, ruang rapat, atau private office dengan mudah dan cepat.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto flex gap-2">
          <input 
            type="text" 
            placeholder="Cari nama atau lokasi ruangan..." 
            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-medium transition">
            Cari
          </button>
        </div>
      </div>

      {/* Workspace List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Rekomendasi Ruangan</h2>
        </div>

        {/* Grid Layout untuk Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_WORKSPACES.map((workspace) => (
            <WorkspaceCard key={workspace.id} workspace={workspace} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;