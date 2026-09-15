// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/public/Home';

// Placeholder Pages (Sisa halaman lainnya)
const Login = () => <div className="p-8 text-center text-xl">Halaman Login (Segera Hadir)</div>;
const Register = () => <div className="p-8 text-center text-xl">Halaman Register (Segera Hadir)</div>;
const WorkspaceDetail = () => <div className="p-8 text-center text-xl">Halaman Detail & Booking (Segera Hadir)</div>;
const UserDashboard = () => <div className="p-8">User Dashboard</div>;
const AdminDashboard = () => <div className="p-8">Admin Dashboard</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar akan selalu muncul di semua halaman */}
        <Navbar />
        
        {/* Konten Halaman */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workspace/:id" element={<WorkspaceDetail />} />
            
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;