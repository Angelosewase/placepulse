import { BsArrowLeftCircle } from "react-icons/bs";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button className="absolute left-8 top-7" onClick={() => history.back()}>
        <BsArrowLeftCircle color="black" size={26} />
      </button>
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Welcome to Place Pulse. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website. Please read this privacy policy carefully. If you do not
          agree with the terms of this privacy policy, please do not access the
          site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Personal Data: Personally identifiable information, such as your
            name, shipping address, email address, and telephone number.
          </li>
          <li>
            Derivative Data: Information our servers automatically collect when
            you access the site, such as your IP address, your browser type,
            your operating system, your access times, and the pages you have
            viewed directly before and after accessing the site.
          </li>
          <li>
            Financial Data: Financial information, such as data related to your
            payment method (e.g., valid credit card number, card brand,
            expiration date) that we may collect when you purchase, order,
            return, exchange, or request information about our services from the
            site.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Use of Your Information</h2>
        <p className="text-gray-700">
          We may use information collected about you via the site to:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Create and manage your account.</li>
          <li>
            Process your transactions and send you related information,
            including purchase confirmations and invoices.
          </li>
          <li>
            Send you technical notices, updates, security alerts, and support
            and administrative messages.
          </li>
          <li>
            Respond to your comments, questions, and requests and provide
            customer service.
          </li>
          <li>
            Communicate with you about products, services, offers, promotions,
            rewards, and events offered by Place Pulse and others, and provide
            news and information we think will be of interest to you.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Disclosure of Your Information
        </h2>
        <p className="text-gray-700">
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            By Law or to Protect Rights: If we believe the release of
            information about you is necessary to respond to legal process, to
            investigate or remedy potential violations of our policies, or to
            protect the rights, property, and safety of others, we may share
            your information as permitted or required by any applicable law,
            rule, or regulation.
          </li>
          <li>
            Business Transfers: We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
          <li>
            Third-Party Service Providers: We may share your information with
            third parties that perform services for us or on our behalf,
            including payment processing, data analysis, email delivery, hosting
            services, customer service, and marketing assistance.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Security of Your Information
        </h2>
        <p className="text-gray-700">
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Policy for Children</h2>
        <p className="text-gray-700">
          We do not knowingly solicit information from or market to children
          under the age of 13. If we learn that we have collected personal
          information from a child under age 13 without verification of parental
          consent, we will delete that information as quickly as possible. If
          you believe we might have any information from or about a child under
          13, please contact us at our provided contact information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have questions or comments about this Privacy Policy, please
          contact us at:
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> support@placepulse.com
          <br />
          <strong>Address:</strong> Gikondo, Rujugiro Street
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
