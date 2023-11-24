import './App.css'
import Menu from './components/Menu'
import { useState } from 'react';
import Transporte from './components/Transporte';
import Car from './components/Carro';

type MenuData = {
  cor: string;
  marca: string;
  ano: string;
  potencia: number;
  icon: string
};

function App() {
  const [menuData, setMenuData] = useState<MenuData | null>(null);

  const updateMenuData = (newData: MenuData) => {
    setMenuData(newData);
  };


  return (
    <>
      <div className='flex flex-col items-center justify-center gap-5 w-90% '>
        <h1 className="text-3xl">Transporte</h1>
        <Menu updateMenuData={updateMenuData} items={[]}/>
        {menuData && <Transporte menuData={menuData}/> }
        {menuData && <Car menuData={menuData}/>}
      </div>
    </>
  )
}

export default App
