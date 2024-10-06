import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { AppWrapper } from "app/App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWrapper />
    </QueryClientProvider>
  </React.StrictMode>
)
