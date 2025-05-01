import React, { useEffect, useState } from "react";
import TextTittle from "../../shared/text";
import ImageView from "../../shared/image";
import CustomButton from "../../shared/button";
import { setLikedPost } from "../../../service/post";
interface Icard {
  post_id: number
  username?: string,
  text: string,
  edit_button_active: boolean,
  commnent_button_active: boolean,
  like_button_active: boolean,
  likedLen?:number,
  isLiked?: boolean
  youcommented?:string,
  onClickEdit?: ()=>void,
  onCommentClick?:()=>void,
  onLikedClick?:()=>void,
  onPerfilClikc?:()=>void,
}

const Card: React.FC<Icard> = ({post_id, username, text, edit_button_active, like_button_active, commnent_button_active, isLiked, likedLen, youcommented, onClickEdit, onCommentClick, onLikedClick, onPerfilClikc}) => {

  const [id_post, setid_post] = useState(post_id)

  const [canEdit, setcanEdit] = useState(edit_button_active)

  const [showMenu, setShowMenu] = useState(false)

  const [Liked , setlike] = useState(isLiked)

  const [openCommentModal, setopenCommentModal] = useState(false)

  const [showComments, setopenshowComments] = useState(false)


  const toggleLike = async () =>{    
    const res = await setLikedPost(id_post)
    if(res.status == "success"){
     setlike(true)
    }
    
  }

    return (
    <div key={post_id} onClick={onPerfilClikc} className="w-full max-w-[800px] mb-8 px-4 sm:px-0">
      <div className="flex items-center justify-between mb-2">
        <TextTittle
          text={username}
          className="text-white text-base sm:text-xl font-semibold"
        />
        
        {canEdit && (
          <CustomButton
            text="..."
            onClick={onClickEdit}
            className="text-white text-xl sm:text-2xl rounded-full px-3 py-1"
          />
        )}
      </div>

      <div className="w-full min-h-[120px] sm:h-[150px] bg-[#0D0D0D] border border-white text-white rounded-md px-4 sm:px-6 py-4 flex flex-col justify-between">
        <div className="text-sm sm:text-base overflow-auto break-words">
          {text || "Sem conteúdo."}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 pl-2">
        {like_button_active && 
          <>
          <ImageView
            imgSrc={isLiked  ? "/icon/liked.svg" : "/icon/like.svg"}
            onClick={onLikedClick}
            className="w-6 h-6 cursor-pointer transition-transform hover:scale-110"
          />
          <span className="text-white text-sm">{likedLen}</span>
          </>
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
