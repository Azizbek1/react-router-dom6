import { useEffect, useState } from 'react';
import { Link,  useSearchParams } from 'react-router-dom';
// import { useParams } from "react-router-dom";
const Blogpage = () => {
    const [posts, setPosts] = useState([])
    const [searchParams, setSearchparams] = useSearchParams()
    const postQuery = searchParams.get('post') || ''
  
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    const handlerSubmitted = (event) =>{
        event.preventDefault()
    }

    return (
        <div>
            <h2>blog</h2>
            <form onSubmit={handlerSubmitted} autoComplete="off">
                <input type="search" name="search" /> 
                 
            </form>

            <Link to="/posts/new">new Post</Link>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
             
            }
        </div>
    );
}

export default Blogpage;
