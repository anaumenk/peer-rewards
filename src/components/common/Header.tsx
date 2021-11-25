import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { MenuList } from './';
import { Profile, Login } from "./";
import { RoutePath, menuItems } from "const";
import { User } from "interfaces";

interface Props {
    mainMenu: boolean;
    profileMenu: boolean;
    showMenu: (menu: menuItems) => void;
    user: User | null;
    loginMenu: boolean;
    loginUser: (login: string, password: string) => {message: string} | null;
    logoutUser: () => void;
}

const Header = ({mainMenu, profileMenu, showMenu, user, loginMenu, loginUser, logoutUser}: Props) => (
    <header>
        <FontAwesomeIcon icon={faBars} onClick={() => showMenu(menuItems.MAIN_MENU)} className="pointer"/>
        <MenuList
            items={[{icon: faUserFriends, name: 'Peers', link: RoutePath.ROOT}]}
            className="mainMenu"
            show={mainMenu}
        >
            <FontAwesomeIcon icon={faTimesCircle} className="menuIcon pointer" onClick={() => showMenu(menuItems.MAIN_MENU)}/>
        </MenuList>
        {
            user
            ? <Profile profileMenu={profileMenu} showMenu={showMenu} logoutUser={logoutUser} {...user} />
            : <span className="loginLink" onClick={() => showMenu(menuItems.LOGIN_MENU)}>Login</span>
        }
        <Login show={loginMenu} loginUser={loginUser}/>
    </header>
);

export default Header;
