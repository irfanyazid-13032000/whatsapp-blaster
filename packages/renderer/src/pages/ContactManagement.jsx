import { useState } from 'react';

export default function ContactManagement() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe', number: '+123456789' },
    { id: '2', name: 'Jane Smith', number: '+987654321' },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Kontak</h1>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-2 rounded bg-white">
            <p><strong>Nama:</strong> {contact.name}</p>
            <p><strong>Nomor:</strong> {contact.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}