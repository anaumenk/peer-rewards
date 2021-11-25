import React from 'react';
import { Header } from "components/common";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound, Peers, ProfileInfo, ProfileSettings } from 'components/pages'
import { auth } from "utilities";
import {menuItems, RoutePath} from "const";
import {User} from "interfaces";

const defaultUserImage = 'https://hope.be/wp-content/uploads/2015/05/no-user-image.gif';

interface State {
    mainMenu: boolean;
    profileMenu: boolean;
    loginMenu: boolean;
    user: User | null;
}

class App extends React.Component<{}, State>{
    state = {
        user: null,
        mainMenu: false,
        profileMenu: false,
        loginMenu: false
    }

    showMenu = (menu: menuItems) => {
        this.setState(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }))
    }

    loginUser = (login: string, password: string) => {
        let user = auth.login(login, password);
        if (!user) return {message: 'Incorrect data'};
        if (user.error) return user.error;
        const {name, userImage = defaultUserImage} = user;
        this.setState({
            user: {
                name,
                userImage
            },
        });
        this.showMenu(menuItems.LOGIN_MENU);
        return null;
    }

    logoutUser = () => {
        this.showMenu(menuItems.PROFILE_MENU);
        this.setState({
            user: null,
        });
    }

    render() {
        const { mainMenu, profileMenu, user, loginMenu } = this.state;

        return (
            <BrowserRouter>
                <Header
                    showMenu={this.showMenu}
                    profileMenu={profileMenu}
                    mainMenu={mainMenu}
                    user={user}
                    loginMenu={loginMenu}
                    loginUser={this.loginUser}
                    logoutUser={this.logoutUser}
                />
                <main className={mainMenu ? 'openMenu': ''}>
                    <Routes>
                        <Route path={RoutePath.ROOT} element={<Peers />}  />
                        { user && <Route path={RoutePath.INFO} element={<ProfileInfo/>} />}
                        { user && <Route path={RoutePath.SETTINGS} element={<ProfileSettings />} />}
                        <Route path="*" element={<NotFound />}  />
                    </Routes>
                </main>
                <footer>{new Date().getFullYear()}</footer>
            </BrowserRouter>
        );
    }
}

export default App;
