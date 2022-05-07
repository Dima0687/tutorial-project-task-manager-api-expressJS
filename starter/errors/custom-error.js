

class CustomAPIError extends Error {
  constructor(message, statusCode){
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
}

export { createCustomError, CustomAPIError }

// Bad Request 404, Internal Server Error 500, (StatusCode alles geklappt)OK 200