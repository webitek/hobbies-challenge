import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 32px 0;
  li{
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:relative;
    cursor: default;
    &:last-of-type{
      border-bottom: none;
    }
  }
  .hobby-data{
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex: 0 1 100%;
    span {
      padding: 8px 16px;
      width: 33.33%;
      border-right: 1px solid #ddd;
    }
  }
  .delete{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 8px;
    width: 32px;
    min-width: 32px;
    flex: 0 1 32px;
    cursor: pointer;
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
export const Confirm = styled.div`
  width: 220px;
  position:absolute;
  z-index: 1;
  right: 0;
  top: 100%;
  border: 1px solid #ddd;
  background: #fff;
  padding: 16px;
  margin-top: 10px;
  border-radius: 8px;
  cursor: default;
  span{
    font-size: 14px;
  }
  .btn-group{
    display: flex;
    margin: 16px -5px 0;
  }
  .btn{
    font-size: 14px;
    width: 100%;
    margin: 0 5px;
  }
`