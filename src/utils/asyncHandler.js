import errorHandler from "./errorHandler";

const asyncHandler = (func) => {
  return async (req) => {
    try {
      const result = await func(req);
      
      if (result?.status && result?.json) {
        return result;
      }
      
      return result.toNextResponse();
      
    } catch (err) {
      console.error('AsyncHandler Error:', err);
      return errorHandler(err);
    }
  }
}

export default asyncHandler;