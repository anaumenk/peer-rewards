import { defaultUserImage } from "../../const";
import React from "react";

interface Props {
  image?: string | null;
}

const profilePicture = ({ image }: Props) => (
  <div className="profilePic" style={{backgroundImage: `url(${image || defaultUserImage})`}}/>
)

export default profilePicture;
