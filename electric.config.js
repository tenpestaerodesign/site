'use strict';

var marble = require('marble');

module.exports = {
	metalComponents: ['electric-marble-components', 'marble-topbar'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	vendorSrc: ['node_modules/marble/build/fonts/**'],
	deployOptions: {
		branch: 'wedeploy'
	},
	apiConfig: {
		project: {
			refs: ['electric@2.4.1'],
			repo: 'site',
			user: 'tenpestaerodesign',
			src: 'src/'
		}
	}
};
