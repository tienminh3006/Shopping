import { useEffect, useState } from "react";
import productsApi from "../../../../api/productApi";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productsApi.get(productId);
        console.log(result);
        setProduct(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productId]);
  return { product, isLoading };
}
