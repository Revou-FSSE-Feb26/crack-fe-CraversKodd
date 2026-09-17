import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authcontext'; // Pastikan path ini benar

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setError('Email dan password wajib diisi!');
    }

    // Simulasi Login (Nanti diganti dengan Axios ke API Backend)
    const isAdmin = formData.email.includes('admin');
    const mockUser = {
      id: isAdmin ? 99 : 1,
      name: isAdmin ? 'Admin SpaceSync' : 'Jody (User)',
      email: formData.email,
      role: isAdmin ? 'ADMIN' : 'USER',
      token: 'jwt-mock-token-123'
    };

    login(mockUser); // Simpan state login secara global
    navigate(isAdmin ? '/admin/dashboard' : '/user/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Masuk ke Akun</h2>
        
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email (Ketik 'admin' untuk akses admin)</label>
            <input type="email" name="email" onChange={handleChange} placeholder="nama@email.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" name="password" onChange={handleChange} placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700">Masuk</button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Belum punya akun? <Link to="/register" className="text-blue-600 font-medium">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;