import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  let error = {
    statusCode: err?.statusCode || 500,
    message: err?.message || "Internal Server Error",
  };

  // Handle invalid Mongoose ID error
  if (err.name === "CastError") {
    const message = `Resource not found.Invalid:${err?.path}`;
    error = new ErrorHandler(message, 400);
  }
  // Handle validation  error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }
  // Handle MOngoose duplicate key  error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered.`;
    error = new ErrorHandler(message, 400);
  }

  // Handle wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON Web Token is invalid. Try Again!`;
    error = new ErrorHandler(message, 400);
  }
  // Handle expired jwt error
  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token is expired. Try Again!!`;
    error = new ErrorHandler(message, 400);
  }
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(error.statusCode).json({
      message: error.message,
      error: err,
      stack: err?.stack,
    });
  }
  if (process.env.NODE_ENV === "PRODUCTION") {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};
