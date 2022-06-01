import ReactModal from 'react-modal';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SyntheticEvent, useState } from "react";

interface Props {
  handleModalWindow: () => void;
  show: boolean;
  addReward: (reward: { name: string, reward: string, message: string }) => void;
  receivers: string[];
}

const ModalWindow = ({show, handleModalWindow, addReward, receivers}: Props) => {
  const [name, setName] = useState(receivers[0]);
  const [reward, setReward] = useState<string>('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error && name && reward) {
      addReward({name, reward, message});
      setName('');
      setReward('');
      setMessage('');
      handleModalWindow();
    }
  }

  const handleChange = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>, checkNumber?: boolean) => {
    if (checkNumber) {
      setError(null);
      if (!value) {
        setError('Fill the reward field, please')
      } else if (!Number(value)) {
        setError('Enter reward as a number, please')
      }
    }
    setValue(value);
  }

  return (
    <ReactModal
      isOpen={show}
      ariaHideApp={false}
      onRequestClose={handleModalWindow}
      className="modal"
    >
      <div className="content">
        <div className="closeContainer">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleModalWindow}
            className="pointer"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <label>To</label>
          <select
            value={name}
            onChange={(e) => handleChange(e.target.value, setName)}
          >
            {receivers.map((receiver, i) => <option key={i} value={receiver}>{receiver}</option>)}
          </select>
          <label>Reward</label>
          <input
            required
            type="text"
            placeholder="$30"
            value={reward}
            onChange={(e) => handleChange(e.target.value, setReward, true)}
          />
          <label>Why?</label>
          <textarea
            value={message}
            onChange={(e) => handleChange(e.target.value, setMessage)}
          />
          {error && <span className="errorMessage">{error}</span>}
          <input type="submit" value="Reward" className="pointer" disabled={!!error}  />
        </form>
      </div>
    </ReactModal>
  )
}

export default ModalWindow;
