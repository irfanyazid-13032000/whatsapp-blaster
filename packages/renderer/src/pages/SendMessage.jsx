import { useState } from 'react';
import { Send } from 'lucide-react'; // atau bisa pakai font-awesome
import './../styles/SendMessage.css';

export default function SendMessage() {
  const [message, setMessage] = useState('');
  const [repeat, setRepeat] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan "${message}" akan dikirim ${repeat} kali!`);
  };

  return (
    <div className="send-message-container">
      <h1 className="send-message-title">Kirim Pesan</h1>
      <form onSubmit={handleSubmit} className="send-message-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
          placeholder="Tulis pesan..."
          rows={1}
          required
        />
        <input
          type="number"
          min="1"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
          className="repeat-input"
          required
        />
        <button type="submit" className="send-button" title="Kirim">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
