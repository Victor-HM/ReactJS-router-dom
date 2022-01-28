import React from 'react';

import { Index } from "./pages/index"
import { Cerio } from "./pages/cerio"
import { Praseodimio } from "./pages/praseodimio"
import { Neodimio } from './pages/neodimio';
import { Promecio } from './pages/promecio';
import { Samario } from './pages/samario';
import { Europio } from './pages/europio';
import { Gadolinio } from './pages/gadolinio';

import {
  Routes,
  Route
} from "react-router-dom"

export function AppRoutes() {
  return (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/cerio" element={<Cerio />} />
    <Route path="/praseodimio" element={<Praseodimio />} />
    <Route path="/neodimio" element={<Neodimio />} />
    <Route path="/promecio" element={<Promecio />} />
    <Route path="/samario" element={<Samario />} />
    <Route path="/europio" element={<Europio />} />
    <Route path="/gadolinio" element={<Gadolinio />} />
  </Routes>
  )
}