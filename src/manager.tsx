import React from "react";
import { addons, types } from "storybook/manager-api";
import { ADDON_ID, PANEL_ID, PARAM_KEY } from "./constants";
import { Panel } from "./components/Panel";
// Register the addon
addons.register(ADDON_ID, () => {
  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "HTML",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => <Panel active={active!} />,
    paramKey: PARAM_KEY,
  });
});
