import styled from "styled-components"
import { VegetableFlavor } from "../flavors/VegetableFlavor"

export const FlavorImg = ({ color }) =>
  <Image color={ color }>
    <VegetableFlavor />
  </Image>

const Image = styled.div`
  color: ${ ({ color }) => color? color : 'black' };
  fill: ${ ({ color }) => color? color : 'black' };
`