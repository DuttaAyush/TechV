import PageShell from '@/components/site/page-shell';

export const metadata = {
  title: 'Terms & Conditions | VRTANS',
  description: 'Terms and Conditions for VRTANS services.',
};

export default function TermsAndConditionsPage() {
  return (
    <PageShell>
      <div className="bg-[#faf7f2] py-20 min-h-screen">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          
          <div className="mb-12 border-l-4 border-[#86bc25] pl-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
              Legal & Compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#1c1a18] tracking-tight">
              Terms & <span className="font-bold text-black">Conditions</span>
            </h1>
          </div>

          <div className="prose prose-lg sm:prose-xl max-w-none text-black prose-headings:font-bold prose-headings:text-black prose-p:text-black prose-a:text-[#86bc25] prose-li:text-black prose-strong:text-black prose-h3:text-3xl sm:prose-h3:text-4xl prose-h4:text-2xl sm:prose-h4:text-3xl mt-12">
            <h3 className='font-semibold text-3xl'>1. Nature of Services</h3>
            <p>The consulting and engineering services provided by VRTANS ("the Company") are based on established architectural principles, technology frameworks, and professional expertise.</p>
            <p>Project outcomes depend on multiple enterprise factors, including the client’s infrastructure, technological readiness, and operational follow-through. Hence, absolute results cannot be guaranteed outside of explicitly stated SLAs.</p>
            <p>Guidance provided by the Company is advisory and strategic in nature. Clients retain the ultimate authority to accept or reject architectural advice.</p>
            <p>These consultations do not constitute legal advice or an assumed contractual liability beyond the scope of a signed Master Services Agreement. By availing of the services, the client acknowledges that no overarching legal liability arises solely from the strategic advice given.</p>

            <h3 className='font-semibold text-3xl'>2. Acceptance of Terms</h3>
            <p>By accessing the website VRTANS.tech ("Website") or engaging our services ("Services"), you agree to be bound by these Terms & Conditions.</p>
            <p>If you do not agree with any provision of these Terms, you should discontinue use of the Website and Services.</p>
            <p>These Terms apply to all visitors, clients, and users of the Website and Services.</p>

            <h3 className='font-semibold text-3xl'>3. Purchases & Payments</h3>
            <p>If you choose to purchase any service or blueprint through our website, you may be required to provide corporate, billing, or payment information.</p>
            <p>Payments are processed through secure, regulated payment gateways. The Company does not store your sensitive payment details in compliance with international and regional security guidelines.</p>
            <p>By making a payment, you confirm that the information provided is true and accurate and that you are authorized to use the chosen payment method on behalf of your organization.</p>
            <p>We do not compel clients to purchase any product or service. Participation and procurement are voluntary and based strictly on the client's business discretion.</p>

            <h3 className='font-semibold text-3xl'>4. Use of Website & Cybersecurity Compliance</h3>
            <p>You agree to use the Website only for lawful purposes and in compliance with all applicable cyber and data laws.</p>
            <p>You shall not attempt to gain unauthorized access, inject malware, or misuse the Website or its APIs in any manner.</p>
            <p>Any misuse, fraud, or cyber-offence will be reported to the appropriate cybersecurity and law enforcement authorities.</p>
            <p>We take advanced architectural steps to protect your data; however, no system is entirely immune. By using our Services, you accept this inherent technological risk.</p>

            <h3 className='font-semibold text-3xl'>5. Third-Party Links & Services</h3>
            <p>Our website may contain links to third-party technology providers or services that are not owned or controlled by VRTANS.</p>
            <p>We have no control over, and assume no responsibility for, the content, privacy policies, or practices of such platforms.</p>
            <p>You agree that VRTANS shall not be liable for any damage or loss arising from reliance on or use of such third-party enterprise services.</p>

            <h3 className='font-semibold text-3xl'>6. Liability Disclaimer</h3>
            <p>The Company, its directors, engineers, or representatives shall not be liable for any direct, indirect, incidental, or consequential loss arising from the implementation of the Services, unless governed by an explicit SLA.</p>
            <p>The Company shall not be liable for operational decisions made by clients based on our architectural consulting.</p>
            <p>The Company shall not be liable for technical disruptions, infrastructure incidents, or force majeure events beyond reasonable control.</p>

            <h3 className='font-semibold text-3xl'>7. Changes to Terms</h3>
            <p>The Company reserves the right to update or modify these Terms at any time, in compliance with applicable laws.</p>
            <p>Material changes will be notified via the Website and, where feasible, by email to active partners. Continued use of Services after changes implies acceptance.</p>

            <h3 className='font-semibold text-3xl'>8. Governing Law & Jurisdiction</h3>
            <p>These Terms shall be governed by and construed in accordance with standard international business laws, unless otherwise specified in your enterprise agreement.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
