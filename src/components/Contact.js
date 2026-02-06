import React, { useState } from 'react';

function Contact() {
  // 1. Estados para guardar lo que escribe el usuario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  
  // Estado para saber si se envió o hubo error
  const [status, setStatus] = useState(null); // null, "exito", "error"

  // 2. La función que dispara el envío
  const enviarMensaje = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue sola

    // Empaquetamos los datos en un objeto (igual que tu clase Java)
    const datosAEnviar = {
      nombre: nombre,
      email: email,
      texto: mensaje
    };

    // 3. La Petición POST (El envío real)
    //fetch('http://localhost:8080/api/contacto', {
    fetch('https://api-portfolio-linda.onrender.com/api/contacto', {
      method: 'POST', // <--- ¡Aquí cambia la cosa!
      headers: {
        'Content-Type': 'application/json', // "Oye Java, te envío JSON"
      },
      body: JSON.stringify(datosAEnviar) // Convertimos el objeto a texto JSON
    })
    .then(response => {
      if (response.ok) {
        setStatus("exito");
        // Limpiamos el formulario
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        setStatus("error");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      setStatus("error");
    });
  };

  return (
    <div style={{ border: '2px solid #007bff', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#007bff' }}>📬 Contáctame</h2>
      
      <form onSubmit={enviarMensaje}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre:</label><br/>
          <input 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required 
            style={{ width: '100%', padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br/>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{ width: '100%', padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Mensaje:</label><br/>
          <textarea 
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required 
            style={{ width: '100%', height: '80px', padding: '5px' }}
          />
        </div>

        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}>
          Enviar Mensaje 🚀
        </button>
      </form>

      {/* Mensajes de confirmación */}
      {status === "exito" && <p style={{ color: 'green', fontWeight: 'bold' }}>✅ ¡Mensaje recibido en el servidor!</p>}
      {status === "error" && <p style={{ color: 'red', fontWeight: 'bold' }}>❌ Hubo un error al enviar.</p>}
    </div>
  );
}

export default Contact;