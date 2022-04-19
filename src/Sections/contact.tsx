import React from "react";
import Icons from "../common/icons";
import { getContactInfo } from "../shared/contentService";

export default function Contact() {
  const {
    Tel1,
    Tel2,
    emailAddress,
    facebook,
    gitHub,
    linkedIn,
    twitter,
    whatsApp,
  } = getContactInfo();
  const iconsDirection = "horizontal";

  return (
    <div id="contact">
      <div className="contact-section">
        <div className="contact-contents">
          <h2>CONTACT</h2>
          <div className="contact-block">
            <h5 className="topic">Email:</h5>
            <a className="value" href={`mailto://${emailAddress}`}>
              {emailAddress}
            </a>
          </div>

          {Tel1 && (
            <div className="contact-block">
              <h5 className="topic">Tel:</h5>
              <div className="value">
                <a href={`tel://${Tel1}`}>{Tel1}</a>
                <span>, </span>
                {Tel2 && <a href={`tel://${Tel2}`}> {Tel2}</a>}
              </div>
            </div>
          )}

          <div className="mt-4">
            <h5 className="section-header">Other information</h5>
            <Icons direction={iconsDirection} url={whatsApp} hint="WhatsApp" />
            <Icons direction={iconsDirection} url={facebook} hint="Facebook" />
            <Icons direction={iconsDirection} url={twitter} hint="Twitter" />
            <Icons direction={iconsDirection} url={linkedIn} hint="LinkedIn" />
            <Icons direction={iconsDirection} url={gitHub} hint="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
}
