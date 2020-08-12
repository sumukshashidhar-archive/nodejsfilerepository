const log = require("./../controllers/downloadLogService")
module.exports = async (app) => {
    app.get('/download', (req, res)=> {
        console.log(req.query.filename)
        file = './uploads/' + req.query.filename
        log.createLog(req.ip)
        res.download(file);
    })
}