import React, {Component} from 'react';
import {Link, route} from "../utils";
import {withTranslation} from 'react-i18next';
import {IconBurger} from "../Icons";
import {IconAddressBook, IconExchange, IconInfo, IconMenuDashboard, IconStarFilled} from "../Icons/Icons";
import {ROLE, ROLES} from "./Constants";
import {InertiaLink} from "@inertiajs/inertia-react";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            isMenuClicked: false,
        };

        this.showHideMenuHover = this.showHideMenuHover.bind(this);
        this.showHideMenuClick = this.showHideMenuClick.bind(this);

    }

    showHideMenuHover(e, showMenu) {
        const {isMenuClicked} = this.state;

        if (!isMenuClicked) {
            this.setState({
                showMenu: showMenu
            })
        }
    }

    showHideMenuClick(e) {
        const {showMenu, isMenuClicked} = this.state;

        this.setState({
            showMenu: isMenuClicked ? false : true,
            isMenuClicked: !isMenuClicked
        })
    }

    render() {
        const {t, children, url, auth, user} = this.props;
        const {showMenu, isMenuClicked} = this.state;
        const sideMenuClass = showMenu ? '' : 'side-menu-closed';
        const isAdmin = auth.user.role_id === ROLE.ADMIN;
        const isSportsman = auth.user.role_id === ROLE.SPORTSMAN;

        return (
            <aside
                onMouseEnter={(e) => this.showHideMenuHover(e, true)}
                onMouseLeave={(e) => this.showHideMenuHover(e, false)}
                id="sideMenu"
                className={`side-menu ${sideMenuClass}`}
            >
                <button
                    id="menuBtn"
                    className="btn-stripped"
                    onClick={(e) => this.showHideMenuClick(e)}
                ><IconBurger/></button>
                <nav className="side-menu-nav">
                    <ul className="side-menu-nav-categories">
                        <li>
                            <Link href={this.props.menu.links.home}>
                                <div className="side-menu-nav-categories-icon">
                                    <IconMenuDashboard/>
                                </div>
                                <div className="side-menu-nav-categories-label">
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                        </li>
                        {isAdmin &&
                            <li>
                                <Link href={this.props.menu.links.users}>
                                    <div className="side-menu-nav-categories-icon">
                                        <IconAddressBook/>
                                    </div>
                                    <div className="side-menu-nav-categories-label">
                                        <span>Users</span>
                                    </div>
                                </Link>
                            </li>
                        }
                        {(isAdmin || isSportsman) &&
                        <li className="side-menu-nav-categories-extended">
                            <div className="side-menu-nav-categories-prime">
                                <div className="side-menu-nav-categories-icon">
                                    <IconStarFilled/>
                                </div>
                                <div className="side-menu-nav-categories-label">
                                    {isAdmin ? <span>Activities</span> : <span>My activities</span>}

                                </div>
                            </div>
                            <ul className="side-menu-nav-categories-sub">
                                <li>
                                    <Link href={this.props.menu.links.activities}
                                          data={{tab: "all"}}>
                                        <span>All Activities</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={this.props.menu.links.activities}
                                          data={{tab: "hike"}}>
                                        <span>Hikes</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={this.props.menu.links.activities}
                                          data={{tab: "bike"}}>
                                        <span>Bikes</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={this.props.menu.links.activities}
                                          data={{tab: "run"}}>
                                        <span>Runs</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        }
                        <li className="side-menu-nav-categories-extended">
                            <Link href={this.props.menu.links.organizations}>
                                <div className="side-menu-nav-categories-icon">
                                    <IconInfo/>
                                </div>
                                <div className="side-menu-nav-categories-label">
                                    <span>Organizations</span>
                                </div>
                            </Link>
                        </li>
                        <li className="side-menu-nav-categories-extended">
                            <Link href={this.props.menu.links.events}>
                                <div className="side-menu-nav-categories-icon">
                                    <IconExchange/>
                                </div>
                                <div className="side-menu-nav-categories-label">
                                    <span>Events</span>
                                </div>
                            </Link>
                        </li>
                    </ul>

                </nav>
            </aside>
        );
    }
}

export default withTranslation()(Sidebar);
