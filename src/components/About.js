import React, { Component } from 'react'
import Title from './Title';
import {StyledContainer} from './Container';

export default class About extends Component {
    render() {
        return (
            <div>
                <StyledContainer>
                <Title name="CBD Royale"></Title>
                <div className='col-10 mx-auto my-2 text-center' >
                    <h3>A Colorado company for a healthy life.</h3>
                    <p>We are a Colorado company seeking a healthy life, but we all know life can be seen many ways. A way-of-life needs tending too. Let our CBD Royale team members research, develop and test the best and most "down to Earth" ways. Let the experience and kindness of the CBD Royale team help heal your pain.</p>
                    <br></br>
                        <p>Our vision is for the daily use of hemp, and education learned. Let us be your guide. </p>
                        <br></br>
                    <div className='col-10 mx-auto my-2 text-justify'>
                    <p>People are seeing benefits from using our products for:</p>
                        <li>Pain Relief</li>
                        <li>Cancer Therapies</li>
                        <li>Alzheimer Treatments</li>
                        <li>PTSD and Anti-Depressants</li>
                        <li>Anti-Psychotic treatment</li>
                        <li>Parkinsons and Epilepsy</li>
                        <li>Multiple Sclerosis</li>
                        <li>Dietary and Diabetic Management</li>
                        <li>Chiropractic and Massage</li>
                        <li>and much more!</li>
                        <br></br>
                    <p>Medicinal Properties that CBD use has been linked to:</p>
                        <li>Anti-inflammatory</li>
                        <li>Anti-convulsant</li>
                        <li>Anti-oxidant</li>
                        <li>Anti-emetic</li>
                        <li>Anti-tumor</li>
                        <li>Anti-depressant</li>
                    </div>
                    <div className='col-10 mx-auto my-2 text-center'>
                        <h3>Can my pets have hemp products?</h3>
                        <p>Pets are an integral part of our life and our families. When they hurt, you hurt. Studies have shown positive benefits of CBD hemp products on pets' health. It is a nice, natural option to keep your pets feeling great!
                        </p>
                    </div>
                </div>
                </StyledContainer>
            </div>
        )
    }
}
