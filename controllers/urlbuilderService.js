const getFiles = require("./getFilesService");
const baseURL = process.env.baseURL + "download?filename="
module.exports = {


    getUrls: async () => {
        return new Promise(async (res, rej) => {
            var filelist = await getFiles.getFiles();
            var fileJSONarray = []
            for(let i=0; i<filelist.length; i++) {
                var fileJSON = {
                    "name":filelist[i],
                    "url":baseURL+filelist[i]
                }
                fileJSONarray.push(fileJSON)
            }
            res(fileJSONarray)
        })
    }
}