import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Texterea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Texterea} validate={[required, maxLength100]}
            name="newMessageBody" placeholder="Enter your message" />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);

export default AddMessageFormRedux;