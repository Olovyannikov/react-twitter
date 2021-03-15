import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faStar, faTrash} from "@fortawesome/free-solid-svg-icons";

import './post-list-item.scss';

const PostListItem = () => {
    return (
        <li className='app-list-item d-flex justify-content-between'>
            <span className='app-list-item-label'>
                Hello world!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type='button' className='btn-star btn-sm'>
                    <FontAwesomeIcon icon={faStar}/>
                </button>
                <button type='button' className='btn-trash btn-sm'>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
                <FontAwesomeIcon icon={faHeart}/>
            </div>
        </li>
    )
}

export default PostListItem;