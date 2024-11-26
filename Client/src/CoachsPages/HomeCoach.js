import React, { useState } from 'react';
import Header from './navs/Header';
import Sidebar from './navs/Sidebar';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function HomeCoach() {
  const [demandes, setDemandes] = useState([
    { id: 1, type: 'Type 1', description: 'Description 1', status: 'En cours', final_product: 'Non défini' },
    { id: 2, type: 'Type 2', description: 'Description 2', status: 'En attente', final_product: 'Non défini' },
  ]);

  const updateFinalProduct = (id, final_product) => {
    setDemandes((prevDemandes) =>
      prevDemandes.map((demande) =>
        demande.id === id ? { ...demande, final_product } : demande
      )
    );
  };

  const demandesTerminees = demandes.filter(
    (demande) => demande.final_product === 'Terminé'
  );

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
                <th>ID</th>
                <th>Type</th>
                <th>Description</th>
                <th>Status</th>
                <th>Final Product</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {demandes.length > 0 ? (
                demandes.map((demande) => (
                  <tr key={demande.id}>
                    <td>{demande.id}</td>
                    <td>{demande.type}</td>
                    <td>{demande.description}</td>
                    <td>{demande.status}</td>
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
                  <td colSpan="6" className="text-center">
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
                <th>Type</th>
                <th>Description</th>
                <th>Status</th>
                <th>Final Product</th>
              </tr>
            </thead>
            <tbody>
              {demandesTerminees.length > 0 ? (
                demandesTerminees.map((demande) => (
                  <tr key={demande.id}>
                    <td>{demande.id}</td>
                    <td>{demande.type}</td>
                    <td>{demande.description}</td>
                    <td>{demande.status}</td>
                    <td>{demande.final_product || 'Non défini'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
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
