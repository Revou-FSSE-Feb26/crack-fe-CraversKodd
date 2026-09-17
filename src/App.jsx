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
import ProtectedRoute from './components/protectedroute';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Public Routes (Siapapun bisa akses) */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workspace/:id" element={<WorkspaceDetail />} />
            
            {/* User Route (Hanya user yang sudah login, role apa saja boleh) */}
            <Route 
              path="/user/dashboard" 
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Route (Hanya user dengan role ADMIN) */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute allowedRole="ADMIN">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;