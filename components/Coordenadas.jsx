import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import { CoorContext } from '../context/coorContext';
import { useContext } from 'react';
import Pusher from "pusher-js";



const Coordenadas = () => {

  const [longitud, setLongitud] = useState(-76.150038);
  const [latitud, setLatitud] = useState(4.414848);
  const {setCoord } = useContext(CoorContext);
  

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('4ad0537d4fa66bb957ba', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('coordenadas');
    channel.bind('envio', function(data) {
      setCoord({
        latitud: data.latitud,
        longitud: data.longitud,
      })
    });
  });

  const enviarCoord = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:8000/api/maps', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        longitud,
        latitud
      })
    });
    setCoord({
      latitud: latitud,
      longitud: longitud,
    });
  }
  return (
    <div>


     
      <form className={styles.form} >
      <h1>MAPA</h1>
        <input type="text" value={longitud} onChange={e => setLongitud(e.target.value)}></input>
        <input type="text" value={latitud} onChange={e => setLatitud(e.target.value)}></input>

        <button className={styles.btn} type="submit" onClick={enviarCoord}>Ubicar</button>
      </form>


    </div>
  )
}


export default Coordenadas