import type { CancelToken, RawAxiosRequestHeaders } from "axios";

type Payload = {
  cancelToken?: CancelToken;
  headers?: RawAxiosRequestHeaders;
};

export type FetchCategoriesPayload = Payload;
export type FetchCategoriesResponseData = {
  id: number;
  name: string;
  price: number;
  category: string;
  isPrescription: boolean;
}[];
