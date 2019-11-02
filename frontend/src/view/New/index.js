import React ,{useState, useMemo}from 'react'
import api from '../../services/api';

import camera from '../../assets/camera.svg'
import './styles.css'

export default function New({history}) {
    const [thumbanail, setThumbanail] = useState(null);
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')

const preview = useMemo( ()=>{
        return thumbanail ? URL.createObjectURL(thumbanail): null;
},[(thumbanail)]
)

   async function handleSubmit(event) {

    event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbanail)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)

        await api.post('/spot', data, {
            headers:{user_id}
        })

        history.push('/dashboard')

    }
    return (
        <form onSubmit={handleSubmit}>

            <label
             id="thumbanail" 
             style={{backgroundImage: `url(${preview})` }}
             className={thumbanail ? 'has-thumbnail': ''}
             >

                <input type="file" onChange={event => setThumbanail(event.target.files[0])}/>
                <img src={camera} alt="Select img"/>
            </label>

            <label htmlFor="company"> EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa incrivel"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs"> TECNOLOGIAS * <span>separadas por vírgulas</span></label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam ?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price"> VALOR DA DIÁRIA * <span>em branco para GRATUITO</span></label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btm">Cadastrar</button>
        </form>
    )
}