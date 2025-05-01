import React, { useEffect, useState } from "react";
import ContainerProfile from "../../components/layout/containerProfile";
import HeaderNavbar from "../../components/layout/headerNav";
import CustomButton from "../../components/shared/button";
import Card from "../../components/layout/postCard";
import { getPostCommentedProfile, getPostLikedProfile, getPostProfile, myProfile } from "../../service/profile";
import { Profile } from "../../interface/profile";
import ModalProfileEdit from "../../components/layout/modalProfileEdit";
import { IPost, IPostComment } from "../../interface/post";


const notimg = 'https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/nopicture.jpg?alt=media&token=48da8902-b944-4238-8c10-b440b6b1ba47'

const PageMyProfile: React.FC = () => {

  const [profile, setProfile] = useState<Profile>()

  const [text, setText] = useState("postes")

  const [edit, setEdit] = useState(false)

  const [liked, setLiked] = useState(false)

  const [openModal, setIsModalOpen] = useState(false)

  const [posts, setPosts] = useState<IPost[]>([])

  const [postsLiked, setpostsLiked] = useState<IPost[] | null>()

  const [comment, setcomment] = useState<IPostComment[]>([])
  
  useEffect(()=>{
    
    if(text == "postes"){

        const profileMy = async () =>{
        const res = await myProfile()
        const resPosts = await getPostProfile(res.data[0].id)
        setPosts(resPosts.data)
        setProfile(res.data[0])

     }
      profileMy()

    }else if(text == "comments"){

        const postCommented = async() =>{
        const res = await getPostCommentedProfile()
        console.log(res)
        setcomment(res.data)

      }
       postCommented()

    }else if(text == "likes"){

        const postLiked = async() =>{
        const res = await getPostLikedProfile()
        setpostsLiked(res.data)

      }
       postLiked()
    }
  },[text, openModal])
    
    return (
      <section className="flex flex-col items-center w-full h-screen bg-black">

         <HeaderNavbar/>

          <ContainerProfile 
          key={profile?.id} 
          username={`${profile?.username}`} 
          profile_photo_url={profile?.profile_photo_url ? profile?.profile_photo_url: notimg} 
          bio={profile?.bio ? profile.bio: "Este usuário ainda não escreveu uma bio."}
          onClickEdit={()=>{setIsModalOpen(true)}}
          />

        <div className="flex w-[80%] flex-col items-center mt-28 gap-6">

          <hr className="w-full border-t-2 border-white mb-4" />

          <div className="flex flex-row justify-center items-center gap-12">
            <CustomButton text="postes" onClick={() => setText("postes")} className="text-white text-xl sm:text-2xl md:text-3xl font-semibold border-b-2 border-white" />
            <CustomButton text="comentarios" onClick={() => setText("comments")} className="text-white text-xl sm:text-2xl md:text-3xl font-semibold border-b-2 border-white" />
            <CustomButton text="curtidos" onClick={() => setText("likes")} className="text-white text-xl sm:text-2xl md:text-3xl font-semibold border-b-2 border-white" />
          </div>

        </div>

        <div className="flex w-[80%] flex-col items-center mt-28 gap-6">

            {text === "postes" && ( 
            <>
             {Array.isArray(posts) ? (
                posts.map((post, index) => (
                  <Card
                    key={post.post_id}
                    post_id={post.post_id}
                    text={post.post_content}
                    username={`${post.post_username}`}
                    edit_button_active={true}
                    commnent_button_active={false}
                    like_button_active={false}
                    likedLen={post.total_likes}
                 />
              ))
            ) : (
             <p>Nenhum post encontrado.</p>
             )}
          </>
        )}

        {text === "comments" && (
        <>
          {Array.isArray(comment) ? (
            comment.map((post, index) => (
              <Card
                key={index}
                post_id={post.post_id}
                text={post.post_content}
                username={post.post_author_username}
                edit_button_active={false}
                commnent_button_active={true}
                like_button_active={false}
                youcommented={post.comment_text}
              />
            ))
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
        </>
       )}

        
        {text === "likes" && (
        <>
         {Array.isArray(postsLiked) ? (
            postsLiked.map((post, index) => (
              <Card
                key={index}
                text={post.post_content}
                username={post.username}
                edit_button_active={false}
                commnent_button_active={false}
                like_button_active={true}
                isLiked={true}
                post_id={post.id}
                likedLen={post.total_likes}
              />
            ))
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
          </>
        )}
        </div>

        {openModal && (
          <ModalProfileEdit isOpen={true}/>
        )}
      </section>
    )
}

export default PageMyProfile;