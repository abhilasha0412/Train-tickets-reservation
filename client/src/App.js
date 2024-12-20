import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateTicket from './components/CreateTicket';
import ShowTicketlist from './components/ShowTicketList';
import ShowTicketDetails from './components/ShowTicketDetails';
// import UpdateBookInfo from './components/UpdateBookInfo';
import HomePage from './components/HomePage';
// import NotesPage from './components/NotesPage'; // Import NotesPage component
// import ExportPage from './components/ExportPage';
// import QRCodePage from './components/QRCodePage';
// import SearchBooks from './components/SearchBooks';

import frostedBlissTheme from './theme/frostedBliss';

const App = () => {
  return (
    <ThemeProvider theme={frostedBlissTheme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Box component="main" flexGrow={1} py={3}>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/book-list' element={<ShowTicketlist />} />
              <Route path='/create-book' element={<CreateTicket />} />
              <Route path='/show-book/:id' element={<ShowTicketDetails />} />
              {/* <Route path='/notes/*' element={<NotesPage />} />
              <Route path="/export" element={<ExportPage />} />
              <Route path="/qr-codes" element={<QRCodePage />} />
              <Route path="/search" element={<SearchBooks />} /> */}
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;