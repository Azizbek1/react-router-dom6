import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate  } from 'react-router-dom';
// import { useParams } from "react-router-dom";
const Singlepage = () => {
    const {id} = useParams()

    const [post, setPost] = useState(null)

    const navigate = useNavigate();

    const goBack = () => navigate(-1)
    // const goBack = () => navigate('/posts', {state: 12345})
    // const goHome = () => navigate('/', {replace: true})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id]);
    return (
        <div>
            {post && (
                <div>
                    <button onClick={goBack}>Назад</button>

                    {/* Bad apporach */}
                    {/* <button onClick={goHome}>Дамой</button> */}
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit</Link>
                   
                </div>
            )}
           
        </div>
    );
}

export default Singlepage;
