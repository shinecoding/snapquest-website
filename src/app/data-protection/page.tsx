import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function DataProtectionPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-8 py-24">
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">DATA PROTECTION POLICY</h1>
          <p className="text-gray-500">SHINECODING LTD</p>
          <p className="text-gray-500">12A Goldhurst Terrace, NW6 3HU, London, United Kingdom</p>
          <p className="text-gray-500">Last Updated: April 26, 2026</p>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">1. PURPOSE</h2>
            <p>This Data Protection Policy describes how SHINECODING LTD processes personal information in compliance with UK GDPR and Data Protection Act 2018. This policy is provided for transparency and regulatory compliance purposes.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">2. DATA PROTECTION PRINCIPLES</h2>
            <p className="mb-4">SHINECODING LTD operates under the following data protection framework:</p>

            <h3 className="mb-1 font-semibold text-gray-800">1. Lawfulness and Fairness</h3>
            <p className="mb-3">Processing occurs only where a legal basis exists; transparency requirements are met as outlined in this policy.</p>

            <h3 className="mb-1 font-semibold text-gray-800">2. Purpose Limitation</h3>
            <p className="mb-3">Data is processed for specified service delivery purposes only; secondary uses require separate legal basis.</p>

            <h3 className="mb-1 font-semibold text-gray-800">3. Data Minimization</h3>
            <p className="mb-3">Collection is limited to data necessary for service operations.</p>

            <h3 className="mb-1 font-semibold text-gray-800">4. Accuracy</h3>
            <p className="mb-3">Data accuracy is maintained; you are responsible for providing accurate information.</p>

            <h3 className="mb-1 font-semibold text-gray-800">5. Storage Limitation</h3>
            <p className="mb-3">Retention periods are determined by legal requirements and service necessity.</p>

            <h3 className="mb-1 font-semibold text-gray-800">6. Integrity and Confidentiality</h3>
            <p className="mb-3">Technical and organizational security measures are implemented; however, no system is completely secure.</p>

            <h3 className="mb-1 font-semibold text-gray-800">7. Accountability</h3>
            <p>Processing activities are documented internally.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">2.1 SPECIAL CATEGORY DATA</h2>
            <p>SnapQuest does not collect, process, or store biometric data (such as facial recognition templates, fingerprints, or other data used to uniquely identify an individual through physical or behavioural characteristics) or any other special category data under Article 9 UK GDPR. Snaps submitted for quest verification are treated as ordinary user content and are not analyzed for, or used to derive, biometric identifiers.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">3. SECURITY MEASURES</h2>
            <p className="mb-2">SHINECODING LTD implements security measures including:</p>
            <ul className="ml-6 mb-4 list-disc space-y-1">
              <li>Encryption of data in transit and at rest using industry-standard methods</li>
              <li>Role-based access controls and principle of least privilege</li>
              <li>Regular security assessments and testing</li>
              <li>Staff training on data protection protocols</li>
              <li>Secure data deletion procedures</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="mb-3">SHINECODING LTD is not liable for unauthorized access resulting from user negligence, weak passwords, or failure to secure account credentials. You are solely responsible for maintaining password confidentiality.</p>
            <p>Data breaches resulting from circumstances beyond reasonable control (natural disasters, sophisticated cyberattacks, force majeure) are excluded from liability except where gross negligence by SHINECODING LTD is proven.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">4. THIRD-PARTY PROCESSORS</h2>
            <p className="mb-2">SHINECODING LTD engages third parties for service delivery:</p>
            <ul className="ml-6 mb-4 list-disc space-y-1">
              <li>Apple, Google, Stripe (payment processing)</li>
              <li>AWS, Google Cloud (hosting and infrastructure)</li>
              <li>Google Analytics (analytics)</li>
            </ul>
            <p className="mb-3">All third parties are bound by Data Processing Agreements requiring data protection obligations. SHINECODING LTD remains liable for processor compliance with GDPR.</p>
            <p>SHINECODING LTD does not sell personal data and does not share personal data with any third party other than the service providers who help us operate SnapQuest.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">4.1 Artificial Intelligence Model Training</h2>
            <p className="mb-3">SHINECODING LTD maintains proprietary artificial intelligence models that are trained on data collected from SnapQuest users. AI processing is conducted as follows:</p>
            <h3 className="mb-1 font-semibold text-gray-800">Processing Purpose:</h3>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Personalizing user experience</li>
              <li>Recommending quests tailored to individual preferences and abilities</li>
              <li>Improving service quality and performance</li>
            </ul>
            <h3 className="mb-1 font-semibold text-gray-800">Data Processing:</h3>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Your quest participation history, snap submissions, profile information, and usage patterns are used as input to train and improve our AI models</li>
              <li>AI processing occurs on SHINECODING LTD&apos;s own systems and infrastructure</li>
            </ul>
            <h3 className="mb-1 font-semibold text-gray-800">Legal Basis:</h3>
            <p className="mb-2">AI model training is based on legitimate interests in improving SnapQuest.</p>
            <p>You have the right to object to this processing at any time by contacting admin@snapquest.uk.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">5. DATA SUBJECT RIGHTS</h2>
            <p className="mb-4">You have rights under UK GDPR:</p>

            <h3 className="mb-1 font-semibold text-gray-800">Right of Access</h3>
            <p className="mb-3">You can request a copy of your personal data. Contact admin@snapquest.uk.</p>

            <h3 className="mb-1 font-semibold text-gray-800">Right to Rectification</h3>
            <p className="mb-3">You can request corrections to inaccurate data.</p>

            <h3 className="mb-1 font-semibold text-gray-800">Right to Erasure</h3>
            <p className="mb-3">You can request deletion of your data, subject to legal retention requirements (financial records retained 6 years, settlement records retained 6 years).</p>

            <h3 className="mb-1 font-semibold text-gray-800">Right to Restrict Processing</h3>
            <p className="mb-3">You can request that we limit how we use your data.</p>

            <h3 className="mb-1 font-semibold text-gray-800">Right to Data Portability</h3>
            <p className="mb-3">You can request your data in a portable format.</p>

            <h3 className="mb-1 font-semibold text-gray-800">Right to Object</h3>
            <p className="mb-3">You can object to processing based on legitimate interests.</p>

            <h3 className="mb-1 font-semibold text-gray-800">Automated Decision-Making</h3>
            <p className="mb-4">You have rights regarding decisions based solely on automated processing.</p>

            <p>All requests should be sent to admin@snapquest.uk. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">6. DATA BREACHES</h2>
            <p className="mb-3">SHINECODING LTD will notify the Information Commissioner&apos;s Office (ICO) within 72 hours if a breach poses risk to individual rights. Affected individuals will be notified without undue delay where high risk is identified.</p>
            <p>You acknowledge that data loss may occur due to circumstances beyond reasonable control. SHINECODING LTD is not liable for losses from events such as natural disasters, cyberattacks, or force majeure unless gross negligence is proven.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">7. INTERNATIONAL TRANSFERS</h2>
            <p>Personal data may be transferred to and processed in countries outside the UK, including by cloud providers and payment processors. Transfers are authorized under UK GDPR Article 46 (Adequacy Decisions or Standard Contractual Clauses). By using SnapQuest, you consent to such transfers.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">8. LEGITIMATE INTERESTS ASSESSMENT</h2>
            <p>SHINECODING LTD has assessed that its legitimate interests in operating SnapQuest, improving services, and detecting fraud are not overridden by individual privacy rights. This assessment is documented internally and updated periodically.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">9. CONSENT-BASED PROCESSING</h2>
            <p>Where consent is the legal basis (such as marketing communications), you may withdraw consent at any time. Withdrawal does not affect the lawfulness of processing conducted prior to withdrawal.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">10. DATA RETENTION</h2>
            <p className="mb-2">SHINECODING LTD retains personal data as follows:</p>
            <ul className="ml-6 mb-4 list-disc space-y-1">
              <li>Account data: Duration of account plus 3 years for legal compliance</li>
              <li>Financial records: 6 years as required by UK tax law</li>
              <li>Quest settlement records: 6 years for financial compliance and dispute resolution</li>
              <li>Anonymized data: Indefinitely for analytics and service improvement</li>
              <li>Data subject to legal holds: Until legal proceedings conclude</li>
            </ul>
            <p>Upon account deletion, personal identifiers are removed; anonymized transaction data may be retained indefinitely for analytics and reporting.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">11. GOVERNANCE</h2>
            <p className="mb-2">SHINECODING LTD designates a Data Protection Lead (admin@snapquest.uk) responsible for:</p>
            <ul className="ml-6 mb-4 list-disc space-y-1">
              <li>GDPR compliance monitoring</li>
              <li>Data subject requests handling</li>
              <li>Breach investigation and response</li>
              <li>Data Protection Impact Assessments (DPIAs)</li>
            </ul>
            <p className="mb-2">DPIAs are conducted for:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>AI model training and deployment</li>
              <li>New large-scale data collection initiatives</li>
              <li>New third-party processor integration</li>
              <li>Changes to data retention or transfer practices</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">12. CONTACT</h2>
            <p className="mb-2">For data subject requests or policy questions:</p>
            <p className="mb-1">Email: admin@snapquest.uk</p>
            <p className="mb-4">Address: SHINECODING LTD, 12A Goldhurst Terrace, NW6 3HU, London, United Kingdom</p>
            <p className="mb-1">Complaints may be lodged with the Information Commissioner&apos;s Office (ICO):</p>
            <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://ico.org.uk</a></p>
          </section>

        </div>

      </main>
      <Footer />
    </>
  );
}
