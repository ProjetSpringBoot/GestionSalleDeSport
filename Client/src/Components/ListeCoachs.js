import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from './NavBar';
import soul from '../drawable/soul.jpg'; // Import the image


const ListeCoachs = () => {
  const coachs = [
    {
      name: 'Coach Fida',
      role: 'Capo',
      feedback: '',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Coach salima lbhima',
      role: '0 majet chay',
      feedback: '',
      image: soul
    },
    {
      name: 'Dr. Mary Rodriguez',
      role: 'Periodontist',
      feedback: '',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Dr. Jean Carter',
      role: 'Periodontist',
      feedback: '',
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gradient-to-b from-blue-50 to-white">
        <Container className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-left text-gray-800 mb-4">
              Our Expert Team
            </h2>
            <p className="text-left text-gray-600 mb-12 max-w-2xl">
              Meet our dedicated professional coaches
            </p>
            
            <Row className="mx-0 gap-4">
              {coachs.map((member, index) => (
                <Col 
                  key={index} 
                  xs={12} 
                  sm={6} 
                  md={6} 
                  lg={3} 
                  className="mb-8"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden bg-white w-full">
                    <div className="relative pt-6">
                      <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Card.Img 
                          variant="top" 
                          src={member.image} 
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                          alt={member.name}
                        />
                      </div>
                    </div>
                    
                    <Card.Body className="text-left p-6">
                      <Card.Title className="text-xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </Card.Title>
                      <div className="w-12 h-1 bg-blue-500 mb-3 rounded-full"/>
                      <Card.Text className="text-gray-600 font-medium mb-4">
                        {member.role}
                      </Card.Text>
                      {member.feedback && (
                        <Card.Text className="text-gray-500 text-sm italic">
                          "{member.feedback}"
                        </Card.Text>
                      )}
                      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300">
                        View Profile
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ListeCoachs;