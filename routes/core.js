const getUrls = require("./../controllers/urlbuilderService")
module.exports = (app) => {

	app.get('/', async function(req, res) {
		console.debug("Hit the homepage");
		res.render('land', {files: await getUrls.getUrls()})
	})

	app.get('/internalError', async function(req, res) {
		console.error("Hit the internal error page")
		res.render('internal-error')
	})
}