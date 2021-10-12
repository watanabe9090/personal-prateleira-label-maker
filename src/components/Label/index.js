import styled from "styled-components";
import { FlavorImg } from "../FlavorImg";

const flavors = [
  { 
    flavor: 'meat',
    color: '#a64b00'
  },
  { 
    flavor: 'vegetable',
    color: '#008500'
  },
  { 
    flavor: 'fish',
    color: '#06266f'
  },
  { 
    flavor: 'chicken',
    color: '#ff6600'
  },
  {  
    flavor: 'generic',
    color: '#000000' 
  }
];

export const Label = ({ title, subtitle, description, weigth, flavor }) => {

  const flavorColor = flavors.filter(f => f.flavor === flavor).map(f => f.color);

  return (
    <Container color={ flavorColor }>
      <main>
        <section>
          <Title>{ title }</Title>
          <Subtitle>{ subtitle }</Subtitle>
        </section>
        <aside>
          <FlavorImg flavor={ flavor } />
        </aside>
      </main>
      <footer>
        <div>{ description }</div>
        <div>{ weigth }</div>
      </footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 5px dashed ${ ({ color }) => color? color : 'black' };
  color: ${ ({ color }) => color? color : 'black' };

  font-family: sans-serif;
  
  main {
    margin: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  aside {
    position: fixed;
    right: 0;
    margin-right: 2rem;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 5px;
    background: ${ ({ color }) => color? color : 'black' };
    color: white;
    font-weight: bold;
    padding: .25rem;
  }
`

const Title = styled.section`
  font-weight: bold;
  font-size: 2rem;
`

const Subtitle = styled.section`
  font-weight: bold;
  margin-top: -.25rem;
  font-size: 1.5rem;
`