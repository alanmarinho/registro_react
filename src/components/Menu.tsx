import { ColorPicker, Dropdown, Button, Slider, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import teslaImage from './../assets/tesla.svg';
import fiatImage from './../assets/fiat.svg';
import volkswagenImage from './../assets/volkswagen.svg';
import bmwImage from './../assets/bmw.svg';
import chevroletImage from './../assets/chevrolet.svg';
import audiImage from './../assets/audi.svg';
import { Dayjs } from 'dayjs';


type MenuData = {
  cor: string;
  marca: string;
  ano: string;
  potencia: number;
  icon: string
};

type ItemType = {
  key: string;
  label: string;
  onClick: () => void;
  icon: JSX.Element;
};

type MenuProps = {
  updateMenuData: (newData: MenuData) => void;
  items: ItemType[];
};


export default function Menu({updateMenuData}: MenuProps) {
  const [color, setColor] = useState('#000000');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState("");
  const [potencia, setPotencia] = useState<number>(1);
  const [icon, setIcon] = useState('');
  
  const attDataMenu = () => {
    const dadosMenu ={
      cor: color,
      marca: marca,
      ano: ano,
      potencia: potencia,
      icon: icon
    }
    updateMenuData(dadosMenu);
  };

  useEffect(() => {
    attDataMenu();
  }, [color, marca, ano, potencia, icon]);

  const items: MenuProps['items'] = [
    {
      key: 'Tesla',
      label: ('Tesla'),
      onClick: () => {handleMarca('Tesla'), setIcon(teslaImage)},
      icon: <img className='h-5' src={teslaImage} />
    },
    {
      key: 'audi',
      label: ('Audi'),
      onClick: () => {handleMarca('Audi'), setIcon(audiImage)},
      icon: <img className='h-5' src={audiImage} />
    },
    {
      key: 'Fiat',
      label: ('Fiat'),
      onClick: () => {handleMarca('Fiat'), setIcon(fiatImage)},
      icon: <img className='h-5' src={fiatImage} />
    },
    {
      key: 'Volkswagen',
      label: ('Volkswagen'),
      onClick: () => {handleMarca('Volkswagen'), setIcon(volkswagenImage)},
      icon: <img className='h-5' src={volkswagenImage} />
    },
    {
      key: 'BMW',
      label: ('BMW'),
      onClick: () => {handleMarca('BMW'), setIcon(bmwImage)},
      icon: <img className='h-5' src={bmwImage} />
    },
    {
      key: 'Chevrolet',
      label: ('Chevrolet'),
      onClick: () => {handleMarca('Chevrolet'), setIcon(chevroletImage)},
      icon: <img className='h-5' src={chevroletImage} />
    }
  ];


  const handleColor= (color: { cor: string; }) => {
    setColor(color.cor);
  }

  const handleAno = (_date: Dayjs | null, dateString: string) => {
    setAno(dateString);
  }


  const handlePotencia = (potencia: number) => {
    setPotencia(potencia);
  };

  const handleMarca = (marca: string) => {
    if (marca != "Selecione uma marca"){
      setMarca(marca);
    }else{
      setMarca("")
    }
  }

  return(
    <div className='flex items-center flex-col bg-slate-500 rounded-3xl w-[90%] md:w-[70%] p-3 justify-center'>
      <h1>Menu do veículo</h1>
      <div className='flex gap-3 flex-col md:flex-row w-[100%] justify-around items-center'>

      <div className='w-52'>
        <h1>Potência</h1>
        <div className='gap-3'>
        <Slider
            min={1}
            max={1500}
            onChange={handlePotencia}

            />
          <h1>{potencia} hp</h1>
        </div>
      </div>

        <div>
          <h1>Ano</h1>
          <DatePicker  picker="year" onChange={handleAno} />
        </div>
        <div>
          <h1>Marca</h1>
          <Dropdown className='bg-white text-black' menu={{ items }} placement="bottom" arrow>
            <Button>
              <div className='flex justify-center items-center gap-2'>
                {icon && <img className='h-5' src={icon} />}
                <h1>{marca ? marca : "Selecione uma marca"}</h1>
              </div>
            </Button>
          </Dropdown>
        </div>

        <div>
          <h1>Cor</h1>
          <ColorPicker placement={"bottom"} defaultValue={color} onChange={(cor) => handleColor({cor: cor.toHexString()})} />
        </div>
      </div>
      
       
    </div>
  );
}