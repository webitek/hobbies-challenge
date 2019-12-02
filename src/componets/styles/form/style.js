import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    min-width: 100px;
    flex: 0 1 100px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .3s all;
    position: relative;
    color: #507cd4;
    &:before{
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      border: 1px solid transparent;
      border-radius: 4px;
      z-index: -1;
      border-color: #add0ff;
      background: #fff;
      transition: border-color .5s, background .3s, width .3s, border-radius .5s;
    }
    &:hover {
      color: #ffffff;
      &:before {
        background: #507cd4;
        border-color: #507cd4;
        z-index: -1;
      }
    }
    &:active {
      color: #ffffff;
      &:before {
        background: #7396dc;
        border-color: #7396dc;
        z-index: -1;
      }
    }
  }
  input{
    height: 32px;
    padding: 0 10px;
    box-shadow: inset 0 1px 3px rgba(119, 135, 152, 0.2);
    border-radius: 4px;
    border: 1px solid #dfe9f2;
    background: #f2f7fc;
    transition: .3s;
    margin-right: 10px;
    flex: 0 1 100%;
    width: 100%;
    &:focus {
      border-color: #507cd4;
    }
  }
`