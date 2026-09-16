// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/public/home';
import Login from './pages/public/login';
import Register from './pages/public/register';
import WorkspaceDetail from './pages/public/workspacedetail';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/admindashboard';

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