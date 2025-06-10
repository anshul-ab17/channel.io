// using promises to handle errors in async functions

const asyncHandler = (requestHandler) => {
    return (req, res, next) => { 
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err)); 
    }
}
export {asyncHandler};



// const asyncHandler = () =>  {} - async function
// const asyncHandler = (fn) => () => {} -- highr-order function
// const asyncHandler = (fn) => async () => {} -- highr-order async function

/*

using try and catch to handle errors in async functions  
const asyncHandler = (fn) => () =>{
    try{
        await fn(res, req, next);
    }catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        });
}


*/