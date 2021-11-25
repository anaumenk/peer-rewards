import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp, faCogs, faInfo, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {List} from "./index";
import {AppState} from "../../App";

interface Props {
    profileMenu: boolean;
    showMenu: (menu: keyof AppState) => void;
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
            onClick={() => showMenu('profileMenu')}
            className="pointer"
        />
        <List
            items={[
                { icon: faInfo, name: 'Profile info', link: '/info' },
                { icon: faCogs, name: 'Profile settings', link: '/settings' },
                { icon: faSignOutAlt, name: 'Logout', action: logoutUser },
            ]}
            className="profileMenu"
            show={profileMenu}
        />
    </div>
);

export default Profile;
