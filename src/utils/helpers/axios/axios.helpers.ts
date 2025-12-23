export const checkRequestSuccess = (response: any) => {
  return !!response?.status;
};

export const checkRequestInvalidToken = (response: any) => {
  return !!response?.status;
};

export const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || error.message;
};
