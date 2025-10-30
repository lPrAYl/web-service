import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllPersonsRoute, getViewPersonsRoute, viewPersonRouteParams } from './lib/routes.ts'
import { TrpcProvider } from './lib/trpc'
import { AllPersonsPage } from './pages/AllPersonsPage'
import { ViewPersonPage } from './pages/ViewPersonPage'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllPersonsRoute()} element={<AllPersonsPage />} />
          <Route path={getViewPersonsRoute(viewPersonRouteParams)} element={<ViewPersonPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
