import React, { Fragment } from 'react';

const Footer = (props) => {
    return (
        <Fragment>
            <hr />
            <center>
                <h3>&Copy; Edureka Ltd. {props.year} {props.month}</h3>
            </center>
        </Fragment>

    )

}

export default Footer;