import axios from 'axios';
import vector from '../../assets/img/vector.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
  saleId: number;
}

function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
    console.log("Sucesso!");
  });
}

function NotificationButton( {saleId} : Props) {
    return (
      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={vector} alt="Notificar" />
      </div>
    )
  }
  
  export default NotificationButton;