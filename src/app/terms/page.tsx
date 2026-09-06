import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-8 py-24">
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">TERMS AND CONDITIONS</h1>
          <p className="text-gray-500">SHINECODING LTD</p>
          <p className="text-gray-500">12A Goldhurst Terrace, NW6 3HU, London, United Kingdom</p>
          <p className="text-gray-500">Last Updated: September 3, 2026</p>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">1. BINDING AGREEMENT</h2>
            <p className="mb-3">By downloading, installing, accessing, or using SnapQuest (the &quot;Service&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to all Terms, you must immediately cease using SnapQuest.</p>
            <p className="mb-3">These Terms constitute the entire agreement between you and SHINECODING LTD (&quot;we,&quot; &quot;us,&quot; &quot;Company&quot;) and supersede all prior discussions, negotiations, and agreements.</p>
            <p>These Terms are governed by the laws of England and Wales. You irrevocably submit to the jurisdiction of the English courts.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">2. SERVICE DESCRIPTION</h2>
            <p className="mb-3">SnapQuest is a gamified accountability service enabling users (&quot;Members&quot;) to participate in performance-based challenges (&quot;Quests&quot;) by submitting photographic evidence (&quot;Snaps&quot;).</p>
            <p className="mb-3">Participation requires allocation of virtual Credits. Success is determined solely by user activity (snap submissions), not by chance, randomness, or luck.</p>
            <p className="mb-3">Outcomes are calculated based on the following formula: Success Rate = (Member Snaps / Required Snaps) x 100%.</p>
            <p className="mb-3">Quests are settled in-app; forfeited participation credits are retained as a service fee; Rewards (if any) are funded from SHINECODING LTD&apos;s company budget, or, for Partnership Quests, by the sponsoring partner, and may be redeemed for merchant vouchers.</p>
            <p className="mb-3">When you purchase Credits, you are purchasing access to the SnapQuest service and its performance-tracking features. You are not depositing, investing, or entrusting funds with SHINECODING LTD for safekeeping. SHINECODING LTD does not hold, custody, or act as a trustee or escrow agent of your money at any time; amounts paid are consideration for the Service, processed and settled in accordance with Section 4.</p>
            <p className="mb-3">By purchasing Credits, you expressly request that SHINECODING LTD begin performance of the Service immediately, and you acknowledge that you thereby lose your statutory right to cancel (withdraw) under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.</p>
            <p>SnapQuest operates on an &quot;as-is&quot; basis. We do not guarantee outcomes, earnings, or user satisfaction.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">3. ELIGIBILITY AND ACCOUNT RESPONSIBILITY</h2>
            <p className="mb-3">You must be at least 18 years old to use SnapQuest.</p>
            <p className="mb-3">You are solely responsible for all activity on your account. You must maintain confidentiality of your credentials.</p>
            <p className="mb-3">You represent that all information provided is accurate and complete.</p>
            <p className="mb-3">We may suspend or terminate your account for any reason, with or without notice, including:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Violation of these Terms</li>
              <li>Fraudulent activity</li>
              <li>Inappropriate content</li>
              <li>Non-compliance with applicable law</li>
              <li>Business decision to terminate service</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-gray-900">4. QUEST MECHANICS AND SETTLEMENT</h2>

            <h3 className="mb-2 font-semibold text-gray-800">4.1 Quest Structure</h3>
            <p className="mb-2">Each quest specifies:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Required snap count and snap method</li>
              <li>Quest duration and frequency</li>
              <li>Participation fee</li>
              <li>Success rate thresholds</li>
            </ul>
            <p className="mb-4">Each Member&apos;s outcome is determined independently based solely on their verified snap submissions against the Quest&apos;s stated conditions. The quest leader (the creator of the Quest) sets those conditions. By participating in a Quest, a Member agrees to that Quest&apos;s stated conditions. No chance, randomness, or luck is involved in the outcome determination.</p>

            <h3 className="mb-2 font-semibold text-gray-800">4.2 Success Rate Calculation</h3>
            <p className="mb-2">Success Rate is calculated as follows: Success Rate = (Your Snaps / Required Snaps) x 100%.</p>
            <p className="mb-2">Only snaps meeting content standards are counted.</p>
            <p className="mb-4">Calculation is deterministic and final upon settlement.</p>

            <h3 className="mb-2 font-semibold text-gray-800">4.3 Settlement and Distribution - In-App and Stripe Payments</h3>
            <p className="mb-3">This section applies only to quests paid with in-app Credits or Stripe. These are the only quests that may earn Rewards eligible for voucher redemption.</p>
            <p className="mb-3">Quests settle within 3 days of deadline.</p>
            <p className="mb-2 font-medium text-gray-700">Individual Success Rate Determination:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Success Rate 100%: Successful (may be eligible for a Reward)</li>
              <li>Success Rate 85% or greater, but less than 100%: Participation credit fully returned, no Reward</li>
              <li>Success Rate less than 85%: Unsuccessful (participation credit partially deducted; you receive back a portion calculated as: participation credit x success rate. No Reward will be given.)</li>
            </ul>
            <p className="mb-2 font-medium text-gray-700">Forfeited participation credits (service fee):</p>
            <p className="mb-3">Any participation credits deducted from unsuccessful Members are retained by SHINECODING LTD as a service fee and/or extinguished. They are not redistributed to other Members, not transferred into any Member prize pool, and are not used to fund Rewards.</p>
            <p className="mb-2 font-medium text-gray-700">Company-funded Rewards:</p>
            <p className="mb-2">Rewards are a discretionary rebate paid by SHINECODING LTD, separately from and out of its own company budget, to Members who successfully complete a Quest. They are not a prize, winnings, or return on investment, and are not funded by other Members&apos; forfeited credits. Where Rewards are awarded:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Each Successful Member (Success Rate 100%) receives a fixed, predetermined Reward amount set in advance for that Quest and disclosed to Members before they join. The amount does not depend on, and is not divided based on, how many other Members succeed or fail</li>
              <li>No Credits or Rewards are transferred between Members</li>
            </ul>
            <p className="mb-2 font-medium text-gray-700">Partnership Quests:</p>
            <p className="mb-3">Some Quests are sponsored by a third-party partner (a &quot;Partnership Quest&quot;), identified as such within the Quest itself. For Partnership Quests, the Reward is funded by the sponsoring partner rather than SHINECODING LTD&apos;s own company budget. SHINECODING LTD may facilitate distribution of the Reward on the partner&apos;s behalf, but the partner is responsible for funding it. Other than the source of funding, Partnership Quests are settled under the same rules as this Section 4.3.</p>
            <p className="mb-3">SHINECODING LTD manages all fund transfers, refunds, service-fee forfeitures, and Reward distributions for in-app and Stripe payments. Settlement is processed automatically through our system within 3 days of quest deadline.</p>
            <p className="mb-4">All refunds are issued back to the original payment method used for the transaction. SHINECODING LTD does not issue refunds by cash, bank transfer, or to any payment method or account other than the one used to make the original payment.</p>
            <p className="mb-4">Settlement results are final and binding. No reconsideration, revision, or dispute procedure is available except where SHINECODING LTD made a demonstrable calculation error affecting multiple users.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">4.4 Voucher Redemption</h2>
            <p className="mb-3">Vouchers at participating merchants may only be purchased using Rewards from in-app payment or Stripe quests (Section 4.3). Credits cannot be used to purchase Vouchers.</p>
            <p className="mb-3">Minimum balance of 1,000 Rewards required.</p>
            <p className="mb-3">All Voucher purchases are final and non-refundable. Vouchers cannot be exchanged, returned, or converted back to Rewards or Credits.</p>
            <p className="mb-2">Voucher validity, expiration, redemption terms, and merchant policies are controlled by merchants, not SHINECODING LTD. We are not responsible for:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Voucher acceptance or validity</li>
              <li>Merchant availability or policy changes</li>
              <li>Voucher expiration or terms</li>
              <li>Redemption disputes or issues</li>
              <li>Merchant non-compliance</li>
            </ul>
            <p className="mb-3">Rewards may alternatively be converted to Credits at the specified exchange rate for future quest participation, instead of redeeming for Vouchers.</p>
            <p>Rewards earned through in-app or Stripe quests are non-refundable and cannot be redeemed for real money or cash, other than merchant vouchers as described in this section (or conversion to Credits as above).</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">5. SERVICE AVAILABILITY AND OUTAGES</h2>
            <p className="mb-3">SnapQuest is provided using commercially reasonable efforts to maintain availability, but we do not guarantee uninterrupted, error-free, or continuous access to the Service. Outages may occur due to maintenance, technical failure, or circumstances beyond our reasonable control.</p>
            <p className="mb-3">Where SHINECODING LTD&apos;s own monitoring systems confirm that a Service outage prevented Members generally from submitting Snaps during a required submission window, SHINECODING LTD will, at its discretion, either count that window as a successfully submitted Snap for all affected Members when calculating Success Rate (Member Snaps / Required Snaps x 100%), or extend the affected deadline for all impacted Members. This is the sole and exclusive remedy for Service outages. Individual, unverified reports of a missed submission are not treated as outage-related unless confirmed by SHINECODING LTD&apos;s monitoring systems.</p>
            <p className="mb-3">If Quest, Snap, Credit, or Reward data is lost, corrupted, or otherwise unrecoverable (including as a result of technical failure, security incident, or data loss event), SHINECODING LTD will use reasonable efforts to reconstruct the affected data from backups or from records held by its payment processors (Apple, Google, Stripe). Where the affected data cannot be reconstructed, SHINECODING LTD will void the affected Quest(s) and refund or credit any verifiable payment made for them; no further compensation is payable.</p>
            <p>Except in cases of gross negligence or fraud, SHINECODING LTD&apos;s liability for any Service outage or data loss event is limited to the participation credit paid for the directly affected Quest, and SHINECODING LTD is not liable for any indirect, consequential, or incidental loss.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">6. FRAUDULENT OR UNAUTHORIZED PAYMENTS</h2>
            <p className="mb-3">Payments made using a stolen, unauthorized, or fraudulently obtained payment method are prohibited. If a payment is later reversed, charged back, disputed, or identified as unauthorized or fraudulent (whether by the payment processor, card issuer, or SHINECODING LTD&apos;s own fraud checks), SHINECODING LTD may, at any time and regardless of how much time has elapsed:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Suspend or terminate the associated account</li>
              <li>Withhold, freeze, reverse, or forfeit any Credits, Rewards, or Vouchers associated with the disputed payment or account, whether or not they have already been used, redeemed, or converted</li>
              <li>Deduct the disputed amount from any other balance held on the account</li>
              <li>Report the matter to the relevant payment processor, card issuer, or law enforcement authorities</li>
            </ul>
            <p>A Member who receives Credits, Rewards, or Vouchers as a result of a payment that is later reversed or found to be unauthorized has no entitlement to retain them and remains liable to SHINECODING LTD for their value. This section applies in addition to, and does not limit, SHINECODING LTD&apos;s rights under Section 3 (Eligibility and Account Responsibility).</p>
          </section>

        </div>

      </main>
      <Footer />
    </>
  );
}
