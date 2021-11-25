interface RewordI {
    id: number,
    from: string,
    message: string,
    amount: number
}

export interface PeerI {
    id: number,
    firstName: string,
    lastName: string,
    rewords: RewordI[]
}


export interface User {
    name: string;
    userImage: string;
}