import { merge } from "lodash";
import MuiTooltip from "./MuiTooltip";
export default function ComponentsOverrides(theme) {
  return merge(MuiTooltip(theme));
}
