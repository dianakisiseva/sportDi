import React from 'react';
import { useTranslation } from 'react-i18next';
import {InertiaLink} from "@inertiajs/inertia-react";
import {IconPen} from "../../components/Icons/Icons";
import Layout from "../../components/Shared/Layout";
import BackButton from "../../components/BackButton/BackButton";


export default function View(props){
    const { t } = useTranslation();
    const { user, links } = props;
    // const userImage =  !!individual.user?.profile_picture ? `url("${individual.user.profile_picture_url}")` : `url("${IconUserDefault}")`;
    // const showExpertFields = (individual.individual_category_id === props.constants.categories.expert
    //     || individual.individual_category_id === props.constants.categories.mediator)
    //     && can("expert-fields.view", individual)

    return  <Layout {...props}>
        <BackButton
            label='Back to all users'
            link={links.index}
        />
        <div className="container-data profile">
            <div className="container-data-header">
                <h5>My profile</h5>
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
                        <div className="profile-thumb">
                            <img src="/assets/media/various/profile-placeholder.svg" alt="user thumbnail"/>
                        </div>
                    </div>
                    <div className="form-element-half">
                        <div className="form-group-flex">

                            <div className="form-element-full">
                                <h3>First name</h3>
                                <p>{user.first_name}</p>
                            </div><div className="form-element-full">
                            <h3>Last name</h3>
                            <p>{user.last_name}</p>
                        </div>
                            <div className="form-element-full">
                                <h3>Login</h3>
                                <p>{user.login}</p>
                            </div>
                            <div className="form-element-full">
                                <h3>Email</h3>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Layout>
}
