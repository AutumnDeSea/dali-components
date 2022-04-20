import TextField, { TextFieldProps } from '@mui/material/TextField';
import './index.css';
export function YdTextFields(props: TextFieldProps): JSX.Element {
  const sx = {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'var(--sc-primary)',
      },
    },
  };

  return (
    <>
      <TextField
        variant="outlined"
        label="Basic example"
        hiddenLabel
        sx={sx}
        {...props}
      />
    </>
  );
}
