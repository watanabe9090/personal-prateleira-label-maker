import styled from "styled-components";
import { cmToPixels } from "../../utils/unitConversor";
import { FlavorImg } from "../FlavorImg";
import { getFlavor } from "../flavors/flavors";

const EIGHT_CENTIMETERS = 8;

export const Label = ({ title, subtitle, description, weigth, flavor }) => {

  const { color } = getFlavor(flavor);

  return (
    <Container color={ color }>
      <main>
        <section>
          <Title>{ title }</Title>
          <Subtitle>{ subtitle }</Subtitle>
        </section>
        <aside>
          <FlavorImg flavor={ flavor } />
        </aside>
      </main>
      <T color={ color }>
        <div>{ description }</div>
        <div>{ weigth }</div>
      </T>
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
  margin-bottom: 1rem;
  width: ${ cmToPixels(EIGHT_CENTIMETERS) }px;
  font-family: sans-serif;
  
  main {
    margin: 1rem 0rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    aside {
      position: absolute;
      right: 0;
      margin-right: .5rem;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: .35rem;
    }
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
const T = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${ ({ color }) => color? color : 'black' };
  color: white;
  font-weight: bold;
  padding: .25rem;

  div {
    color: white;
  }
`

