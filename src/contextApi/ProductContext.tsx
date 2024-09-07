import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

export interface IProduct {
    id: string;
    image: string;
    name: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
}

interface IProductContextType {
    products: IProduct[];
}

const ProductContext = createContext<IProductContextType | undefined>(
    undefined
);

interface ProductProviderProps {
    children: ReactNode;
}

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

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};
