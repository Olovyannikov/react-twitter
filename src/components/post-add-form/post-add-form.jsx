import './post-add-form.scss';

const PostAddForm = ({onAdd}) => {
    const placeholder = 'О чем вы думаете сейчас?';
    return (
        <div action="" className="bottom-panel d-flex">
            <input type="text" placeholder={placeholder} className="form-control new-post-label"/>
            <button onClick={() => onAdd('Hello!')} className="btn btn-outline-secondary" type="submit">Добавить</button>
        </div>
    )
}

export default PostAddForm;