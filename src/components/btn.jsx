
import styled from "styled-components";

const MyButton=styled.button`
 width: 280px;
 height: 71px;
 border-radius: 30px;
 color:${props=>props.color};
 background-color:464E78;
 font-size:2rem;
 font-weight: 500;
 background-color: #464E78;
 transition :transform .3s ease-in ;
 &:hover{
  transform: scale(1.1);
  
 }
`

const Btn = ({text,color}) => {
  console.log(color)
  const colores={
    'verde':"#1EA67C",
    'violeta':"#B950F7"
  }
  console.log(colores[color])
  return ( 
    <MyButton color={colores[color]}>
      {text}
    </MyButton>
   );
}
 
export default Btn;