import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about-page";
import { ContactPage } from "@/pages/contact-page";
import { FaqPage } from "@/pages/faq-page";
import { PrivacyPage } from "@/pages/privacy-page";
import { NotFoundPage } from "@/pages/not-found";

function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
