import './App.css';
import {useState, useEffect} from 'react'
import { axios } from 'axios'
import { Posts } from './Posts';
import { Pagination } from './Pagination';

function App() {
  const [posts , setPosts] = useState([]);
  const [loading , SetLoading] = useState(false)
  const [currentPage , setCurrentPage] = useState(1)
  const [postsPage , setPostPage] = useState(10)

  useEffect(()=>{
    SetLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return res.json()
    }).then((data)=>{
      SetLoading(false)
      setPosts(data)
    })
    .catch((err) => {
      console.log(err)
    });
  }, [])

  const indexLast = currentPage*postsPage;
  const indexFirst = indexLast - postsPage;
  const currentPost = posts.slice(indexFirst , indexLast)

  const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  return (
    <div className="App">
      <h1>Posts:</h1>
      <Posts posts={currentPost} loading={loading}/>
      <Pagination  postPage={postsPage} totalPost={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
