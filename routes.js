module.exports = (app) => {


    // unprotected
    require("./routes/core")(app);

    // upload route
    require("./routes/upload")(app);
}