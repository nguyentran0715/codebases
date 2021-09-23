'use es6';

import { parse } from 'hub-http/helpers/params';

var parseQueryParams = function parseQueryParams(search) {
  if (!search) {
    return {};
  }

  if (typeof search === 'object') {
    return search;
  }

  return parse(search.substring(1));
};

export var getGateOverrides = function getGateOverrides(search) {
  var _parseQueryParams = parseQueryParams(search),
      gated = _parseQueryParams.gated,
      ungated = _parseQueryParams.ungated;

  var overrides = {};

  if (ungated) {
    (Array.isArray(ungated) ? ungated : [ungated]).reduce(function (acc, gate) {
      if (gate) acc[gate] = true;
      return acc;
    }, overrides);
  }

  if (gated) {
    (Array.isArray(gated) ? gated : [gated]).reduce(function (acc, gate) {
      if (gate) acc[gate] = false;
      return acc;
    }, overrides);
  }

  return overrides;
};
/**
 * Helper that allows gates to be overridden with '?ungated=' (unabled)
 * and '?gated=' (disabled) query parameters. Multiple gates can be
 * overridden by repeating these parameters ('?ungated=...&ungated=...').
 *
 * Using query parameters instead of localStorage for overrides allows
 * links to be sent to support reps or PEs. For discussion on the tradeoffs
 * of various approaches, see https://git.hubteam.com/HubSpot/CRM-Issues/issues/3979
 *
 * WARNINGS:
 * - features that would be dangerous to expose to customers if the url
 *   leaked or was guessed, should not use this helper
 * - features which require the backend to be aware of the gate should not
 *   use this helper, as the override will only apply on the frontend
 *
 * @example
 * // MyComponent.js
 * const isUngatedForMyCoolFeatureDependency = {
 *   stores: [IsUngatedStore],
 *   deref: () => withGateOverride('CRM:MyCoolFeature', IsUngatedStore.get('CRM:MyCoolFeature')),
 * };
 *
 * // Selenium acceptance test
 * await driver.navigate().to('https://.../path/to/page?ungated=CRM:MyCoolFeature&ungated=CRM:OherFeature&gated=CRM:TurnThisOff')
 */

var withGateOverride = function withGateOverride(gate, defaultValue) {
  var overrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getGateOverrides(window.location.search);
  var override = overrides[gate];
  return override !== undefined ? override : defaultValue;
};

export default withGateOverride;