import React, {useMemo, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import Layout from "../../components/Shared/Layout";
import ReactModal from "../../components/Modal/ReactModal";
import FormBuilder from "../../components/Form/FormBuilder";
import {useToasts} from "react-toast-notifications";
import {IconDelete} from "../../components";
import {IconPen} from "../../components/Icons/Icons";
import {format} from "date-fns";
import moment from "moment";
import {formatDate} from "../../utils";
import {CATEGORIES} from "../../components/Shared/Constants";

export default function View(props) {
    const {t} = useTranslation();
    const {activity, links, auth, categories} = props;
    const {addToast} = useToasts()

    const formData = useMemo(
        () => ({
            form: {
                url: links.update,
                method: 'put',
                class: 'form-class row'
            },
            fields: [
                {
                    element: 'input',
                    type: 'text',
                    name: 'name',
                    label: 'Name',
                    placeholder: 'Name',
                    value: activity.name ?? '',
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
                    value: activity.place ?? '',
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
                    value: activity.category_id ?? '',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                //todo: datepicker
                {
                    element: 'datepicker',
                    type: 'text',
                    name: 'date',
                    // value: new Date(activity.date),
                    value: '',
                    label: 'Date',
                    placeholder: 'Date',
                    rules: 'required',
                    disabled:true,

                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'distance',
                    value: activity.distance ?? '',
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
                    value: activity.elevation ?? '',
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
                    value: activity.proximal_duration ?? '',
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
                    value: activity.personal_time ?? '',
                    label: 'Personal time',
                    placeholder: 'Personal time',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: "checkbox",
                    name: "organized_by",
                    label: 'Is it this activity organized by Organization?',
                    value: !!activity.organization_id,
                    wrapper: {
                        element: "div",
                        class: "col-6 input-checkbox"
                    }
                },
                {
                    element: "text",
                    text: '',
                    name: 'placeholder',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'organization_id',
                    value: activity.organization_id ?? '',
                    placeholder: 'Organization',
                    visible: (values) => {
                        return values.organized_by === true
                    },
                    wrapper: {
                        element: "div",
                        class: "col-6"
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
                    element: 'textarea',
                    name: 'description',
                    label: 'Description',
                    placeholder: 'Description',
                    value: activity.description ?? '',
                    rows: 4,
                    maxLength: 285,
                    counter: true
                },

            ],
            submit: {
                text: 'Edit',
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
