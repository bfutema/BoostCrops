import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #3f3f3f;
  position: fixed;
  height: 100%;
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background: #ddd;
  width: 100%;
  color: #7ead41;
`;

export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LinkPage = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 18px;
  background: #3f3f3f;
  color: #fff;

  &.active {
    background-color: #4caf50;
  }

  a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    width: 100%;
    color: #fff;

    &.active {
      background-color: #4caf50;
      color: white;
    }

    &:hover:not(.active) {
      background-color: #555;
      color: white;
    }
  }
`;
