const multer = require("multer")
const path = require("path") 
module.exports = (app) => {
    var storage = multer.diskStorage({ 
        destination: function (req, file, cb) { 
      
            // Uploads is the Upload_folder_name 
            cb(null, "uploads") 
        }, 
        filename: function (req, file, cb) { 
          cb(null, file.originalname) 
        } 
      }) 

      var upload = multer({  
        storage: storage, 
        fileFilter: function (req, file, cb){ 
            
            if (true) { 
                return cb(null, true); 
            } 

          }  
      
    // mypic is the name of file attribute 
    }).single("mypic"); 


    app.get('/upload', (req, res)=> {
        res.render('upload')
    })

    app.post('/uploadFile', (req, res) => {
        upload(req,res,function(err) { 
            if(err) { 
                res.send(err) 
            } 
            else { 
                // SUCCESS,successfully uploaded 
                res.json({
                    "status":200, 
                    "message":"Uploaded Successfully"
                })
            } 
        }) 
    })
}