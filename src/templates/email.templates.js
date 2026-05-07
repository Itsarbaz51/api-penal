class EmailTemplates {
  static forgotPassword({ name, resetUrl }) {
    return {
      subject: "Reset Your Password",

      html: `
      <div
        style="
          max-width:600px;
          margin:auto;
          font-family:Arial;
          background:#fff;
          padding:30px;
        "
      >

        <h1
          style="
            color:#111827;
          "
        >
          Reset Password
        </h1>

        <p>
          Hello ${name},
        </p>

        <p>
          We received a request
          to reset your password.
        </p>

        <a
          href="${resetUrl}"
          style="
            background:#4f46e5;
            color:white;
            padding:14px 24px;
            border-radius:8px;
            text-decoration:none;
            display:inline-block;
            margin-top:10px;
          "
        >
          Reset Password
        </a>

        <p
          style="
            margin-top:20px;
            color:#6b7280;
          "
        >
          This link expires in
          15 minutes.
        </p>

      </div>
    `,
    };
  }

  static emailVerification(data) {}

  static loginAlert(data) {}

  static welcome(data) {}

  static pinReset(data) {}
}

export default EmailTemplates;
