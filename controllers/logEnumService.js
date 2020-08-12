const log = require("./../models/downloadLog")

module.exports = {

    enumLogs: async function() {
        return new Promise((res, rej) => {
            log.find({}, async function(err, obj) {
                if(err) {
                    console.error(err)
                    rej(err)
                }
                else {
                    console.info("Got all logs successfully")
                    res({"status":200, "obj":obj})
                }
            })
        })
    }
}