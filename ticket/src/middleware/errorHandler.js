const errorHandler = (err, req, res, next) => {
    // console.error(err.stack); // Log the error stack for debugging

    // Set status and send a response with error message
    res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
}

module.exports = {
    errorHandler
}