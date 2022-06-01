import { users } from 'const';

export const auth = {

    login(login: string, password: string){
        const user = users.find(user => (user.login === login && user.password === password));
        if (user) {
            localStorage.setItem('user', user.id.toString());
        }
        return user;
    },

    logout(){},
}
