import PageShell from '@/components/site/page-shell';

export const metadata = {
  title: 'Privacy Policy | VRTANS',
  description: 'Privacy Policy and data protection guidelines for VRTANS.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <div className="bg-[#faf7f2] py-20 min-h-screen">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          
          <div className="mb-12 border-l-4 border-[#86bc25] pl-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
              Legal & Compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#1c1a18] tracking-tight">
              Privacy <span className="font-bold text-black">Policy</span>
            </h1>
          </div>

          <div className="prose prose-lg sm:prose-xl max-w-none text-black prose-headings:font-bold prose-headings:text-black prose-p:text-black prose-a:text-[#86bc25] prose-li:text-black prose-strong:text-black prose-h3:text-3xl sm:prose-h3:text-4xl prose-h4:text-2xl sm:prose-h4:text-3xl mt-12">
            <p>VRTANS ("we", "us", or "our") respects your corporate privacy and is committed to protecting your organizational and personal information in accordance with global data protection standards.</p>
            <p>By accessing VRTANS.tech ("Website") or using our enterprise services ("Services"), you agree to the practices described in this policy.</p>

            <h3 className='font-semibold text-3xl'>Information We Collect</h3>
            <ul>
              <li><strong className='font-semibold'>Corporate & Personal Information (PII):</strong> Name, business email, phone number, corporate mailing address, and payment details (processed securely).</li>
              <li><strong className='font-semibold'>Usage Information:</strong> IP address, browser architecture, ISP, pages visited, timestamps, referring/exit pages, and interaction metrics.</li>
              <li><strong className='font-semibold'>Cookies & Web Beacons:</strong> Utilized to optimize user experience, store preferences, and customize content delivery.</li>
            </ul>
            <p>We do not knowingly collect personal information from individuals under the age of 18. If you believe such information has been provided, contact us immediately for secure removal.</p>

            <h3 className='font-semibold text-3xl'>How We Use Your Information</h3>
            <ul>
              <li>Architecting and personalizing your experience on our Website and Services.</li>
              <li>Processing transactions and executing enterprise payments securely.</li>
              <li>Responding to business inquiries and strategic service requests.</li>
              <li>Continuously improving our technical infrastructure and Website functionality.</li>
              <li>Administering business promotions, market surveys, and other site features.</li>
              <li>Sending critical technical and operational updates regarding your Services, subject to opt-in preferences.</li>
            </ul>

            <h3 className='font-semibold text-3xl'>Data Protection & Security</h3>
            <ul>
              <li>We implement enterprise-grade security measures and architectural best practices to prevent unauthorized access, disclosure, or misuse of your data.</li>
              <li>All digital payments are processed via regulated, secure gateways; sensitive financial data is never stored directly on our application servers.</li>
              <li>Regular vulnerability assessments, penetration testing, and security scans are conducted to ensure infrastructure integrity.</li>
              <li>While we maintain rigorous security protocols, no system is completely immune to risk; clients acknowledge the inherent limitations of online data security.</li>
            </ul>

            <h3 className='font-semibold text-3xl'>Cookies & Third-Party Services</h3>
            <ul>
              <li>Our platform utilizes cookies to enhance session management and user experience. You may disable cookies via your browser settings.</li>
              <li>Authorized third-party vendors (e.g., analytics providers) may utilize cookies or web beacons for traffic analysis and platform optimization.</li>
              <li>We maintain no direct control over third-party cookies. Please consult their respective privacy documentation for technical details.</li>
              <li>Our Privacy Policy does not extend to external corporate websites linked from VRTANS.tech.</li>
            </ul>

            <h3 className='font-semibold text-3xl'>Sharing Your Information</h3>
            <ul>
              <li>We strictly do not sell, trade, or rent your corporate or personal information.</li>
              <li>We may share necessary data exclusively with trusted infrastructure providers for operational purposes (e.g., cloud hosting, payment processing, secure analytics).</li>
              <li>We may share information to comply with applicable laws, subpoenas, or legal government requests.</li>
              <li>We may share information to protect our intellectual property, operational rights, or the strict safety of our users.</li>
            </ul>

            <h3 className='font-semibold text-3xl'>Your Data Rights</h3>
            <ul>
              <li>Access the personal and corporate data we actively hold.</li>
              <li>Correct or update inaccurate infrastructure or contact information.</li>
              <li>Withdraw consent for ongoing data processing.</li>
              <li>Request the complete deletion of your data from our systems. To submit a secure deletion request, please email us at <strong>partners@vrtans.tech</strong> with specific details of the data or account you want removed. We will verify your identity and systematically purge your data within 30 days, unless a longer retention period is mandated by law.</li>
            </ul>

            <h3 className='font-semibold text-3xl'>Changes to This Policy</h3>
            <p>We may update this Privacy Policy periodically to reflect technological or legal advancements. Material changes will be prominently notified via the Website. Continued utilization of our Services after updates implies binding acceptance.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
