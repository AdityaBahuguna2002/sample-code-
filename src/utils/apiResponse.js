import { NextResponse } from "next/server";

class ApiResponse {
  constructor(status, message, data = null) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = status < 400;
    this.timestamp = new Date().toISOString();
  }

  // Success responses
  static success(message, data = null) {
    return new ApiResponse(200, message, data);
  }

  static created(message, data = null) {
    return new ApiResponse(201, message, data);
  }

  // Client error responses
  static badRequest(message = "Bad Request", details = null) {
    const response = new ApiResponse(400, message);
    if (details) response.details = details;
    return response;
  }

  static unauthorized(message = "Unauthorized") {
    return new ApiResponse(401, message);
  }

  static forbidden(message = "Forbidden") {
    return new ApiResponse(403, message);
  }

  static notFound(message = "Not Found") {
    return new ApiResponse(404, message);
  }

  static conflict(message = "Conflict") {
    return new ApiResponse(409, message);
  }

  // Server error responses
  static serverError(message = "Internal Server Error", details = null) {
    const response = new ApiResponse(500, message);
    if (details) response.details = details;
    return response;
  }

  static serviceUnavailable(message = "Service Unavailable") {
    return new ApiResponse(503, message);
  }

  // Convert to NextResponse
  toNextResponse() {
    return NextResponse.json(this, { status: this.status });
  }
}

export default ApiResponse;