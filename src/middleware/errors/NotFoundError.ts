import { HttpError } from './HttpError';

export class NotFoundError extends HttpError {
  constructor(message: string = 'Not Found', details?: string) {
    super(404, message, details);
  }
}