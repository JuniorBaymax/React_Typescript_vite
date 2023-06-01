import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import img401 from '~/assets/status/401.svg';

const MainContent = styled(Box)(
  ({ theme }) => `
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
      background-color: ${'white'};
  `
);

const ButtonSearch = styled(Button)(
  ({ theme }) => `
      margin-right: -${theme.spacing(1)};
  `
);

function Status401() {
  return (
    <>
      {/* <Helmet>
          <title>Status - 404</title>
        </Helmet> */}
      <MainContent>
        <Container maxWidth='md'>
          <Box textAlign='center' mt={2}>
            <img alt='404' height={180} src={img401} />
            <Typography variant='h2' sx={{ my: 2 }}>
              {` Oops! Your session has been expired.`}
            </Typography>
          </Box>
          <Container maxWidth='sm'>
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
              <Typography variant='h4' color='text.secondary' fontWeight='normal' sx={{ mb: 4 }}>
                {`It seems you don't have permission to access this page. Your session has expired or
              you have been logged out. Please log in again`}
              </Typography>
              {/* <FormControl variant='outlined' fullWidth>
                  <OutlinedInputWrapper
                    type='text'
                    placeholder='Search terms here...'
                    endAdornment={
                      <InputAdornment position='end'>
                        <ButtonSearch variant='contained' size='small'>
                          Search
                        </ButtonSearch>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position='start'>
                        <SearchTwoToneIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl> */}
              <Divider sx={{ my: 4 }}>OR</Divider>
              <Button href='/login' variant='outlined'>
                Go to Login Page
              </Button>
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Status401;
