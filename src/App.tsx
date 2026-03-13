import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import BidManagement from "./pages/BidManagement";
import SalesOperations from "./pages/SalesOperations";
import SoftwareDev from "./pages/SoftwareDev";
import ServiceMaintenance from "./pages/ServiceMaintenance";
import Inventory from "./pages/Inventory";
import ResourcePlanning from "./pages/ResourcePlanning";
import FinancialAnalytics from "./pages/FinancialAnalytics";
import DocumentControl from "./pages/DocumentControl";
import Meetings from "./pages/Meetings";
import Marketing from "./pages/Marketing";
import ITSupport from "./pages/ITSupport";
import StrategicPlanning from "./pages/StrategicPlanning";
import TaskManagement from "./pages/TaskManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bids" element={<BidManagement />} />
            <Route path="/sales" element={<SalesOperations />} />
            <Route path="/development" element={<SoftwareDev />} />
            <Route path="/service" element={<ServiceMaintenance />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/resources" element={<ResourcePlanning />} />
            <Route path="/financials" element={<FinancialAnalytics />} />
            <Route path="/documents" element={<DocumentControl />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/support" element={<ITSupport />} />
            <Route path="/strategy" element={<StrategicPlanning />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
