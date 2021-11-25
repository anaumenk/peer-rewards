import { PeerI } from "interfaces";

export const peers: PeerI[] = [
    {
        id: 0,
        firstName: 'Francesca',
        lastName: 'Vasquez',
        rewords: [{
            id: 0,
            from: 'Aspen Roman',
            message: 'Can you make the deadline?',
            amount: 200
        }, {
            id: 1,
            from: 'Rachael Ali',
            message: 'I\'ll take it.',
            amount: 1800
        }]
    },
    {
        id: 1,
        firstName: 'Roman',
        lastName: 'Aspen',
        rewords: []
    },
    {
        id: 2,
        firstName: 'Rachael',
        lastName: 'Ali',
        rewords: [{
            id: 0,
            from: 'Aspen Roman',
            message: 'Do what you like.',
            amount: 50
        }]
    },
    {
        id: 3,
        firstName: 'r',
        lastName: 'r',
        rewords: [{
            id: 0,
            from: 'Aspen Roman',
            message: 'Do what you like.',
            amount: 50
        }]
    },
];