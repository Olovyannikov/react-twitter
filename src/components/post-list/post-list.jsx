import PostListItem from "../post-list-item/post-list-item";
import { ListGroup } from "react-bootstrap";

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
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;