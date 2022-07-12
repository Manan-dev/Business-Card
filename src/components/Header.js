import React from 'react';
import profile from '../images/profile-pic.jpg';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
	const goToEmail = () => window.open('mailto:mananpatel6902@gmail.com');
	return (
		<div>
			<img src={profile} alt="my selfie" className="profile-pic"></img>
			<div className="body--container">
				<h2 className="name">Manan Patel</h2>
				<h4 className="title">
					Student at{' '}
					<a
						href="https://www.utk.edu"
						target="_blank"
						rel="noreferrer"
					>
						UTK
					</a>
				</h4>
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
			</div>
		</div>
	);
}
