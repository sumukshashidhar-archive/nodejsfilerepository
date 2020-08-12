const enumLog = require("./../controllers/logEnumService")
const delLog = require("./../controllers/downloadLogDeletionService")
module.exports = (app) => {

	app.get('/logs', async function(req, res) {
		console.debug("Logging");
		res.json(await enumLog.enumLogs())
    })
    
    app.get('/deleteLogs', async (req, res) => {
        res.json(await delLog.dropLogs())
    })
}