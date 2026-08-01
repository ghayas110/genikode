import React from 'react';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy regarding our web development, mobile app development, and digital services.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl">
            Effective Date: March 24, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-zinc-400 leading-relaxed">
              At Genikode, we are committed to protecting the privacy and security of our clients and their users. This Privacy Policy outlines how we collect, use, and safeguard personal information across all our services, specifically detailing our procedures for Web Development, App Development, Mobile App Development, and related digital solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-zinc-400 leading-relaxed">
              When you engage with our agency for development services, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-zinc-400 space-y-2 mt-4">
              <li><strong>Client Data:</strong> Name, business name, contact details (email, phone number), and billing information necessary to execute contracts and deliver services.</li>
              <li><strong>Project Assets:</strong> Codebases, server credentials, API keys, intellectual property, and proprietary data required for web and mobile app development.</li>
              <li><strong>End-User Data:</strong> If we manage databases, analytics, or user authentication for your mobile or web applications, we may process end-user data on your behalf, strictly adhering to our service agreements.</li>
              <li><strong>Technical Data:</strong> Information from deploying, maintaining, and logging your web and app architectures, including IP addresses, device identifiers, and usage metrics for debugging purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use and Process Your Information</h2>
            <p className="text-zinc-400 leading-relaxed">
              Our core objective is to deliver high-quality, scalable digital products. We use the collected data exclusively to:
            </p>
            <ul className="list-disc pl-6 text-zinc-400 space-y-2 mt-4">
              <li><strong>Deliver Development Services:</strong> To design, build, test, and deploy web platforms, iOS/Android mobile apps, and custom software solutions tailored to your requirements.</li>
              <li><strong>Project Management & Communication:</strong> To maintain clear communication throughout the development lifecycle, schedule meetings, and provide progress updates.</li>
              <li><strong>Maintenance & Support:</strong> To monitor application performance, troubleshoot bugs, deploy security patches, and ensure the ongoing stability of the delivered software.</li>
              <li><strong>Compliance & Legal Obligations:</strong> To adhere to applicable laws and regulations regarding digital data processing and contract fulfillment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Third Parties</h2>
            <p className="text-zinc-400 leading-relaxed">
              We do not sell, rent, or trade your project or personal data. We may share necessary information with trusted third-party service providers (such as cloud hosting providers like AWS, Vercel, or database services like Supabase) strictly for the purpose of hosting and running your web and mobile applications. All third parties are vetted to ensure they meet stringent security and privacy standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Security Measures</h2>
            <p className="text-zinc-400 leading-relaxed">
              We implement robust technical and organizational security protocols to protect your data and the software we develop for you. This includes secure coding practices, encrypted data transmission, strict internal access controls to your project assets, and regular security audits of our development environments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Client and End-User Rights</h2>
            <p className="text-zinc-400 leading-relaxed">
              Depending on your jurisdiction, you have the right to access, rectify, or request the deletion of the personal data we hold about you. If we are acting as a data processor for the users of the mobile or web apps we have developed for you, we will assist you in responding to end-user privacy requests in accordance with our data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy, our development practices, or how we handle your data, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <p className="text-white">
                <strong>Email:</strong> ghayas110@gmail.com<br />
                <strong>Website:</strong> genikode.com
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
