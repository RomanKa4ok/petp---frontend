import { makeStyles } from '@mui/styles';

const useButtonStyles = ({ isPrimary }) =>
  makeStyles((theme) => ({
    primaryButton: {
      backgroundColor: isPrimary ? theme.palette.primary.main : theme.palette.secondary.main,
      color: '#fff',
      '&:hover': {
        backgroundColor: isPrimary ? theme.palette.primary.dark : theme.palette.secondary.dark,
      },
    },
  }))();

export default useStyles;