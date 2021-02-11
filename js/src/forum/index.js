/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';
import { extend } from 'flarum/extend';
import LogInModal from 'flarum/components/LogInModal';
import SignUpModal from 'flarum/components/SignUpModal';
import Stream from 'flarum/utils/Stream';
import { slug } from '../common';
import LogInPasswordField from './components/LogInPasswordField';
import SignUpPasswordField from './components/SignUpPasswordField';

app.initializers.add(slug, () => {
	function extendOninit() {
		this.showingPassword = new Stream(false);
	}
	extend(LogInModal.prototype, 'oninit', extendOninit);
	extend(SignUpModal.prototype, 'oninit', extendOninit);

	extend(LogInModal.prototype, 'fields', function (items) {
		if (app.forum.attribute(`${slug}.enablePasswordToggle`)) {
			items.replace(
				'password',
				<LogInPasswordField showingPassword={this.showingPassword.bind(this)} />,
				20
			);
		}
	});

	extend(SignUpModal.prototype, 'fields', function (items) {
		if (!this.attrs.token) {
			items.replace(
				'password',
				<SignUpPasswordField showingPassword={this.showingPassword.bind(this)} />,
				10
			);
		}
	});
});
