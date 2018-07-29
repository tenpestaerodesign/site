'use strict';

var marble = require('marble');

module.exports = {
	metalComponents: ['electric-marble-components', 'marble-topbar'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	vendorSrc: ['node_modules/marble/build/fonts/**', 'src/ga.js' , 'https://www.googletagmanager.com/gtag/js?id=UA-123067527-1'],
	deployOptions: {
		branch: 'wedeploy'
	}
};
