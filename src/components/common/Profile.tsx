import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCogs, faInfo, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { MenuList } from "./";
import {menuItems, RoutePath} from "const";

interface Props {
    profileMenu: boolean;
    showMenu: (menu: menuItems) => void;
    name: string;
    userImage: string;
    logoutUser: () => void;
}

const Profile = ({ profileMenu, showMenu, name, userImage, logoutUser }: Props) => (
    <div className="profile">
        <div className="profilePic" style={{backgroundImage: `url(${userImage})`}}/>
        <span className="profileName">{name}</span>
        <FontAwesomeIcon
            icon={profileMenu ? faChevronUp : faChevronDown}
            onClick={() => showMenu(menuItems.PROFILE_MENU)}
            className="pointer"
        />
        <MenuList
            items={[
                { icon: faInfo, name: 'Profile info', link: RoutePath.INFO },
                { icon: faCogs, name: 'Profile settings', link: RoutePath.SETTINGS },
                { icon: faSignOutAlt, name: 'Logout', action: logoutUser },
            ]}
            className="profileMenu"
            show={profileMenu}
        />
    </div>
);

export default Profile;
