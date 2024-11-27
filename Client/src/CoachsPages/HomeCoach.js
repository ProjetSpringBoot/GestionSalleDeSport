import React, { useState, useEffect } from 'react';
import Header from './navs/Header';
import Sidebar from './navs/Sidebar';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function HomeCoach() {
  const [demandes, setDemandes] = useState([]);  // Default to empty array
  const [demandesTerminees, setDemandesTerminees] = useState([]);  // Default to empty array
  const [loading, setLoading] = useState(true);  // State for loading

  const idCoach = 1; // Set your coach's ID here

  // Define fetchData function outside of useEffect
  const fetchData = async () => {
    try {
      // Fetch reservations for the coach
      const response = await axios.get(`http://localhost:9070/api/reservations/Coach/${idCoach}`);
      const data = response.data;

      // Assuming the API returns data in a way that categorizes them into demandes and demandesTerminees
      setDemandes(data.demandes || []);  // Ensure data.demandes is an array
      setDemandesTerminees(data.demandesTerminees || []);  // Ensure data.demandesTerminees is an array
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);  // Stop loading after data fetch
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, [idCoach]);  // Re-run the effect if idCoach changes

  // Update Final Product status
  const updateFinalProduct = async (demandeId, status) => {
    try {
      const updatedDemande = { final_product: status };
      await axios.put(`http://localhost:9070/api/reservations/${demandeId}`, updatedDemande);
      // Re-fetch data to update the table after status update
      fetchData();
    } catch (error) {
      console.error('Error updating final product:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;  // Show loading indicator while data is being fetched
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
