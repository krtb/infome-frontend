import React, { Fragment } from 'react'
import { Image } from 'semantic-ui-react'

import NotFoundImg from '../../static/images/404page.png'

const NotFound = () => (
    <Fragment>
        <Image src={NotFoundImg} />
    </Fragment>
)

export default NotFound