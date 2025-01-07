// src/components/TrainTicketReservation.js
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

const TrainTicketReservation = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [passengerName, setPassengerName] = useState('');
  const [ticketQR, setTicketQR] = useState('');

  useEffect(() => {
    axios.get('/api/trains')
      .then(res => {
        setTrains(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching train schedules:', err);
        setLoading(false);
      });
  }, []);

  const handleBookNow = (train) => {
    setSelectedTrain(train);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassengerName('');
    setTicketQR('');
  };

  const handleBooking = () => {
    if (!passengerName) {
      alert('Please enter the passenger name.');
      return;
    }

    const ticketDetails = {
      trainId: selectedTrain.id,
      trainName: selectedTrain.name,
      passengerName,
      date: selectedTrain.date
    };

    axios.post('/api/book-ticket', ticketDetails)
      .then(res => {
        const ticketData = res.data;
        setTicketQR(JSON.stringify(ticketData));
      })
      .catch(err => {
        console.error('Error booking ticket:', err);
      });
  };

  const downloadQR = (ticketData) => {
    const canvas = document.createElement('canvas');
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(document.getElementById('ticket-qr'));
    const img = new Image();
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const a = document.createElement('a');
      a.download = `Ticket-${ticketData.passengerName}.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        Train Ticket Reservation
      </Typography>

      <Grid container spacing={3}>
        {trains.map((train) => (
          <Grid item xs={12} sm={6} md={4} key={train.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Typography variant="h6" component="div" align="center" sx={{ mt: 2, mb: 1 }}>
                  {train.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
                  Departure: {train.date}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleBookNow(train)}
                  size="small"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Book Ticket for {selectedTrain?.name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Passenger Name"
            type="text"
            fullWidth
            variant="outlined"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
          {ticketQR && (
            <Box mt={3} textAlign="center">
              <QRCodeSVG id="ticket-qr" value={ticketQR} size={200} level="H" includeMargin />
              <Button
                sx={{ mt: 2 }}
                variant="outlined"
                startIcon={<DownloadIcon />}
                onClick={() => downloadQR(JSON.parse(ticketQR))}
              >
                Download Ticket
              </Button>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {!ticketQR && <Button onClick={handleBooking} variant="contained">Confirm Booking</Button>}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TrainTicketReservation;
