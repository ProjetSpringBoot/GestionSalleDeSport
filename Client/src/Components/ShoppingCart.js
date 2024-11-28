import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Navbar from './NavBar';
import TrashIcon from '../drawable/trash-can.png';
import pencilIcon from '../drawable/pencil.png';
import axios from 'axios';  // Import Axios

const ShoppingCart = () => {
  const [reservations, setReservations] = useState([]);
  const [editId, setEditId] = useState(null); // ID of the reservation being edited
  const [newDescription, setNewDescription] = useState(''); // New description value

  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    console.log(savedReservations); // Log reservations to verify data
    setReservations(savedReservations);
  }, []);

  const removeReservation = (id) => {
    const updatedReservations = reservations.filter((res) => res.id !== id);
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  const startEditing = (id, currentDescription) => {
    setEditId(id);
    setNewDescription(currentDescription); // Pre-fill with current description
  };

  const saveDescription = () => {
    const updatedReservations = reservations.map((res) =>
      res.id === editId ? { ...res, description: newDescription } : res
    );
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
    setEditId(null); // Exit edit mode
  };

  const handleReserve = async () => {
    try {
      // Log the reservations with status defaults
      console.log(reservations.map((reservation) => ({
        user: { id: reservation.user_id },
        coach: { id: reservation.coach_id },
        status: reservation.status || 'PENDING',  // Default status to PENDING if not present
        description: reservation.description,
      })));

      // Check if all required fields are present
      for (let reservation of reservations) {
        if (!reservation.user_id || !reservation.coach_id) {
          alert('L\'ID utilisateur ou l\'ID coach est manquant.');
          return;
        }
      }

      // Use Axios to make the POST request
      const response = await axios.post('http://localhost:9070/api/reservations', {
        reservations: reservations.map((reservation) => ({
          user: { id: reservation.user_id },
          coach: { id: reservation.coach_id },
          status: reservation.status || 'PENDING',  // Ensure the status is set to PENDING if missing
          description: reservation.description,
        })),
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.status === 200) {
        setReservations([]);
        localStorage.removeItem('reservations');
        alert('Réservation effectuée avec succès!');
      } else {
        throw new Error(`Failed to save reservation: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      alert('Une erreur s\'est produite lors de la réservation.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid m-10 d-flex justify-content-center align-items-center">
        <div className="left-section w-100">
          <h2 className="styled-title">Liste des Produits</h2>
          <div className="total-container mb-3">
            <h3 className="total-title">Total:</h3>
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
                  <th>Nom Client</th>
                  <th>Nom Coach</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.length > 0 ? (
                  reservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td>{reservation.user_id || 'N/A'}</td> {/* Fallback if user_id is missing */}
                      <td>{reservation.coach_id || 'N/A'}</td> {/* Fallback if coach_id is missing */}
                      <td>{reservation.status || 'PENDING'}</td> {/* Display status */}
                      <td>
                        {editId === reservation.id ? (
                          <input
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="form-control"
                          />
                        ) : (
                          reservation.description
                        )}
                      </td>
                      <td>
                        {editId === reservation.id ? (
                          <>
                            <button className="btn btn-success me-2" onClick={saveDescription}>
                              Save
                            </button>
                            <button className="btn btn-secondary" onClick={() => setEditId(null)}>
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="update-btn me-2"
                              onClick={() => startEditing(reservation.id, reservation.description)}
                            >
                              <img src={pencilIcon} alt="Mettre à jour" className="delete-icon" />
                            </button>
                            <button
                              className="custom-delete-btn"
                              onClick={() => removeReservation(reservation.id)}
                            >
                              <img src={TrashIcon} alt="Supprimer" className="delete-icon icon-spacing" />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">Aucune réservation trouvée</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
          <div className="text-center mt-3">
            <Button
              variant="success"
              className="reserve-btn px-4 py-2"
              onClick={handleReserve}
            >
              Réserver
            </Button>
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
          font-size: 20px;
        }
        .delete-icon {
          width: 36px;
          height: 36px;
        }
        .form-control {
          padding: 8px;
          font-size: 16px;
        }
        .reserve-btn {
          background-color: #28a745;
          color: white;
          font-size: 18px;
          font-weight: bold;
          border-radius: 8px;
        }
        .reserve-btn:hover {
          background-color: #218838;
        }
      `}</style>
    </div>
  );
};

export default ShoppingCart;
