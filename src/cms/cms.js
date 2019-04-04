import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
