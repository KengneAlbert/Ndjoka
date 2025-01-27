import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navigation/Navbar";
import { ContactBar } from "../components/Navigation/ContactBar";
import { Footer } from "../components/Footer";
import { ProductHero } from "../components/Products/ProductHero";
import { ProductCategories } from "../components/Products/ProductCategories";
import { ProductCard } from "../components/Products/ProductCard";
import { ProductModal } from "../components/Products/ProductModal";
import { products } from "../data/products";
import { Product } from "../types/product";

export default function ProductsPage() {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
      // Scroll to products section
      setTimeout(() => {
        document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ContactBar />
      <ProductHero />
      <ProductCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Products Grid */}
      <div id="products-grid" className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Footer />
    </div>
  );
}
