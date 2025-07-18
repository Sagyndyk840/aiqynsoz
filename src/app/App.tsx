import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@shared/const/router.ts'
import { routeConfig } from '@app/providers/router/config'
import { DefaultLayout } from '@app/layout/default-layout'
import { AuthLayout } from '@app/layout/auth-layout'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      routeConfig[AppRoutes.LOGIN],
      routeConfig[AppRoutes.REGISTER],
      routeConfig[AppRoutes.RESET],
      routeConfig[AppRoutes.FORGET],
    ],
  },
  {
    element: <DefaultLayout />,
    children: Object.entries(routeConfig)
      .filter(([key]) =>
        !([
          AppRoutes.LOGIN,
          AppRoutes.REGISTER,
          AppRoutes.RESET,
          AppRoutes.FORGET,
          AppRoutes.NOT_FOUND,
        ] as AppRoutes[]).includes(key as AppRoutes),
      )
      .map(([, route]) => route),
  },
  {
    path: routeConfig[AppRoutes.NOT_FOUND].path,
    element: routeConfig[AppRoutes.NOT_FOUND].element,
  },
])
