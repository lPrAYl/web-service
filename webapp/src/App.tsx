import { TrpcProvider } from './lib/trpc'
import {AllPersonsPage} from "./pages/AllPersonsPage";

export const App = () => {
  return (
    <TrpcProvider>
      < AllPersonsPage />
    </TrpcProvider>
  )
}
