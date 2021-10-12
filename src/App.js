import { Label } from "./components/Label";

function App() {

  const database = [
    { 
      title: "Special Dog",
      subtitle: "Carne",
      description: "Sabor Carne",
      weigth: "1KG",
      color: "#a64b00"
    },
    { 
      title: "Special Dog",
      subtitle: "Vegetal",
      description: "Sabor Vegetal",
      weigth: "1KG",
      color: "#a64b00"
    },
    { 
      title: "Magnus Petit",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      color: "#a64b00"
    }
  ];

  return (
    <div>
      { database.map(({ title, subtitle, description, weigth, color }) => (
        <Label title={ title } 
              subtitle={ subtitle }
              description={ description }
              weigth={ weigth }
              color={ color } />
      )) }
    </div>
  );
}

export default App;
