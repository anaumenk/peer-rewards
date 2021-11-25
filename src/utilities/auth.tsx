import React from "react";

const users = [
    {
        name: '1',
        password: '1',
        userImage: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
    },
    {
        name: '2',
        password: '2',
    },
    {
        name: 'incorrect',
        password: 'correct',
        error: { message: 'User not found' }
    },
    {
        name: 'correct',
        password: 'incorrect',
        error: { message: 'Wrong password' }
    }
]

export const auth = {

    login(name: string, password: string){
        return users.find(user => (user.name === name && user.password === password));
    },
    logout(){
    },
}