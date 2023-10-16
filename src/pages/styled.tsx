import Box from "@mui/material/Box";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'


import { styled} from '@mui/material/styles' 

export const VSRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection : "row",
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const VSButton = styled(Button)(({ theme }) => ({
  fontSize: '24px',
  marginInlineStart : "5px",
  marginInlineEnd : "5px",
  color: '#8100ff',
  backgroundColor: 'rgba(249, 248, 250, 0.1)',
  borderRadius: '10px',
  transition: 'all 0.15s',
  '&:hover': {
    border: '1px solid #662dd7',
  },
  '&:active': {
    backgroundColor: 'rgba(151, 132, 189, 0.2)',
  },
  '@media (max-width: 768px)': {
    fontSize: '18px', 
  },
}));

export const VSAsyncButton = styled(VSButton)(({ theme }) => ({
  position: 'relative',
  '&.async-button': {
    '&:after': {
      content: '""',
      backgroundColor: 'rgba(95, 179, 239, 0.15)',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      opacity: '0',
      transition: 'width 1s linear, opacity 0.5s ease 1s',
    },
    '&:active:after': {
      width: '0',
      opacity: '2',
      transition: '0s',
    },
  },  
}));


export const VSValue = styled(Typography)({
  paddingLeft: '24px',
  paddingRight: '24px',
  fontSize : '56px',
  fontFamily: 'Algar',
});

export const VSTextbox = styled(TextField)({
  fontSize: '32px',
  padding: '2px',
  '& .MuiOutlinedInput-input' :{
    fontSize : "20px",
    textAlign : "center",
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8100ff', // Change the border color here
    },
  },
  '& .MuiFormLabel-root' : {
    color : "#8100ff",
    transform: 'translateX(0, -50%)', // Center the label text horizontally
    left: '25%', // Move the label to the center
  },
  '& .MuiOutlinedInput-notchedOutline' : {
    textAlign : "center",
    border : "1px single #8100ff" ,
  }
});
