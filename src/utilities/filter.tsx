import {PeerI} from "./peers";

export const filter = (peers: PeerI[], query: string) => {
    if (!query) {
        return peers;
    }

    return peers.filter((peer) => {
        const postName = `${peer.firstName.toLowerCase()} ${peer.lastName.toLowerCase()}`;
        return postName.includes(query);
    });
};