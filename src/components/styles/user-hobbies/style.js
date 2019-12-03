import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 0 -10px;
  @media(max-width: 1024px) {
    flex-wrap: wrap;
  }
  .cl{
    padding: 0 10px;
    max-width: 400px;
    width: 100%;
    @media(min-width: 1024px) {
      width: 300px;
    }
  }
  .cr{
    padding: 0 10px;
    width: 100%;
    @media(min-width: 1024px) {
      width: calc(100% - 300px);
    }
  }
`