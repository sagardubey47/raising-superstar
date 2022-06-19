import { useState } from 'react';
import './App.css';
import Hero from './component/Hero';
import Modal from './component/Modal';
import Navbar from './component/Navbar';

function App() {

  const [showComments, setShowComments] = useState(false);

  const handleModalOpen = () => {
    setShowComments(true)
  }

  const handleModalClose = () => {
    setShowComments(false)
  }

  return (
    <div className="main-container">
     <Navbar />
     <Hero handleModalOpen={handleModalOpen}/>
     {
      showComments && <Modal />
     }
    </div>
  );
}

export default App;
