import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _apiNameToTrialIds, _upgradeProductToTria, _trialIdToUpgradeProd, _trialIdToTrialNames;

import { SALES_PROFESSIONAL, SALES_ENTERPRISE, MARKETING_PRO, MARKETING_ENTERPRISE, SERVICE_PROFESSIONAL, SERVICE_ENTERPRISE, CMS_ENTERPRISE, CMS_PROFESSIONAL, OPERATIONS_PROFESSIONAL } from './UpgradeProducts';
import enviro from 'enviro';
import { CMS_HUB_ENTERPRISE, CMS_HUB_PROFESSIONAL, MARKETING_HUB_ENTERPRISE, MARKETING_HUB_PROFESSIONAL, OPERATIONS_HUB_PROFESSIONAL, SALES_HUB_ENTERPRISE, SALES_HUB_PROFESSIONAL, SERVICE_HUB_ENTERPRISE, SERVICE_HUB_PROFESSIONAL } from './ApiNames';
export var SALES_ENTERPRISE_TRIAL_ID = 1;
export var MARKETING_ENTERPRISE_TRIAL_ID = 2;
export var SERVICE_ENTERPRISE_TRIAL_ID = 3;
export var MARKETING_PRO_TRIAL_ID = 4;
export var CMS_PROFESSIONAL_TRIAL_ID = 7;
export var SALES_PROFESSIONAL_TRIAL_ID = 8;
export var SERVICE_PROFESSIONAL_TRIAL_ID = 9;
export var CMS_ENTERPRISE_TRIAL_ID = enviro.isProd() ? 18 : 17;
export var OPERATIONS_PROFESSIONAL_TRIAL_ID = enviro.isProd() ? 35096 : 43098;
export var validTrialIds = [SALES_ENTERPRISE_TRIAL_ID, MARKETING_ENTERPRISE_TRIAL_ID, SERVICE_ENTERPRISE_TRIAL_ID, MARKETING_PRO_TRIAL_ID, CMS_PROFESSIONAL_TRIAL_ID, SALES_PROFESSIONAL_TRIAL_ID, SERVICE_PROFESSIONAL_TRIAL_ID, CMS_ENTERPRISE_TRIAL_ID, OPERATIONS_PROFESSIONAL_TRIAL_ID];
export var trialIdsWithTrialGuide = [MARKETING_PRO_TRIAL_ID, SALES_PROFESSIONAL_TRIAL_ID];
export var apiNameToTrialIds = (_apiNameToTrialIds = {}, _defineProperty(_apiNameToTrialIds, SALES_HUB_ENTERPRISE, SALES_ENTERPRISE_TRIAL_ID), _defineProperty(_apiNameToTrialIds, MARKETING_HUB_ENTERPRISE, MARKETING_ENTERPRISE_TRIAL_ID), _defineProperty(_apiNameToTrialIds, SERVICE_HUB_ENTERPRISE, SERVICE_ENTERPRISE_TRIAL_ID), _defineProperty(_apiNameToTrialIds, MARKETING_HUB_PROFESSIONAL, MARKETING_PRO_TRIAL_ID), _defineProperty(_apiNameToTrialIds, CMS_HUB_PROFESSIONAL, CMS_PROFESSIONAL_TRIAL_ID), _defineProperty(_apiNameToTrialIds, SALES_HUB_PROFESSIONAL, SALES_PROFESSIONAL_TRIAL_ID), _defineProperty(_apiNameToTrialIds, SERVICE_HUB_PROFESSIONAL, SERVICE_PROFESSIONAL_TRIAL_ID), _defineProperty(_apiNameToTrialIds, CMS_HUB_ENTERPRISE, CMS_ENTERPRISE_TRIAL_ID), _defineProperty(_apiNameToTrialIds, OPERATIONS_HUB_PROFESSIONAL, OPERATIONS_PROFESSIONAL_TRIAL_ID), _apiNameToTrialIds);
export var upgradeProductToTrialIds = (_upgradeProductToTria = {}, _defineProperty(_upgradeProductToTria, SALES_ENTERPRISE, SALES_ENTERPRISE_TRIAL_ID), _defineProperty(_upgradeProductToTria, MARKETING_ENTERPRISE, MARKETING_ENTERPRISE_TRIAL_ID), _defineProperty(_upgradeProductToTria, SERVICE_ENTERPRISE, SERVICE_ENTERPRISE_TRIAL_ID), _defineProperty(_upgradeProductToTria, MARKETING_PRO, MARKETING_PRO_TRIAL_ID), _defineProperty(_upgradeProductToTria, CMS_PROFESSIONAL, CMS_PROFESSIONAL_TRIAL_ID), _defineProperty(_upgradeProductToTria, SALES_PROFESSIONAL, SALES_PROFESSIONAL_TRIAL_ID), _defineProperty(_upgradeProductToTria, SERVICE_PROFESSIONAL, SERVICE_PROFESSIONAL_TRIAL_ID), _defineProperty(_upgradeProductToTria, CMS_ENTERPRISE, CMS_ENTERPRISE_TRIAL_ID), _defineProperty(_upgradeProductToTria, OPERATIONS_PROFESSIONAL, OPERATIONS_PROFESSIONAL_TRIAL_ID), _upgradeProductToTria);
export var trialIdToUpgradeProducts = (_trialIdToUpgradeProd = {}, _defineProperty(_trialIdToUpgradeProd, SALES_ENTERPRISE_TRIAL_ID, SALES_ENTERPRISE), _defineProperty(_trialIdToUpgradeProd, MARKETING_ENTERPRISE_TRIAL_ID, MARKETING_ENTERPRISE), _defineProperty(_trialIdToUpgradeProd, SERVICE_ENTERPRISE_TRIAL_ID, SERVICE_ENTERPRISE), _defineProperty(_trialIdToUpgradeProd, MARKETING_PRO_TRIAL_ID, MARKETING_PRO), _defineProperty(_trialIdToUpgradeProd, CMS_PROFESSIONAL_TRIAL_ID, CMS_PROFESSIONAL), _defineProperty(_trialIdToUpgradeProd, SALES_PROFESSIONAL_TRIAL_ID, SALES_PROFESSIONAL), _defineProperty(_trialIdToUpgradeProd, SERVICE_PROFESSIONAL_TRIAL_ID, SERVICE_PROFESSIONAL), _defineProperty(_trialIdToUpgradeProd, CMS_ENTERPRISE_TRIAL_ID, CMS_ENTERPRISE), _defineProperty(_trialIdToUpgradeProd, OPERATIONS_PROFESSIONAL_TRIAL_ID, OPERATIONS_PROFESSIONAL), _trialIdToUpgradeProd);
export var trialIdToTrialNames = (_trialIdToTrialNames = {}, _defineProperty(_trialIdToTrialNames, SALES_ENTERPRISE_TRIAL_ID, 'Sales Hub Enterprise'), _defineProperty(_trialIdToTrialNames, MARKETING_ENTERPRISE_TRIAL_ID, 'Marketing Hub Enterprise'), _defineProperty(_trialIdToTrialNames, SERVICE_ENTERPRISE_TRIAL_ID, 'Service Hub Enterprise'), _defineProperty(_trialIdToTrialNames, MARKETING_PRO_TRIAL_ID, 'Marketing Hub Professional'), _defineProperty(_trialIdToTrialNames, CMS_PROFESSIONAL_TRIAL_ID, 'CMS Hub Professional'), _defineProperty(_trialIdToTrialNames, SALES_PROFESSIONAL_TRIAL_ID, 'Sales Hub Professional'), _defineProperty(_trialIdToTrialNames, SERVICE_PROFESSIONAL_TRIAL_ID, 'Service Hub Professional'), _defineProperty(_trialIdToTrialNames, CMS_ENTERPRISE_TRIAL_ID, 'CMS Hub Enterprise'), _defineProperty(_trialIdToTrialNames, OPERATIONS_PROFESSIONAL_TRIAL_ID, 'Operations Hub Professional'), _defineProperty(_trialIdToTrialNames, 100, 'test-trial'), _trialIdToTrialNames);