import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App.tsx'
import { StoreProvider } from './app/providers/StoreProvider/index.ts';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
)
