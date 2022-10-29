
import styled from "styled-components";

const MyButton=styled.button`
 width: 200px;
 height: 50px;
 border-radius: 20px;
 color:${props=>props.color};
 background-color:464E78;
 font-size:1.5rem;
 font-weight: 500;
 background-color: #464E78;
 transition :transform .3s ease-in ;
 &:hover{
  transform: scale(1.1);
  
 }
`

const Btn = ({text,color}) => {

  const colores={
    'verde':"#1EA67C",
    'violeta':"#B950F7"
  }

  return ( 
    <MyButton color={colores[color]}>
      {text}
    </MyButton>
   );
}
 
export default Btn;