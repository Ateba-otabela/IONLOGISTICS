import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import AuthLayout from '@/layouts/AuthLayout';
import CustomerLayout from '@/layouts/CustomerLayout';
import AdminLayout from '@/layouts/AdminLayout';

import Home from '@/pages/public/Home';
import About from '@/pages/public/About';
import Services from '@/pages/public/Services';
import Industries from '@/pages/public/Industries';
import Pricing from '@/pages/public/Pricing';
import RequestQuote from '@/pages/public/RequestQuote';
import TrackShipment from '@/pages/public/TrackShipment';
import ShippingCalculator from '@/pages/public/ShippingCalculator';
import CoverageAreas from '@/pages/public/CoverageAreas';
import Warehousing from '@/pages/public/Warehousing';
import Fleet from '@/pages/public/Fleet';
import Careers from '@/pages/public/Careers';
import Blog from '@/pages/public/Blog';
import BlogDetails from '@/pages/public/BlogDetails';
import FAQs from '@/pages/public/FAQs';
import Testimonials from '@/pages/public/Testimonials';
import Contact from '@/pages/public/Contact';
import PrivacyPolicy from '@/pages/public/PrivacyPolicy';
import Terms from '@/pages/public/Terms';

import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import VerifyEmail from '@/pages/auth/VerifyEmail';

import Dashboard from '@/pages/customer/Dashboard';
import Notifications from '@/pages/customer/Notifications';
import Profile from '@/pages/customer/Profile';
import SecuritySettings from '@/pages/customer/SecuritySettings';
import CreateShipment from '@/pages/customer/shipments/CreateShipment';
import MyShipments from '@/pages/customer/shipments/MyShipments';
import ShipmentDetails from '@/pages/customer/shipments/ShipmentDetails';
import ShipmentTracking from '@/pages/customer/shipments/ShipmentTracking';
import ShipmentHistory from '@/pages/customer/shipments/ShipmentHistory';
import SchedulePickup from '@/pages/customer/shipments/SchedulePickup';
import DeliveryConfirmation from '@/pages/customer/shipments/DeliveryConfirmation';
import ActiveOrders from '@/pages/customer/orders/ActiveOrders';
import CompletedOrders from '@/pages/customer/orders/CompletedOrders';
import CancelledOrders from '@/pages/customer/orders/CancelledOrders';
import PaymentMethods from '@/pages/customer/payments/PaymentMethods';
import Billing from '@/pages/customer/payments/Billing';
import Invoices from '@/pages/customer/payments/Invoices';
import Transactions from '@/pages/customer/payments/Transactions';
import Wallet from '@/pages/customer/payments/Wallet';
import RefundRequests from '@/pages/customer/payments/RefundRequests';
import UploadDocuments from '@/pages/customer/documents/UploadDocuments';
import ShippingDocuments from '@/pages/customer/documents/ShippingDocuments';
import CustomsDocuments from '@/pages/customer/documents/CustomsDocuments';
import Messages from '@/pages/customer/communication/Messages';
import SupportTickets from '@/pages/customer/communication/SupportTickets';
import LiveChat from '@/pages/customer/communication/LiveChat';

import AdminDashboard from '@/pages/admin/dashboard/Dashboard';
import LiveOperations from '@/pages/admin/dashboard/LiveOperations';
import Analytics from '@/pages/admin/dashboard/Analytics';
import AdminShipments from '@/pages/admin/shipments/Overview';
import AdminCustomers from '@/pages/admin/customers/Overview';
import AdminDrivers from '@/pages/admin/drivers/Overview';
import AdminFleet from '@/pages/admin/fleet/Overview';
import AdminWarehouses from '@/pages/admin/warehouses/Overview';
import AdminRoutes from '@/pages/admin/routes/Overview';
import AdminFinance from '@/pages/admin/finance/Overview';
import AdminReports from '@/pages/admin/reports/Overview';
import AdminAdministration from '@/pages/admin/administration/Overview';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="request-quote" element={<RequestQuote />} />
        <Route path="track-shipment" element={<TrackShipment />} />
        <Route path="shipping-calculator" element={<ShippingCalculator />} />
        <Route path="coverage-areas" element={<CoverageAreas />} />
        <Route path="warehousing" element={<Warehousing />} />
        <Route path="fleet" element={<Fleet />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />
      </Route>
      <Route path="customer" element={<CustomerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
        <Route path="security" element={<SecuritySettings />} />
        <Route path="shipments/create" element={<CreateShipment />} />
        <Route path="shipments" element={<MyShipments />} />
        <Route path="shipments/:id" element={<ShipmentDetails />} />
        <Route path="shipments/tracking" element={<ShipmentTracking />} />
        <Route path="shipments/history" element={<ShipmentHistory />} />
        <Route path="shipments/schedule-pickup" element={<SchedulePickup />} />
        <Route path="shipments/delivery-confirmation" element={<DeliveryConfirmation />} />
        <Route path="orders/active" element={<ActiveOrders />} />
        <Route path="orders/completed" element={<CompletedOrders />} />
        <Route path="orders/cancelled" element={<CancelledOrders />} />
        <Route path="payments/methods" element={<PaymentMethods />} />
        <Route path="payments/billing" element={<Billing />} />
        <Route path="payments/invoices" element={<Invoices />} />
        <Route path="payments/transactions" element={<Transactions />} />
        <Route path="payments/wallet" element={<Wallet />} />
        <Route path="payments/refunds" element={<RefundRequests />} />
        <Route path="documents/upload" element={<UploadDocuments />} />
        <Route path="documents/shipping" element={<ShippingDocuments />} />
        <Route path="documents/customs" element={<CustomsDocuments />} />
        <Route path="communication/messages" element={<Messages />} />
        <Route path="communication/tickets" element={<SupportTickets />} />
        <Route path="communication/live-chat" element={<LiveChat />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="live-operations" element={<LiveOperations />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="shipments" element={<AdminShipments />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="drivers" element={<AdminDrivers />} />
        <Route path="fleet" element={<AdminFleet />} />
        <Route path="warehouses" element={<AdminWarehouses />} />
        <Route path="routes" element={<AdminRoutes />} />
        <Route path="finance" element={<AdminFinance />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="administration" element={<AdminAdministration />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
