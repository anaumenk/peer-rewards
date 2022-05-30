import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { MenuList } from './';
import { Profile, Login } from './';
import { menuType, RoutePath, setMenuType } from 'const';
import { User } from 'interfaces';

interface Props {
    showMenu: { [key in setMenuType]: React.Dispatch<React.SetStateAction<boolean>> };
    menu: {[key in menuType]: boolean}
    user: User | null;
    logoutUser: () => void;
    loginUser: (login: string, password: string) => {message: string} | null;
}

const Header = ({ showMenu, menu, user, logoutUser, loginUser }: Props) => (
    <header>
        <FontAwesomeIcon icon={faBars} onClick={() => showMenu.setMainMenu(!menu.mainMenu)} className="pointer"/>
        <MenuList
            items={[{icon: faUserFriends, name: 'Peers', link: RoutePath.ROOT}]}
            className="mainMenu"
            show={menu.mainMenu}
        >
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="menuIcon pointer"
              onClick={() => showMenu.setMainMenu(!menu.mainMenu)}
            />
        </MenuList>
        {
            user
            ? <Profile
                profileMenu={menu.profileMenu}
                showMenu={showMenu.setProfileMenu}
                logoutUser={logoutUser}
                {...user}
              />
            : <span className="loginLink" onClick={() => showMenu.setLoginMenu(!menu.loginMenu)}>Login</span>
        }
        <Login show={menu.loginMenu} loginUser={loginUser}/>
    </header>
);

export default Header;
