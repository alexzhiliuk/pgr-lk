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
import * as input from './modules/input.js';
import * as toggle from './modules/toggle.js';
import * as gallery from './modules/gallery.js';
import * as rangeInput from './modules/rangeInput.js';
import * as showcase from './modules/showcase.js';
import * as select from './modules/select.js';
import * as promo from './modules/promo.js';
import * as mortgages from './modules/mortgages.js';
import * as tooltip from './modules/tooltip.js';
import * as calendar from './modules/calendar.js';

// flsFunctions.isWebp()

$(window).on('load', function () {
    $('#loader').fadeOut('slow');
});

setTimeout(function () {
    $('#loader').fadeOut('slow');
}, 5000);
