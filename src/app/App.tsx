import React from "react"
import CallsTablePage from "pages/CallsTablePage/CallsTablePage"
import { LocalizationProvider } from "@mui/x-date-pickers-pro"
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs"

export const App = () => {
  return <CallsTablePage />
}

export const AppWrapper = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
    </LocalizationProvider>
  )
}
