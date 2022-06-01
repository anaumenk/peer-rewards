export interface RewordI {
    id: number,
    fromId: number,
    fromName: string;
    fromImage: string | null,
    message: string,
    amount: number,
    time: number;
}

export interface PeerI {
    id: number,
    firstName: string,
    lastName: string,
    rewords: RewordI[],
    userImage: string | null,
}


export interface User {
    id: number;
    name: string;
    userImage?: string;
}
