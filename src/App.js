import React from 'react';
import profile from './images/profile-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function App() {
	const goToEmail = () => window.open('mailto:mananpatel6902@gmail.com');
	return (
		<div className="container">
			<img src={profile} alt="my selfie" className="profile-pic"></img>
			<div className="body--container">
				<h2 className="name">Manan Patel</h2>
				<h4 className="title">Frontend Developer</h4>
			</div>
			<div className="social--buttons">
				<div className="email--button" onClick={goToEmail}>
					<FontAwesomeIcon
						className="email--icon"
						icon={faEnvelope}
					/>
					Email
				</div>
				<a
					href="https://www.linkedin.com/in/manan-dev/"
					target="_blank"
					rel="noreferrer"
					className="linkedin--button"
				>
					<FontAwesomeIcon
						className="linkedin--icon"
						icon={faLinkedin}
					/>
					LinkedIn
				</a>
				{/* <button className="linkedin--button">
					
					LinkedIn
				</button> */}
			</div>
			<div className="about--container">
				<h4 className="about--title">About Me</h4>
				<p className="about--description">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Commodi, quibusdam nemo dolor dolorum ex aliquam error
					delectus itaque in impedit placeat soluta consectetur magnam
					explicabo, fugiat corporis ut, quam quia.
				</p>
			</div>
			<div className="interests--container">
				<h4 className="interests--title">Interests</h4>
				<p className="interests--description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Neque, ad libero iste laudantium assumenda totam quis
					perspiciatis fugit placeat odit amet quaerat asperiores
					voluptas, minus quae, architecto rem porro at?
				</p>
			</div>
			<div className="socials--container">
				<a
					href="https://github.com/manan-dev"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						className="icon icon--secondary"
						icon={faGithub}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/manan-dev/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon className="icon" icon={faLinkedin} />
				</a>
				<a
					href="https://discordapp.com/users/407339303421870080/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						className="icon icon--secondary"
						icon={faDiscord}
					/>
				</a>
			</div>
		</div>
	);
}
