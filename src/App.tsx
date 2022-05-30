import React, {useState} from 'react';
import { Header } from 'components/common';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound, Peers, ProfileInfo, ProfileSettings } from 'components/pages'
import { auth } from 'utilities';
import { RoutePath } from 'const';
import { User } from 'interfaces';

const defaultUserImage = 'https://hope.be/wp-content/uploads/2015/05/no-user-image.gif';

const App = () => {
    const [user, setUser] = useState<User | null>(null);
    const [mainMenu, setMainMenu] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const [loginMenu, setLoginMenu] = useState(false);

    const loginUser = (login: string, password: string) => {
        let user = auth.login(login, password);
        if (!user) return {message: 'Incorrect data'};
        if (user.error) return user.error;
        const { name, userImage = defaultUserImage } = user;
        setUser({ name, userImage });
        setLoginMenu(!loginMenu);
        return null;
    }

    const logoutUser = () => {
        setProfileMenu(!profileMenu);
        setUser(null);
    }

    return (
        <BrowserRouter>
            <Header
                showMenu={{setMainMenu, setLoginMenu, setProfileMenu}}
                menu={{mainMenu, loginMenu, profileMenu}}
                user={user}
                loginUser={loginUser}
                logoutUser={logoutUser}
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

export default App;
