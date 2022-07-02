import React from 'react';
import profile from './images/profile-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default function App() {
	return (
		<div className="container">
				<img src={profile} alt="my selfie" className="profile-pic"></img>
			<div className="body--container">
				<h2 className="name">Manan Patel</h2>
				<h4 className="title">Frontend Developer</h4>
				<h5 className="email">Mananpatel6902@gmail.com</h5>
			</div>
			<div className="social--buttons">
				<button>Email</button>
				<button>LinkedIn</button>
			</div>
			<div className="about--container">
				<h4 className="about--title">About</h4>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Commodi, quibusdam nemo dolor dolorum ex aliquam error
					delectus itaque in impedit placeat soluta consectetur magnam
					explicabo, fugiat corporis ut, quam quia.
				</p>
			</div>
			<div className="interests--container">
				<h4 className="interests--title">Interests</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Neque, ad libero iste laudantium assumenda totam quis
					perspiciatis fugit placeat odit amet quaerat asperiores
					voluptas, minus quae, architecto rem porro at?
				</p>
			</div>
			<div className="socials--container">
				<FontAwesomeIcon className="icon" icon={faGithub} />
				<FontAwesomeIcon className="icon" icon={faLinkedin} />
				<FontAwesomeIcon className="icon" icon={faDiscord} />
			</div>
		</div>
	);
}
