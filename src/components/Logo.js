import React from 'react'
import styled from "styled-components"
import { Link, navigate} from 'gatsby';

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  color: white;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

function Logo() {
    return (
        <LogoWrap>
            <h3 style={{color:'white'}}>Moments</h3>
        </LogoWrap>
    )
}

export default Logo;
