import { ROUTES } from 'routes'
import DashboardIcon from 'assets/dashboard.svg?react'
import CardIcon from 'assets/cards.svg?react'
import ProductIcon from 'assets/product.svg?react'
import HeartIcon from 'assets/heart.svg?react'
import GamesIcon from 'assets/games.svg?react'
import SettingsIcon from 'assets/settings.svg?react'

export const navbarLinks = [
  {
    path: ROUTES.DASHBOARD,
    icon: <DashboardIcon />,
  },
  {
    path: ROUTES.CARDS,
    icon: <CardIcon />,
  },
  {
    path: ROUTES.PRODUCTS,
    icon: <ProductIcon />,
  },
  {
    path: ROUTES.WEARS,
    icon: <HeartIcon />,
  },
  {
    path: ROUTES.GAMES,
    icon: <GamesIcon />,
  },
  {
    path: ROUTES.SETTINGS,
    icon: <SettingsIcon />,
  },
]
