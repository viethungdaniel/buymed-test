import type { CancelToken, RawAxiosRequestHeaders } from "axios";

type Payload = {
  cancelToken?: CancelToken;
  headers?: RawAxiosRequestHeaders;
};

export type FetchProductsPayload = {
  params?: {
    search?: string;
    category?: string;
  };
} & Payload;
export type FetchProductsResponseData = {
  id: number;
  name: string;
  price: number;
  category: string;
  isPrescription: boolean;
}[];
