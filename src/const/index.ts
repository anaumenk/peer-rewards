export * from './peers';
export * from './users';

export enum RoutePath {
    ROOT = '/',
    INFO = '/info',
    SETTINGS = '/settings'
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
