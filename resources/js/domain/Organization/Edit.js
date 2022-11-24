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
import {formatDate, route} from "../../utils";
import {CATEGORIES} from "../../components/Shared/Constants";
import BackButton from "../../components/BackButton/BackButton";

export default function View(props) {
    const {t} = useTranslation();
    const {organization, links, auth, categories} = props;
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
                    element: 'file-dropzone',
                    dropzone_type: 'json',
                    name: 'logo',
                    text: 'Logo',
                    label: 'Upload file if you want to change the logo',
                    wrapper: {
                        element: "div",
                        class: "col-6 input-width-50"
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
                    name: 'name',
                    label: 'Name',
                    placeholder: 'Name',
                    value: organization.name ?? '',
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
                    value:  organization.login ?? '',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'email',
                    value: organization.email ?? '',
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
                    type: 'text',
                    name: 'city',
                    value: organization.city ?? '',
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
                    type: 'text',
                    name: 'facebook',
                    value: organization.facebook ?? '',
                    label: 'Facebook link',
                    placeholder: 'Facebook link',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    },
                    Cell: ({row}) => {
                        console.log(organization.facebook)
                        return <a
                            href={organization.facebook}
                            target='_blank'
                            rel='noreferrer'

                        >
                            {organization.name}
                        </a>
                        //
                        // <a href="https://google.com" target="_blank" rel="noreferrer">
                        //     Google.com
                        // </a>
                    }
                },
                {
                    element: 'textarea',
                    name: 'description',
                    label: 'Description',
                    placeholder: 'Description',
                    value: organization.description ?? '',
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


    return <Layout {...props}>
        <BackButton
            label='Back to all organizations'
            link={links.index}
        />
        <div className="container-data profile">
            <div className="container-data-header">
                <h5>Edit</h5>
                <div className="container-data-header-buttons">
                </div>

            </div>

            <div className="container-data">
                <FormBuilder   {...props} useInertia={true} formData={formData} backEndErrors={props.errors}/>
            </div>
        </div>
    </Layout>
}
