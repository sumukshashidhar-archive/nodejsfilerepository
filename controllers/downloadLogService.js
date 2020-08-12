const log = require("./../models/downloadLog")
module.exports = {
    createLog: async (ip) => {
        const newLog = new log({
            ip: ip
        })

        newLog.save((err, obj) => {
            if(err) {
                console.error(err)
            }
        })
    }
}