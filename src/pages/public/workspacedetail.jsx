import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';

const WorkspaceDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const { user } = useAuth(); // Mengecek status login
  const navigate = useNavigate();

  // Data statis sementara (asumsikan ini data yang difetch berdasarkan ID)
  const workspace = { id: id, name: "Creative Studio", capacity: 4, pricePerHour: 75000, description: "Studio kreatif dengan fasilitas lengkap. Dikelilingi jendela besar dengan pencahayaan alami yang membantu meningkatkan produktivitas.", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000" };

  const [bookingData, setBookingData] = useState({ date: '', startTime: '', endTime: '' });
  const [totalPrice, setTotalPrice] = useState(0);

  // Kalkulasi harga tiap kali jam mulai / jam selesai diubah
  useEffect(() => {
    if (bookingData.startTime && bookingData.endTime) {
      const start = new Date(`1970-01-01T${bookingData.startTime}`);
      const end = new Date(`1970-01-01T${bookingData.endTime}`);
      const diffInHours = (end - start) / (1000 * 60 * 60); // Menghitung selisih jam
      
      if (diffInHours > 0) {
        setTotalPrice(diffInHours * workspace.pricePerHour);
      } else {
        setTotalPrice(0);
      }
    }
  }, [bookingData.startTime, bookingData.endTime, workspace.pricePerHour]);

  const handleChange = (e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value });

  const handleBooking = (e) => {
    e.preventDefault();
    
    // Syarat 1: User harus login dulu
    if (!user) {
      alert("Anda harus login untuk melakukan booking!");
      return navigate('/login');
    }

    // Syarat 2: Validasi input form
    if (!bookingData.date || !bookingData.startTime || !bookingData.endTime) {
      return alert("Harap lengkapi tanggal dan waktu pemesanan!");
    }
    if (totalPrice <= 0) {
      return alert("Waktu selesai harus lebih besar dari waktu mulai!");
    }

    // Simulasi Berhasil Booking
    alert(`Booking Berhasil diproses!\nTotal yang harus dibayar: Rp ${totalPrice.toLocaleString('id-ID')}`);
    navigate('/user/dashboard');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Info Kiri */}
        <div className="lg:col-span-2 space-y-6">
          <img src={workspace.imageUrl} alt={workspace.name} className="w-full h-80 object-cover rounded-xl" />
          <h1 className="text-3xl font-bold text-gray-900">{workspace.name}</h1>
          <p className="text-gray-600">Kapasitas: {workspace.capacity} Orang • Wi-Fi • AC • Kopi Gratis</p>
          <div className="prose text-gray-700">
            <p>{workspace.description}</p>
          </div>
        </div>

        {/* Panel Booking Kanan */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit sticky top-24">
          <div className="text-2xl font-bold text-gray-900 mb-6">
            Rp {workspace.pricePerHour.toLocaleString('id-ID')} <span className="text-sm font-normal text-gray-500">/ jam</span>
          </div>
          
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Tanggal</label>
              <input type="date" name="date" onChange={handleChange} min={new Date().toISOString().split("T")[0]} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Jam Mulai</label>
                <input type="time" name="startTime" onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm mb-1">Jam Selesai</label>
                <input type="time" name="endTime" onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100 flex justify-between font-bold text-lg">
              <span>Total Biaya</span>
              <span className="text-blue-600">Rp {totalPrice.toLocaleString('id-ID')}</span>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold mt-4 hover:bg-blue-700 transition">
              {user ? 'Booking Sekarang' : 'Login untuk Booking'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
export default WorkspaceDetail;