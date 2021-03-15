import './post-status-filter.scss';

const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            <button className='btn' type='button'>Все</button>
            <button className='btn' type='button'>Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;