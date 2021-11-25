import React from 'react';
import { Search } from "../../common";
import { PeersList } from "./index";
import {filter, peers} from "../../../utilities";

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
