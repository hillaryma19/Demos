fis.match('*.{js,css,png}',{
	useHarsh: true;
})
fis.match('*.js',{
	optimizer: fis.plugin('clean-css');
})
fis.match('*.css',{
	optimizer: fis.plugin('uglify-js');
})
fis.match('::package',{
	spriter: fis.plugin('csssprites') 
})