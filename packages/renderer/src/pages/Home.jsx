import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Topbar */}
      <div className="bg-blue-600 text-white p-4 flex space-x-4">
        <Link 
          to="/contact" 
          className="hover:bg-blue-700 px-3 py-1 rounded"
        >
          Contact Management
        </Link>
        <Link 
          to="/send-message" 
          className="hover:bg-blue-700 px-3 py-1 rounded"
        >
          Kirim Pesan
        </Link>
      </div>

      {/* Konten Halaman */}
      <div className="p-4">
        <Outlet />  {/* Ini akan render halaman yang aktif */}
      </div>
    </div>
  );
}