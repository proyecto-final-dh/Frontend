declare global {
  type TAPIResponse<T, S> = {
    httpStatusCode: number;
    message: string;
    data: T;
    errors: S;
  };
}
export {};
