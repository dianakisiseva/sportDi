import React, { Component } from 'react';
import { InertiaApp } from '@inertiajs/inertia-react';
import { ToastProvider, DefaultToastContainer } from 'react-toast-notifications';
import setLocalization from '../utils/i18n';

export const MyCustomToastContainer = props => (
    <DefaultToastContainer className={'toast-container'} {...props}/>
);

const BatilexToast = (props) => {
    return (
        <div className={`toast toast-${props.appearance}`}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            <div className="toast-content">
                {props.children}
            </div>

            <div className="toast-dismiss">
                <button className="btn-close" onClick={props.onDismiss}/>
            </div>
        </div>
    );
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.page = JSON.parse(app.dataset.page);
        if (this.page.props.localization) {
            setLocalization(this.page.props.localization);
        }
    }

    render() {
        return (
            <ToastProvider
                autoDismissTimeout={6000}
                components={{ ToastContainer: MyCustomToastContainer, Toast: BatilexToast }}>
            <InertiaApp
                initialPage={this.page}
                transformProps={props => {
                    setLocalization(props.localization);
                    return props;
                }}
                resolveComponent={name => import(`@/Pages/${name}`).then(module => module.default)}
            />
            </ToastProvider>
        )
    }
}
