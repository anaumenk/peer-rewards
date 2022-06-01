import React, { useEffect, useState } from 'react';
import { Header } from 'components/common';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NotFound, Peers, ProfileInfo, ProfileSettings } from 'components/pages'
import { auth } from 'utilities';
import { RoutePath, users } from 'const';
import { User } from 'interfaces';
import { PeerProfile } from "./components/pages/PeerProfile";
import { peers as peersConst } from "const";

const App = () => {
    const [user, setUser] = useState<User | null>(null);
    const [mainMenu, setMainMenu] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const [loginMenu, setLoginMenu] = useState(false);
    const [peers, setPeers] = useState(peersConst);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('user');
        const findUser = users.find(user => user.id === Number(userId));
        if (findUser) {
            const { id, name, userImage } = findUser;
            setUser({ id, name, userImage })
        }
    }, []);

    const loginUser = (login: string, password: string) => {
        let loginUser = auth.login(login, password);
        if (!loginUser) return { message: 'Incorrect data' };
        if (loginUser.error) return loginUser.error;
        const { id, name, userImage } = loginUser;
        setUser({ id, name, userImage });
        setLoginMenu(!loginMenu);
        return null;
    }

    const logoutUser = () => {
        setProfileMenu(!profileMenu);
        setUser(null);
        localStorage.clear();
        navigate(RoutePath.ROOT);
    }

    return (
        <>
            <Header
                showMenu={{setMainMenu, setLoginMenu, setProfileMenu}}
                menu={{mainMenu, loginMenu, profileMenu}}
                user={user}
                loginUser={loginUser}
                logoutUser={logoutUser}
            />
            <main className={mainMenu ? 'openMenu': ''}>
                <Routes>
                    <Route path={RoutePath.ROOT} element={<Peers peers={peers} userId={user?.id}/>}  />
                    { user && <Route path={RoutePath.INFO} element={<ProfileInfo/>} />}
                    { user && <Route path={RoutePath.SETTINGS} element={<ProfileSettings />} />}
                    <Route
                      path={RoutePath.PEER_PROFILE}
                      element={<PeerProfile
                        user={user}
                        peers={peers}
                        setPeers={setPeers}
                      />}
                    />
                    <Route path="*" element={<NotFound />}  />
                </Routes>
            </main>
            <footer>{new Date().getFullYear()}</footer>
        </>
    );
}

export default App;
