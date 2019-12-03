import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  margin: 32px 0;
  li{
    color: #c3c2c2;
    padding: 0 0 8px 0;
    transition: .3s;
    span{
      cursor: pointer;
      border-bottom: 1px solid transparent;
    }
    &:hover{
      color: #333;
    }
    &.active{
      color: #333;
      span {
        border-color: #333;
      }
    }
  }
`