import ContactList from '../components/ContactManagement/ContactList';
import SendMessageForm from '../components/ContactManagement/SendMessageForm';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactList />
        <SendMessageForm />
      </div>
    </div>
  );
}