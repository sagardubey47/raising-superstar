import { useEffect, useState } from 'react';
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

  useEffect(() => {
    

    const body = document.querySelector("body");
    body.style.position = showComments ? "fixed" : "absolute";
    body.style.overflow = showComments ? "hidden" : "auto";
  
   
  }, [showComments])
  
  return (
    <div className="main-container">
     <Navbar />
     <Hero handleModalOpen={handleModalOpen}/>
     {
      showComments && <Modal handleModalClose={handleModalClose}/>
     }
    </div>
  );
}

export default App;
