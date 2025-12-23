import { commonAxios } from "@/libs";
import Fuse from "fuse.js";

import type {
  FetchCategoriesPayload,
  FetchCategoriesResponseData,
} from "./category.api.types";
import type { AxiosResponseData } from "@/libs/axios";
import { commonHelpers } from "@/utils/helpers";

const categoryApi = {
  fetchCategories: async (payload: FetchCategoriesPayload) => {
    await commonHelpers.sleep(500);
    let categories = [
      {
        id: 1,
        name: "Pain Relief",
      },
      {
        id: 2,
        name: "Antibiotic",
      },
      {
        id: 3,
        name: "Supplement",
      },
      {
        id: 4,
        name: "Allergy",
      },
    ] as FetchCategoriesResponseData;

    return {
      data: {
        data: categories,
        status: true,
        message: "Success",
      },
    };
    // return commonAxios.post<AxiosResponseData<FetchCategoriesResponseData>>(
    //   "categories",
    //   undefined,
    //   {
    //     cancelToken: payload?.cancelToken,
    //   }
    // );
  },
};

export default categoryApi;
