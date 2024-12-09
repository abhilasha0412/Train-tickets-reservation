import React from 'react';
import { Box } from '@mui/material'; 
import { Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer'; 

// // Placeholder components for routing
// const AboutUs = () => <h1>About Us Page</h1>;
// const ShowTickets =
//  () => <h1>Show All ticket Page</h1>;

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
      }}
    >
      <Navbar />

      <Box
        sx={{
          flex: 1, 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Routes>
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/show-ticket" element={<ShowTicket />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/" element={<HomePage/>} />
        </Routes> */}
      </Box>

      <Footer />
    </Box>
  );
};

export default App;