module.exports = (app) => {


    // unprotected
    require("./routes/core")(app);

    // upload route
    require("./routes/upload")(app);

    // download route
    require("./routes/download")(app);


    //auxiliary routes
    require("./routes/auxiliary")(app); 
}