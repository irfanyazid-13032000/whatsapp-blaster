import { useState } from 'react';

export default function ContactList() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe', number: '+123456789' },
    { id: '2', name: 'Jane Smith', number: '+987654321' },
  ]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contact Management</h2>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-2 rounded">
            <p>Name: {contact.name}</p>
            <p>Number: {contact.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}