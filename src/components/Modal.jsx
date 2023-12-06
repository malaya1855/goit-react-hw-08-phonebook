import { Button, Modal, SvgIcon } from '@mui/material';
import { ContactForm, NewContactForm } from 'components';
import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const ModalNewContact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <NewContactForm>
      <Button
        onClick={handleOpen}
        type="sybmit"
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',

          width: '45px',
          color: 'rgb(72, 76, 122)',
          boxShadow:
            '0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%)',
          transition: 'all 0.2s ease-out',
        }}
      >
        <SvgIcon
          component={PersonAddIcon}
          sx={{ fontSize: '20px', color: 'rgb(72, 76, 122)' }}
        ></SvgIcon>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ContactForm onClose={handleClose} />
        </div>
      </Modal>
    </NewContactForm>
  );
};
