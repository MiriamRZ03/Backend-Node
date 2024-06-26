const errorLogger = (err, req, res, next) => {
    console.error(err.message);
    next(err);
};

module.exports = errorLogger;