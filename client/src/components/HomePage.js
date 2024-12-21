// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Fade,
  CircularProgress,
  // Divider
} from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    totalTickets: 0,
    uniqueRoutes: 0,
    recentBooking: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/tickets')
      .then(res => {
        const tickets = res.data;
        const uniqueRoutes = new Set(tickets.map(ticket => ticket.route)).size;
        const recentBooking = tickets.sort((a, b) =>
          new Date(b.booking_date) - new Date(a.booking_date)
        )[0];

        setStats({
          totalTickets: tickets.length,
          uniqueRoutes,
          recentBooking
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Welcome to Train Ticket Reservation System
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Manage your bookings, view routes, and explore all available train options
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <TrainIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.totalTickets}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Total Tickets Booked
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <LocationOnIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.uniqueRoutes}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Unique Routes
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <ScheduleIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Latest Booking
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stats.recentBooking?.train || 'No bookings yet'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Available Features
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/ticket-list"
              variant="contained"
              size="large"
              startIcon={<TrainIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              View Tickets
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/create-ticket"
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Book New Ticket
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/search"
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Search Tickets
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component="a"
              href="https://github.com/TrainTicketProject"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              GitHub
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default HomePage;
