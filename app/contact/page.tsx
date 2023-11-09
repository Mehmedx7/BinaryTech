import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | #",
  description: "#",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Connect with Binary Tech for inquiries, support, or collaboration. Our team unlocks software solutions tailored to your needs. Your message sparks innovation."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
