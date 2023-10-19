// 404 not found handler
const createError=require("http-errors")
function notFoundHandler(req,res,next){
   next(createError(404,"your requested content was not found !"));
}

// default error handler
function errorHandler(err,req,res,next){
    // res.json({

    // });
    res.render("error",{
        title:"Error page",
    })
}

module.exports={
    notFoundHandler,
    errorHandler,
}