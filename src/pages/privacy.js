import React from "react";
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const PrivacyPage = () => (
  <>
    <Layout>
      <SEO />
    <TextBlockWrapper>
      <div className="content-container">
        <h2>Privacy Policy</h2>
        <p>This privacy policy governs your use of the software application Party Quest (“Application”) for mobile devices that was created by Augustin Bralley. The Application is a social game designed to help people tell stories together.</p>

        <p>What information does the Application obtain and how is it used?</p>
        <h3>User Provided Information</h3>

        <p>The Application obtains the information you provide when you download and register the Application.</p>

        <p>When you register with us and use the Application, you generally provide (a) your phone number (b) transaction-related information, such as when you make purchases or respond to any offers; (c) information you provide us when you contact us for help, and; (e) information you enter into our system when using the Application, such as your name, chats with other players, and stories you tell.</p>

        <p>We may also use the information you provided us to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>

        <h3>Automatically Collected Information</h3>

        <p>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.</p>

        <h3>Does the Application collect my location data?</h3>
        <p>This Application does not collect information about the location of your mobile device.</p>

        <h3>Do third parties see and/or have access to information obtained by the Application?</h3>
        <p>Only aggregated, anonymized data is periodically transmitted to external services to help us improve the Application and our service. We will share your information with third parties only in the ways that are described in this privacy statement.</p>

        <p>We may disclose User Provided and Automatically Collected Information:</p>
        <ul>
            <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
            <li>when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
            <li>with our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
        </ul>
        <h3>What are my opt-out rights?</h3>
        <p>You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at augustin.bralley@gmail.com </p>

        <h3>Data Retention Policy, Managing Your Information</h3>
        <p>We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at augustin.bralley@gmail.com and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.</p>

        <h3>Children</h3>
        <p>We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at <a href='mailto:augustin.bralley@gmail.com'>augustin.bralley@gmail.com</a>.  We will delete such information from our files within a reasonable time.</p>

        <h3>Security</h3>
        <p>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor to provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</p>

        <h3>Changes</h3>
        <p>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy <a href="https://partyquest.us/privacy">partyquest.us/privacy</a>. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>

        <h3>Your Consent</h3>
        <p>By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. “Processing,” means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the United States. If you reside outside the United States your information will be transferred, processed and stored there under United States privacy standards.</p>

        <h3>Contact us</h3>
        <p>If there are any questions regarding this privacy policy you may contact me via email:</p>
        <p>Augustin Bralley<br/>
        <a href="mailto:augustin.bralley@gmail.com">augustin.bralley@gmail.com</a></p>
      </div>
    </TextBlockWrapper>
    </Layout>
  </>
);

const TextBlockWrapper = styled.section`
    background: linear-gradient(45deg, #060c21, #0d0139);
    color: #fff;
    text-align: left;
    padding: 60px 20px;

    @media (min-width: 768px) {
        padding: 80px 30px;
        text-align: left;
    }

    h2 {
        color: #ee00b3;
        background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        margin-bottom: 40px;
        text-shadow: 0px 0px 5px rgba(8, 0, 8, 1);
        opacity: 0.85;
    }

    a {
        color: #f441a5;
        text-decoration: none; 
      }
    
`

export default PrivacyPage;
