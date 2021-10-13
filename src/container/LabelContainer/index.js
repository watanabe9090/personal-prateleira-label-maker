import { Component } from "react";
import styled from "styled-components";
import { Label } from "../../components/Label";

export class LabelContainer extends Component {

  database = [
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
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
      flavor: "fish"
    },
    { 
      title: "Golden",
      subtitle: "Raças Pequenas",
      description: "(Carne + Cereiais + Vegetais)",
      weigth: "1KG",
      flavor: "chicken"
    },
  ];

  render() {
    return (
      <Container>
        { this.database.map(({ title, subtitle, description, weigth, flavor }, index) => (
          <Label key={ index }
              title={ title } 
              subtitle={ subtitle }
              description={ description }
              weigth={ weigth }
              flavor={ flavor } />
        )) }
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  border: 1px solid;
  place-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;