import accountingImage from "@/assets/accounting.png";
import hardwareImage from "@/assets/hardware.png";
import cctvImage from "@/assets/cctv.png";
import perfomanceImage from "@/assets/perfomance_report.png";
import paymentImage from "@/assets/payment_system.png";
import electronicInvImage from "@/assets/electronic_invoicing.png";
import webDevImage from "@/assets/web_development.png";
import designEmpImage from "@/assets/design_for_emp.png";



export type Feature = {
  slug: string;
  title: string;
  description: string;
  details: string;
  image: string;
};

export const features: Feature[] = [
  {
    slug: "accounting",
    title: "Accounting",
    description:
      "Smart accounting software built for Saudi VAT, Fatoora, and real-time financial control.",
    details:
      "Our accounting solution is purpose-built for Saudi businesses, with full compliance for VAT and Fatoora e-invoicing regulations. Get a real-time view of your profit and loss, manage expenses, reconcile bank accounts, and generate audit-ready financial statements — all from a single dashboard. Seamlessly integrates with Zakat and Income Tax Authority (ZATCA) requirements so you're always compliant and inspection-ready.",
    image: accountingImage,
  },
  {
    slug: "hardware",
    title: "Hardware",
    description:
      "Enterprise-grade computers and networking equipment, supplied and installed locally.",
    details:
      "We source, configure, and deploy enterprise-grade hardware across Saudi Arabia. From workstations and servers to switches, routers, and access points — our certified engineers handle installation, cabling, and commissioning on-site. All equipment comes with local warranty support and next-business-day replacement guarantees, keeping your operations running without interruption.",
    image: hardwareImage,
  },
  {
    slug: "cctv-systems",
    title: "CCTV Systems",
    description:
      "Keep your business secure with industry-leading CCTV and surveillance solutions.",
    details:
      "Protect your premises with our end-to-end CCTV and surveillance solutions. We design, supply, and install high-definition IP camera systems with remote viewing, motion detection, and long-term cloud or NVR storage. Our systems are compliant with Saudi safety standards and can be integrated with access control for a unified security posture across all your sites.",
    image: cctvImage,
  },
  {
    slug: "performance-reports",
    title: "Performance Reports",
    description:
      "Real-time performance reports that give you instant visibility into your business.",
    details:
      "Make faster, smarter decisions with live performance dashboards tailored to your business. Track KPIs across sales, operations, HR, and finance in one place. Our reporting engine pulls from all connected systems — accounting, POS, inventory — and surfaces the metrics that matter most. Schedule automated reports to stakeholders or export to Excel and PDF with one click.",
      image: perfomanceImage,
    // image:
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eEor7SAqm4jpFHwNn_gwWp569NYDmWmisjicKyNhv08z0IE6fqGXP0Q&s=10",
  },
  {
    slug: "payment-systems",
    title: "Payment Systems",
    description:
      "Fast, secure payment processing integrated seamlessly with your business operations.",
    details:
      "Accept payments everywhere your customers are — in-store, online, or on the go. Our payment systems support Mada, Visa, Mastercard, Apple Pay, STC Pay, and all major Saudi payment networks. PCI-DSS compliant infrastructure ensures every transaction is encrypted end-to-end. Native integrations with your accounting and inventory systems mean reconciliation is automatic, not manual.",
    image: paymentImage,
    // image:
    //   "https://i0.wp.com/vpurshan.wpcomstaging.com/wp-content/uploads/2023/01/Electronic-Payment-System.jpg?fit=1200%2C800&ssl=1",
  },
  {
    slug: "electronic-invoicing",
    title: "Electronic Invoicing",
    description:
      "Fatoora-compliant electronic invoicing that's fast, accurate, and fully automated.",
    details:
      "Stay ahead of ZATCA Phase 2 requirements with our fully certified e-invoicing solution. Generate compliant Fatoora invoices in seconds, submit them to the ZATCA portal automatically, and receive clearance confirmations without leaving your system. Supports B2B and B2C flows, credit notes, and multi-branch operations. Retain complete audit trails and signed XML records for every transaction.",
    image:
      electronicInvImage,
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    description:
      "Track stock levels, suppliers, and costs in real time — never run out or overstock again.",
    details:
      "Take full control of your supply chain with our real-time inventory management platform. Set reorder points and get automatic purchase order suggestions before stock runs out. Track items by serial number, batch, or expiry date. Manage multiple warehouses from a single interface, and sync stock levels instantly with your e-commerce store and POS. Detailed cost-of-goods reporting gives you true margin visibility at the SKU level.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadlb7ouK_u2nabmnh4HPmytK_4YF0RDLwn92M45StBf1Al8v9uw_zVWM&s=10",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web applications built to grow your business online.",
    details:
      "From marketing websites to complex web applications, our development team builds digital products that perform. We specialise in React, Next.js, and TypeScript, delivering fast, accessible, SEO-optimised experiences. Every project includes UX design, mobile responsiveness, and an Arabic-language option. Post-launch, we offer ongoing maintenance plans and hosting management so you can focus on your business.",
    image:
      webDevImage,
  },
  {
    slug: "design-for-employees",
    title: "Design for Employees",
    description:
      "Professional workplace designs that boost productivity and reflect your brand identity.",
    details:
      "Your brand is only as strong as how it's presented internally. We design employee-facing materials — ID cards, business cards, office signage, onboarding packs, and uniform branding — that create a cohesive professional identity across your team. Our designers work within your brand guidelines and deliver print-ready files alongside digital assets, ensuring consistency from your front desk to your warehouse floor.",
    image:
      designEmpImage,
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
