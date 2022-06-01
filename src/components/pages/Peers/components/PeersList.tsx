import React from 'react';
import { PeerItem } from '../index';
import { PeerI } from '../../../../interfaces';

interface Props {
    peers: PeerI[];
    userId: number | undefined;
}

const PeersList = ({ peers, userId }: Props) => (
    <div className='peersList'>
        {peers.map((peer) => {
            if (userId !== undefined && peer.id === userId) return null;
            return (<PeerItem info={peer} key={`peer-${peer.id}`} />)
        })}
    </div>
);

export default PeersList;
