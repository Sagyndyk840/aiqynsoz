import type { RouteObject } from 'react-router-dom'

export type AppRoutesProps = RouteObject & {
  auth?: boolean,
}
