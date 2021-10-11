import styled from "styled-components";
import { FlavorImg } from "./FlavorImg";

export function Label({ title, subtitle, description, weigth }) {
  return (
    <Container>
      <main>
        <section>{ title }</section>
        <section>{ subtitle }</section>
        <aside>
          <FlavorImg />
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
  border: 5px dashed;

  font-family: sans-serif;
  
  footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: blue;
    color: white;
    font-weight: bold;
    padding: .25rem;
  }
`