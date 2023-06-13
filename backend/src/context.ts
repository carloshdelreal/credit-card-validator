import jwt from 'jsonwebtoken';
import { JwtUser } from './types';

const { JWT_SECRET } = process.env;

export const appSecret = Buffer.from(JWT_SECRET, 'base64');

export const getJwtUser = (request): JwtUser => {
  const token = request.headers.authorization;

  if (!token) {
    throw new Error('You are not logged in. Please log in and try again.');
  }

  return jwt.verify(token, appSecret);
};