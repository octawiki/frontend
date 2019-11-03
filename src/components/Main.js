import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import '../App.scss';

const Nav = styled.nav `
    width: 300px;
    height: 100vh;
    min-width: 300px;
    background-color: #f7f7f7;
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);    
`;

const Logo = styled.div `
    width: 300px;
    height: 250px;
    background-color: #f7f7f7;    
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);    
`

const Content = styled.div `
    width: 100%;
    height: 100%;   
    padding: 5.5em;
`;

const ContentHeader = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`


const ContentTitle = styled.span `
    font-size: 40px;
    padding: 10px 0 50px 0;
`

const ContentRedirect = styled.div `
    width: auto;    
    margin-right: auto;

    background-color: #e7e7e7;
    border-radius: 30px;
    
    padding: 4px 40px 4px 40px;
`

const ContentRedirectSpan = styled.span `
    color: #545454;
    font-size: 16px    
`

const InfoNav = styled.nav `
    width: 400px;
    height: 100vh;
    background-color: #f7f7f7;
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    float: right;    
`;

const ToLink = styled(Link) `
    color: #6fb8f7;
    text-decoration: none;
`


function Main() {
    return (
        <div className="App">
            <Nav>
                <Logo>

                </Logo>
            </Nav>
            <Content>              
                <ContentHeader>
                    <ContentTitle>
                        리그 오브 레전드/전략적 팀 전투
                    </ContentTitle>
                    <ContentRedirect>
                        <ContentRedirectSpan>
                        <ToLink to="#">"전략적 팀 전투"</ToLink> 문서에서 넘어옴.
                        </ContentRedirectSpan>
                    </ContentRedirect>

                </ContentHeader> 

                {/* <ContentBody>

                </ContentBody>                 

                <ContentFooter>

                </ContentFooter> */}
            </Content>
            <InfoNav>
                123
            </InfoNav>
        </div>
    );
}

class DocumentLink extends Component {
    render() {    
        return (    
            <ToLink to={this.props.to}></ToLink>
        );
    }
  }

export default Main;