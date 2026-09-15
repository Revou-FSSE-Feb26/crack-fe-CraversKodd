// src/components/WorkspaceCard.jsx
import { Link } from 'react-router-dom';

const WorkspaceCard = ({ workspace }) => {
  // Format harga ke Rupiah
  const formatRupiah = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Gambar Dummy menggunakan Unsplash */}
      <img 
        src={workspace.imageUrl || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"} 
        alt={workspace.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{workspace.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {workspace.capacity} Orang
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{workspace.description}</p>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-lg font-bold text-gray-900">{formatRupiah(workspace.pricePerHour)}</span>
            <span className="text-sm text-gray-500"> / jam</span>
          </div>
          <Link 
            to={`/workspace/${workspace.id}`}
            className="text-blue-600 font-medium hover:text-blue-700 text-sm"
          >
            Lihat Detail &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCard;