import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { getAllPersonsRoute, getViewPersonsRoute, viewPersonRouteParams } from './lib/routes.ts'
import { TrpcProvider } from './lib/trpc'
import { AllPersonsPage } from './pages/AllPersonsPage'
import { ViewPersonPage } from './pages/ViewPersonPage'
import './styles/global.scss'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllPersonsRoute()} element={<AllPersonsPage />} />
            <Route path={getViewPersonsRoute(viewPersonRouteParams)} element={<ViewPersonPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
