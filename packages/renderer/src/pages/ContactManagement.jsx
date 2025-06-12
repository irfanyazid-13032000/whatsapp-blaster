import { useState } from 'react';
import './../styles/ContactManagement.css';

export default function ContactManagement() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe', number: '+123456789' },
    { id: '2', name: 'Jane Smith', number: '+987654321' },
    { id: '3', name: 'Michael Johnson', number: '+1122334455' },
  ]);

  const [formData, setFormData] = useState({ name: '', number: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '' || formData.number.trim() === '') return;

    if (isEditing) {
      setContacts((prev) =>
        prev.map((contact) =>
          contact.id === editId ? { ...contact, ...formData } : contact
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const newId = Date.now().toString();
      setContacts([...contacts, { id: newId, ...formData }]);
    }

    setFormData({ name: '', number: '' });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));

    if (isEditing && id === editId) {
      setIsEditing(false);
      setEditId(null);
      setFormData({ name: '', number: '' });
    }
  };

  const handleEditClick = (contact) => {
    setIsEditing(true);
    setEditId(contact.id);
    setFormData({ name: contact.name, number: contact.number });
  };

  return (
    <div className="contact-management">
      <h1>Daftar Kontak</h1>

      {/* Form Tambah/Edit Kontak */}
      <form className="contact-form" onSubmit={handleAddContact}>
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={formData.name}
          onChange={handleInputChange}
          className="form-input"
        />
        <input
          type="text"
          name="number"
          placeholder="Nomor Telepon"
          value={formData.number}
          onChange={handleInputChange}
          className="form-input"
        />
        <button type="submit" className={`action-button ${isEditing ? 'edit-button' : 'add-button'}`}>
          {isEditing ? 'Edit' : 'Tambah'}
        </button>
      </form>

      {/* Tabel Kontak */}
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
                <button
                  className="action-button edit-button"
                  onClick={() => handleEditClick(contact)}
                >
                  Edit
                </button>
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
