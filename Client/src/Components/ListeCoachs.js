import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './NavBar';
import axios from 'axios';

const ListeCoachs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [coachs, setCoachs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [specializationFilter, setSpecializationFilter] = useState('');
  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Fetch coaches from the API
  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:9070/api/coaches/all');
        setCoachs(response.data);
      } catch (err) {
        console.error('Failed to fetch coaches:', err);
        setError('Failed to fetch coaches. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCoaches();
  }, []);

  const handleReserveSession = (coach) => {
    if (!isLoggedIn) {
      alert('You must be logged in to reserve a session.');
      return;
    }

    const newReservation = {
      id: Math.random().toString(36).substr(2, 9),
      name: coach.username,
      description: `Reservation with ${coach.username}`,
      final_product: 'Pending',
    };

    const existingReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    existingReservations.push(newReservation);
    localStorage.setItem('reservations', JSON.stringify(existingReservations));

    navigate('/shoppingCart'); // Navigate to ShoppingCart page
  };

  const handleSpecializationChange = (event) => {
    setSpecializationFilter(event.target.value);
  };

  const filteredCoaches = coachs.filter((coach) => {
    return !specializationFilter || coach.specialization === specializationFilter;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gradient-to-b from-blue-50 to-white">
        <Container className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-left text-gray-800 mb-4">Our Expert Team</h2>
            <p className="text-left text-gray-600 mb-12 max-w-2xl">
              Meet our dedicated professional coaches
            </p>

            <Form.Group className="mb-4" controlId="specializationSelect">
              <Form.Label>Filter by Specialization</Form.Label>
              <Form.Control as="select" value={specializationFilter} onChange={handleSpecializationChange}>
                <option value="">All Specializations</option>
                <option value="Fitness Training">Fitness Training</option>
                <option value="Aerobic Classes">Aerobic Classes</option>
                <option value="Boxing">Boxing</option>
                <option value="Taekwondo">Taekwondo</option>
                <option value="Yoga and Meditation">Yoga and Meditation</option>
                <option value="Zumba Dance">Zumba Dance</option>
                <option value="Spinning">Spinning</option>
                <option value="CrossFit">CrossFit</option>
                <option value="Pilates">Pilates</option>
                <option value="Martial Arts">Martial Arts</option>
              </Form.Control>
            </Form.Group>

            {/* Display filtered coaches or a message when no coaches are found */}
            {filteredCoaches.length === 0 ? (
              <div>No coaches available for the selected specialization.</div>
            ) : (
              <Row className="mx-0 gap-4">
                {filteredCoaches.map((member, index) => (
                  <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-8">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden bg-white w-full p-4">
                      <Card.Body className="text-center">
                        <Card.Title className="text-xl font-bold text-gray-800 mb-2">
                          {member.username}
                        </Card.Title>
                        <Card.Text className="text-gray-600 font-medium mb-4">
                          Specialization: {member.specialization || 'Not specified'}
                        </Card.Text>
                        <div className="d-flex justify-between mt-4">
                          <Link to={`/ProfilCoach/${member.id}`}>
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300">
                              View Profile
                            </button>
                          </Link>
                          <button
                            onClick={() => handleReserveSession(member)}
                            className="px-6 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-300"
                          >
                            Reserve Private Session
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ListeCoachs;
