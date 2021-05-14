import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import "./LikeButton.css"

export const LikeButton = ({isLiked, setIsLiked}) => {
  return (
    <Tippy content="Like" delay={[200, 300]}>
      <button className="flat__like-button"
        onClick={() => {
          setIsLiked(!isLiked)
        }}>
        <FontAwesomeIcon icon={faHeart} className={isLiked ? "flat__like flat__like_active" : "flat__like"} />
      </button>
    </Tippy>
  )
}