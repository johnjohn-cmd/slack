import React from 'react'
import styled from "styled-components";
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header() {
  return (
    <HeaderContainer>

      <HeaderLeft>
        <HeaderAvatar 
        //to do: add onclick

        />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search FaceJohn'/>

      </HeaderSearch>
        <HeaderRight>
        <HelpOutlineIcon />
        </HeaderRight>

    </HeaderContainer>
  );
}

export default Header;

const HeaderRight =styled.div`
flex: 0.3;
display: flex;

> .MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 20px;

}
`

const HeaderSearch = styled.div`
flex: 0.4;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
display: flex;
padding: 0 50px;
color: gray;
border: 1px gray solid;

>input{
background-color: transparent;
border: none;
text-align: center;
min-width: 30vw;
outline: none;
color: white;
}
`

const HeaderContainer = styled.div`
display:flex; 
position: fixed;
width: 100%;
align-items: center;
justify-content:space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;

`;

const HeaderLeft = styled.div`
flex:0.3;
 display:flex;
 align-items: center;
 margin-left: 20px;

 > .MuiSvgIcon-root {
  margin-left: auto;
  margin-right: 30px;
 }
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover {
opacity: 0.8;

}

`;

 