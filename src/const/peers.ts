import { PeerI } from 'interfaces';

export const peers: PeerI[] = [
    {
        id: 0,
        firstName: 'Francesca',
        lastName: 'Vasquez',
        userImage: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        rewords: [{
            id: 0,
            fromId: 1,
            fromName: 'Aspen Roman',
            fromImage: null,
            message: 'Can you make the deadline?',
            amount: 200,
            time: 1622463394000 // Monday, 31 May 2021 г., 12:16:34
        }, {
            id: 1,
            fromId: 2,
            fromName: 'Ali Rachael',
            fromImage: null,
            message: 'I\'ll take it.',
            amount: 1800,
            time: 1653908400000 // Monday, 30 May 2022 г., 11:00:00
        }]
    },
    {
        id: 1,
        firstName: 'Roman',
        lastName: 'Aspen',
        userImage: null,
        rewords: [],
    },
    {
        id: 2,
        firstName: 'Rachael',
        lastName: 'Ali',
        userImage: null,
        rewords: [{
            id: 0,
            fromId: 0,
            fromName: 'Vasquez Francesca',
            fromImage: null,
            message: 'Do what you like.',
            amount: 50,
            time: 1653999510000 //  Tuesday, 31 May 2022 г., 12:18:30
        }]
    },
    {
        id: 3,
        firstName: 'r',
        lastName: 'r',
        userImage: null,
        rewords: [{
            id: 0,
            fromId: 1,
            fromName: 'Aspen Roman',
            fromImage: null,
            message: 'Do what you like.',
            amount: 50,
            time: 1641034800000 // Saturday, 1 January 2022 г., 11:00:00
        }]
    },
];
