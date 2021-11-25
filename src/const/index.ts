export * from "./peers";
export * from "./users";

export enum RoutePath {
    ROOT = "/",
    INFO = "/info",
    SETTINGS = "/settings"
}

export enum menuItems {
    MAIN_MENU = "mainMenu",
    PROFILE_MENU = "profileMenu",
    LOGIN_MENU = "loginMenu"
}

export enum loginName {
    NAME = 'name',
    PASSWORD = 'password'
}