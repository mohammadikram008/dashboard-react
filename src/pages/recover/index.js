// import React from 'react'
// import { Card, Typography, TextField, Button } from '@mui/material'

// function index() {
//   return (
//     <div className='body'>
//       <Card sx={{ width: '400px', p: 10 }}>
//         <img src='/images/apple-touch-icon.png' height='70px' className='d-flex' />
//         <Typography
//           textAlign='center'
//           variant='h3'
//           sx={{
//             my: 8,
//             ml: 3,
//             lineHeight: 1,
//             fontWeight: 600,
//             textTransform: 'uppercase',
//             fontSize: '1rem !important'
//           }}
//         >
//           {/* {themeConfig.templateName} */}
//           RECOVER PASSWORD
//         </Typography>
//         <Typography textAlign='center' variant='body-1'>
//           Go to the email provided and click on the link sent to change your password.
//         </Typography>
//       </Card>
//     </div>
//   )
// }

// export default index
// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { Card } from '@mui/material'

// ** Styled Components

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'admin@materio.com'
}

const Recover = () => {
  
  

  return (
    <div className='body'>
      <Card sx={{ width: '400px', p: 10 }}>
         <img src='/images/apple-touch-icon.png' height='70px' className='d-flex' />
         <Typography
           textAlign='center'
           variant='h3'
           sx={{
             my: 8,
             ml: 3,
             lineHeight: 1,
             fontWeight: 600,
             textTransform: 'uppercase',
             fontSize: '1rem !important'
           }}
         >
          
           RECOVER PASSWORD 
         </Typography>
         <Typography textAlign='center' variant='body-1'>
           Go to the email provided and click on the link sent to change your password.
         </Typography>
       </Card>
    </div>
  )
}



export default Recover



