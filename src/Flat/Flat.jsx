import "./Flat.css"
import React from "react";
import { FlatInfo } from "./FlatInfo";
import { FlatOwner } from "./FlatOwner";
import { ControlsButtons } from "./ControlsButtons/ControlsButtons";
import { LikeButton } from "./LikeButton/LikeButton";

const ACTIVE_STATE = { flat: 'flat', owner: 'owner' }

export const Flat = ({ flat }) => {
  const [activeState, setActiveState] = React.useState(ACTIVE_STATE.flat);
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className={isLiked ? "flat flat_active" : "flat"}>
      <h2 className="flat__title">{flat.attributes.title}</h2>

     <ControlsButtons setActiveState = {setActiveState} activeState={activeState}/>
      
      <div className="flat__content">
        <FlatInfo flat={flat} activeState={activeState} />
        <FlatOwner owner={flat.relationships} activeState={activeState} />
      </div>
      
      <LikeButton isLiked={isLiked} setIsLiked={setIsLiked}/>
    </div>
  )
}