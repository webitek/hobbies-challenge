import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  li{
    span{
      cursor: pointer;
    }
    &.active{
      color: red;
    }
  }
`