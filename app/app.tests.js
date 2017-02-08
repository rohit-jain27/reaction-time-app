import 'babel-core/polyfill';

var context = require.context('.', true, /-test\.jsx?$/);
context.keys().forEach(context);
