import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  &> * {
    border: 1px solid;
    padding: 20px;
    flex: 0 0 50%;
    max-width: 50%;
    margin: 0;
  }
`