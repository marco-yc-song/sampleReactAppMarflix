import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;

  background-color: rgba(20, 20, 20, 0.7);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
  margin-right: 3px;
  /* &:not(:last-child) {
    margin-right: 10px;
  } */

  border-bottom: 5px solid ${props => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderComponent = ({ location: { pathname } }) => (
  <Header>
    {console.log(pathname)}
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/TV"}>
        <SLink to="/TV">TV</SLink>
      </Item>
      <Item current={pathname === "/Search"}>
        <SLink to="/Search">Search</SLink>
      </Item>
    </List>
  </Header>
);

// function HeaderComponent(props) {
//   <Header>
//     {console.log(props)}
//     <List>
//       <Item current={false}>
//         <SLink to="/">Movies</SLink>
//       </Item>
//       <Item current={true}>
//         <SLink to="/TV">TV</SLink>
//       </Item>
//       <Item current={false}>
//         <SLink to="/Search">Search</SLink>
//       </Item>
//     </List>
//   </Header>
// }

export default withRouter(HeaderComponent);
