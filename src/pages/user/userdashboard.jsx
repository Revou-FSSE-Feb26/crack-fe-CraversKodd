const UserDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Riwayat Booking Saya</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Ruangan</th>
              <th className="p-4 font-semibold text-gray-600">Tanggal & Waktu</th>
              <th className="p-4 font-semibold text-gray-600">Status</th>
              <th className="p-4 font-semibold text-gray-600">Total Harga</th>
              <th className="p-4 font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-4">Creative Studio</td>
              <td className="p-4">12 Nov 2026<br/><span className="text-sm text-gray-500">10:00 - 12:00</span></td>
              <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">PENDING</span></td>
              <td className="p-4">Rp 150.000</td>
              <td className="p-4"><button className="text-red-600 hover:underline text-sm">Batalkan</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserDashboard;