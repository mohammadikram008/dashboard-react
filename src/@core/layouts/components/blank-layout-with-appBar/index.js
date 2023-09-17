// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Hook
import { useSettings } from 'src/@core/hooks/useSettings'

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const BlankLayoutAppBar = () => {
  // ** Hooks & Vars
  const theme = useTheme()
  const { settings } = useSettings()
  const { skin } = settings

  return (
    <AppBar
      color='default'
      position='sticky'
      elevation={skin === 'bordered' ? 0 : 3}
      sx={{
        backgroundColor: 'background.paper',
        ...(skin === 'bordered' && { borderBottom: `1px solid ${theme.palette.divider}` })
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          p: theme => `${theme.spacing(0, 6)} !important`,
          minHeight: `${theme.mixins.toolbar.minHeight - (skin === 'bordered' ? 1 : 0)}px !important`
        }}
      >
        <LinkStyled href='/'>
          <svg xmlns='http://www.w3.org/2000/svg' width='50px' height='50px' viewBox='0 0 1149 908' fill='none'>
            <path
              d='M3.40002 608.9C3.40002 608.9 226 487.6 286.5 605.2C347 722.8 185 730.9 159.8 657.8C159.8 657.8 123.9 730.9 167.8 762.8C211.7 794.7 264.8 788 264.8 788C264.8 788 380.6 789.1 418.9 737.1C457.2 685.1 393.7 566.1 393.7 566.1L286.6 486.4L155.8 493C155.8 493 78.9 537.9 64.1 544.8C40.4 555.9 3.40002 608.9 3.40002 608.9Z'
              fill='#C03BFF'
            />
            <path
              d='M0.300049 613.5C0.300049 613.5 62.3 477.1 220 473.5C377.7 470 498.2 583.3 498.2 583.3C498.2 583.3 575.5 636 606.8 662.8C638.1 689.6 510.6 758.7 491.1 730.4C471.6 702 377.7 583.3 377.7 583.3C377.7 583.3 303.8 488.4 198.8 499.7C116.4 508.5 41.2 573.4 12.6 601.1C4.70005 608.7 0.300049 613.5 0.300049 613.5Z'
              fill='#C03BFF'
            />
            <path
              d='M626.6 61.9001L1127.2 397.3C1127.2 397.3 1162.5 441.5 1141.2 493.3C1141.2 493.3 1140.3 505.1 1099.4 537.3L1026.2 585.1L889.3 459.3L563.7 249.9C563.7 249.9 460.8 53.4001 626.6 61.9001Z'
              fill='#C03BFF'
            />
            <path
              d='M1026.2 533.2L907.5 459.4C907.5 459.4 595.7 684.4 533.7 700.4C471.7 716.3 400.8 608.3 400.8 608.3C445.1 647.3 377.8 757.1 377.8 757.1C377.8 757.1 420.3 707.5 418.6 828C416.8 948.5 547.9 897.1 547.9 897.1L1026.3 585.3C1026.2 585.1 1045.6 566.2 1026.2 533.2Z'
              fill='#C03BFF'
            />
            <path
              d='M111.9 407.9C111.9 407.9 94.1 174 348.4 224.5C602.7 275 377.6 341.4 377.6 341.4L341.8 378.5C341.9 378.6 210.3 312.3 111.9 407.9Z'
              fill='#C03BFF'
            />
            <path
              d='M431.8 144.6C431.8 144.6 329.4 201.7 279.8 61.7001C279.8 61.7001 262.1 301.7 452.5 280.5C643 259.1 431.8 144.6 431.8 144.6Z'
              fill='#C03BFF'
            />
            <path
              d='M579.6 493.1V83.6001C579.6 83.6001 595.1 57.9001 624.7 61.1001C625.2 61.3001 625.7 61.5001 626.1 61.6001C627.9 62.1001 624.5 59.5001 611.3 52.6001C606.2 49.9001 600.1 46.8001 593.6 43.5001C558.2 25.5001 508.2 0.90005 508.2 0.90005C508.2 0.90005 421.8 -14.1 425.5 87.3C429.2 188.7 425.4 260.1 425.4 260.1C425.4 260.1 455.6 354 286.5 293.9C286.5 293.9 338.6 414.1 457.2 466.7C575.8 519.3 579.6 493.1 579.6 493.1Z'
              fill='#C03BFF'
            />
          </svg>

          <Typography
            variant='h6'
            sx={{
              ml: 3,
              fontWeight: 600,
              lineHeight: 'normal',
              textTransform: 'uppercase'
            }}
          >
            {themeConfig.templateName}
          </Typography>
        </LinkStyled>
      </Toolbar>
    </AppBar>
  )
}

export default BlankLayoutAppBar
