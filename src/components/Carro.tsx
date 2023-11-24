import { FaCarSide } from "react-icons/fa";
import { Badge } from 'antd';

type MenuData = {
  cor: string;
  marca: string;
  ano: string;
  potencia: number;
  icon: string;
};

type MenuProps = {
  menuData: MenuData | null;
}

export default function Carro({menuData}:MenuProps){
  return(
    <div className=""> 
      <Badge count={<img src={menuData?.icon} className="w-10 mt-7 ms-4"></img>}>
         <FaCarSide className={"text-9xl"} style={{color: menuData ? menuData.cor: "#000"}} />
      </Badge>
      <div className="flex flex-col">
        <h1>Dados do veículo</h1>
        <div className="flex gap-3">
        <p className="">Marca: {menuData?.marca}</p>
        <p className="">Ano: {menuData?.ano}</p>
        <p className="">Potência: {menuData?.potencia}</p>
        <p className="">Cor: {menuData?.cor}</p>
        </div>
      </div>
    </div>
  )
}