import { useState } from "react";

type MenuData = {
  cor: string;
  marca: string;
  ano: string;
  potencia: number;
};

type MenuProps = {
  menuData: MenuData | null;
}


export default function Transporte({menuData}: MenuProps) {
  const [velocidade, setVelocidade] = useState(0);
  const [intervalId, setIntervalId] = useState<number>(0);

  const iniciarIncremento = () => {
    if (menuData && velocidade < 800) {
    const id: number = setInterval(() => {
        
      setVelocidade((prevVelocidade) => {
        if(prevVelocidade < 800){
          return prevVelocidade + (menuData.potencia * 0.003)
        }else{return 800}
      });
    }, 100);
    
    setIntervalId(id);
  }else{return}
  };

  const iniciarDecremento = () => {
    if (menuData && velocidade > 0) {
      const id: number = setInterval(() => {
          
        setVelocidade((prevVelocidade) => {
          if(prevVelocidade > 0){
            return prevVelocidade - (menuData.potencia * 0.003)
          }else{return 0}
        });
      }, 100);
      
      setIntervalId(id);
  }else{return}
  };

  const pararIncremento = () => {
    clearInterval(intervalId);
    setIntervalId(0);
  };
  return(
    <div className="flex gap-5 flex-col">
      <h1>Velocidade: {velocidade.toFixed(2)}Km/h</h1>
      <div className="flex gap-4">
        <button className="bg-green-300 text-black hover:bg-green-200 p-2 rounded select-none"  onMouseDown={iniciarIncremento} onMouseUp={pararIncremento} onTouchStart={iniciarIncremento} onTouchEnd={pararIncremento}>Acelerar</button>
        <button className="bg-red-300 text-black hover:bg-red-200 p-2 rounded select-none" onMouseDown={iniciarDecremento} onMouseUp={pararIncremento} onTouchStart={iniciarDecremento} onTouchEnd={pararIncremento}>Decelerar</button>
      </div>
    </div>
  )
}