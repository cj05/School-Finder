
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.tsx'
import App from './App.tsx'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <Router/>
  </div>,
)
