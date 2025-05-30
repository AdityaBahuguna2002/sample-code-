import ApiResponse from "./apiResponse";
const errorHandler = (error) => {
  if (error.status && error.message) {
    const response = new ApiResponse(
      error.status,
      error.error || error.message,
      error.details
    );
    return response.toNextResponse();
  }

  if (error instanceof Error) {
    const response = ApiResponse.serverError(
      error.message,
      process.env.NODE_ENV === 'development' ? error.stack : null
    );
    return response.toNextResponse();
  }

  return ApiResponse.serverError().toNextResponse();
};

export default errorHandler;