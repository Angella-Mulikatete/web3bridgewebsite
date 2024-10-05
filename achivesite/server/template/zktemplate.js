const zkclass = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Zk Masterclass</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      /**
   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
   */
      @media screen {
        @font-face {
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: 400;
          src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),
            url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff)
              format("woff");
        }

        @font-face {
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: 700;
          src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),
            url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff)
              format("woff");
        }
      }

      /**
   * Avoid browser level font resizing.
   * 1. Windows Mobile
   * 2. iOS / OSX
   */
      body,
      table,
      td,
      a {
        -ms-text-size-adjust: 100%; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
      }

      /**
   * Remove extra space added to tables and cells in Outlook.
   */
      table,
      td {
        mso-table-rspace: 0pt;
        mso-table-lspace: 0pt;
      }

      /**
   * Better fluid images in Internet Explorer.
   */
      img {
        -ms-interpolation-mode: bicubic;
      }

      /**
  * Remove blue links for iOS devices.
  */
      a[x-apple-data-detectors] {
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        color: inherit !important;
        text-decoration: none !important;
      }

      /**
   * Fix centering issues in Android 4.4.
   */
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }

      body {
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      /**
   * Collapse table borders to avoid space between cells.
   */
      table {
        border-collapse: collapse !important;
      }

      a {
        color: black;
      }

      img {
        height: auto;
        line-height: 100%;
        text-decoration: none;
        border: 0;
        outline: none;
      }

      .sponsor-logo {
        border-radius: 100%;
        width: 2em;
        height: 2em;
        background-color: black;
      }
      .sponsor-image {
        display: flex;
        gap: 2em;
        font-weight: bold;
        align-items: center;
        font-size: 1.2em;
        text-decoration: none;
      }
      .sponsor-image > a {
        text-decoration: none;
      }
      .sponsors {
        /* display: flex; */
        /* justify-content: center; */
        align-items: center;
      }
      .sponsors-section {
        display: flex;
        flex-direction: column;
        /* gap: 3px; */
      }
    </style>
  </head>
  <body style="background-color: #e9ecef">
    <!-- start preheader -->
    <div
      class="preheader"
      style="
        display: none;
        max-width: 0;
        max-height: 0;
        overflow: hidden;
        font-size: 1px;
        line-height: 1px;
        color: #fff;
        opacity: 0;
      "
    >
      Thank you for registering for Web3Bridge Zk Class
    </div>
    <!-- end preheader -->

    <!-- start body -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <!-- start logo -->
      <tr>
        <td align="center" bgcolor="#e9ecef">
          <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          ></table>
          <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
        </td>
      </tr>
      <!-- end logo -->

      <!-- start hero -->
      <tr>
        <td align="center" bgcolor="#e9ecef">
          <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
          <!-- <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left">
              <img src="./img/welcome-hero.jpg" alt="Welcome" width="600" style="display: block; width: 100%; max-width: 100%;">
            </td>
          </tr>
        </table> -->
          <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
        </td>
      </tr>
      <!-- end hero -->

      <!-- start copy block -->
      <tr>
        <td align="center" bgcolor="#e9ecef">
          <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <!-- start copy -->
            <tr>
              <td
                bgcolor="#ffffff"
                align="left"
                style="
                  padding: 24px;
                  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                "
              >
                <h1
                  style="
                    margin: 0 0 12px;
                    font-size: 32px;
                    font-weight: 400;
                    line-height: 48px;
                  "
                >
                  Hello, {{name}}!
                </h1>

                <p>
                  We are happy to receive your application for the ZK
                  masterclass, the class will start on February 6, 2024. While
                  you wait for the mail congratulating you the class, ensure to
                  pay attention to your email to get all the updates.
                </p>
                <p>
                  Also, we recommend you start looking into ZK materials and
                  documentation especially from the sponsors of the masterclass,
                  and engage with each of them on discord and telegram to stay
                  ahead.
                </p>
                <p>Telegram: https://t.me/Web3bridge</p>
                <p>Twitter: https://twitter.com/Web3bridge</p>
                <p>Discord: https://discord.com/invite/eZ6HehDzYK</p>

                <div class="sponsors-section">
                  <h2>Sponsors</h2>
                  <div class="sponsors">
                    <div class="sponsor-image">
                      <img
                        class="sponsor-logo"
                        src="/public/intmaxlogo.jpeg"
                        alt="IntMax.io Logo"
                      />
                      <a href="https://intmax.io">Intmax</a>
                    </div>

                    <p>Discord: https://discord.gg/N7kYGUPDEE</p>

                    <p>Telegram: https://t.me/zkCloud1</p>
                  </div>
                  <div class="sponsors">
                    <div class="sponsor-image">
                      <img
                        class="sponsor-logo"
                        src="https://scroll.io/logo.png"
                        alt="Scroll.io Logo"
                      />
                      <a href="https://scroll.io">Scroll</a>
                    </div>
                    <p>Discord: https://discord.gg/scroll</p>
                    <p>Twitter: https://twitter.com/Scroll_ZKP</p>
                  </div>
                </div>
              </td>
            </tr>
            <!-- end copy -->

            <!-- start copy -->
            <tr>
              <td
                align="left"
                bgcolor="#ffffff"
                style="
                  padding: 24px;
                  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                  border-bottom: 3px solid #d4dadf;
                "
              >
                <p style="margin: 0">
                  Ayodeji Awosika <br />Founder, web3bridge
                </p>
              </td>
            </tr>
            <!-- end copy -->
          </table>
          <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
        </td>
      </tr>
      <!-- end copy block -->

      <!-- start footer -->
      <tr>
        <td align="center" bgcolor="#e9ecef" style="padding: 24px">
          <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <!-- start permission -->
            <tr>
              <td
                align="center"
                bgcolor="#e9ecef"
                style="
                  padding: 12px 24px;
                  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  line-height: 20px;
                  color: #666;
                "
              >
                <p style="margin: 0">
                  You received this email because we received a request for your
                  zk masterclass registration. If you didn't request
                  registration you can safely delete this email.
                </p>
              </td>
            </tr>
            <!-- end permission -->
          </table>
          <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
        </td>
      </tr>
      <!-- end footer -->
    </table>
    <!-- end body -->
  </body>
</html>
`;

export default zkclass;
