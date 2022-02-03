import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`   
    display: flex;
    font-family: sans-serif;
    font-size: 14px;
    line-height: 1.428571;
    color: #333333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.1);
`
const MainBar = Styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    height: 50px;
    max-width: 1060px;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const MainBarNavTop = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HambergerButton = Styled.button`
    cursor: pointer;
    margin-top: -2px;
    margin-right: 15px;
`
const Logo = Styled.a`
    font-size: 17px;
`
const Menus = Styled.ul`
    list-style: none;
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
    max-width: 1100px;
`
const Menu = Styled.li`
    line-height: 20px;
    font-weight: 600;
    padding: 15px 0;
    font-size: 13px;
`
const Icon = Styled.em`
    position: absolute;
    top: 10px;
`
const Aside = Styled.aside`
    box-sizing: border-box;
    margin: 0;
    border: 0;
    display: block;
    height: 100%;
    padding: 9px 0;
`
const SideMenus = Styled.ul`
    box-sizing: border-box;
    list-style: none;
    height: 100%;
    margin: 0;
`
const SideMenu = Styled.li`
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
`
const ProfileBox = Styled.li`
    position: relative;
    height: 100%;
    vertical-align: middle;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5px;
`
const Profile = Styled.button`
    cursor: pointer;
    background: none;
    height: 32px;
    display: flex;
    align-items: center;
    vertical-align: top;
    padding: 0;
    margin-right: 0;
`
const Button = Styled.button`
    padding: 0 5px;
    margin-top: 5px;
    margin-right: 5px;
`
const AvatarBorder = Styled.div`
    margin: 0;
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const AvatarImage = Styled.img`
    cursor: pointer;
    border: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://static.wanted.co.kr/images/avatars/633926/bbcd9734.jpg), url(https://static.wanted.co.kr/images/profile_default.png);
`
const BadgeIcon = Styled.span`
    display: inline-flex;
    background: #36f;
    background-color: rgb(51, 102, 255);
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: absolute;
    top: -2px;
    left: 22px;
    padding: 0!important;
    width: 13px;
    height: 13px;
`
const EmployerBox = Styled.li`
    position: relative;
    height: 100%;
    vertical-align: middle;
    display: inline-flex;
`
const EmployerButton = Styled.a`
    vertical-align: bottom;
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    font-weight: 400;
`
const Divider = Styled.div`
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
`

function NavBar() {
    return (
        <Container>
            <MainBar>
                <MainBarNavTop>
                    <HambergerButton>
                        <img
                            src="https://static.wanted.co.kr/images/icon-menu.png"
                            alt="hamberger menu"
                            width='17'
                            height='14'
                            object-fit='contain'
                        />
                    </HambergerButton>
                    <Logo>
                        <i class="icon-logo_new"></i>
                    </Logo>
                </MainBarNavTop>
                <Menus>
                    <Menu><a href=''>채용</a></Menu>
                    <Menu><a href=''>이벤트</a></Menu>
                    <Menu><a href=''>직군별 연봉</a></Menu>
                    <Menu><a href=''>이력서</a></Menu>
                    <Menu>
                        <a href=''>커뮤니티
                            <Icon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">New</tspan></text></g></g></g></g></g></g></g></g></svg>
                            </Icon>
                        </a>
                    </Menu>
                    <Menu><a href=''>프리랜서</a></Menu>
                    <Menu>
                        <a href=''>AI 합격예측
                            <Icon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">Beta</tspan></text></g></g></g></g></g></g></g></g></svg>
                            </Icon>
                        </a>
                    </Menu>
                </Menus>
                <Aside>
                    <SideMenus>
                        <SideMenu>
                            <Button>
                                <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18"><defs><path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path></defs><g fill="none" fill-rule="evenodd"><use fill="#333" fill-rule="nonzero" stroke="#333" stroke-width=".3" xlinkHref="#qt2dnsql4a"></use></g></svg>
                            </Button>
                        </SideMenu>
                        <SideMenu>
                            <Button>
                                <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18"><defs><path id="bpnpn3yn0a" d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"></path></defs><g fill="none" fill-rule="evenodd"><g transform="translate(-1079 -16) translate(224 7) translate(855 9)"><mask id="1dencd96ob" fill="#fff"><use xlinkHref="#bpnpn3yn0a"></use></mask><use fill-rule="nonzero" stroke="currentColor" stroke-width=".3" xlinkHref="#bpnpn3yn0a"></use><g fill="currentColor" mask="url(#1dencd96ob)"><path d="M0 0H18V18H0z"></path></g></g></g></svg>
                            </Button>
                            <BadgeIcon>
                                <svg class="" width="5" height="5" viewBox="0 0 6 6"><g fill="#fff" fill-rule="nonzero"><path d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z" transform="translate(-123 -375) translate(20 365) translate(98 5)"></path></g></svg>
                            </BadgeIcon>
                        </SideMenu>
                        <ProfileBox>
                            <Profile>
                                <AvatarBorder>
                                    <AvatarImage />
                                </AvatarBorder>
                            </Profile>
                            <BadgeIcon>
                                <svg class="" width="5" height="5" viewBox="0 0 6 6"><g fill="#fff" fill-rule="nonzero"><path d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z" transform="translate(-123 -375) translate(20 365) translate(98 5)"></path></g></svg>
                            </BadgeIcon>
                        </ProfileBox>
                        <EmployerBox>
                            <Divider />
                            <EmployerButton class="dashboardButton" href="/dashboard">기업 서비스</EmployerButton>
                        </EmployerBox>
                    </SideMenus>
                </Aside>
            </MainBar>
        </Container>
    );
}

export default NavBar;