import React, {useMemo} from 'react';
import Layout from "../../components/Shared/Layout";
import FormBuilder from "../../components/Form/FormBuilder";
import {format} from "date-fns";


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
                    element: 'datepicker',
                    name: 'date',
                    value: '',
                    label: 'Date',
                    placeholder: 'Date',
                    rules: 'required',
                    // submitFormat: (value) => {
                    //     console.log(value)
                    //     console.log(format(value, 'dd-mm-yyyy'))
                    //     return format(value, 'dd-mm-yyyy')
                    // },
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'distance',
                    value: '',
                    label: 'Distance',
                    placeholder: 'Distance',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'elevation',
                    value: '',
                    label: 'Elevation',
                    placeholder: 'Elevation',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'proximal_duration',
                    value: '',
                    label: 'Proximal duration',
                    placeholder: 'Proximal duration',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'personal_time',
                    value: '',
                    label: 'Personal time',
                    placeholder: 'Personal time',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                // {
                //     element: "checkbox",
                //     name: "organized_by",
                //     label: 'Is it this activity organized by Organization?',
                //     value: false,
                //     wrapper: {
                //         element: "div",
                //         class: "col-6 input-checkbox"
                //     }
                // },
                // {
                //     element: "text",
                //     text: '',
                //     name: 'placeholder',
                //     wrapper: {
                //         element: 'div',
                //         class: 'col-6'
                //     }
                // },
                // {
                //     element: 'input',
                //     type: 'text',
                //     name: 'organization_id',
                //     value: '',
                //     // label: 'Organization',
                //     placeholder: 'Organization',
                //     visible: (values) => {
                //         return values.organized_by === true
                //     },
                //     wrapper: {
                //         element: "div",
                //         class: "col-6 input-checkbox"
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
                    element: 'textarea',
                    name: 'description',
                    label: 'Description',
                    placeholder: 'Description',
                    value: '',
                    rows: 4,
                    maxLength: 285,
                    counter: true,
                    wrapper: {
                        element: 'div',
                        class: 'col-12'
                    }
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
                <h5>Create an activity</h5>
                <div className="container-data-header-buttons">
                </div>

            </div>

            <div className="container-data">
                <FormBuilder   {...props} useInertia={true} formData={formData}/>
            </div>
        </div>
    </Layout>
}
