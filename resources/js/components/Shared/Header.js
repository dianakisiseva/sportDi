import React, { Component } from 'react';
import { withToastManager } from "react-toast-notifications";
import { withTranslation } from 'react-i18next';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { t, page_name, url } = this.props;

        return (
                <header id="header">
                    <div className="header">
                        <h1>{t("common.title.welcome")}</h1>
                    </div>
                </header>
        );
    }
}

export default withTranslation()(withToastManager(Header));
