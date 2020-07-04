const path = require('path');

const currentDir = __dirname;

const config = {
	watchFolders: [
		// To allow finding files outside mobile
		path.resolve(currentDir, '..'),
  ],
  
  resolver: {
		extraNodeModules: {
			//'styled-components': path.resolve(__dirname, 'node_modules/styled-components')
		},
	}
};

module.exports = config;