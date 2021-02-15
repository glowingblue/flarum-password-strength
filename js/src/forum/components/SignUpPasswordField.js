/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Component from 'flarum/Component';
import Stream from 'flarum/utils/Stream';
import extractText from 'flarum/utils/extractText';
import zxcvbn from 'zxcvbn';
import EyeButton from './EyeButton';
import StrengthIndicator from './StrengthIndicator';
import { slug } from '../../common';

// Make translation calls shorter
const t = app.translator.trans.bind(app.translator);
const prfx = `${slug}.forum.strengthLabels`;
// Make settings accessible easier
const settings = (key) => app.forum.attribute(`${slug}.${key}`);

export default class SignUpPasswordField extends Component {
	oninit(vnode) {
		super.oninit(vnode);

		this.strengthLabel = new Stream('');
		this.passwordScore = new Stream(undefined);
		this.strengthColor = new Stream('');
	}

	view() {
		const { showingPassword } = this.attrs;

		return (
			// This markup is copied from `flarum/components/LogInModal` and then
			// some things have been added.
			// !!! Please check for updates regularly !!!

			<div className='Form-group PasswordField'>
				<input
					className={`FormControl ${settings('enablePasswordToggle') ? 'togglable' : ''}`}
					name='password'
					type={showingPassword() ? 'text' : 'password'}
					placeholder={extractText(t('core.forum.sign_up.password_placeholder'))}
					bidi={this.password}
					disabled={this.loading}
					oninput={this.inputHandler.bind(this)}
					style={{
						color:
							settings('enableInputColor') && !showingPassword()
								? this.strengthColor()
								: undefined,
						borderColor: settings('enableInputBorderColor')
							? this.strengthColor()
							: undefined,
					}}
				/>

				{settings('enablePasswordToggle') ? <EyeButton showing={showingPassword} /> : null}

				<StrengthIndicator
					score={this.passwordScore()}
					label={this.strengthLabel()}
					color={this.strengthColor()}
				/>
			</div>
		);
	}

	inputHandler(e) {
		const password = e.target.value;

		if (password) {
			// Get the score of the password strength
			let { score } = zxcvbn(password);
			this.passwordScore(score);

			// Define strength color & label
			switch (score) {
				case 0:
				case 1:
					this.strengthLabel(t(`${prfx}.weak`));
					this.strengthColor(`rgb(${settings('weakColor')})`);
					break;

				case 2:
				case 3:
					this.strengthLabel(t(`${prfx}.medium`));
					this.strengthColor(`rgb(${settings('mediumColor')})`);
					break;

				case 4:
					this.strengthLabel(t(`${prfx}.strong`));
					this.strengthColor(`rgb(${settings('strongColor')})`);
					break;
			}
		} else {
			this.passwordScore(undefined);
			this.strengthLabel('');
			this.strengthColor(undefined);
		}
	}
}
