import axiosCilent from "./axiosCilent";

const productApi = {
  async getAll(params) {
    // Transform _page to _start
    const newParams = { ...params };
    console.log(params);
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);
    // Remove un-needed key
    delete newParams._page;
    // Fetch product list + count
    const productList = await axiosCilent.get("/products", {
      params: newParams,
    });
    const count = await axiosCilent.get("/products/count", {
      params: newParams,
    });
    // Build response and return
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosCilent.get(url);
  },
  add(data) {
    const url = `/products/`;
    return axiosCilent.post(url, { data });
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosCilent.patch(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosCilent.delete(url);
  },
};
export default productApi;
