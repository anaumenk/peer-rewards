import React from 'react';
import { PeerI } from 'interfaces';

interface Props {
    info: PeerI
}

const PeerItem = ({ info }: Props) => {
    const initialSum = 0;
    const rewordsSum = info.rewords
        ? info.rewords.reduce((acc, curr) => acc + curr.amount, initialSum)
        : 0;
    return (
        <div className='peerItem'>
            <h3 className='peerName'>{info.firstName} {info.lastName}</h3>
            <div className='peerReword'>
                <p>Rewords</p>
                <p className='amount'>${rewordsSum}</p>
            </div>
        </div>
    );
}

export default PeerItem;
