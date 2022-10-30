import React, {useState} from 'react';
import { Link } from "../utils";

// import Axios from 'axios';

import { Inertia } from '@inertiajs/inertia';
import { useTranslation } from 'react-i18next';
// import {can} from "@/utils/permissions";
import { InertiaLink } from '@inertiajs/inertia-react';
import {IconLogout} from "../Icons/Icons";
import DropdownMenu from "../Utility/DropdownMenu";
import {selectOptions, selectValue} from "../utils/select_options";
import Logo from "../../../assets/media/logos/sportDi-logo.png";
import LogoWide from "../../../assets/media/logos/sportDi-logo-wide.png";
import { IconProfile} from "../Icons";
import IconEye from "../Icons/IconEye";

export default function HeaderPrime({url, localization, auth, menu}) {

    const {t} = useTranslation();
    const isLoggedIn = (auth && auth?.user !== undefined);
    const isMenuExpanded = !isLoggedIn || url.current === 'home';
    const brandLogo = isMenuExpanded ? Logo : LogoWide;

    return (
        <header id="primeHeader" className={isMenuExpanded ? 'prime-header-full' : ''}>
            <div className="container">
                <div className="user-options">
                    { isLoggedIn && <>
                        <ul className="user-options-quicklinks">
                            <li>
                                <Link href={menu?.links.my_profile}>
                                    <IconEye />
                                    <span>My Profile</span>
                                </Link>
                            </li>
                        </ul>
                    </>
                    }
                    { isLoggedIn && <InertiaLink
                        className="logout btn-stripped"
                        href="/logout" method="get" as="button"><IconLogout /></InertiaLink>}
                </div>
            </div>

            <div className="branding">
                <div className="container">
                    <Link className="branding-logo" href="/" url={url}>
                        <img src={brandLogo} alt="Logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}


