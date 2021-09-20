import React, { useState } from 'react';

async function registerUser(credentials) {
    return fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Register() {
    console.log("Register component")

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [document, setDocument] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        await registerUser({
            name,
            surname,
            document,
            email,
            password,
            phone
        });
    }

    return (
        <div className="login-wrapper">
            <h1>Crear un usuario</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Nombre</p>
                    <input type="text" onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    <p>Apellido</p>
                    <input type="password" onChange={e => setSurname(e.target.value)} />
                </label>
                <label>
                    <p>Nº de Documento</p>
                    <input type="text" onChange={e => setDocument(e.target.value)} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Contraseña</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p>Nº de Teléfono</p>
                    <input type="text" onChange={e => setPhone(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}