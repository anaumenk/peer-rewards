import { useNavigate, useParams } from 'react-router-dom';
import { PeerProfileMenu, RoutePath } from "../../../const";
import { ProfilePicture, RewardCol } from "../../common/";
import { rewordsSum } from "../../../utilities";
import React, { useEffect, useState } from "react";
import { PeerI, RewordI } from "../../../interfaces";
import { User } from 'interfaces';
import { Comment } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalWindow } from "../../common";

interface Props {
  user: User | null;
  peers: PeerI[];
  setPeers: React.Dispatch<React.SetStateAction<PeerI[]>>
}

const PeerProfile = ({ user, peers, setPeers } : Props) => {
  const [activeMenu, setActiveMenu] = useState<PeerProfileMenu>(PeerProfileMenu.FEED);
  const [comments, setComments] = useState<RewordI[]>([]);
  const [peer, setPeer] = useState<PeerI | null>(null);
  const [modalWindow, showModalWindow] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    navigate(RoutePath.ROOT);
  }

  useEffect(() => {
    const peer = peers.find(peer => peer.id === Number(id));
    if (!peer) {
      navigate(RoutePath.ROOT);
    } else {
      setPeer(peer);
      filterComments(peer.rewords, activeMenu);
    }
  }, [peers])

  const changeActiveMenu = (value: PeerProfileMenu) => {
    setActiveMenu(value);
    if (peer && peer.rewords) {
      filterComments(peer.rewords, value);
    }
  }

  const filterComments = (arr: RewordI[], activeMenu: PeerProfileMenu) => {
    const comments = activeMenu === PeerProfileMenu.MY_REWARDS && user
      ? arr.filter(comment => comment.fromId === user.id)
      : arr;
    setComments(comments)
  }

  const handleModalWindow = () => {
    showModalWindow(!modalWindow);
  }

  const addReward = (reward: { name: string, reward: string, message: string }) => {
    if (user) {
      const newReward: RewordI = {
        id: comments.length,
        fromId: user.id,
        fromName: user.name,
        fromImage: user.userImage || null,
        message: reward.message,
        amount: Number(reward.reward),
        time: new Date().getTime(),
      };
      const updatePeers = peers.map(peer => {
        if (peer.id === Number(id)) {
          peer.rewords = [...peer.rewords, newReward]
        }
        return peer;
      })
      setPeers(updatePeers);
      showModalWindow(false);
    }
  }

  const userId = parseInt(localStorage.getItem('user') || '');

  return peer ? (
    <div className="peerProfile peerItem">
      <ModalWindow
        show={modalWindow}
        handleModalWindow={handleModalWindow}
        addReward={addReward}
        receivers={peers.map((peer) => `${peer.lastName} ${peer.firstName}`)}
      />
      <div className="header">
        <div className="col">
          <ProfilePicture image={peer.userImage} />
          <div className="profileName">{peer.lastName} {peer.firstName}</div>
        </div>
        <RewardCol title='Rewards' amount={rewordsSum(peer.rewords)} />
        <RewardCol title='My Rewards' amount={rewordsSum(peer.rewords, userId)} />
      </div>

      <div className="peerProfile container">
        <div className="peerProfileMenu">
          {Object.keys(PeerProfileMenu).map((key, index) => {
            const value = PeerProfileMenu[key as keyof typeof PeerProfileMenu];
            if (!user && value === PeerProfileMenu.MY_REWARDS) {
              return null;
            }
            return (
              <p
                key={index}
                className={activeMenu === value ? 'active' : ''}
                onClick={() => changeActiveMenu(value)}
              >
                {value}
              </p>
            )
          })
          }
        </div>
        <div className="comments">
          {user &&
            <div
              className="pointer addIcon"
              onClick={() => showModalWindow(true)}
            >
		          <FontAwesomeIcon icon={faPlus}/>
	          </div>
          }
          {comments.map(comment => (
            <Comment
              picture={comment.fromImage}
              sender={comment.fromName}
              timestamp={comment.time}
              message={comment.message}
              key={comment.id}
            />
          ))}
        </div>
      </div>
    </div>
  ) : null;
}

export default PeerProfile;
