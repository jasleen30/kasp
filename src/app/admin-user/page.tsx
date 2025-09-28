"use client"
import { useState, useEffect, use } from 'react';
import { toast } from 'sonner';
import { addProduct, deleteProduct, getProducts, updateProduct } from '@/server/products';
import { uploadProductImage } from '@/server/upload';
import { changePassword, login, logout, verifyAuth } from '@/server/auth';
import { LoadingSpinner } from '@/components/admin/LoadingSpinner';
import { LoginForm } from '@/components/admin/LoginForm';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { StatsSection } from '@/components/admin/StatsSection';
import { ProductList } from '@/components/admin/ProductList';
import { ProductFormDialog } from '@/components/admin/ProductFormDialog';


// Mock types and functions - replace with your actual implementations
interface User {
  id: string;
  username: string;
  email?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured: boolean;
  inStock: boolean;
  tags: string[];
  createdAt?: string;
  updatedAt?: string;
}


export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const authResult = await verifyAuth();
      setIsAuthenticated(authResult.isAuthenticated);
      if (authResult.isAuthenticated && authResult.user) {
        setUser(authResult.user);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      toast.error('Failed to fetch products');
    }
  };

  const handleLogin = async (data: { username: string; password: string }) => {
    const response = await login(data.username, data.password);
    if (response.success) {
      localStorage.setItem('isAuthenticated', 'true');
      toast.success(response.message);
      await checkAuth();
    } else {
      toast.error(response.message);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.success) {
        localStorage.removeItem('isAuthenticated');
        toast.success(response.message);
        setIsAuthenticated(false);
        setUser(null);
        setProducts([]);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed');
    }
  };

  const handlePasswordChange = async (currentPassword: string, newPassword: string) => {
    const response = await changePassword(currentPassword, newPassword);
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const newImageUrl = await uploadProductImage(formData);
      toast.success('Image uploaded successfully');
      return newImageUrl;
    } catch (err) {
      console.error('Image upload error:', err);
      toast.error('Image upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleProductSubmit = async (data: any) => {
    try {
      const productData = {
        ...data,
        tags: data.tags.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag.length > 0),
      };

      let result: Product;
      if (editingProduct) {
              updateProduct(editingProduct.id, productData);
        toast.success('Product updated successfully');
      } else {
          await addProduct(productData);
        toast.success('Product created successfully');
      }

      setIsDialogOpen(false);
      setEditingProduct(null);
      await fetchProducts();
    } catch (error) {
      console.error('Product save error:', error);
      toast.error('Failed to save product');
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
        await deleteProduct(id);
        toast.success('Product deleted successfully');
        await fetchProducts();
     
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete product');
    }
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader
        user={user} 
        onLogout={handleLogout} 
        onPasswordChange={handlePasswordChange}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsSection products={products} />
        
        <ProductList
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddProduct={handleAddProduct}
        />

        <ProductFormDialog
          editingProduct={editingProduct}
          onSubmit={handleProductSubmit}
          onImageUpload={handleImageUpload}
          isUploading={isUploading}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onEdit={() => {}}
        />
      </div>
    </div>
  );
}