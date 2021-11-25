import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { MenuList } from './index';
import {AppState} from "../../App";
import { Profile, Login } from "./index";

interface Props {
    mainMenu: boolean;
    profileMenu: boolean;
    showMenu: (menu: keyof AppState) => void;
    user: any;
    loginMenu: boolean;
    loginUser: (login: string, password: string) => {message: string} | void;
    logoutUser: () => void;
}

const Header = ({mainMenu, profileMenu, showMenu, user, loginMenu, loginUser, logoutUser}: Props) => {
    return (
        <header>
            <FontAwesomeIcon icon={faBars} onClick={() => showMenu('mainMenu')} className="pointer"/>
            <MenuList
                items={[{icon: faUserFriends, name: 'Peers', link: '/'}]}
                className="mainMenu"
                show={mainMenu}
            >
                <FontAwesomeIcon icon={faTimesCircle} className="menuIcon pointer" onClick={() => showMenu('mainMenu')}/>
            </MenuList>
            {
                user
                ? <Profile profileMenu={profileMenu} showMenu={showMenu} logoutUser={logoutUser} {...user} />
                : <span className="loginLink" onClick={() => showMenu('loginMenu')}>Login</span>
            }
            <Login show={loginMenu} loginUser={loginUser}/>
        </header>
    )
}

export default Header;
