export * from './peers';
export * from './users';

export const defaultUserImage = 'https://hope.be/wp-content/uploads/2015/05/no-user-image.gif';

export enum RoutePath {
    ROOT = '/',
    INFO = '/info',
    SETTINGS = '/settings',
    PEER_PROFILE = '/peer/:id'
}

export enum setMenuType {
    SET_MAIN_MENU = 'setMainMenu',
    SET_LOGIN_MENU = 'setLoginMenu',
    SET_PROFILE_MENU = 'setProfileMenu'
}

export enum menuType {
    MAIN_MENU = "mainMenu",
    PROFILE_MENU = "profileMenu",
    LOGIN_MENU = "loginMenu"
}

export enum PeerProfileMenu {
    FEED = 'Feed',
    MY_REWARDS = 'My Rewards'
}
