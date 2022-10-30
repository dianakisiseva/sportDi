import React from 'react';
import { useTranslation } from 'react-i18next';
import {InertiaLink} from "@inertiajs/inertia-react";
import {IconPen} from "../../components/Icons/Icons";
import Layout from "../../components/Shared/Layout";
import BackButton from "../../components/BackButton/BackButton";
import {ROLE} from "../../components/Shared/Constants";


export default function View(props){
    const { user, links, auth } = props;
    const isAdmin = auth.user.role_id === ROLE.ADMIN;

    return  <Layout {...props}>
        {isAdmin &&
            <BackButton
                label='Back to all users'
                link={links.index}
            />
        }
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
                            <img src={user.photo_url}  alt="user thumbnail"/>
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
