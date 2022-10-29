import { Link } from "react-router-dom";
import Btn from "./btn";
import styled  from "./Info.module.css";
const Info = ({heroe}) => {
  return (  
    <div className={styled.containerInfo}>
      <h2>{heroe.name}</h2>
      <p className={styled.description}>{heroe.description}</p>
      <Link to='/heroe'>
        <Btn text={'REGRESAR'} color={'VIOLETA'}/>
      </Link>

    </div>
  );
}
 
export default Info;