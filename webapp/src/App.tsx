import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import * as routes from './lib/routes.ts'
import { TrpcProvider } from './lib/trpc'
import { AllPersonsPage } from './pages/AllPersonsPage'
import { NewPersonPage } from './pages/NewPersonPage'
import { ViewPersonPage } from './pages/ViewPersonPage'
import './styles/global.scss'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getAllPersonsRoute()} element={<AllPersonsPage />} />
            <Route path={routes.getNewPersonRoute()} element={<NewPersonPage />} />
            <Route path={routes.getViewPersonsRoute(routes.viewPersonRouteParams)} element={<ViewPersonPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
