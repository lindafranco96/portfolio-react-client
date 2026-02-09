import React, { useState } from 'react';

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState(null);

  const enviarMensaje = (evento) => {
    evento.preventDefault();

    const datosAEnviar = {
      nombre: nombre,
      email: email,
      texto: mensaje
    };

    //fetch('http://localhost:8080/api/contacto', {
    const url = `${process.env.REACT_APP_API_URL}/api/contacto`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosAEnviar)
    })
    .then(response => {
      if (response.ok) {
        setStatus("exito");
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