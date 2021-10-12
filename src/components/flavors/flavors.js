import { MeatFlavor, FishFlavor, RiceFlavor, ChickenFlavor, VegetableFlavor } from './';

export const flavors = {
  meat: { 
    color: '#a64b00',
    component: <MeatFlavor />
  },
  vegetable: { 
    color: '#008500',
    component: <VegetableFlavor />
  },
  fish: { 
    color: '#06266f',
    component: <FishFlavor />
  },
  chicken: { 
    color: '#ff6600',
    component: <ChickenFlavor />
  },
  rice: { 
    color: '#ff6600',
    component: <RiceFlavor />
  },
  generic: {  
    color: '#000000' ,
    component: <ChickenFlavor />
  }
};

export function getFlavor(flavorName) {
  const flavor = flavors[flavorName]
  return flavor? flavor : flavors.generic;
}