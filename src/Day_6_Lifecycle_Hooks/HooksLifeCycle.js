import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HooksLifeCycle = () => {
    const [posts, setPosts] = useState([])
    const [count, setCount] = useState(0)

    // Component Did Mount
    useEffect(() => {
        getPostLists()
    }, [])

    // with Dependancy
    useEffect(() => {
        getPostLists()
    }, [count])

    const apple = () =>{
        setCount(count+1)
    }

    const getPostLists = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res?.data);
                setPosts(res?.data)
            }).catch(err => {
                console.log(err);
            })
    }
    

    let _posts = posts.map(post => <h4>{post.title }</h4>)
  return (
      <div>
          HooksLifeCycle
          <div>{count}</div>
          <button onClick={apple} >Increment</button>
          {_posts}
    </div>
  )
}

export default HooksLifeCycle