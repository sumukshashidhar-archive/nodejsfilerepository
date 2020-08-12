const log = require("./../models/downloadLog")

module.exports = {

    dropLogs: async function() {
        return new Promise((res, rej) => {
            log.deleteMany({}, async function(err, obj) {
                if(err) {
                    console.error(err)
                    rej(err)
                }
                else {
                    console.info("Dropped all logs successfully")
                    res({
                        "status":200, 
                        "message":"Successfully deleted all logs"
                    })
                }
            })
        })
    }
}