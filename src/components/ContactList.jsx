import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, SvgIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';

const style = {
  fontWeight: '700',
};

export const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);
  const dispatch = useDispatch();
  const normalizedFilter = filterName ? filterName.toLowerCase() : '';
  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  const handleDeleteContact = contactId => {
    const confirmAction = async () => {
      await dispatch(deleteContact(contactId));
      dispatch(fetchContacts());
    };
    Confirm.show(
      'Delete contact',
      'Are you sure you want to delete the contact?',
      'Yes',
      'Cancel',
      confirmAction,
      () => {
        return;
      }
    );
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, filterName]);

  return filteredContacts.length === 0 ? (
    <p>No matched contacts in your phone book</p>
  ) : (
    <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead sx={{ fontWeight: '700' }}>
          <TableRow>
            <TableCell sx={style}>Contact name</TableCell>
            <TableCell sx={style} align="center">
              Phone Number
            </TableCell>
            <TableCell sx={style} align="center">
              Delete contact
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredContacts.map(contact => {
            const nameArray = contact.name.split(' ');
            const nameFirstUpperLetter = nameArray
              .map(word => word.replace(word[0], word[0].toUpperCase()))
              .join(' ');
            return (
              <TableRow
                key={nameFirstUpperLetter}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {nameFirstUpperLetter}
                </TableCell>
                <TableCell align="center">{contact.phone}</TableCell>
                <TableCell align="center">
                  <Button
                    type="button"
                    id={contact._id}
                    sx={{
                      width: '45px',
                      color: 'rgb(72, 76, 122)',
                    }}
                    onClick={() => handleDeleteContact(contact._id)}
                  >
                    <SvgIcon
                      component={DeleteIcon}
                      sx={{ fontSize: '20px', color: 'rgb(72, 76, 122)' }}
                    ></SvgIcon>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
