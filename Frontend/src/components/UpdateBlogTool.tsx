import React from 'react';
import { useEffect, useState } from 'react';
import { Blog } from '../types/Blog';

type updateBlogToolProps = {
    id: string
}

function UpdateBlogTool(props: updateBlogToolProps) {

    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(
        () => { fetch(`http://localhost:3001/blogs/id/${props.id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
        .catch(err => console.log(err))
        , [props.id] }
    )

    if(blog) {
    return (
        <div>
            <div>UpdateBlogTool</div>
            <p>{blog.body}</p>
        </div>
    )
    }
    else {
        return (
            <div>No Blog found - please check/update id</div>
        )
    }
}

export default UpdateBlogTool;