import React, { Fragment } from "react";
import Icons from "../common/icons";
import { getContactInfo } from "../shared/contentService";

export default function SocialLinks() {
  const iconsDirection = "horizontal";

  const contact = getContactInfo();

  return (
    <Fragment>
      <div className="social-icons">
        <Icons
          direction={iconsDirection}
          url={contact.facebook}
          hint="Facebook"
        />
        <Icons
          direction={iconsDirection}
          url={contact.linkedIn}
          hint="LinkedIn"
        />
        <Icons
          direction={iconsDirection}
          url={contact.twitter}
          hint="Twitter"
        />
        <Icons direction={iconsDirection} url={contact.gitHub} hint="GitHub" />
      </div>
    </Fragment>
  );
}
