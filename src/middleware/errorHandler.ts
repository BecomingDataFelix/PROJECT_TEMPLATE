import { Request, Response, NextFunction } from 'express';
import { HttpError } from './errors/HttpError';

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const details = err.details || {};

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    details,
  });
};
