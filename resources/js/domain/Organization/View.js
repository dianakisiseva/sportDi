import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {InertiaLink} from "@inertiajs/inertia-react";
import {IconPen} from "../../components/Icons/Icons";
import Layout from "../../components/Shared/Layout";
import BackButton from "../../components/BackButton/BackButton";
import {IconDelete, IconTrash} from "../../components";
import DeleteOrganization from "./DeleteOrganization";
import ReactModal from "../../components/Modal/ReactModal";
import {useToasts} from "react-toast-notifications";
import {Inertia} from "@inertiajs/inertia";
import {ROLE} from "../../components/Shared/Constants";


export default function View(props) {
    const {t} = useTranslation();
    const {organization, auth, links} = props;
    const {addToast} = useToasts()

    const modalRef = useRef()

    const handleDeleteOrganization = (id) => {
        const title = 'Delete organization'

        const body =
            <DeleteOrganization
                cancelCallback={handleDeleteOrganizationCancelCallback}
                successCallback={handleDeleteOrganizationSuccessCallback}
                id={id}
            />

        modalRef.current.setContent(title, body)
    }

    const handleDeleteOrganizationCancelCallback = () => {
        modalRef.current.close()


    }

    const handleDeleteOrganizationSuccessCallback = () => {
        modalRef.current.close()
        Inertia.visit(links.index)
        addToast('Organization successfully deleted', {appearance: 'success'})
    }

    const hasPermission = auth.user.role_id === ROLE.ADMIN || auth.user.email === organization.email;

    return <Layout {...props}>
        <BackButton
            label='Back to all organizations'
            link={links.index}
        />
        <div className="container-data profile">
            <div className="container-data-header">
                <h5>Organization</h5>
                {hasPermission &&
                    <div className="container-data-header-buttons">
                        <InertiaLink
                            className="btn-stripped-sm"
                            href={links.edit}>
                            <IconPen/>
                            Edit
                        </InertiaLink>
                        <button
                            className="btn-stripped-sm"
                            onClick={() => handleDeleteOrganization()}>
                            <IconTrash/> Delete organization
                        </button>
                    </div>
                }
            </div>


            <div className="form-group profile-body">
                <div className="form-group-flex">
                    <div className="form-element-half">
                        <div className="profile-thumb">
                            <img src={organization.logo_url} alt="organization thumbnail"/>
                        </div>
                    </div>
                    <div className="form-element-half">
                        <div className="form-group-flex">
                            <div className="form-element-full">
                                <h3>Name</h3>
                                <p>{organization.name}</p>
                            </div>
                            <div className="form-element-full">
                                <h3>Login</h3>
                                <p>{organization.login}</p>
                            </div>
                            <div className="form-element-full">
                                <h3>Email</h3>
                                <p>{organization.email}</p>
                            </div>
                            <div className="form-element-full">
                                <h3>City</h3>
                                <p>{organization.city}</p>
                            </div>
                        </div>
                    </div>
                    {organization.facebook && <>
                        <div className="form-element-full">
                            <h3>Facebook link</h3>
                            <a href={organization.facebook}>{organization.name}</a>
                        </div>
                    </>}
                    {organization.description && <>
                        <div className="form-element-full">
                            <h3>Organization description</h3>
                            <p>{organization.description}</p>
                        </div>
                    </>}
                </div>
            </div>
        </div>

        <ReactModal ref={modalRef} className='ReactModal__Content--Small'/>

    </Layout>
}
