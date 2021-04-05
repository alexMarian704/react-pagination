import React from 'react'

export const Posts = ({posts , loading}) => {
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }

    return (
        <div id="postContainer">
            {posts.map((post , index)=>(
                <div key={index} id="post">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

