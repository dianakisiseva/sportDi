import React, { Component } from 'react';
import HeaderPrime from './HeaderPrime';
import BaseLayout from "./BaseLayout";
class PublicLayout extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <BaseLayout {...this.props}>
                <HeaderPrime {...this.props}/> {/* remove if error page */}
                <div className="container-public">
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </BaseLayout>
        );
    }
}

export default PublicLayout;
