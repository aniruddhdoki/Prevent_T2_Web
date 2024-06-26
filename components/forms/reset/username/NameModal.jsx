'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import NameChange from './NameChange';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function FormDialog({ firstName, lastName, ...props }) {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <Button onClick={handleClickOpen} color='success' variant='contained'></Button> */}
      <IconButton onClick={handleClickOpen}>
        <EditIcon></EditIcon>
      </IconButton>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Display Name Change</DialogTitle>
        <DialogContent>
          <NameChange click={handleClose} firstName={firstName} lastName={lastName} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}