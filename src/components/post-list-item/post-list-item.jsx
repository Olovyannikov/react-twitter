import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faStar, faTrash} from "@fortawesome/free-solid-svg-icons";

import './post-list-item.scss';
import {Component} from "react";

export default class PostListItem extends Component {

    state = {
        important: false,
        like: false
    }

    setImportant = () => {
        this.setState(state => ({
            important: !state.important
        }))
    }

    setLike = () => {
        this.setState(state => ({
            like: !state.like
        }))
    }


    render() {
        const {label} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) { classNames += ' important' }

        if (like) { classNames += ' like' }

        return(
            <div className={classNames}>
            <span className='app-list-item-label' onClick={this.setLike}>
                {label}
            </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type='button' className='btn-star btn-sm' onClick={this.setImportant}>
                        <FontAwesomeIcon icon={faStar}/>
                    </button>
                    <button type='button' className='btn-trash btn-sm'>
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                    <FontAwesomeIcon icon={faHeart}/>
                </div>
            </div>
        )
    }
}
