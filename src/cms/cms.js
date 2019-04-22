import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import SponsorshipPagePreview from "./preview-templates/SponsorshipPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("sponsorship", SponsorshipPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
