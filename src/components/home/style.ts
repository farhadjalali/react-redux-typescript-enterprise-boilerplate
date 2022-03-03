import styled from 'styled-components'

export const Component = styled.div`
  background-color: #456;
  color: white;
  padding: 50px;
`

export const Button = styled.input.attrs({ type: 'button' })`
  background-color: ${({ color }) => color};
`
