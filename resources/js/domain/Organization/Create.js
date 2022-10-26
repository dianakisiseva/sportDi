import React, {useMemo} from 'react';
import Layout from "../../components/Shared/Layout";
import FormBuilder from "../../components/Form/FormBuilder";

export default function Create(props){
    const { links } = props;

    const formData = useMemo(
        () => ({
            form: {
                url: links.store,
                method: 'post',
                class: 'form-class row'
            },
            fields: [
                // {
                //     element: 'file-dropzone',
                //     dropzone_type: 'json',
                //     name: 'logo',
                //     text: 'Logo',
                //     wrapper: {
                //         element: "div",
                //         class: "input-element input-width-50"
                //     }
                // },
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
                    name: 'name',
                    label: 'Name',
                    placeholder: 'Name',
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
                    name: 'city',
                    value: '',
                    label: 'City',
                    placeholder: 'City',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    name: 'login',
                    label: 'Login',
                    placeholder: 'Login',
                    rules: 'required',
                    value: '',
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
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'facebook',
                    value: '',
                    label: 'Facebook link',
                    placeholder: 'Facebook link',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'textarea',
                    name: 'description',
                    label: 'Description',
                    placeholder: 'Description',
                    value: '',
                    rows: 4,
                    maxLength: 285,
                    counter: true
                },

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
                <h5>Create an organization</h5>
                <div className="container-data-header-buttons">
                </div>

            </div>

            <div className="container-data">
                <FormBuilder   {...props} useInertia={true} formData={formData}/>
            </div>
        </div>
    </Layout>
}
