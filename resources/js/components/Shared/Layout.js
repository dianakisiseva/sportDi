import React, { Component } from 'react';
import HeaderPrime from "./HeaderPrime";
import Sidebar from "./Sidebar";
import Footer from './Footer'
import { withToastManager } from 'react-toast-notifications';
import BaseLayout from "./BaseLayout";

class Layout extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const mainContentClassName = this.props.mainContentClassName ? this.props.mainContentClassName : '';

        return (
            <BaseLayout {...this.props}>
                <Sidebar {...this.props}/>
                <HeaderPrime {...this.props}/>

                <div className="container">
                    <div id="mainContent" className={this.props.isRelative?`${mainContentClassName} relative`:mainContentClassName}>
                        <main id="main">
                            {this.props.children}
                        </main>
                    </div>
                </div>
                <Footer {...this.props}/>
            </BaseLayout>
        );
    }
}

export default withToastManager(Layout);
