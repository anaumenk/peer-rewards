import { users } from "const";

export const auth = {

    login(name: string, password: string){
        return users.find(user => (user.name === name && user.password === password));
    },

    logout(){},
}