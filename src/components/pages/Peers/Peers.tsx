import React from 'react';
import { Search } from "components/common";
import { PeersList } from "./";
import { filter } from "utilities";
import { peers } from "const";

interface State {
    searchQuery: string;
}

class Peers extends React.Component<{}, State>{
    state = {
        searchQuery: ''
    }

    setSearchQuery = (searchQuery: string) => {
        this.setState({
            searchQuery
        })
    }

    render(){
        const { searchQuery } = this.state;
        const filteredPeers = filter(peers, searchQuery);

        return (
            <div className='peers'>
                <div>
                    <h1>Peers</h1>
                    <Search searchQuery={searchQuery} setSearchQuery={this.setSearchQuery}/>
                </div>
                <PeersList peers={filteredPeers}/>
            </div>
        );
    }
}

export default Peers;
