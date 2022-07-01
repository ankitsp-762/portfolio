import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Social = () => {
  return (
    <div className='social'>
        <a href="https://www.linkedin.com/in/ankit-singh-patel-b7453a219" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ankitsp-762" target="_blank"><BsGithub /></a>
        {/* <a href="#" target="_blank"></a> */}

    </div>
  )
}

export default Social