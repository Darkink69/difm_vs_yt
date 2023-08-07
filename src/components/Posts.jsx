import {Post} from './Post'

export function Posts(props) {
    return <div>
        <h2>Заголовок..</h2>
        {
            props.posts.map(post => (
                <Post key={post.id} id={post.id} name={post.name} clc={props.clc}/>
            ))
        }
    </div>
}