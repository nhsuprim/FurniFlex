import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

// Define the product interface
export interface IProduct {
    id: string;
    image: string;
    name: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
}

// Define the context type
interface IProductContextType {
    products: IProduct[];
}

// Create the context
const ProductContext = createContext<IProductContextType | undefined>(
    undefined
);

// Define the type for the provider props
interface ProductProviderProps {
    children: ReactNode;
}

// Provider component
export const ProductProvider: React.FC<ProductProviderProps> = ({
    children,
}) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook to use the Product context
export const useProduct = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};
