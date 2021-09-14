import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Texterea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Texterea} name="newPostText"
                validate={[required, maxLength10]} />
        </div>
        <div> 
            <button>Add</button>
        </div>
    </form>
}

const AddNewPostFormRedux = reduxForm({
    form: "ProfileAddPostForm"
})(AddNewPostForm);

const MyPosts = React.memo(props => {
    console.log("render");
    let postsElements = props.posts.map(
        p => <Post message={p.message} likes={p.likesCount} />
    );

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={s.postBlock}>
                <h3>My post</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
});

export default MyPosts;