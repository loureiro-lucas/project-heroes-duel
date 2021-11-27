import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialog({ open, close, hero1, hero2, winner }) {
  return (
    <div>
      <BootstrapDialog
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={ {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '1px 1px 1px 1px gray',
        } }
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} color='primary'>
          Vencedor: { winner.name }
        </BootstrapDialogTitle>
        <DialogContent
					dividers
					sx={ {
            display: 'flex',
						flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '1px 1px 1px 1px gray',
						width: '500px',
      	  } }
				>
					<div>
						<Typography gutterBottom color='text.secondary'>
							{ hero1.name }
						</Typography>
						<CardMedia
							component="img"
							height="300"
							image={ hero1.images.sm }
							alt={ `${hero1.name} picture` }
							sx={ {
								borderRadius: '3px',
							} }
        		/>
					</div>
					<div>
						<Typography gutterBottom color='text.secondary'>
							{ hero2.name }
						</Typography>
						<CardMedia
							component="img"
							height="300"
							image={ hero2.images.sm }
							alt={ `${hero2.name} picture` }
							sx={ {
								borderRadius: '3px',
							} }
        		/>
					</div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}