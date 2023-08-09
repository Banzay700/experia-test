import { ROUTES } from 'routes'
import { ReactComponent as DashboardIcon } from 'assets/dashboard.svg'
import { ReactComponent as CardIcon } from 'assets/cards.svg'
import { ReactComponent as ProductIcon } from 'assets/product.svg'
import { ReactComponent as HeartIcon } from 'assets/heart.svg'
import { ReactComponent as GamesIcon } from 'assets/games.svg'
import { ReactComponent as SettingsIcon } from 'assets/settings.svg'

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
