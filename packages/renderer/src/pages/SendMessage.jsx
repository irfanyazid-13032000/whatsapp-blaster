import { useState } from 'react';

export default function SendMessage() {
  const [message, setMessage] = useState('');
  const [repeat, setRepeat] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan "${message}" akan dikirim ${repeat} kali!`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Kirim Pesan</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Isi Pesan:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Jumlah Kirim:</label>
          <input
            type="number"
            min="1"
            value={repeat}
            onChange={(e) => setRepeat(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Kirim Sekarang
        </button>
      </form>
    </div>
  );
}