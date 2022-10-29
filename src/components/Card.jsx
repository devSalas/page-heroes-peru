import { Link } from "react-router-dom";
import Btn from "./btn";
import styled from "./Card.module.css"
const Card = ({aumentarContador,disminuirContador,heroe}) => {
  if (!heroe)return

  return (
    <div className={styled.contaninerCard}>
      <h2>{heroe.name}</h2>
      <div>
        <img src={"https://placeimg.com/200/200/nature"} alt="" />
      </div>
      <div className={styled.containerBtn}>
      <Link to="/info">
        <Btn text={"INFO"} color={"verde"}/>
      </Link>
      <Link to="/heroe" onClick={disminuirContador}>
        <Btn text={"REGRESAR"} color={"violeta"}/>
      </Link>
      <Link to="/heroe" onClick={aumentarContador}>
      <Btn text={"SIGUIENTE"} color={"violeta"}/>
      </Link>   
      </div>
    </div>
    );
}
 
export default Card;