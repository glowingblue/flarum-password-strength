<?php

/**
 * Password Strength Indicator for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    glowingblue/password-strength
 * @author     Hasan Özbey <hasanoozbey@gmail.com>, Rafael Horvat <rafael.horvat@icloud.com>
 * @copyright  2021
 * @license    The MIT License
 * @version    Release: 1.0.2
 * @link       https://github.com/glowingblue/flarum-ext-password-strength
 */

namespace GlowingBlue\PasswordStrength;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/less/admin.less')
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    function (Dispatcher $events) {
        $events->subscribe(Listeners\LoadSettings::class);
    },
];
