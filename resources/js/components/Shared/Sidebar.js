import React, {Component} from 'react';
import {Link} from "../utils";
import {withTranslation} from 'react-i18next';
import {IconBurger} from "../Icons";
import {IconAddressBook, IconMenuDashboard, IconStarFilled} from "../Icons/Icons";
import {ROLE, ROLES} from "./Constants";

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
                        <li>
                            <Link href={this.props.menu.links.activities}>
                                <div className="side-menu-nav-categories-icon">
                                    <IconStarFilled/>
                                </div>
                                <div className="side-menu-nav-categories-label">
                                    {isAdmin ? <span>All activities</span> : <span>My activities</span>}
                                </div>
                            </Link>
                        </li>

                    </ul>
                        {/*<Can perform="access phonebook">*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <div className="side-menu-nav-categories-prime">*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconAddressBook/>*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("phonebook.label.phonebook")}</span>*/}

                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <ul className="side-menu-nav-categories-sub">*/}
                        {/*            <li>*/}
                        {/*                <Link href={this.props.menu.links.phonebook} data={{tab: "individuals"}}>*/}
                        {/*                    <span>{t("user.label.individuals")}</span>*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href={this.props.menu.links.phonebook} data={{tab: "companies"}}>*/}
                        {/*                    <span>{t("company.label.companies")}</span>*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </li>*/}
                        {/*</Can>*/}
                        {/*<li className="side-menu-nav-categories-extended">*/}
                        {/*    <Link href={this.props.menu.links.projects}>*/}
                        {/*        <div className="side-menu-nav-categories-icon">*/}
                        {/*            <FontAwesomeIcon icon={faFolder}/>*/}
                        {/*        </div>*/}
                        {/*        <div className="side-menu-nav-categories-label">*/}
                        {/*            <span>{t("project.label.projects")}</span>*/}
                        {/*        </div>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*{can('listMissions', auth) &&*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <Link href={this.props.menu.links.missions}>*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconMission/>*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("mission.page.missions")}</span>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*}*/}
                        {/*<Can perform="list mail templates">*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <Link href={this.props.menu.links.mail_templates}>*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconMailTemplate />*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("mail.page.mail-templates")}</span>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*</Can>*/}
                        {/*<Can perform="view meeting calendar">*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <Link href={this.props.menu.links.meeting_calendar}>*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconCalendar2 />*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("meeting.title.my-calendar")}</span>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*</Can>*/}
                        {/*<Can perform="show products">*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <Link href={this.props.menu.links.products}>*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconProduct />*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("product.title.products")}</span>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*</Can>*/}
                        {/*<Can perform="list expenses">*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <Link href={this.props.menu.links.expenses}>*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconWallet />*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("bill.title.expenses")}</span>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*</Can>*/}
                        {/*<Can perform="list services">*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <Link href={this.props.menu.links.services}>*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconExchange />*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("bill.title.services")}</span>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*</Can>*/}
                        {/*<Can perform="list invoices">*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <Link href={this.props.menu.links.invoices}>*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconTicket />*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("invoice.title.invoices")}</span>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*</Can>*/}
                        {/*<Can perform="view profitability">*/}
                        {/*    <li className="side-menu-nav-categories-extended">*/}
                        {/*        <Link href={this.props.menu.links.profitability}>*/}
                        {/*            <div className="side-menu-nav-categories-icon">*/}
                        {/*                <IconChart />*/}
                        {/*            </div>*/}
                        {/*            <div className="side-menu-nav-categories-label">*/}
                        {/*                <span>{t("invoice.title.profitability")}</span>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*</Can>*/}
                    {/*</ul>*/}
                </nav>
            </aside>
        );
    }
}

export default withTranslation()(Sidebar);
