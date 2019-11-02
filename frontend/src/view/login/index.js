import React, {useState} from 'react'
import api from '../../services/api';
export default function Login({history}) {

    const [email, setEmail] = useState('');
    async function handleSubmit(event) {

        event.preventDefault();
        const response = await api.post('/sessions', { email });

        const { id } = response.data;


        // localStorage.setItem('user', _id);
history.push('/dasboard');
        // console.log(response)
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para progamadores e encontre <strong>talentos</strong> para sua empresa
        </p>
            <form onSubmit={handleSubmit} >
                <label htmlFor="email"> E-mail *</label>
                <input type="email" id="email" placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}