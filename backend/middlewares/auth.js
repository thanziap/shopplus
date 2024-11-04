import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErros from "./catchAsyncErros.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

//Checks if user is authenticated or not
export const isAuthenticatedUser = catchAsyncErros(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);

  if (!token) {
    return next(new ErrorHandler("Login first to access this resource", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  next();
});
// Authorize user Roles
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role (${req.user.role}) is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
