import React, {Fragment} from 'react';
// IMAGES
import voteImg from '../../static/images/voting.svg'
import hammerImg from '../../static/images/hammer.png'
import certImg from '../../static/images/certificate.png'
import tvImg from '../../static/images/tv.png'


import { Jumbotron, Button, Card, Image } from 'react-bootstrap'

const Blurb = () => {
    return (
        <Fragment>
        
        {/* CONTAINER */}
        <div id="the-jumbo-container">

            {/* JUMBOTRON */}
            <Jumbotron id="the-jumbo">
                
                <h1>Be self-aware. Be involved. Be informed. InfoMe </h1>

                    <p class="excerpt">
                    Easily discover the
                    newest laws being introduced into the House by Congress and the Senate.
                    </p>

                    <p class="excerpt">
                    Quickly save bills to track their progress on the road to becoming laws.
                    And coming soon, get updated as bills go through progress through their creation life-cycle!
                    </p>

            </Jumbotron>

            <Image src={voteImg} fluid />

        </div>



        {/* CARDS ROW */}
        <div id="inner-jumbo-row">

            {/* CARDS ITEMS */}
           <div id="inner-jumbo-row-items">

                <Card style={{ width: '18rem' }} id="landing-card">
                        <Card.Img variant="top" src={hammerImg}  />
                <Card.Body>
                    <Card.Title>More Justice</Card.Title>
                    <Card.Text>
                    Have you seen people arguing about H.R.3624? Do you want to Learn more
                    about what that's even about? This is the place.
                    </Card.Text>
                </Card.Body>
                </Card>
           </div>

           <div id="inner-jumbo-row-items">
                <Card style={{ width: '18rem' }} id="landing-card">
                        <Card.Img variant="top" src={certImg} id="landing-card-img" />
                <Card.Body>
                    <Card.Title>More Knowledge</Card.Title>
                    <Card.Text>
                    Read the actual Bills coming out of capital hill. No second hand interpratation needed as 
                    you save bills you consider to be positive, or concerning, for later reading or sharing.
                    </Card.Text>
                </Card.Body>
                </Card>
           </div>

           <div id="inner-jumbo-row-items">
                <Card style={{ width: '18rem' }} id="landing-card">
                        <Card.Img variant="top" src={tvImg} />
                <Card.Body>
                    <Card.Title>Less Noise</Card.Title>
                    <Card.Text>
                    It's hard to discern what's coming from a valid source or not in today's political climate.
                    With the help of InfoMe, you can go straight to the facts.
                    </Card.Text>
                </Card.Body>
                </Card>
           </div>
           </div>

        </Fragment>
    );
}

export default Blurb;
