import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones necesarias
    console.log(formData);
    // Limpia el formulario después de enviar
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center " style={{height:"100vh"}}>
    <h1>Contáctanos hoy mismo</h1>
    <span>Disfruta de nuestros deciliciosos pasteles al instante</span>
    <Form onSubmit={handleSubmit}  style={{ minWidth: "60%", padding:"40px 0px" }}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          placeholder="Escribe tu mensaje aquí"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  );
};

export default Contact;
