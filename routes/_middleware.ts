import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 583,
  site: "dev6",
  domains: ["dev6.deco.site"],
});