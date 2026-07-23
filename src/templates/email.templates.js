class EmailTemplates {
  static forgotPassword({ name, forgotUrl }) {
    return {
      subject: "Forgot Your Password",

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
          Forgot Password
        </h1>

        <p>
          Hello ${name},
        </p>

        <p>
          We received a request
          to Forgot your password.
        </p>
        
        <p>
         ${forgotUrl}
        </p>


        <a
          href="${forgotUrl}"
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
          Forgot Password
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

  static welcome({ name, companyName, registrationNumber, email, password }) {
    return {
      subject: "🎉 Welcome to AZZUNIQUE Fintech",

      html: `
      <div style="max-width:650px;margin:auto;font-family:Arial,sans-serif;background:#ffffff;padding:30px">

        <h2 style="color:#2563eb">
          Welcome to AZZUNIQUE Fintech
        </h2>

        <p>Hello <b>${name}</b>,</p>

        <p>
          Your API Holder account has been successfully created.
        </p>

        <table
          cellpadding="10"
          cellspacing="0"
          style="border-collapse:collapse;width:100%;margin-top:20px"
        >
          <tr>
            <td><b>Company</b></td>
            <td>${companyName}</td>
          </tr>

          <tr>
            <td><b>Registration No.</b></td>
            <td>${registrationNumber}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><b>Temporary Password</b></td>
            <td>${password}</td>
          </tr>
        </table>

        <div style="margin-top:30px">
          <p>
            <b>Next Steps</b>
          </p>

          <ol>
            <li>Login to your dashboard.</li>
            <li>Change your password.</li>
            <li>Complete your KYC verification.</li>
            <li>Add your bank account.</li>
            <li>Start using APIs after approval.</li>
          </ol>
        </div>

        <div
          style="
            margin-top:25px;
            padding:15px;
            background:#FEF3C7;
            border-radius:8px;
          "
        >
          Please complete your KYC as soon as possible. API services will be activated only after successful verification.
        </div>

        <p style="margin-top:30px">
          Regards,<br/>
          <b>AZZUNIQUE Fintech Team</b>
        </p>

      </div>
    `,
    };
  }

  static pinReset(data) {}
}

export default EmailTemplates;
