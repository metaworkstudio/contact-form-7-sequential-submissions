<?php
/*
Plugin Name: Contact Form 7 Sequential Submissions
Plugin URI: https://github.com/metaworkstudio/contact-form-7-sequential-submissions
Description: This plugin prevents double clicks when Contact Form 7 is still submitting the form that causing the multiple submissions consistently.
Version: 1.0.0
Author: MetaworkStudio
Author URI: https://duststone.com
License: GNU General Public License v3
*/

function cf7_no_double_submit_enqueue_scripts()
{
    wp_enqueue_script(
        'cf7-no-double-submit',
        plugins_url('/js/functions.js', __FILE__),
        ['jquery'],
        '1.0.0',
        true
    );

}

add_action('wp_enqueue_scripts', 'cf7_no_double_submit_enqueue_scripts', 0);
