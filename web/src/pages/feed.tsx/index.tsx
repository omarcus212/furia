import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/layout/headerNav";
import Card from "../../components/layout/postCard";
import { getPostsFeed } from "../../service/feedService";
import { getPostLikedProfile } from "../../service/profileService";
import { getCommentPost, setCommentPost, setCraetePost } from "../../service/postService";
import { PostComment } from "../../interface/post";
import ModalComment from "../../components/layout/modalComment";
import ImageView from "../../components/shared/imageView";
import ModalCreatePost from "../../components/layout/modalCreatePost";
import ChatBotModal from "../../components/layout/chatbot";
import { useNavigate } from "react-router-dom";


interface IPostFeed {
  post_id: number;
  post_content: string;
  post_date: string;
  post_author_username: string;
  total_likes: number;
}

const PageHome: React.FC = () => {

  const navigate = useNavigate();

  const [posts, setPosts] = useState<IPostFeed[]>([])

  const [likedPostIds, setLikedPostIds] = useState<Set<number>>(new Set());

  const [openModalCommente, setopenModalCommente] = useState(false)

  const [openModalCreate, setOpenModelCreate] = useState(false)

  const [openModalChatBot, setopenModalChatBot] = useState(false)

  const [dataCommentPostID, setDataCommentPostID] = useState(Number)

  const [dataCommentPost, setDataCommentPost] = useState<PostComment[]>([])

  useEffect(() => {
    const getFeed = async () => {
      const res = await getPostsFeed()
      setPosts(res.data)
    }
    getFeed()

    const profileMyLiked = async () => {
      const likedPosts = await getPostLikedProfile()
      const likedIds = new Set<number>();

      for (const post of likedPosts.data) {
        likedIds.add(post.post_id);
      }
      setLikedPostIds(likedIds);
    }
    profileMyLiked()

  }, [openModalCommente, dataCommentPost])

  const handleGetCommentpost = async (post_id: number) => {

    const res = await getCommentPost(post_id)
    setDataCommentPostID(post_id)
    setopenModalCommente(true)
    setDataCommentPost(res.data)

  }

  const handleSetCommentpost = async (text: string) => {

    const res = await setCommentPost(dataCommentPostID, text)

    if (res.status == "success") {
      const res = await getCommentPost(dataCommentPostID)
      setDataCommentPost(res.data)
    }
  }

  const CraetePost = async (text: string) => {
    const res = await setCraetePost(text)
    if (res.status == "success") {
      setOpenModelCreate(false)
      window.location.reload()
    }
    setOpenModelCreate(false)
  }

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/logout')

  };


  return (
    <section className="flex flex-col items-center w-full h-screen bg-black">
      <HeaderNavbar logout={logout} />

      <div className="flex w-full jutify-center sm:pl-[12%]">
        <div className="w-[90%] mt-8 p-4">
          {Array.isArray(posts) ? (
            posts.map((post) => {
              const isLiked = likedPostIds.has(post.post_id);
              return (
                <Card
                  key={post.post_id}
                  post_id={post.post_id}
                  text={post.post_content}
                  username={`${post.post_author_username}`}
                  edit_button_active={false}
                  commnent_button_active={true}
                  onCommentClick={() => handleGetCommentpost(post.post_id)}
                  like_button_active={true}
                  isLiked={isLiked}
                  likedLen={post.total_likes}
                />
              )
            })
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
        </div>

        <div className="fixed right-0 top-14 h-[86%] w-16 z-1">
          <div className="flex flex-col justify-between items-end h-full ">
            <ImageView imgSrc="/icon/mais.svg" imgAlt="default!" onClick={() => setOpenModelCreate(true)} className="mt-20 mr-6 w-8 h-8 cursor-pointer" />
            <ImageView imgSrc="/image/chatbot.png" classNameImg="h-[86px]" imgAlt="default!" onClick={() => setopenModalChatBot(true)} className="mb-4 mr-6 w-10 h-8 cursor-pointer" />
          </div>
        </div>

      </div>
      {openModalCommente && (
        <ModalComment
          comments={dataCommentPost}
          onClose={() => setopenModalCommente(false)}
          onSendComment={handleSetCommentpost}
        />
      )}

      {openModalCreate && (
        <ModalCreatePost onClose={() => setOpenModelCreate(false)} clearModal={false} onChangeTextArea={CraetePost} />
      )}

      {openModalChatBot && (
        <ChatBotModal onClose={() => setopenModalChatBot(false)} />
      )}
    </section >
  )
}

export default PageHome;