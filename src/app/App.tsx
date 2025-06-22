import { createBrowserRouter } from 'react-router-dom'
import { routeConfig } from '@app/providers/router/config'
import { DefaultLayout } from '@app/layout/default-layout'

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      routeConfig[AppRoutes.HOME],
      // ... другие маршруты
    ]
  },
  // ... остальная конфигурация
])
