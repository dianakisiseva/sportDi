import React, {useMemo} from 'react';
import Layout from "../../components/Shared/Layout";
import FormBuilder from "../../components/Form/FormBuilder";


export default function Create(props){
    const { links } = props;

    console.log(props)
    const formData = useMemo(
        () => ({
            form: {
                url: links.store,
                method: 'post',
                class: 'form-class row'
            },
            fields: [
                {
                    element: 'file-dropzone',
                    dropzone_type: 'json',
                    name: 'photo',
                    label: 'Photo',
                    text: 'photo',
                    wrapper: {
                        element: "div",
                        class: "col-6 input-element input-width-50"
                    }
                },
                {
                    element: "text",
                    text: '',
                    name: 'placeholder2',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'first_name',
                    label: 'First name',
                    placeholder: 'First name',
                    value: '',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'last_name',
                    value: '',
                    label: 'Last name',
                    placeholder: 'Last name',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'login',
                    value: '',
                    label: 'Login',
                    placeholder: 'Login',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'email',
                    value: '',
                    label: 'Email',
                    placeholder: 'Email',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'password',
                    name: 'password',
                    value: "",
                    label: 'Password',
                    placeholder: 'Password',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'password',
                    name: 'password_confirmation',
                    value: '',
                    label: 'Password confirmation',
                    placeholder: 'Password confirmation',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                }
            ],
            submit: {
                text: 'Create',
                class: "btn-primary",
                wrapper: {
                    element: "div",
                    class: "form-footer"
                }
            },
            cancel: {
                text: 'Cancel',
                class: "btn-tertiary",
                clickFn: () => history.back()
            }
        }),
        []
    )


    return  <Layout {...props}>
        <div className="container-data profile">
            <div className="container-data-header">
                <h5>Create an user</h5>
                <div className="container-data-header-buttons">
                </div>

            </div>

            <div className="container-data">
                <FormBuilder   {...props} useInertia={true} formData={formData} backEndErrors={props.errors}/>
            </div>
        </div>
    </Layout>
}
