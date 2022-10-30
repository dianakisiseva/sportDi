import React from 'react';
import {useTranslation} from 'react-i18next';
import {InertiaLink} from "@inertiajs/inertia-react";
import {IconPen} from "../../components/Icons/Icons";
import Layout from "../../components/Shared/Layout";
import {CATEGORIES, ROLE} from "../../components/Shared/Constants";
import BackButton from "../../components/BackButton/BackButton";


export default function View(props) {
    const {t} = useTranslation();
    const {event, auth, links} = props;

    return <Layout {...props}>
        <BackButton
            label='Back to all events'
            link={links.index}
        />
        <div className="container-data profile">
            <div className="container-data-header">
                <h5>Show event</h5>
                {auth.user.role_id === ROLE.ADMIN ||
                    auth.user.email === event.organization.email &&
                    <InertiaLink
                        className="btn-stripped-sm"
                        href={links.edit}>
                        <IconPen/>
                        Edit
                    </InertiaLink>
                }
            </div>

            <div className="form-group profile-body">
                <div className="form-group-flex">
                    <div className="form-element-half">
                        <h3>Name</h3>
                        <p>{event.name}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Place</h3>
                        <p>{event.place}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Date</h3>
                        <p>{event.date}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Category</h3>
                        <p>{CATEGORIES[event.category_id]}</p>
                    </div>
                    <div className="form-element-full">
                        <h3>Organized by</h3>
                        <p>{event.organization_name}</p>
                    </div>
                    <div className="form-element-full">
                        <h3>Description</h3>
                        <p>{event.description}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Guide</h3>
                        <p>{event.guide}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Contact</h3>
                        <p>{event.contact}</p>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
}
