import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
      .catch(() => toast.error("Failed to load products"));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/products/${id}`)
          .then(() => {
            setProducts(prev =>
              prev.filter(p => p.id !== id)
            );
            toast.success("Deleted!");
          })
          .catch(() => toast.error("Delete failed"));
      }
    });
  };

  const handleAdd = () => {
    if (!form.name || !form.price) {
      toast.error("Name and Price required");
      return;
    }

    const newProduct = {
      ...form,
      price: parseFloat(form.price)
    };

    axios
      .post("http://localhost:3000/products", newProduct)
      .then(res => {
        setProducts(prev => [...prev, res.data]);
        toast.success("Product added!");
        setForm({
          name: "",
          price: "",
          category: "",
          image: ""
        });
      })
      .catch(() => toast.error("Failed to add product"));
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      {/* ================= FORM ================= */}
      <div className="admin-form">
        <input
          placeholder="Name"
          value={form.name}
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={e =>
            setForm({ ...form, price: e.target.value })
          }
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={e =>
            setForm({ ...form, category: e.target.value })
          }
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={e =>
            setForm({ ...form, image: e.target.value })
          }
        />

        {/* Live Image Preview */}
        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            className="admin-preview"
          />
        )}

        <button onClick={handleAdd}>Add Product</button>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="admin-grid">
        {products.map(product => (
          <div key={product.id} className="admin-card">

            {/* Thumbnail */}
            <img
              src={product.image}
              alt={product.name}
              className="admin-thumbnail"
            />

            <h2>{product.name}</h2>
            <p>Ksh.{product.price.toFixed(2)}</p>
            <p>{product.category}</p>

            <button onClick={() => handleDelete(product.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;