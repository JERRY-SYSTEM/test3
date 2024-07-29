import { sidebar } from "vuepress-theme-hope";
import { docssb } from "./docs"
import { friesb } from "./friends"
import { downsb } from "./download"
import { donasb } from "./donate"

export default sidebar({
  '/docs/': docssb,
  '/donate/': donasb,
  '/friends/': friesb,
  '/download/': downsb,
});
