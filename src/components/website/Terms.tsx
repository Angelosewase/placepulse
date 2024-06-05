import { BsArrowLeftCircle } from "react-icons/bs";

const TermsAndConditions = () => {
  return (
    <div className="w-screen  p-8 max-w-4xl mx-auto">
      <div className="flex gap-7 items-center py-9">
        <button
          className="absolute top-7 left-8"
          onClick={() => history.back()}
        >
          <BsArrowLeftCircle color="black" size={26} />
        </button>
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Welcome to Place Pulse. These terms and conditions outline the rules
          and regulations for the use of our website. By accessing this website,
          we assume you accept these terms and conditions. Do not continue to
          use Place Pulse if you do not agree to take all of the terms and
          conditions stated on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Intellectual Property Rights
        </h2>
        <p className="text-gray-700">
          Other than the content you own, under these terms, Place Pulse and/or
          its licensors own all the intellectual property rights and materials
          contained in this website. You are granted a limited license only for
          purposes of viewing the material contained on this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Restrictions</h2>
        <p className="text-gray-700">
          You are specifically restricted from all of the following:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Publishing any website material in any other media.</li>
          <li>
            Selling, sublicensing, and/or otherwise commercializing any website
            material.
          </li>
          <li>Publicly performing and/or showing any website material.</li>
          <li>
            Using this website in any way that is or may be damaging to this
            website.
          </li>
          <li>
            Using this website in any way that impacts user access to this
            website.
          </li>
          <li>
            Using this website contrary to applicable laws and regulations, or
            in any way that may cause harm to the website, or to any person or
            business entity.
          </li>
          <li>
            Engaging in any data mining, data harvesting, data extracting, or
            any other similar activity in relation to this website.
          </li>
          <li>Using this website to engage in any advertising or marketing.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Your Privacy</h2>
        <p className="text-gray-700">Please read our Privacy Policy.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Your Content</h2>
        <p className="text-gray-700">
          In these terms and conditions, “Your Content” shall mean any audio,
          video text, images, or other material you choose to display on this
          website. By displaying Your Content, you grant Place Pulse a
          non-exclusive, worldwide irrevocable, sub-licensable license to use,
          reproduce, adapt, publish, translate, and distribute it in any and all
          media.
        </p>
        <p className="text-gray-700">
          Your Content must be your own and must not be invading any
          third-party’s rights. Place Pulse reserves the right to remove any of
          Your Content from this website at any time without notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">No Warranties</h2>
        <p className="text-gray-700">
          This website is provided "as is," with all faults, and Place Pulse
          express no representations or warranties, of any kind related to this
          website or the materials contained on this website. Also, nothing
          contained on this website shall be interpreted as advising you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="text-gray-700">
          In no event shall Place Pulse, nor any of its officers, directors, and
          employees, be held liable for anything arising out of or in any way
          connected with your use of this website whether such liability is
          under contract. Place Pulse, including its officers, directors, and
          employees shall not be held liable for any indirect, consequential, or
          special liability arising out of or in any way related to your use of
          this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Indemnification</h2>
        <p className="text-gray-700">
          You hereby indemnify to the fullest extent Place Pulse from and
          against any and/or all liabilities, costs, demands, causes of action,
          damages, and expenses arising in any way related to your breach of any
          of the provisions of these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Severability</h2>
        <p className="text-gray-700">
          If any provision of these terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Variation of Terms</h2>
        <p className="text-gray-700">
          Place Pulse is permitted to revise these terms at any time as it sees
          fit, and by using this website you are expected to review these terms
          on a regular basis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Assignment</h2>
        <p className="text-gray-700">
          Place Pulse is allowed to assign, transfer, and subcontract its rights
          and/or obligations under these terms without any notification.
          However, you are not allowed to assign, transfer, or subcontract any
          of your rights and/or obligations under these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Entire Agreement</h2>
        <p className="text-gray-700">
          These terms constitute the entire agreement between Place Pulse and
          you in relation to your use of this website, and supersede all prior
          agreements and understandings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Governing Law & Jurisdiction
        </h2>
        <p className="text-gray-700">
          These terms will be governed by and interpreted in accordance with the
          laws of the State of Rwanda, and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in Rwanda for the
          resolution of any disputes.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
