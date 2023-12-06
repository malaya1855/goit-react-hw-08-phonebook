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

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);
  const dispatch = useDispatch();
  const normalizedFilter = filterName ? filterName.toLowerCase() : '';
  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = async contactId => {
    if (window.confirm('Are you sure you want to delete the contact?')) {
      await dispatch(deleteContact(contactId));
      dispatch(fetchContacts());
    }
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, filterName]);

  return filteredContacts.length === 0 ? (
    <p>No matched contacts in your phone book</p>
  ) : (
    <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
      <Table sx={{ width: '500' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ fontWeight: '500' }}>
            <TableCell>Contact name</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Delete contact</TableCell>
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
                <TableCell align="center">{contact.number}</TableCell>
                <TableCell align="center">
                  <Button
                    type="button"
                    id={contact.id}
                    sx={{
                      width: '45px',
                      color: 'rgb(72, 76, 122)',
                    }}
                    onClick={() => handleDeleteContact(contact.id)}
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
    // <List>
    //   {filteredContacts.map(contact => {
    //     const nameArray = contact.name.split(' ');
    //     const nameFirstUpperLetter = nameArray
    //       .map(word => word.replace(word[0], word[0].toUpperCase()))
    //       .join(' ');
    //     return (
    //       <ListItem key={contact.id}>
    //         <ListItemText>{nameFirstUpperLetter}</ListItemText>
    //         <ListItemText>{contact.number}</ListItemText>
    //         <ButtonDelete
    //           type="ButtonDelete"
    //           id={contact.id}
    //           onClick={() => handleDeleteContact(contact.id)}
    //         >
    //           <SvgIcon
    //             component={DeleteIcon}
    //             sx={{ fontSize: '20px', color: 'rgb(72, 76, 122)' }}
    //           ></SvgIcon>
    //         </ButtonDelete>
    //       </ListItem>
    //     );
    //   })}
    // </List>
  );
};

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
