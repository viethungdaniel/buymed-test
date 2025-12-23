import { commonAxios } from "@/libs";
import Fuse from "fuse.js";

import type {
  FetchProductsPayload,
  FetchProductsResponseData,
} from "./product.api.types";
import type { AxiosResponseData } from "@/libs/axios";
import { commonHelpers } from "@/utils/helpers";

const productApi = {
  fetchProducts: async (payload: FetchProductsPayload) => {
    await commonHelpers.sleep(500);
    let products = [
      {
        id: 1,
        name: "Paracetamol 500mg",
        price: 15000,
        category: "Pain Relief",
        isPrescription: false,
      },
      {
        id: 2,
        name: "Amoxicillin 500mg",
        price: 45000,
        category: "Antibiotic",
        isPrescription: true,
      },
      {
        id: 3,
        name: "Vitamin C 1000mg",
        price: 30000,
        category: "Supplement",
        isPrescription: false,
      },
      {
        id: 4,
        name: "Cetirizine 10mg",
        price: 20000,
        category: "Allergy",
        isPrescription: false,
      },
    ] as FetchProductsResponseData;

    if (!!payload.params?.search) {
      const productsFuse = new Fuse<FetchProductsResponseData[number]>(
        products,
        { keys: ["name"] }
      );
      products = productsFuse
        .search(payload.params?.search)
        .map((fuse) => fuse.item);
    }
    if (!!payload.params?.category) {
      products = products.filter(
        (product) => product.category === payload.params?.category
      );
    }
    return {
      data: {
        data: products,
        status: true,
        message: "Success",
      },
    };
    // return commonAxios.post<AxiosResponseData<FetchProductsResponseData>>(
    //   "products",
    //   undefined,
    //   {
    //     cancelToken: payload?.cancelToken,
    //   }
    // );
  },
};

export default productApi;
