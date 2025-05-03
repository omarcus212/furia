import React, { useEffect, useState } from "react";
import TextTittle from "../../shared/text";
import ImageView from "../../shared/imageView";
import CustomButton from "../../shared/button";
import { setLikedPost } from "../../../service/postService";
import { getPostLikedProfile, myProfile } from "../../../service/profileService";
import { useNavigate } from "react-router-dom";


interface Icard {
  post_id: number
  username?: string,
  text: string,
  edit_button_active: boolean,
  commnent_button_active: boolean,
  like_button_active: boolean,
  likedLen?: number,
  isLiked?: boolean
  youcommented?: string,
  onClickEdit?: () => void,
  onClickDelete?: () => void,
  onCommentClick?: () => void,
  onPerfilClikc?: () => void,
  updatePost?: () => void,
  deletePost?: boolean
}

const Card: React.FC<Icard> = ({ post_id, username, text, edit_button_active, like_button_active, commnent_button_active, isLiked, likedLen, youcommented, onCommentClick, onClickDelete, onPerfilClikc }) => {

  const navigate = useNavigate();

  const [id_post, setid_post] = useState(post_id)

  const [canEdit, setcanEdit] = useState(edit_button_active)

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => { setShowMenu(!showMenu) }

  const [showComments, setopenshowComments] = useState(false)

  const toggleLike = async () => {

    const likedId = await getPostLikedProfile()
    const isLiked = likedId.data.some((likedPost: { post_id: number }) => likedPost.post_id === id_post);

    if (isLiked) { return }

    if (!isLiked) {

      await setLikedPost(id_post)

    }

  }

  const handleUserProfile = async () => {

    const resMyProfile = await myProfile()

    if (!resMyProfile.data[0].username) {
      navigate(`/logout`)

    } else if (resMyProfile.data[0].username === username) {
      navigate(`/myprofile`)

    } else {
      navigate(`/profile/${username}`)
    }

  }

  return (
    <div key={post_id} onClick={onPerfilClikc} className="w-full max-w-[800px] mb-8 px-4 sm:px-0">
      <div className="flex items-center justify-between mb-2">
        <a onClick={handleUserProfile} className="w-auto cursor-pointer">
          <TextTittle
            text={username}
            className="text-white text-base sm:text-xl font-semibold"
          />
        </a>

        {canEdit && (
          <CustomButton
            text="..."
            onClick={toggleMenu}
            className="text-white text-xl sm:text-2xl rounded-full px-3 py-1"
          />
        )}
        {showMenu && (
          <div className="bg-white rounded-md shadow-lg px-4 py-2 text-sm z-50">
            <CustomButton
              text="Deletar"
              onClick={onClickDelete}
              className="text-black w-full text-sm"
            />
          </div>
        )}
      </div>

      <div className="w-full min-h-[120px] sm:h-[150px] bg-[#0D0D0D] border border-white text-white rounded-md px-4 sm:px-6 py-4 flex flex-col justify-between">
        <div className="text-sm sm:text-base overflow-auto break-words">
          {text || "Sem conteúdo."}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 pl-2">
        {like_button_active &&
          <span className="flex gap-2">
            <ImageView
              imgSrc={isLiked ? "/icon/liked.svg" : "/icon/like.svg"}
              onClick={toggleLike}
              className="w-6 h-6 cursor-pointer transition-transform hover:scale-110"
            />
            <span className="text-white text-sm">{likedLen}</span>
          </span>
        }

        {commnent_button_active &&
          <ImageView
            imgSrc="/icon/comment.png"
            onClick={onCommentClick}
            className="w-6 h-6 cursor-pointer transition-transform hover:scale-110"
          />
        }
      </div>

      {youcommented && (
        <div className="mt-[5px] border border-white bg-black p-4 rounded">
          <p className="text-white font-bold">{youcommented}</p>
        </div>
      )}

      {showComments && (
        <div className="mt-2 p-4 bg-white text-black rounded-md shadow-md w-full max-w-[100px]">
          <p>Comentários...</p>
        </div>
      )}
    </div>
  );
};

export default Card;
