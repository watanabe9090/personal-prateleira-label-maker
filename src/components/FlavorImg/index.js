import styled from "styled-components";
import { getFlavor } from "../flavors/flavors";

export const FlavorImg = ({ flavor }) => {

  const { component, color } = getFlavor(flavor);

  return (
    <Image color={ color }>
      { component }
    </Image>
  )
}

const Image = styled.div`
  color: ${ ({ color }) => color? color : 'black' };
  fill: ${ ({ color }) => color? color : 'black' };
`