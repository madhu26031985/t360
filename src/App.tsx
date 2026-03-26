import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ProductDemoPage from './pages/ProductDemoPage';
import BetaPage from './pages/BetaPage';
import SupportPage from './pages/SupportPage';
import PrivacyPage from './pages/PrivacyPage';
import DataProtectionPage from './pages/DataProtectionPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ClubMembersReportPage from './pages/ClubMembersReportPage';
import ClubReportsPage from './pages/ClubReportsPage';
import WebLoginPage from './pages/WebLoginPage';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/demo" element={<ProductDemoPage />} />
          <Route path="/beta" element={<BetaPage />} />
          <Route path="/downloadnow" element={<BetaPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/weblogin" element={<WebLoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/club-members-report" element={<ClubMembersReportPage />} />
          <Route path="/club-members-report/:clubId" element={<ClubMembersReportPage />} />
          <Route path="/club-reports/:clubId" element={<ClubReportsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/data-protection" element={<DataProtectionPage />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;