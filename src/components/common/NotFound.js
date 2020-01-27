import React, { Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'

import NotFoundImg from '../../static/images/404page.png'

const NotFound = () => (
    <Fragment>
        {/* <Header size="huge" inverted color="purple">
            Page Not Found lol
        </Header> */}
        <Image src={NotFoundImg} />
    </Fragment>
)

export default NotFound