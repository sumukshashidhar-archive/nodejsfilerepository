module.exports = (app) => {
    app.get('/download', (req, res)=> {
        console.log(req.query.filename)
        file = './uploads/' + req.query.filename
        res.download(file);
    })
}