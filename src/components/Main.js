import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import logo from '../logo.png'

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
    padding: 10px 0 40px 0;
`

const ContentRedirect = styled.div `
    width: auto;    
    margin-right: auto !important;

    background-color: #e7e7e7;
    border-radius: 30px;
    
    padding: 4px 40px 4px 40px;
    margin: 0 0 40px 0;
`

const ContentRedirectSpan = styled.span `
    color: #545454;
    font-size: 16px    
`

const ContentIntro = styled.span `
    font-size: 0.985rem;
    font-weight: 500;
    line-height: 1.825;
`;

const ContentLink = styled.a `
    color: #6fb8f7;    
`;

const ContentDetail = styled(Link) `
    color: #0275d8;
    font-size: .8em;
    text-decoration: none;
    vertical-align: super;
`;

const InfoNav = styled.nav `
    width: 400px;
    min-width: 400px;
    height: 100vh;
    background-color: #f7f7f7;
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    float: right;    
`;

const InfoNavHeader = styled.div `
    width: 400px;
    height: 300px;    
`

const InfoNavTitleBox = styled.div `
    width: 100%;
    height: 55px;
    margin: 20px 0 20px 0;
    text-align: center;
    font-size: 22px;
    font-weight: 800;
`


const InfoNavMainImg = styled.img `
    width: 400px;
    height: auto;
    background: white;
`

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
                    
                    <ContentIntro>
                        2019년 6월 11일 공개된 <ToLink to="#">리그 오브 레전드</ToLink>의 새로운 모드로, <ToLink to="#">오토배틀러</ToLink>(Auto Battler) 게임이다.<ContentDetail to="#">[3]</ContentDetail> 한국어로는 전략적 팀 전투, 영어로는 Teamfight Tactics, 줄여서 TFT라고 불리며, TFT 유저를 Tactician(택티션;전술가)이라고 부른다. 한국내 커뮤니티에선 롤과 오토체스를 접목시켜 롤토체스라 부르고 있다. 기존 오토 체스와 다르게 육각형 타일, 쉬운 아이템 조합 등이 특징. 한국 서버에는 2019년 6월 28일에 출시예정이었으나 서버 트래픽 해결 문제로 6월 29일에 출시되었다.
                        2019년 10월 16일, 리그 오브 레전드 10주년 기념 생방송에서 iOS/안드로이드 버전 출시가 발표되었다. PC와의 크로스 플레이를 지원하며, 2019년 말 클로즈베타 이후 2020년에 정식 출시된다.
                    </ContentIntro>
                </ContentHeader> 
                {/* <ContentBody>
                </ContentBody>                  */}
{/* 
                <ContentFooter>

                </ContentFooter>  */}
            </Content>
            <InfoNav>
                <InfoNavHeader>
                    <InfoNavTitleBox>
                        전략적 팀 전투
                    </InfoNavTitleBox>
                    <InfoNavMainImg src={logo} />
                </InfoNavHeader>
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