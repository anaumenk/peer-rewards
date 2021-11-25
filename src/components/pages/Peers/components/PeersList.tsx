import React from 'react';
import { PeerItem } from "../index";
import { PeerI } from "../../../../interfaces";

interface Props {
    peers: PeerI[]
}

const PeersList = ({ peers }: Props) => (
    <div className='peersList'>
        {peers.map((peer) => (<PeerItem info={peer} key={`peer-${peer.id}`} />))}
    </div>
);

export default PeersList;
