export const users = [
    {
        id: 0,
        login: '1',
        password: '1',
        name: 'Vasquez Francesca',
        userImage: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
    },
    {
        id: 1,
        login: '2',
        password: '2',
        name: 'Aspen Roman',
    },
    {
        id: 2,
        login: 'incorrect',
        password: 'correct',
        name: 'Ali Rachael',
        error: { message: 'User not found' }
    },
    {
        id: 3,
        login: 'correct',
        password: 'incorrect',
        name: 'r r',
        error: { message: 'Wrong password' }
    }
]
