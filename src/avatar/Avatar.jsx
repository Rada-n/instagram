import React from "react";

const Avatar = () => {
  const getRandomAvatarUrl = () => {
    const gender = Math.random() > 0.5 ? "men" : "women";
    const id = Math.floor(Math.random() * 100);
    return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
  };
  return getRandomAvatarUrl()
};

export default Avatar;
