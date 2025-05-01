import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/layout/headerNav";
import Card from "../../components/layout/postCard";
import { getPostsFeed } from "../../service/feed";

interface IPostFeed {
  post_id: number;
  post_content: string;
  post_date: string; 
  post_author_username: string;
  total_likes: number;
}

const PageHome: React.FC = () => {

    const [posts, setPosts] = useState<IPostFeed[]>([])
    
  useEffect(()=>{
    const getFeed = async () =>{
      const res = await getPostsFeed()
      setPosts(res.data)
    }
    getFeed()
  },[])
    
    return (
        <section className="flex flex-col items-center w-full h-screen bg-black">
          <HeaderNavbar/>

           <div className="mt-8 p-4">
              {Array.isArray(posts) ? (
                posts.map((post, index) => (
                  <Card
                    key={post.post_id}
                    post_id={post.post_id}
                    text={post.post_content}
                    username={`${post.post_author_username}`}
                    edit_button_active={false}
                    commnent_button_active={true}
                    like_button_active={true}
                    likedLen={post.total_likes}
                  />
               ))
              ) : (
              <p>Nenhum post encontrado.</p>
              )}
           </div>
        </section >
    )
}

export default PageHome;