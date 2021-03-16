import PostListItem from "../post-list-item/post-list-item";

import './post-list.scss';

const PostList = ({posts}) => {

    const elements = posts.map(post => {
        const {id, ...postProps} = post;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...postProps}/>
            </li>
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default PostList;