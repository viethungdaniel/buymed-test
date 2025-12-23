export type AxiosResponseData<D = any> = {
  params: D;
  status: boolean;
  message: string;
  isCancelled?: boolean;
};
