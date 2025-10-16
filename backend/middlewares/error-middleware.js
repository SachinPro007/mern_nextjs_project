const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "backend Error"

  return res.status(status).json({message, errors: err})
}

module.exports = errorMiddleware