import React, {useMemo} from 'react';
import Layout from "../../components/Shared/Layout";
import FormBuilder from "../../components/Form/FormBuilder";


export default function Create(props){
    const { links, categories } = props;

    const formData = useMemo(
        () => ({
            form: {
                url: links.store,
                method: 'post',
                class: 'form-class row'
            },
            fields: [
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
                    name: 'place',
                    value: '',
                    label: 'Place',
                    placeholder: 'Place',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'datepicker',
                    name: 'date',
                    value: '',
                    label: 'Date',
                    placeholder: 'Date',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'select',
                    name: 'category_id',
                    label: 'Category',
                    placeholder: 'Category',
                    rules: 'required',
                    options: categories,
                    value: null,
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
                    rules: 'required',
                    value: '',
                    rows: 4,
                    maxLength: 285,
                    counter: true,
                    wrapper: {
                        element: 'div',
                        class: 'col-12'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'guide',
                    value: '',
                    label: 'Guide',
                    placeholder: 'Guide',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'contact',
                    value: '',
                    label: 'Contact',
                    placeholder: 'Contact',
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
                <h5>Create an event</h5>
                <div className="container-data-header-buttons">
                </div>

            </div>

            <div className="container-data">
                <FormBuilder   {...props} useInertia={true} formData={formData} backEndErrors={props.errors}/>
            </div>
        </div>
    </Layout>
}
