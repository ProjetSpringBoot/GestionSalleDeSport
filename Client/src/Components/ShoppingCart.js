import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Navbar from './NavBar';

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Produit 1', description: 'Description du produit 1' },
    { id: 2, name: 'Produit 2', description: 'Description du produit 2' },
    { id: 3, name: 'Produit 3', description: 'Description du produit 3' }
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleUpdate = (id) => {
    alert(`Mettre à jour le produit avec ID ${id}`);
  };

  return (
    <div >
      <Navbar/>
    <div className="container mt-10 d-flex justify-content-center align-items-center">
      <h2 className="text-center mb-4 text-primary font-weight-bold">Liste des Produits</h2>
      <Table striped bordered hover responsive className="table-responsive-sm  table-bordered shadow-lg rounded justify-content-center ">
        <thead className=" text-black">
          <tr>
            <th>ID</th>
            <th>Nom Produit</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="hover-table-row">
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <Button variant="warning" className="me-2" onClick={() => handleUpdate(product.id)}>Mettre à jour</Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <style>{`
        .hover-table-row:hover {
          background-color: #f1f1f1;
          transition: background-color 0.3s ease;
        }
        .btn-warning:hover {
          background-color: #e6a900;
        }
        .btn-danger:hover {
          background-color: #c82333;
        }
        .table th, .table td {
          text-align: center;
        }
        .table th {
          font-size: 18px;
        }
        .table td {
          font-size: 16px;
        }
        .shadow-lg {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .rounded {
          border-radius: 10px;
        }
      `}</style>
    </div>
    </div>
  );
};

export default ShoppingCart;



