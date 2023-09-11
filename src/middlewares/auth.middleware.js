import { HttpException } from '../exceptions/HttpException.js';
import User from '../models/user.models.js';
import { verifyToken } from '../util/jwt.util.js';

export const isAuth = async (req, res, next) => {
  const token = req.headers['authorization']
    ? req.headers['authorization'].split('Bearer ')[1]
    : null;

  if (!token) {
    next(new HttpException(404, 'Authentication token missing'));
  } else {
    const { decoded, expired } = verifyToken(token);

    if (expired) {
      next(new HttpException(404, 'Expired token, Unauthorized user'));
    }
    const user = await User.findById(decoded?._id);

    if (!user) {
      next(new HttpException(404, 'User not Found, Unauthorized user'));
    }
    req.user = { _id: user?._id, handle: user?.handle };
    next();
  }
};
