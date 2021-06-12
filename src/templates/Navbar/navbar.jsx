import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';



const BgDiv = styled.div`
    background-color: green;
`;

class Navbar extends React.Component {
    render() {
        return (
            <>
                <Container fluid>
                    fsdfs
                </Container>

                <BgDiv>
                <h1>Navbar</h1>
                <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
            </BgDiv>
            </>
        );
    }
}

export default Navbar;