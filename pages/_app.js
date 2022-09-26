
import Coordenadas from '../components/Coordenadas'
import Mapa from '../components/Mapa'
import { CoorProvider } from '../context/coorContext'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.contenido}>
   
      <CoorProvider>
        <Coordenadas/>
        <Mapa/>
      </CoorProvider>
   
    </div>
  )
}

export default MyApp
