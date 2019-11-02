import React, { useEffect } from 'react';
import{} from 'react-router-dom'
import api from '../../services/api';

import './styles.css'  
export default function Dashboard() {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        async function loadSport() {
            const user_id = localStorage.getItem('use');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

setSpots(response.data);
        }
        loadSport();

    }, []);
    return (
        <>

            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id }>
                        <header style={{backgroundImage:`url(${spot.thumbnail_url})`}} />
                        <strong>
                            {spot.company}
                        </strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO' }</span>                        
                    </li>
                ))}

            </ul>
<link to='/new'> <button className="btn">Cadastrar novo spot</button></link>
        </>
    )
}