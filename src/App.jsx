
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import Home from './components/Home'
import Info from './components/Info'
import {useState} from 'react'
const heroes = [
  {
    id:1,
    name:"juan",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic cupiditate eum recusandae quo placeat minus iste iure nam harum, aperiam veniam, qui quisquam accusamus, officia facilis. Itaque, similique voluptas!",
  },
  {
    id:2,
    name:"lucas",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic cupiditate eum recusandae quo placeat minus iste iure nam harum, aperiam veniam, qui quisquam accusamus, officia facilis. Itaque, similique voluptas!",
  },
  {
    id:3,
    name:"pedro",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic cupiditate eum recusandae quo placeat minus iste iure nam harum, aperiam veniam, qui quisquam accusamus, officia facilis. Itaque, similique voluptas!",
  },
]


function App() {
  const [dataHeroes , setDataHeroes  ] = useState(heroes);
  const [numHeroe, setNumHeroe] = useState(0);

  const aumentarContador=()=>{
    if(numHeroe==dataHeroes.length) return
    setNumHeroe(numHeroe+1)
    console.log(numHeroe)
  }
  const disminuirContador=()=>{
    if(numHeroe==1) return
    setNumHeroe(numHeroe-1)
    console.log(numHeroe)
  }

   const heroe = dataHeroes.find(el=> el.id==numHeroe)


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home aumentarContador={aumentarContador} />} />
         
        
        <Route path='/heroe' element={<Card aumentarContador={aumentarContador} disminuirContador={disminuirContador} heroe={heroe}/> } />
        <Route path='/info' element={<Info heroe={heroe}/>} />
      </Routes>
    
    </div>
  )
}

export default App
