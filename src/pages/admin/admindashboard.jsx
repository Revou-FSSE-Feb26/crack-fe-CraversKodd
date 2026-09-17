const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">+ Tambah Ruangan</button>
      </div>
      
      <h2 className="text-xl font-semibold mb-4 mt-8">Manajemen Booking (Semua User)</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-gray-600">User / Pemesan</th>
              <th className="p-4 font-semibold text-gray-600">Ruangan</th>
              <th className="p-4 font-semibold text-gray-600">Waktu</th>
              <th className="p-4 font-semibold text-gray-600">Status</th>
              <th className="p-4 font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-4">jody@example.com</td>
              <td className="p-4">Meeting Room A</td>
              <td className="p-4">15 Nov 2026 (09:00 - 11:00)</td>
              <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">PENDING</span></td>
              <td className="p-4 space-x-2">
                <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm hover:bg-green-200">Konfirmasi</button>
                <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-200">Tolak</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminDashboard;