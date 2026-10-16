// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/Home';
import { Success } from './pages/Succes';
import { Cancel } from './pages/Cancel';
import { FAQ } from './pages/FAQ';
// // Import des pages légales
// import MentionsLegales from './pages/legal/MentionsLegales';
// import Cgv from './pages/legal/Cgv';
// import Confidentialite from './pages/legal/Confidentialite';
// import Contact from './pages/legal/Contact';

// import ArticleView from './pages/ArticleView';
// import BlogIndex from './pages/blog/BlogIndex';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Route principale : La page d'accueil avec le formulaire de la Petite Souris */}
          <Route path="/" element={<Home />} />
          
          {/* Route de succès après paiement Stripe (Téléchargement du PDF) */}
          <Route path="/success" element={<Success />} />
          
          {/* Route d'annulation de paiement  */}
          <Route path="/cancel" element={<Cancel />} />

          {/* Route pour la FAQ  */}
          <Route path="/faq" element={<FAQ />} />
          
          {/* Routes légales (obligatoires pour ton entreprise en France) */}
          {/* <Route path="/mentions-legales" element={<MentionsLegales />} /> */}
          {/* <Route path="/cgv" element={<Cgv />} /> */}
          {/* <Route path="/confidentialite" element={<Confidentialite />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* Routes pour le blog (conseils sur les dents de lait, FAQ parents, etc.) */}
          {/* <Route path="/blog" element={<BlogIndex />} /> */}
          {/* <Route path="/blog/:slug" element={<ArticleView />} />  */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}