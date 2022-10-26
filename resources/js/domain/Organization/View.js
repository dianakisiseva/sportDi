import React from 'react';
import {useTranslation} from 'react-i18next';
import {InertiaLink} from "@inertiajs/inertia-react";
import {IconPen} from "../../components/Icons/Icons";
import Layout from "../../components/Shared/Layout";
import {CATEGORIES, ROLE} from "../../components/Shared/Constants";
import BackButton from "../../components/BackButton/BackButton";


export default function View(props) {
    const {t} = useTranslation();
    const {activity, auth, links} = props;
    // const userImage =  !!individual.user?.profile_picture ? `url("${individual.user.profile_picture_url}")` : `url("${IconUserDefault}")`;
    // const showExpertFields = (individual.individual_category_id === props.constants.categories.expert
    //     || individual.individual_category_id === props.constants.categories.mediator)
    //     && can("expert-fields.view", individual)

    return <Layout {...props}>
        <BackButton
            label='Back to all activities'
            link={links.index}
        />
        <div className="container-data profile">
            <div className="container-data-header">
                {auth.user.role_id === ROLE.ADMIN ?
                    <h5>Show activity</h5> :
                    <h5>My activity</h5>
                }
                <InertiaLink
                    className="btn-stripped-sm"
                    href={links.edit}>
                    <IconPen/>
                    Edit
                </InertiaLink>
            </div>


            <div className="form-group profile-body">
                <div className="form-group-flex">
                    <div className="form-element-half">
                        <h3>Name</h3>
                        <p>{activity.name}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Place</h3>
                        <p>{activity.place}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Category</h3>
                        <p>{CATEGORIES[activity.category_id]}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Date</h3>
                        <p>{activity.date}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Distance</h3>
                        <p>{activity.distance}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Elevation</h3>
                        <p>{activity.elevation}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Proximal duration</h3>
                        <p>{activity.proximal_duration}</p>
                    </div>
                    <div className="form-element-half">
                        <h3>Personal time</h3>
                        <p>{activity.personal_time}</p>
                    </div>
                    {activity.organization_id && <>
                        <div className="form-element-half">
                            <h3>Organized by</h3>
                            <p>{activity.organization_id}</p>
                        </div>
                    </>
                    }
                    <div className="form-element-half">
                        <h3>Description</h3>
                        <p>{activity.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
