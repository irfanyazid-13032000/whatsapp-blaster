import { useState } from 'react';

export default function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [repeat, setRepeat] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan "${message}" akan dikirim ${repeat} kali`);
    // Tambahkan logika kirim pesan via Electron/IPC di sini
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Kirim Pesan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Pesan:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Jumlah Pengulangan:</label>
          <input
            type="number"
            min="1"
            value={repeat}
            onChange={(e) => setRepeat(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}