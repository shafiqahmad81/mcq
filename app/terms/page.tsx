export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
      <div className="space-y-8 text-gray-700 leading-relaxed">
        
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Introduction
          </h2>
          <p>
            Welcome to our website. By accessing and purchasing from this website,
            you accept and agree to be bound by the terms and conditions stated below.
            These terms apply to all users of the site.
          </p>
        </section>

        {/* Digital Product */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. Digital Product
          </h2>
          <p>
            All products available on this website are digital educational content.
            After successful payment, you will receive instant access to the purchased
            course or material.
          </p>
        </section>

        {/* Payment */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Payment Terms
          </h2>
          <p>
            Payments are processed securely through bKash Payment Gateway. Once
            payment is confirmed, access will be granted automatically.
          </p>
        </section>

        {/* Refund */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Refund Policy
          </h2>
          <p>
            Since all products are digital, we do not offer refunds after purchase.
            Please review product details carefully before making a purchase.
          </p>
        </section>

        {/* Account */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            5. Account Responsibility
          </h2>
          <p>
            Users are responsible for maintaining the confidentiality of their
            account information. Sharing account access is strictly prohibited.
          </p>
        </section>

        {/* Copyright */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Copyright & Usage
          </h2>
          <p>
            All course materials are protected by copyright law. You may not copy,
            distribute, or resell any content without permission.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            7. Changes to Terms
          </h2>
          <p>
            We reserve the right to update these terms at any time without prior
            notice. Continued use of the website means you accept the updated terms.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            8. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact
            us through our website support.
          </p>
        </section>

      </div>
    </div>
  );
}