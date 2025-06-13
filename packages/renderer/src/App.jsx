// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactManagement from './pages/ContactManagement';
import SendMessage from './pages/SendMessage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contact" element={<ContactManagement />} />
          <Route path="send-message" element={<SendMessage />} />
        </Route>
      </Routes>
    </Router>
  );
}