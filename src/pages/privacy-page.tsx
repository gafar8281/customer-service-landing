export function PrivacyPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: June 19, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              1. Introduction
            </h2>
            <p className="mt-3">
              Mainline (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              platform and services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              2. Information we collect
            </h2>
            <p className="mt-3">
              We collect information you provide directly to us, such as when
              you create an account, use our services, or contact us for
              support. This includes:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-4">
              <li>Name, email address, and password</li>
              <li>Company name and size</li>
              <li>Payment information (processed securely by our payment provider)</li>
              <li>Communications you send us</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              3. How we use your information
            </h2>
            <p className="mt-3">
              We use the information we collect to provide, maintain, and
              improve our services, process transactions, send you technical
              notices and support messages, and respond to your comments and
              questions.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              4. Sharing of information
            </h2>
            <p className="mt-3">
              We do not sell your personal information. We may share your
              information with trusted third-party service providers who assist
              us in operating our platform, conducting our business, or serving
              you — provided those parties agree to keep this information
              confidential.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              5. Data security
            </h2>
            <p className="mt-3">
              We implement appropriate technical and organisational measures to
              protect your personal information against unauthorised or unlawful
              processing, accidental loss, destruction, or damage. We are SOC 2
              Type II certified and use industry-standard encryption.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              6. Your rights
            </h2>
            <p className="mt-3">
              Depending on your location, you may have certain rights regarding
              your personal information, including the right to access, correct,
              or delete your data. To exercise these rights, please contact us
              at{" "}
              <a
                href="mailto:privacy@mainline.sa"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                privacy@mainline.sa
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              7. Cookies
            </h2>
            <p className="mt-3">
              We use cookies and similar tracking technologies to track activity
              on our service and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              8. Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &ldquo;Last updated&rdquo; date at the top.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              9. Contact us
            </h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@mainline.sa"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                privacy@mainline.sa
              </a>{" "}
              or at our registered address: King Fahd Road, Olaya District,
              Riyadh, Kingdom of Saudi Arabia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
