import React, { useEffect, useState } from "react";
import ContainerProfile from "../../components/layout/containerProfile";
import HeaderNavbar from "../../components/layout/headerNav";
import CustomButton from "../../components/shared/button";
import Card from "../../components/layout/postCard";
import { Profile } from "../../interface/profile";
import ModalProfileEdit from "../../components/layout/modalProfileEdit";
import { IPost, IPostComment, PostComment } from "../../interface/post";
import Swal from "sweetalert2";
import ModalComment from "../../components/layout/modalComment";
import { getCommentPost, setCommentPost } from "../../service/postService";
import {
  deletePostProfile,
  getPostCommentedProfile,
  getPostLikedProfile,
  getPostProfile,
  myProfile,
  updatePorfile
} from "../../service/profileService";


const imgman = 'https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/agenteman.jpeg?alt=media&token=bc980976-bc4b-47cd-8402-89c8b62fd4dc'
const imgwoman = 'https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/agentewoman.jpg?alt=media&token=0fca91ea-9e7a-4bc7-b945-be4a958640a9'
const notimg = 'https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/nopicture.jpg?alt=media&token=48da8902-b944-4238-8c10-b440b6b1ba47'



const PageMyProfile: React.FC = () => {

  const [profile, setProfile] = useState<Profile | null>(null)

  const [status, setStatus] = useState("postes")

  const [openModal, setIsModalOpen] = useState(false)

  const [posts, setPosts] = useState<IPost[]>([])

  const [postsLiked, setPostsLiked] = useState<IPost[] | null>()

  const [likedPostIds, setLikedPostIds] = useState<any>(new Set());

  const [postComment, setPostComment] = useState<IPostComment[]>([])

  const [dataInputModal, setDataInputModal] = useState({ username: '', bio: '', photo: '' as 'man' | 'woman' | 'null' })

  const [openModalCommente, setopenModalCommente] = useState(false)

  const [dataCommentPost, setDataCommentPost] = useState<PostComment[]>([])

  const [dataCommentPostID, setDataCommentPostID] = useState(Number)


  useEffect(() => {

    setProfile(null)

    const getMyProfile = async () => {

      const res = await myProfile()
      if (res && Array.isArray(res.data) && res.data.length > 0) {
        const userProfile = res.data[0];
        setProfile(userProfile);

        setDataInputModal({
          username: userProfile.username || '',
          bio: userProfile.bio || '',
          photo: userProfile.photo || '',
        })

      } else {

        window.location.reload()
      }

    };
    getMyProfile()

  }, [])

  useEffect(() => {

    if (profile && status == "postes") {

      const profileMy = async () => {
        const likedPosts = await getPostLikedProfile()
        const resPosts = await getPostProfile(profile.id)
        const likedIds = new Set(likedPosts.data.map((post: { post_id: number }) => post.post_id))
        setLikedPostIds(likedIds)
        setPosts(resPosts.data)

      }
      profileMy()

    } if (profile && status == "comments") {

      const postCommented = async () => {
        const res = await getPostCommentedProfile()
        setPostComment(res.data)

      }
      postCommented()

    } else if (profile && status == "likes") {

      const postLiked = async () => {
        const res = await getPostLikedProfile()
        setPostsLiked(res.data)

      }
      postLiked()

    }

  }, [profile, status, openModal, openModalCommente, dataCommentPost])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setDataInputModal((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  const handleGenderSelect = (photo: 'man' | 'woman' | 'null') => {

    setDataInputModal((prev) => ({
      ...prev,
      photo: photo,
    }));

  }

  const handleSendModal = async () => {
    let username = dataInputModal.username
    let bio = dataInputModal.bio
    let photo = dataInputModal.photo

    if (username == profile?.username && bio == profile.bio && !photo) {

      setIsModalOpen(false)
      return

    }

    if (username || bio || photo) {

      let photoimg = ''

      if (photo == 'man') {

        photoimg = imgman

      } else if (photo == 'woman') {

        photoimg = imgwoman

      } else {

        photoimg = notimg
      }

      const res = await updatePorfile(username, bio, photoimg || notimg)

      if (res.status == "success") {

        setIsModalOpen(false)
        window.location.reload()

      } else {

        Swal.fire({
          icon: 'error',
          title: 'Dados invalidos...',
          text: res,
        });
      }

    } else {
      setIsModalOpen(false)
    }
  }

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

  const handleDeletePost = async (post_id: number) => {

    const res = await deletePostProfile(post_id)
    console.log(res)

    if (res.status == "success") {
      window.location.reload()
    }

  }

  const logout = () => {
    localStorage.removeItem('token')

    setDataInputModal({
      username: '',
      bio: '',
      photo: 'null',
    })

    setProfile(null);

    window.location.href = '/login';
  };

  return (
    <section className="flex flex-col items-center w-full h-screen bg-black">

      <HeaderNavbar logout={logout} />

      {profile && (
        <ContainerProfile
          key={profile?.id}
          username={`${profile?.username}`}
          profile_photo_url={profile?.profile_photo_url ? profile?.profile_photo_url : notimg}
          bio={profile?.bio ? profile.bio : "Este usuário ainda não escreveu uma bio."}
          onClickEdit={() => { setIsModalOpen(true) }}
        />
      )}

      <div className="flex w-[80%] flex-col items-center mt-28 gap-6">

        <hr className="w-full border-t-2 border-white mb-4" />

        <div className="flex flex-row justify-center items-center gap-12">
          <CustomButton text="postes" onClick={() => setStatus("postes")} className="text-white text-xl sm:text-2xl md:text-3xl font-semibold border-b-2 border-white" />
          <CustomButton text="comentarios" onClick={() => setStatus("comments")} className="text-white text-xl sm:text-2xl md:text-3xl font-semibold border-b-2 border-white" />
          <CustomButton text="curtidos" onClick={() => setStatus("likes")} className="text-white text-xl sm:text-2xl md:text-3xl font-semibold border-b-2 border-white" />
        </div>

      </div>

      <div className="flex w-[80%] flex-col items-center mt-28 gap-6">

        {status === "postes" && (
          <>
            {Array.isArray(posts) && posts.length != 0 ? (
              posts.map((post) => {
                const isLiked = likedPostIds.has(post.post_id);
                return (
                  <Card
                    key={post.post_id}
                    post_id={post.post_id}
                    text={post.content}
                    username={`${post.username}`}
                    edit_button_active={true}
                    commnent_button_active={true}
                    onCommentClick={() => handleGetCommentpost(post.post_id)}
                    isLiked={isLiked}
                    like_button_active={true}
                    likedLen={post.total_likes}
                    onClickDelete={() => handleDeletePost(post.post_id)}
                  />
                )
              })
            ) : (
              <p className="text-white">Nenhum post publicado.</p>
            )}
          </>
        )}

        {status === "comments" && (
          <>
            {Array.isArray(postComment) && postComment.length != 0 ? (
              postComment.map((post, index) => (
                <Card
                  key={index}
                  post_id={post.post_id}
                  text={post.post_content}
                  username={post.post_author_username}
                  edit_button_active={false}
                  commnent_button_active={false}
                  like_button_active={false}
                  youcommented={post.comment_text}
                />
              ))
            ) : (
              <p className="text-white">Nenhum post encontrado.</p>
            )}
          </>
        )}


        {status === "likes" && (
          <>
            {Array.isArray(postsLiked) && postsLiked.length != 0 ? (
              postsLiked.map((post, index) => (
                <Card
                  key={index}
                  text={post.post_content}
                  username={post.username}
                  edit_button_active={false}
                  commnent_button_active={false}
                  like_button_active={true}
                  isLiked={true}
                  post_id={post.post_id}
                />
              ))
            ) : (
              <p className="text-white">Nenhum post encontrado.</p>
            )}
          </>
        )}
      </div>

      {openModal && (
        <ModalProfileEdit
          isOpen={openModal}
          formData={dataInputModal}
          onClickCloseModel={() => { setIsModalOpen(false) }}
          onInputChange={handleInputChange}
          onClickSend={handleSendModal}
          onSelectPhoto={handleGenderSelect}
        />
      )}


      {openModalCommente && (
        <ModalComment
          comments={dataCommentPost}
          onClose={() => setopenModalCommente(false)}
          onSendComment={handleSetCommentpost}
        />
      )}
    </section>
  )
}

export default PageMyProfile;