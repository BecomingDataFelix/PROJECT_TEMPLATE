export class HttpError extends Error {
  public statusCode: number;
  public message: string;
  public details?: any;

  constructor(statusCode: number, message: string, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.details = details;

    // Set the prototype explicitly to maintain instance type
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}