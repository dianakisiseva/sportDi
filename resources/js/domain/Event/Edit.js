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
import BackButton from "../../components/BackButton/BackButton";

export default function View(props) {
    const {t} = useTranslation();
    const {event, links, auth, categories} = props;
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
                    value: event.name ?? '',
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
                    value: event.place ?? '',
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
                    type: 'text',
                    name: 'date',
                    value: new Date(event.formatted_date),
                    // value: '',
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
                    element: 'select',
                    name: 'category_id',
                    label: 'Category',
                    placeholder: 'Category',
                    rules: 'required',
                    options: categories,
                    value: event.category_id ?? '',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'organization_name',
                    value: event.organization_name ?? '',
                    label: 'Organized by',
                    disabled: true,
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-12'
                    },
                },
                {
                    element: 'textarea',
                    name: 'description',
                    label: 'Description',
                    placeholder: 'Description',
                    value: event.description ?? '',
                    rows: 4,
                    maxLength: 285,
                    counter: true,
                    wrapper: {
                        element: 'div',
                        class: 'col-12'
                    },
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'guide',
                    value: event.guide ?? '',
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
                    value: event.contact ?? '',
                    label: 'Contact',
                    placeholder: 'Contact',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
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
        <BackButton
            label='Back to all events'
            link={links.index}
        />
        <div className="container-data profile">
            <div className="container-data-header">
                <h5>Edit</h5>
                <div className="container-data-header-buttons">
                </div>

            </div>

            <div className="container-data">
                <FormBuilder   {...props} useInertia={true} formData={formData}/>
            </div>
        </div>
    </Layout>
}
