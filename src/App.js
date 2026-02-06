import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';

function App() {
  // 1. Inicializamos como un Arreglo vacío [] (Lista vacía)
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // 2. Llamamos al endpoint nuevo (Plural)
    //fetch('http://localhost:8080/api/proyectos')
    fetch('https://api-portfolio-linda.onrender.com/api/proyectos')
      .then(response => response.json())
      .then(data => {
        console.log("Lista recibida:", data);
        setProyectos(data); // Guardamos la lista completa
      })
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>📂 Mis Proyectos (Dinámicos)</h1>
      <hr />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* 3. EL LOOP DE REACT (.map) */}
        {/* "Para cada 'p' (proyecto) en la lista 'proyectos', dibuja esto..." */}
        {proyectos.map((p) => (
          
          <div key={p.id} style={{ 
              border: '1px solid #666', 
              borderRadius: '10px', 
              padding: '20px', 
              width: '250px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
            }}>
            
            <h3 style={{ color: 'blue' }}>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <small>ID: {p.id}</small>
          
          </div>

        ))}

        {/* --- AQUÍ VA EL FORMULARIO --- */}
        <Contact />

      </div>
    </div>
  );
}

export default App;