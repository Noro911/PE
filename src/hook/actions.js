import * as instant from "./instant";

export const setProductInput = (payload) => {
  return {
    type: instant.set_productInput,
    payload,
  };
};

export const setProduct = (name, payload, product) => {
  return {
    type: instant.set_product,
    payload: {
      ...product,
      [name]: payload,
    },
  };
};

export const addProduct = (payload, list) => {
  return {
    type: instant.add_product,
    payload: [...list, payload],
  };
};

export const deleteProduct = (product, list) => {
  return {
    type: instant.delete_product,
    payload: list.filter((p) => p.id !== product.id),
  };
};

export const updateProduct = (product, list) => {
  const i = list.map((item, index) => {
    if (item.id === product.id) {
      return index;
    }
  });
  const index = i.filter(item => item)
  console.log(index)
  list[index].name = product.name;
  list[index].gpa = product.gpa;
  return {
    type: instant.update_product,
    payload: list,
  };
};
