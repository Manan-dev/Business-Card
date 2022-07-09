import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<div>
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
