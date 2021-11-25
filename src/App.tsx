import React from 'react';
import { Header } from "./components/common";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound, Peers, ProfileInfo, ProfileSettings } from './components/pages'
import {auth} from "./utilities";

export interface User {
    name: string;
    userImage: string;
}

export interface AppState {
    mainMenu: boolean;
    profileMenu: boolean;
    loginMenu: boolean;
    user: User | null;
}

class App extends React.Component<{}, AppState>{
    state = {
        user: null,
        mainMenu: false,
        profileMenu: false,
        loginMenu: false
    }

    showMenu = (menu: keyof AppState) => {
        this.setState(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }))
    }

    loginUser = (login: string, password: string) => {
        let user = auth.login(login, password);
        if (!user) return {message: 'Incorrect data'};
        if (user.error) return user.error;
        const {name, userImage = 'https://hope.be/wp-content/uploads/2015/05/no-user-image.gif'} = user;
        this.setState({
            user: {
                name,
                userImage
            },
        });
        this.showMenu('loginMenu');
    }

    logoutUser = () => {
        this.showMenu('profileMenu');
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
                <main className={mainMenu ? 'padding': ''}>
                    <Routes>
                        <Route path="/" element={<Peers />}  />
                        { user && <Route path="/info" element={<ProfileInfo/>} />}
                        { user && <Route path="/settings" element={<ProfileSettings />} />}
                        <Route path="*" element={<NotFound />}  />
                    </Routes>
                </main>
                <footer>{new Date().getFullYear()}</footer>
            </BrowserRouter>
        );
    }
}

export default App;
