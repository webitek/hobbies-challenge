import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 32px 0;
  li{
    border-bottom: 1px solid #ddd;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-of-type{
      border-bottom: none;
    }
    span{
      cursor: pointer;
    }
  }
  .delete{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    svg{
      fill: #c3c2c2;
      transition: .3s;
    }
    &:hover{
      svg{
        fill: #778798;
      }
    }
  }
`
export const EmptyList = styled.div`
  text-align: center;
  padding: 32px 0;
  .title{
    font-size: 24px;
  }
  .sub-title{
    font-size: 18px;
  }
`