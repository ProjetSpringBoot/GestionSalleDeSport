import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';
import Navbar from './NavBar';
import TrashIcon from '../drawable/trash-can.png';
import pencilIcon from '../drawable/pencil.png';



const CheckoutSummary = () => {
  return (
    <div className="w-64 p-4">
      <Card className="bg-white rounded-lg shadow">
        <Card.Body>
          <Card.Title className="text-lg font-medium mb-4">Summary</Card.Title>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              {/*<span className="text-gray-700">Products</span>*/}
              <span className="text-gray-900">${53.98}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-900">Gratis</span>
            </div>
          </div>
          
          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Total amount<br />(including VAT)</span>
              <span className="text-gray-900 font-medium">${53.98}</span>
            </div>
            
            <Button 
              variant="primary"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700"
            >
              GO TO CHECKOUT
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const ShoppingCart = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(savedReservations);
  }, []);

  const removeReservation = (id) => {
    const updatedReservations = reservations.filter((res) => res.id !== id);
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };



  // Calculate the total price of all products in the cart
 // const totalPrice = products.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <Navbar />
      <div className="container-fluid m-10 d-flex justify-content-center align-items-center">
        <div className="d-flex w-100 justify-content-between align-items-start">
          <div className="left-section">
            <h2 className="styled-title">Liste des Produits</h2>
            
            {/* Create a container for the total price */}
            <div className="total-container mb-3">
              <h3 className="total-title">Total: </h3>
            </div>

            <div className="table-container">
              <Table 
                  striped 
                  bordered 
                  hover 
                  responsive 
                  className="shadow-lg rounded custom-table w-100"
                >
                  <thead className="text-black">
                    <tr>
                      <th>Nom Coach</th>
                      <th>Description</th>
                      {/*<th>Specialization</th>*/}
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {reservations.length > 0 ? (
                  reservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td>{reservation.name}</td>
                      <td>{reservation.description}</td>
                      {/*<td>{reservation.specialization}</td>   This is where specialization is shown */}
                      <td>
                          <button className="update-btn me-2" >
                            <img src={pencilIcon} alt="Mettre à jour" className="delete-icon" />
                          </button>
                          
                          <button className="custom-delete-btn" onClick={() => removeReservation(reservation.id)}>
                            <img src={TrashIcon} alt="Supprimer" className="delete-icon icon-spacing" />
                          </button>
                        </td>
                      </tr>
                    )) ) : (
                      <tr>
                        <td colSpan="4">No reservations found</td>
                      </tr>
                    )}
          
                  </tbody>
                </Table>
                {/* Buy Now button placed below the table 
                <Button 
                  variant="primary" 
                  className="mt-3 custom-buy-btn"
                  onClick={handleBuy}
                >
                  Buy Now
                </Button>*/}
            </div>
          </div>

          {/* Checkout Summary on the right */}
          <div className="right-section">
            <CheckoutSummary />
          </div>
        </div>
      </div>

      <style>{`
        .icon-spacing {
          margin-left: 25px;
        }
        .container-fluid {
          max-width: 90%;
        }
        .custom-table {
          font-size: 20px; /* Increased font size for the table */
        }
        .hover-table-row:hover {
          background-color: #f1f1f1;
          transition: background-color 0.3s ease;
        }
        .table th, .table td {
          text-align: center;
          padding: 18px; /* Increased padding */
        }
        .table th {
          font-size: 22px; /* Increased font size for table header */
        }
        .table td {
          font-size: 20px; /* Increased font size for table data */
        }
        .shadow-lg {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .rounded {
          border-radius: 10px;
        }
        .delete-icon {
          width: 36px; /* Increased size for icons */
          height: 36px;
        }

        /* Stylish Button */
        .custom-buy-btn {
          background-color: #28a745;
          border: none;
          color: white;
          font-size: 20px; /* Increased font size for button */
          font-weight: bold;
          padding: 15px 25px; /* Increased padding */
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .custom-buy-btn:hover {
          background-color: #218838;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .custom-buy-btn:focus {
          outline: none;
        }

        .custom-buy-btn:active {
          transform: scale(1);
        }

        .styled-title {
          color: #007bff; /* Primary blue color */
          font-weight: bold; /* Bold font */
          font-size: 3rem; /* Increased font size */
          text-transform: uppercase; /* Uppercase letters */
          letter-spacing: 2px; /* Increased spacing between letters */
          padding: 15px 25px; /* Larger padding */
          border-radius: 10px; /* Rounded corners */
          text-align: center; /* Center text */
          margin-bottom: 30px; /* Increased space below title */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          transition: all 0.3s ease; /* Smooth transition for hover */
        }

        /* Hover effect */
        .styled-title:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
        }

        /* Container for the total */
        .total-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          padding-left: 15px; /* Padding from the left */
        }

        .total-title {
          font-size: 24px;
          font-weight: bold;
          color: #28a745;
        }

        /* Layout for left and right sections */
        .d-flex {
          display: flex;
          justify-content: space-between;
        }

        .left-section {
          flex: 1;
          padding-right: 20px;
        }

        .right-section {
          width: 300px;
          padding-left: 20px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .styled-title {
            font-size: 2.5rem; /* Slightly smaller font size on mobile */
            padding: 12px 20px; /* Smaller padding on mobile */
          }
          .custom-table {
            font-size: 18px; /* Slightly smaller font size on mobile */
          }
          .table th, .table td {
            padding: 12px; /* Reduced padding on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default ShoppingCart;
