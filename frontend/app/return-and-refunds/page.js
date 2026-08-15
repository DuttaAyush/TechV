import PageShell from '@/components/site/page-shell';

export const metadata = {
  title: 'Return & Refunds | VRTANS',
  description: 'Return and Refunds policy for VRTANS services.',
};

export default function ReturnAndRefundsPage() {
  return (
    <PageShell>
      <div className="bg-[#faf7f2] py-20 min-h-screen">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          
          <div className="mb-12 border-l-4 border-[#86bc25] pl-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
              Legal & Compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#1c1a18] tracking-tight">
              Return & <span className="font-bold text-black">Refunds</span>
            </h1>
          </div>

          <div className="prose prose-lg sm:prose-xl max-w-none text-black prose-headings:font-bold prose-headings:text-black prose-p:text-black prose-a:text-[#86bc25] prose-li:text-black prose-strong:text-black prose-h3:text-3xl sm:prose-h3:text-4xl prose-h4:text-2xl sm:prose-h4:text-3xl mt-12">
            <h3 className='font-semibold text-3xl'>Refund Policy</h3>
            <p>All consulting and service fees paid are generally non-refundable once the service has been delivered in full, except in the exceptional cases outlined below.</p>
            <p>Refunds may be processed in the event of erroneous payment (duplicate, wrong amount), failure in payment processing, undelivered or deficient services, or cancellation by VRTANS.</p>
            <p>To request a refund, clients must notify VRTANS in writing within 3 business days (maximum 7 business days) of payment (or upon discovering the error).</p>
            <p>Upon verification, approved refunds will be processed within 5-10 business days, via the original mode of payment (or alternate if mutually agreed).</p>
            <p>We do not accept chargebacks without due justification; clients must communicate with us first before initiating a chargeback.</p>
            <p>This policy is subject to change; the version on our website or the executed Master Services Agreement at the time of your engagement applies.</p>
            
            <h3 className='font-semibold text-3xl'>Subscription & Retainers</h3>
            <p>Subscription and ongoing retainer payments are generally non-refundable once processed.</p>
            <p>Exception: If you contact us via our registered email (<strong>partners@vrtans.tech</strong>) within 7 business days of payment, you may be eligible for a review and potential refund.</p>
            <p>Requests made after this period will not be eligible for a refund.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
