
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { css, jsx } from '@emotion/react';
import { FC } from 'react';

const footerStyles = css({
    color: 'red',
  
  });

const Footer: FC = () => {
  return (<footer>
      <Grid container>
        <Grid item xs={12}>
            <Paper css={footerStyles}>Hello</Paper>
        </Grid>
      </Grid>
      </footer>)
};

export default Footer;



