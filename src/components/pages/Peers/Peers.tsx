import React, {useState} from 'react';
import { Search } from 'components/common';
import { PeersList } from './';
import { filter } from 'utilities';
import { peers } from 'const';

const Peers = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPeers = filter(peers, searchQuery);
    return (
        <div className='peers'>
            <div>
                <h1>Peers</h1>
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            </div>
            <PeersList peers={filteredPeers}/>
        </div>
    );
}

export default Peers;
