import React from "react";
import {PeerI} from "../../../utilities";


interface Props {
    info: PeerI
}

const PeerItem = ({ info }: Props) => (
    <div className='peerItem'>
        <h3 className='peerName'>{info.firstName} {info.lastName}</h3>
        <div className='peerReword'>
            <p>Rewords</p>
            <p className='amount'>${info.rewords.reduce((acc, curr) => acc + curr.amount, 0)}</p>
        </div>
    </div>
);

export default PeerItem;