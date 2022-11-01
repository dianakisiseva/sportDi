import React from 'react';
import { useTranslation, withTranslation} from 'react-i18next';
import {Link} from "../utils";

const  Footer = (props) =>{
    const { t } = useTranslation();

        return (
            <>
            {
                (props.url.current!=="general-conditions")?
                <footer id="footer" className="footer">

                </footer>
                :null
            }
            </>
        );
}

export default withTranslation()(Footer);
