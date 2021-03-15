import './post-add-form.scss';

const PostAddForm = () => {
    const placeholder = 'О чем вы думаете сейчас?';
    return (
        <form action="" className="bottom-panel d-flex">
            <input type="text" placeholder={placeholder} className="form-control new-post-label"/>
            <button className="btn btn-outline-secondary" type="submit">Добавить</button>
        </form>
    )
}

export default PostAddForm;