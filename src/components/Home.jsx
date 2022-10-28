import styled from "styled-components";
import Btn from "./btn";

const MydivHome=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #2E314D;
`
const Myh1=styled.div`
  text-align: center;
  font-family:monospace;
  padding: 0px 1rem ;
  color: white;
  font-size:30px;
`
const LogoImg=styled.img`
  background-color: black ;
  background-blend-mode: darken;
  border-radius: 50%;
`

const Home = () => {
  return ( 
  <MydivHome>
    <div>
      <LogoImg  src="./src/assets/logo.jpg" alt="" width='70px' />
    </div>
    <Myh1>CONOCE LOS HEROE QUE LUCHARON POR EL PAIS</Myh1>
    <div>
      <img src="https://placeimg.com/200/200/nature" alt="" />
    </div>
    <Btn text ='comenzar' color='verde' />
  </MydivHome> 
  
  );
}

export default Home;