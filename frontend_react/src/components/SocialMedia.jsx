// snippet 'rsc'
import React from 'react';
import {BsLinkedin, BsGithub} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://www.linkedin.com/in/shihua-xie-136282197' target='_blank' rel='noreferrer'>
                    <BsLinkedin/>
                </a>
            </div>
            <div>
                <a href='https://github.com/shihuaxie' target='_blank' rel='noreferrer'>
                    <BsGithub/>
                </a>
            </div>
            <div>
                <FaFacebook/>
            </div>
        </div>
    );
};

export default SocialMedia;