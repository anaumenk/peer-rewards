import React, { useState } from 'react';
import { Search } from 'components/common';
import { PeersList } from './';
import { filter } from 'utilities';
import { PeerI } from "../../../interfaces";

const Peers = ({ peers, userId }: { peers: PeerI[], userId: number | undefined}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredPeers = filter(peers, searchQuery);
    return (
        <div className='peers'>
            <div>
                <h1>Peers</h1>
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            </div>
            <PeersList peers={filteredPeers} userId={userId} />
        </div>
    );
}

export default Peers;
