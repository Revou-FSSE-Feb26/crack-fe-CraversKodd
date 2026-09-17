import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, loading } = useAuth();

  // Menunggu pengecekan dari localStorage (agar tidak melempar user padahal sedang memuat)
  if (loading) {
    return <div className="p-8 text-center">Memuat...</div>;
  }

  // Jika belum login, lempar ke halaman login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Jika halaman butuh role khusus (misal Admin) dan role user tidak sesuai, lempar ke beranda
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // Jika aman, tampilkan halamannya
  return children;
};

export default ProtectedRoute;