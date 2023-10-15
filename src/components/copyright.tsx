import  Typography from "@mui/material/Typography";
import  Link from "@mui/material/Link";


function VSCopyright() {
    return (
      <Typography variant="h5" color="#fff" align="center">
        {'© '}
        <Link color="inherit" underline="hover" href="https://github.com/vishwakarma-dev">
          vishwakarma-dev
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default VSCopyright ;
  