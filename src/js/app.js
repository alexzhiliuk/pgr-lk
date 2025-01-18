// import * as flsFunctions from './modules/functions.js';

import * as mask from './../libs/phoneMasks/phoneMask.js'
import * as draggable from './../libs/draggable/slider.js'
import * as header from './modules/header.js';
import * as autoWidthInput from './modules/autoWidthInput.js';
import * as infoTitleInput from './modules/infoTitleInput.js';
import * as copy from './modules/copy.js';
import * as details from './modules/details.js';
import * as notifications from './modules/notifications.js';
import * as sidebar from './modules/sidebar.js';
import * as uploader from './modules/uploader.js';

// flsFunctions.isWebp()

$(window).on('load', function () {
    $('#loader').fadeOut('slow');
});

setTimeout(function () {
    $('#loader').fadeOut('slow');
}, 5000);
