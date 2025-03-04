import { createContext, useState } from "react";
import { toast } from "sonner";

export const productContext = createContext();
const ProductProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [addingProduct, setAddingProduct] = useState(false);
  const token = localStorage.getItem("token");

  // add product
  const addProduct = async (formData) => {
    setAddingProduct(true);
    try {
      const res = await fetch(`${baseUrl}/products`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      toast.success(data.message);
    } catch (error) {
      console.error(error);
      setAddingProduct(true);
    } finally {
      setAddingProduct(false);
    }
  };

  const value = {
    addProduct,
    addingProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductProvider;
