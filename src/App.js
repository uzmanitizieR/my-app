import './App.css';
import Images from './Images';  // Images dizisi olduğunu varsayıyorum
import React, { useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);  // İlk resmi varsayılan olarak seçiyoruz

  return (
    <div className="App">
      <div className='container'>
        <img src={selectedImg} alt='selected' className='selected' />
      </div>
      <div className='imgContainer'>
        {Images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt='tantuni' 
            onClick={() => setSelectedImg(img)}  // Tıklanan resmi seç
            className={img === selectedImg ? 'selected' : ''}  // Seçili resmi belirginleştir
          />
        ))}
      </div>
    </div>
  );
}

export default App;
