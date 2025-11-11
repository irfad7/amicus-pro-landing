import { Link } from "react-router-dom";
import amicusProLogo from "../../assets/images/amicus pro.svg";

export const TermsOfServicePage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full flex flex-col">
        {/* Header with Logo */}
        <div className="w-full bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <Link to="/" className="hover:opacity-80 transition-opacity flex justify-center">
              <img
                src={amicusProLogo}
                alt="Amicus Pro by My Legal Academy"
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="[font-family:'Playfair_Display',serif] text-3xl md:text-4xl font-semibold text-[#0c0c0c] mb-7">
            Terms of Service
          </h1>
          
          <div className="space-y-6 text-[#4d5256] [font-family:'Playfair_Display',serif]">
            <p className="text-sm mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Amicus Pro platform (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                2. Use License
              </h2>
              <p>
                Permission is granted to use the Amicus Pro platform for your law firm's business purposes in accordance with these terms. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                3. Description of Services
              </h2>
              <p>
                Amicus Pro by My Legal Academy, a dba of Redwood Meridian LLC, provides AI-powered law firm management software and related services for legal professionals. Our services are subject to prerequisites and process adherence. No guarantees of specific case outcomes are provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                4. User Accounts
              </h2>
              <p>
                To access certain features of our services, you may be required to provide your email address and other information. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                5. Disclaimer
              </h2>
              <p>
                The Amicus Pro platform is provided on an 'as is' basis. My Legal Academy, a dba of Redwood Meridian LLC, makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="mt-4">
                Further, My Legal Academy does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the platform or otherwise relating to such services or on any sites linked to this platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                6. Limitations
              </h2>
              <p>
                In no event shall My Legal Academy, a dba of Redwood Meridian LLC, or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Amicus Pro platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                7. Compliance with State Bar Guidelines
              </h2>
              <p>
                Users agree to comply with all applicable State Bar guidelines and regulations. This service is subject to My Legal Academy's prerequisites and process adherence. No guarantees of specific case outcomes are provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                8. Revisions and Errata
              </h2>
              <p>
                The content appearing on the Amicus Pro platform could include technical, typographical, or other errors. My Legal Academy does not warrant that any of the content on the platform is accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                9. Links
              </h2>
              <p>
                My Legal Academy has not reviewed all of the sites linked to the Amicus Pro platform and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by My Legal Academy of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                10. Site Terms of Use Modifications
              </h2>
              <p>
                My Legal Academy may revise these terms of service for the Amicus Pro platform at any time without notice. By using this platform you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                11. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0c0c0c] mb-4">
                12. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Amicus Pro by My Legal Academy</strong><br />
                <em>A dba of Redwood Meridian LLC</em><br />
                7104 Salisbury Rd.<br />
                West Hills, CA 91307<br />
                Email: <a href="mailto:support@mylegalacademy.com" className="text-[#22c55e] hover:underline">support@mylegalacademy.com</a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/" 
              className="text-[#22c55e] hover:underline [font-family:'Playfair_Display',serif]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

