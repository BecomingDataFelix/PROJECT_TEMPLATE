import { HttpError } from './HttpError';

export class ValidationError extends HttpError {
  constructor(message: string = 'Validation Error', details?: string) {
    super(400, message, details);
  }
}