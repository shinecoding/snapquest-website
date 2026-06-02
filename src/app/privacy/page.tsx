import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-8 py-24">
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">PRIVACY POLICY</h1>
          <p className="text-gray-500">SHINECODING LTD</p>
          <p className="text-gray-500">12A Goldhurst Terrace, NW6 3HU, London, United Kingdom</p>
          <p className="text-gray-500">Last Updated: April 26, 2026</p>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">1. OVERVIEW</h2>
            <p className="mb-3">We collect and use personal information to operate SnapQuest and provide you with the best experience. This Privacy Policy explains what information we collect, how we use it, and your rights.</p>
            <p>By using SnapQuest, you agree to the collection and use of information as outlined in this policy.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">2. DATA CONTROLLER</h2>
            <p className="mb-2">SHINECODING LTD is the data controller for your personal information.</p>
            <p>Contact: snapquest.official@gmail.com</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">3. WHAT INFORMATION WE COLLECT</h2>
            <h3 className="mb-2 font-semibold text-gray-800">Information You Provide Directly:</h3>
            <ul className="ml-6 mb-4 list-disc space-y-1">
              <li>Email address and username</li>
              <li>Password (encrypted and not stored in plain text)</li>
              <li>Payment information (processed by Apple, Google, or Stripe - we do not store payment card details)</li>
              <li>Wallet address (if you use blockchain payments)</li>
              <li>Quest participation data</li>
              <li>Snaps you submit</li>
              <li>Profile information</li>
            </ul>
            <h3 className="mb-2 font-semibold text-gray-800">Information We Collect Automatically:</h3>
            <ul className="ml-6 list-disc space-y-1">
              <li>Device type and operating system</li>
              <li>IP address</li>
              <li>Usage data (features used, time spent in app)</li>
              <li>Device identifiers and analytics data</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">4. HOW WE USE YOUR INFORMATION</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="ml-6 mb-4 list-disc space-y-1">
              <li>Create and manage your account</li>
              <li>Process payments and settlements</li>
              <li>Execute quests and calculate results</li>
              <li>Prevent fraud and abuse</li>
              <li>Improve SnapQuest</li>
              <li>Respond to your requests</li>
              <li>Comply with legal obligations</li>
              <li>Train and operate our proprietary AI models</li>
            </ul>
            <h3 className="mb-2 font-semibold text-gray-800">4.1 AI Model Training and Quest Recommendations</h3>
            <p className="mb-2">We use your data (quest participation history, snap submissions, profile information, and usage patterns) to train and improve our proprietary artificial intelligence models. These models are used exclusively within SnapQuest to:</p>
            <ul className="ml-6 mb-3 list-disc space-y-1">
              <li>Personalize your experience</li>
              <li>Recommend quests that match your interests and abilities</li>
              <li>Improve service quality and user experience</li>
            </ul>
            <p>Your data is processed by our AI models on our own systems and is not used to train external AI systems or models. We do not use third-party AI services (such as ChatGPT or other external AI platforms) to process your personal information.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">5. WHO WE SHARE YOUR INFORMATION WITH</h2>
            <p className="mb-2">We share information with:</p>
            <ul className="ml-6 mb-4 list-disc space-y-1">
              <li>Payment processors: Apple, Google, Stripe (for payment processing only)</li>
              <li>App platforms: Apple App Store, Google Play Store (for app distribution, crash reports, and app performance analytics)</li>
              <li>Cloud providers: AWS, Google Cloud (for hosting and backup)</li>
              <li>Analytics providers: Google Analytics (anonymized data only)</li>
              <li>Merchants: If you redeem vouchers (basic transaction details only)</li>
            </ul>
            <p className="mb-4">All third parties are required to protect your information and use it only for the purposes we specify.</p>
            <h3 className="mb-2 font-semibold text-gray-800">5.1 Blockchain Data</h3>
            <p className="mb-2">If you use blockchain payments, your wallet address and transaction history are recorded on the Polygon blockchain. This data is:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Public and permanently visible on the blockchain</li>
              <li>Not shared by us (you provide your wallet address directly)</li>
              <li>Not controlled by us (blockchain records cannot be deleted or modified)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">6. DATA RETENTION</h2>
            <p className="mb-4">We retain your information for as long as necessary to provide SnapQuest and comply with legal obligations. Financial records are retained for the periods required by law. After we no longer need your information, it is securely deleted.</p>
            <h3 className="mb-2 font-semibold text-gray-800">When you delete your account:</h3>
            <ul className="ml-6 list-disc space-y-1">
              <li>Your profile and personal information are deleted immediately</li>
              <li>Financial and settlement records are retained as required by law</li>
              <li>Anonymized quest participation data may be retained for analytics, service improvement, and reporting purposes</li>
              <li>Blockchain data cannot be deleted (it is public and permanent)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">7. INTERNATIONAL TRANSFERS</h2>
            <p>Your information may be transferred to and processed in countries outside the UK, including through cloud service providers. By using SnapQuest, you consent to such transfers.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">8. TRACKING AND ANALYTICS</h2>
            <p>We use tracking technology (device identifiers, local storage, analytics SDKs) to understand how you use SnapQuest and to improve your experience.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">9. CHILDREN</h2>
            <p>SnapQuest is not intended for users under 18. If we discover a minor is using SnapQuest, we will delete their account and information. If you are a parent and discover your child using SnapQuest, contact snapquest.official@gmail.com immediately.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">10. CHANGES TO THIS POLICY</h2>
            <p>We may update this Privacy Policy at any time. We will notify you of significant changes. Continued use of SnapQuest after such changes constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">11. CONTACT</h2>
            <p className="mb-2">For privacy questions or data requests, contact:</p>
            <p className="mb-1">Email: snapquest.official@gmail.com</p>
            <p className="mb-4">Address: SHINECODING LTD, 12A Goldhurst Terrace, NW6 3HU, London, United Kingdom</p>
            <p className="mb-1">You can lodge complaints with the Information Commissioner's Office (ICO):</p>
            <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://ico.org.uk</a></p>
          </section>

        </div>

      </main>
      <Footer />
    </>
  );
}
