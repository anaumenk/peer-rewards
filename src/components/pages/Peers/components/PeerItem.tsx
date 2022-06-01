import React from 'react';
import { PeerI } from 'interfaces';
import { useNavigate } from 'react-router-dom';
import { ProfilePicture, RewardCol } from "../../../common";
import { rewordsSum } from "../../../../utilities";

interface Props {
    info: PeerI;
}

const PeerItem = ({ info }: Props) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/peer/${info.id}`);
    }
    return (
        <div className='peerItem' onClick={handleClick}>
            <ProfilePicture image={info.userImage} />
            <h3 className='peerName'>{info.firstName} {info.lastName}</h3>
            <RewardCol title='Rewords' amount={rewordsSum(info.rewords)}/>
        </div>
    );
}

export default PeerItem;
