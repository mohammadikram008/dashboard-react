// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 30) / 8
      }
    } else {
      return 6
    }
  }
  const MenuLockedIcon = () => userMenuLockedIcon || <Icon icon='mdi:radiobox-marked' />
  const MenuUnlockedIcon = () => userMenuUnlockedIcon || <Icon icon='mdi:radiobox-blank' />

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userNavMenuBranding ? (
        userNavMenuBranding(props)
      ) : (
        <LinkStyled href='/'>
          {/* <svg
            width={30}
            height={25}
            version='1.1'
            viewBox='0 0 30 23'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Artboard' transform='translate(-95.000000, -51.000000)'>
                <g id='logo' transform='translate(95.000000, 50.000000)'>
                  <path
                    id='Combined-Shape'
                    fill={theme.palette.primary.main}
                    d='M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z'
                  />
                  <polygon
                    id='Rectangle'
                    opacity='0.077704'
                    fill={theme.palette.common.black}
                    points='0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646'
                  />
                  <polygon
                    id='Rectangle'
                    opacity='0.077704'
                    fill={theme.palette.common.black}
                    points='0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162'
                  />
                  <polygon
                    id='Rectangle'
                    opacity='0.077704'
                    fill={theme.palette.common.black}
                    points='22.7419355 8.58870968 30 12.7417372 30 16.9537453'
                    transform='translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) '
                  />
                  <polygon
                    id='Rectangle'
                    opacity='0.077704'
                    fill={theme.palette.common.black}
                    points='22.7419355 8.58870968 30 12.6409734 30 15.2601969'
                    transform='translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) '
                  />
                  <path
                    id='Rectangle'
                    fillOpacity='0.15'
                    fill={theme.palette.common.white}
                    d='M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z'
                  />
                  <path
                    id='Rectangle'
                    fillOpacity='0.35'
                    fill={theme.palette.common.white}
                    transform='translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) '
                    d='M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z'
                  />
                </g>
              </g>
            </g>
          </svg> */}
          <svg xmlns='http://www.w3.org/2000/svg' width='50px' height='50px' viewBox='0 0 1149 908' fill='none'>
            <path
              d='M3.40002 608.9C3.40002 608.9 226 487.6 286.5 605.2C347 722.8 185 730.9 159.8 657.8C159.8 657.8 123.9 730.9 167.8 762.8C211.7 794.7 264.8 788 264.8 788C264.8 788 380.6 789.1 418.9 737.1C457.2 685.1 393.7 566.1 393.7 566.1L286.6 486.4L155.8 493C155.8 493 78.9 537.9 64.1 544.8C40.4 555.9 3.40002 608.9 3.40002 608.9Z'
              fill={theme.palette.error.main}
            />
            <path
              d='M0.300049 613.5C0.300049 613.5 62.3 477.1 220 473.5C377.7 470 498.2 583.3 498.2 583.3C498.2 583.3 575.5 636 606.8 662.8C638.1 689.6 510.6 758.7 491.1 730.4C471.6 702 377.7 583.3 377.7 583.3C377.7 583.3 303.8 488.4 198.8 499.7C116.4 508.5 41.2 573.4 12.6 601.1C4.70005 608.7 0.300049 613.5 0.300049 613.5Z'
              fill={theme.palette.error.main}
            />
            <path
              d='M626.6 61.9001L1127.2 397.3C1127.2 397.3 1162.5 441.5 1141.2 493.3C1141.2 493.3 1140.3 505.1 1099.4 537.3L1026.2 585.1L889.3 459.3L563.7 249.9C563.7 249.9 460.8 53.4001 626.6 61.9001Z'
              fill={theme.palette.primary.main}
            />
            <path
              d='M1026.2 533.2L907.5 459.4C907.5 459.4 595.7 684.4 533.7 700.4C471.7 716.3 400.8 608.3 400.8 608.3C445.1 647.3 377.8 757.1 377.8 757.1C377.8 757.1 420.3 707.5 418.6 828C416.8 948.5 547.9 897.1 547.9 897.1L1026.3 585.3C1026.2 585.1 1045.6 566.2 1026.2 533.2Z'
              fill={theme.palette.primary.main}
            />
            <path
              d='M111.9 407.9C111.9 407.9 94.1 174 348.4 224.5C602.7 275 377.6 341.4 377.6 341.4L341.8 378.5C341.9 378.6 210.3 312.3 111.9 407.9Z'
              fill={theme.palette.primary.main}
            />
            <path
              d='M431.8 144.6C431.8 144.6 329.4 201.7 279.8 61.7001C279.8 61.7001 262.1 301.7 452.5 280.5C643 259.1 431.8 144.6 431.8 144.6Z'
              fill={theme.palette.primary.main}
            />
            <path
              d='M579.6 493.1V83.6001C579.6 83.6001 595.1 57.9001 624.7 61.1001C625.2 61.3001 625.7 61.5001 626.1 61.6001C627.9 62.1001 624.5 59.5001 611.3 52.6001C606.2 49.9001 600.1 46.8001 593.6 43.5001C558.2 25.5001 508.2 0.90005 508.2 0.90005C508.2 0.90005 421.8 -14.1 425.5 87.3C429.2 188.7 425.4 260.1 425.4 260.1C425.4 260.1 455.6 354 286.5 293.9C286.5 293.9 338.6 414.1 457.2 466.7C575.8 519.3 579.6 493.1 579.6 493.1Z'
              fill={theme.palette.primary.main}
            />
          </svg>

          <HeaderTitle variant='h6' sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 3 }) }}>
            {themeConfig.templateName}
          </HeaderTitle>
        </LinkStyled>
      )}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: 'transparent !important' }}
        >
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      ) : userMenuLockedIcon === null && userMenuUnlockedIcon === null ? null : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
          sx={{
            p: 0,
            color: 'text.primary',
            backgroundColor: 'transparent !important',
            '& svg': {
              fontSize: '1.25rem',
              ...menuCollapsedStyles,
              transition: 'opacity .25s ease-in-out'
            }
          }}
        >
          {navCollapsed ? MenuUnlockedIcon() : MenuLockedIcon()}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
