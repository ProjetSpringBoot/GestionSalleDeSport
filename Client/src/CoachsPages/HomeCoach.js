import React, { useState, useEffect } from 'react';
import Header from './navs/Header';
import Sidebar from './navs/Sidebar';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode'; // Install with `npm install jwt-decode`

export default function HomeCoach() {
  const [demandes, setDemandes] = useState([]);
  const [demandesTerminees, setDemandesTerminees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coachEmail, setCoachEmail] = useState(null); // State for the logged-in coach's email

  // Function to fetch and decode token
  const fetchCoachEmailFromToken = () => {
    const token = localStorage.getItem('token'); // Assume token is stored in localStorage
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded Token:', decoded); // Log the decoded token to check its structure
        return decoded.sub; // Use the 'sub' field (email) from the token
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return null;
  };

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);

      if (!coachEmail) return; // Ensure coachEmail is set before making requests

      const response = await axios.get(`http://localhost:9070/api/reservations/Coach/${coachEmail}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token to the request headers
        },
      });

      const data = response.data;

      setDemandes(data.demandes || []);
      setDemandesTerminees(data.demandesTerminees || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update Final Product status
  const updateFinalProduct = async (demandeId, status) => {
    try {
      await axios.put(
        `http://localhost:9070/api/reservations/${demandeId}`,
        { final_product: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token for authorization
          },
        }
      );
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error('Error updating final product:', error);
    }
  };

  // Fetch the coach email and reservations when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded Token:', decoded); // Log the decoded token to check its structure
        const coachEmail = decoded.sub;

        if (coachEmail) {
          setCoachEmail(coachEmail);
        } else {
          console.error('No coach email found in the token');
        }

        const coachName = decoded.sub || 'Coach';
        alert(`Welcome ${coachName}`);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  useEffect(() => {
    if (coachEmail) {
      fetchData(); // Fetch data only after coachEmail is set
    }
  }, [coachEmail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark text-white p-4 rounded shadow-lg mb-4"
        >
          <h2 className="text-center">Progression des Demandes</h2>
        </motion.div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Final Product</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {demandes.length > 0 ? (
                demandes.map((demande) => (
                  <tr key={demande.id}>
                    <td>{demande.name}</td>
                    <td>{demande.description}</td>
                    <td>{demande.final_product || 'Non défini'}</td>
                    <td>
                      <button
                        onClick={() => updateFinalProduct(demande.id, 'Terminé')}
                        className="btn btn-success mt-2"
                      >
                        Marquer comme terminé
                      </button>
                      <button
                        onClick={() => updateFinalProduct(demande.id, 'En cours')}
                        className="btn btn-warning mt-2 ml-2"
                      >
                        Marquer comme en cours
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    Aucune demande trouvée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-success text-white p-4 rounded shadow-lg mt-4"
        >
          <h3 className="text-center">Demandes Terminées</h3>
        </motion.div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Final Product</th>
              </tr>
            </thead>
            <tbody>
              {demandesTerminees.length > 0 ? (
                demandesTerminees.map((demande) => (
                  <tr key={demande.id}>
                    <td>{demande.id}</td>
                    <td>{demande.name}</td>
                    <td>{demande.description}</td>
                    <td>{demande.final_product || 'Non défini'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    Aucune demande terminée trouvée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
