import { useState } from 'react';
import './../styles/ContactManagement.css'; // Assuming you have a CSS file for styling


export default function ContactManagement() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe', number: '+123456789' },
    { id: '2', name: 'Jane Smith', number: '+987654321' },
    { id: '3', name: 'Michael Johnson', number: '+1122334455' },
  ]);

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="contact-management">
      <h1>Daftar Kontak</h1>
      
      <table className="contacts-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nomor Telepon</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button className="action-button edit-button">Edit</button>
                <button 
                  className="action-button delete-button"
                  onClick={() => handleDelete(contact.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}