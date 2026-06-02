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
          <p className="text-gray-500">Last Updated: April 26, 2026</p>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">1. BINDING AGREEMENT</h2>
            <p className="mb-3">By downloading, installing, accessing, or using SnapQuest (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all Terms, you must immediately cease using SnapQuest.</p>
            <p className="mb-3">These Terms constitute the entire agreement between you and SHINECODING LTD ("we," "us," "Company") and supersede all prior discussions, negotiations, and agreements.</p>
            <p>These Terms are governed by the laws of England and Wales. You irrevocably submit to the jurisdiction of the English courts.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">2. SERVICE DESCRIPTION</h2>
            <p className="mb-3">SnapQuest is a gamified accountability platform enabling users ("Members") to participate in performance-based challenges ("Quests") by submitting photographic evidence ("Snaps").</p>
            <p className="mb-3">Participation requires allocation of virtual Credits. Success is determined solely by user activity (snap submissions), not by chance, randomness, or luck.</p>
            <p className="mb-3">Outcomes are calculated based on the following formula: Success Rate = (Member Snaps / Required Snaps) x 100%.</p>
            <p>SnapQuest operates on an "as-is" basis. We do not guarantee outcomes, earnings, or user satisfaction.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">3. ELIGIBILITY AND ACCOUNT RESPONSIBILITY</h2>
            <p className="mb-3">You must be at least 18 years old to use SnapQuest.</p>
            <p className="mb-3">You are solely responsible for all activity on your account. We are not liable for unauthorized access, regardless of cause. You must maintain confidentiality of your credentials.</p>
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
            <p className="mb-4">Each Member's outcome is determined independently based solely on their verified snap submissions. Outcomes are decided by the quest leader (the creator of the quest). No chance, randomness, or luck is involved in the outcome determination.</p>

            <h3 className="mb-2 font-semibold text-gray-800">4.2 Success Rate Calculation</h3>
            <p className="mb-2">Success Rate is calculated as follows: Success Rate = (Your Snaps / Required Snaps) x 100%.</p>
            <p className="mb-2">Only snaps meeting content standards are counted.</p>
            <p className="mb-4">Calculation is deterministic and final upon settlement.</p>

            <h3 className="mb-2 font-semibold text-gray-800">4.3 Settlement and Distribution - In-App Payments</h3>
            <p className="mb-3">Quests settle within 3 days of deadline.</p>
            <p className="mb-2 font-medium text-gray-700">Individual Success Rate Determination:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Success Rate 100%: Successful (may be eligible for bonus)</li>
              <li>Success Rate 85% or greater, but less than 100%: Participation credit fully returned, no bonus</li>
              <li>Success Rate less than 85%: Unsuccessful (participation credit partially deducted; you receive back a portion calculated as: participation credit x success rate. No reward will be given.)</li>
            </ul>
            <p className="mb-2 font-medium text-gray-700">Bonus Distribution:</p>
            <p className="mb-2">Bonuses (Reward Credits) are distributed by SHINECODING LTD as follows:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>All Successful Members (Success Rate 100%) receive equal bonus shares</li>
              <li>Bonuses are distributed only if the distributed share to each member is equal to or more than 1 credit</li>
              <li>Bonuses are distributed only if at least one member in the quest achieves Success Rate less than 85%</li>
              <li>Bonuses come from SHINECODING LTD, not from other members</li>
              <li>No credits are transferred between members</li>
            </ul>
            <p className="mb-3">SHINECODING LTD manages all fund transfers, refunds, and bonus distributions for in-app payments. Settlement is processed automatically through our system within 3 days of quest deadline.</p>
            <p className="mb-4">Settlement results are final and binding. No reconsideration, revision, or dispute procedure is available except where SHINECODING LTD made a demonstrable calculation error affecting multiple users.</p>

            <h3 className="mb-2 font-semibold text-gray-800">4.3A Settlement and Distribution - Smart Contract Payments (Polygon)</h3>
            <p className="mb-3">Quests settle within 3 days of deadline.</p>
            <p className="mb-2">Individual Success Rate Determination:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Success Rate 100%: Successful (may be eligible for bonus)</li>
              <li>Success Rate 85% or greater, but less than 100%: Participation credit fully returned, no bonus</li>
              <li>Success Rate less than 85%: Unsuccessful (participation credit partially deducted; you receive back a portion calculated as: participation credit x success rate. No reward will be given.)</li>
            </ul>
            <p className="mb-2">The smart contract automatically calculates success rates and distributes credits as follows:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>All Successful Members (Success Rate 100%) receive equal bonus shares (if applicable)</li>
              <li>Bonuses are distributed only if the distributed share to each member is equal to or more than 1 credit</li>
              <li>Bonuses are distributed only if at least one member in the quest achieves Success Rate less than 85%</li>
              <li>Members with Success Rate 85% to 99% receive their full participation credit back</li>
              <li>Members with Success Rate less than 85% have participation credits partially deducted</li>
              <li>Bonuses come from SHINECODING LTD, not from other members</li>
              <li>No credits are transferred between members</li>
              <li>All distributions come from the smart contract's autonomous execution</li>
            </ul>
            <p className="mb-3">The smart contract executes all settlements automatically. We have no control over settlement execution, timing, distribution, or outcomes. All transactions are irreversible and autonomous.</p>
            <p>Settlement results are final and binding. No reconsideration, revision, or dispute procedure is available.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">4.4 Voucher Redemption</h2>
            <p className="mb-3">Vouchers at participating merchants may only be purchased using Rewards. Credits cannot be used to purchase Vouchers. Minimum balance of 1,000 Rewards required.</p>
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
            <p>Rewards earned through quests are non-refundable and cannot be redeemed for real money, Credits (except via conversion), or cash equivalents.</p>
          </section>

        </div>

      </main>
      <Footer />
    </>
  );
}
