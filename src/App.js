import { Label } from "./components/Label";

function App() {

  const database = [
    { 
      title: "Special Dog",
      subtitle: "Carne",
      description: "Sabor Carne",
      weigth: "1KG",
      flavor: "meat"
    },
    { 
      title: "Special Dog",
      subtitle: "Vegetal",
      description: "Sabor Vegetal",
      weigth: "1KG",
      flavor: "vegetable"
    },
    { 
      title: "Magnus Petit",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "meat"
    }
  ];

  return (
    <div>
      { database.map(({ title, subtitle, description, weigth, flavor }) => (
        <Label title={ title } 
              subtitle={ subtitle }
              description={ description }
              weigth={ weigth }
              flavor={ flavor } />
      )) }
    </div>
  );
}

export default App;
