'use es6';

import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _DEFAULT, _PropertyTypes$DATE, _PropertyTypes$DATE_T, _REFINEMENT, _PropertyTypes$STRING, _WITH_UNKNOWN, _fromJS;

import * as Operators from 'customer-data-filters/filterQueryFormat/operator/Operators';
import * as PropertyTypes from 'customer-data-objects/property/PropertyTypes';
import { fromJS } from 'immutable';
var DEFAULT = '__DEFAULT__';
var REFINEMENT = '__REFINEMENT__';
var i18nPrefix = 'customerDataFilters.FilterOperatorTranslations';
export var OperatorTranslations = fromJS((_fromJS = {}, _defineProperty(_fromJS, DEFAULT, (_DEFAULT = {}, _defineProperty(_DEFAULT, Operators.After, i18nPrefix + ".DEFAULT.After"), _defineProperty(_DEFAULT, Operators.AfterDate, i18nPrefix + ".DEFAULT.AfterDate"), _defineProperty(_DEFAULT, Operators.Any, i18nPrefix + ".DEFAULT.Any"), _defineProperty(_DEFAULT, Operators.Before, i18nPrefix + ".DEFAULT.Before"), _defineProperty(_DEFAULT, Operators.BeforeDate, i18nPrefix + ".DEFAULT.BeforeDate"), _defineProperty(_DEFAULT, Operators.Contain, i18nPrefix + ".DEFAULT.Contain"), _defineProperty(_DEFAULT, Operators.ContainAll, i18nPrefix + ".DEFAULT.ContainAll"), _defineProperty(_DEFAULT, Operators.ContainAllTeams, i18nPrefix + ".DEFAULT.ContainAllTeams"), _defineProperty(_DEFAULT, Operators.ContainAny, i18nPrefix + ".DEFAULT.ContainAny"), _defineProperty(_DEFAULT, Operators.CtaHasClicked, i18nPrefix + ".DEFAULT.CtaHasClicked"), _defineProperty(_DEFAULT, Operators.CtaHasNotClicked, i18nPrefix + ".DEFAULT.CtaHasNotClicked"), _defineProperty(_DEFAULT, Operators.CtaHasNotSeen, i18nPrefix + ".DEFAULT.CtaHasNotSeen"), _defineProperty(_DEFAULT, Operators.CtaHasSeen, i18nPrefix + ".DEFAULT.CtaHasSeen"), _defineProperty(_DEFAULT, Operators.EmailBounced, i18nPrefix + ".DEFAULT.EmailBounced"), _defineProperty(_DEFAULT, Operators.EmailLinkClicked, i18nPrefix + ".DEFAULT.EmailLinkClicked"), _defineProperty(_DEFAULT, Operators.EmailMarked, i18nPrefix + ".DEFAULT.EmailMarked"), _defineProperty(_DEFAULT, Operators.EmailOpened, i18nPrefix + ".DEFAULT.EmailOpened"), _defineProperty(_DEFAULT, Operators.EmailOpenedButLinkNotClicked, i18nPrefix + ".DEFAULT.EmailOpenedButLinkNotClicked"), _defineProperty(_DEFAULT, Operators.EmailOpenedButNotReplied, i18nPrefix + ".DEFAULT.EmailOpenedButNotReplied"), _defineProperty(_DEFAULT, Operators.EmailReceived, i18nPrefix + ".DEFAULT.EmailReceived"), _defineProperty(_DEFAULT, Operators.EmailReceivedButNotOpened, i18nPrefix + ".DEFAULT.EmailReceivedButNotOpened"), _defineProperty(_DEFAULT, Operators.EmailReplied, i18nPrefix + ".DEFAULT.EmailReplied"), _defineProperty(_DEFAULT, Operators.EmailSent, i18nPrefix + ".DEFAULT.EmailSent"), _defineProperty(_DEFAULT, Operators.EmailSentButNotReceived, i18nPrefix + ".DEFAULT.EmailSentButNotReceived"), _defineProperty(_DEFAULT, Operators.EmailUnsubscribed, i18nPrefix + ".DEFAULT.EmailUnsubscribed"), _defineProperty(_DEFAULT, Operators.EmailSubscriptionNotOpted, i18nPrefix + ".DEFAULT.EmailSubscriptionNotOpted"), _defineProperty(_DEFAULT, Operators.EmailSubscriptionOptIn, i18nPrefix + ".DEFAULT.EmailSubscriptionOptIn"), _defineProperty(_DEFAULT, Operators.EmailSubscriptionOptOut, i18nPrefix + ".DEFAULT.EmailSubscriptionOptOut"), _defineProperty(_DEFAULT, Operators.EndsWith, i18nPrefix + ".DEFAULT.EndsWith"), _defineProperty(_DEFAULT, Operators.EndsWithAny, i18nPrefix + ".DEFAULT.EndsWithAny"), _defineProperty(_DEFAULT, Operators.Equal, i18nPrefix + ".DEFAULT.Equal"), _defineProperty(_DEFAULT, Operators.EqualAll, i18nPrefix + ".DEFAULT.EqualAll"), _defineProperty(_DEFAULT, Operators.EqualAny, i18nPrefix + ".DEFAULT.EqualAny"), _defineProperty(_DEFAULT, Operators.EventCompleted, i18nPrefix + ".DEFAULT.EventCompleted"), _defineProperty(_DEFAULT, Operators.EventNotCompleted, i18nPrefix + ".DEFAULT.EventNotCompleted"), _defineProperty(_DEFAULT, Operators.EverContained, i18nPrefix + ".DEFAULT.EverContained"), _defineProperty(_DEFAULT, Operators.EverContainedAll, i18nPrefix + ".DEFAULT.EverContainedAll"), _defineProperty(_DEFAULT, Operators.EverContainedAny, i18nPrefix + ".DEFAULT.EverContainedAny"), _defineProperty(_DEFAULT, Operators.EverEqual, i18nPrefix + ".DEFAULT.EverEqual"), _defineProperty(_DEFAULT, Operators.EverEqualAny, i18nPrefix + ".DEFAULT.EverEqualAny"), _defineProperty(_DEFAULT, Operators.EverEqualAll, i18nPrefix + ".DEFAULT.EverEqualAll"), _defineProperty(_DEFAULT, Operators.EverIn, i18nPrefix + ".DEFAULT.EverIn"), _defineProperty(_DEFAULT, Operators.FormFilledOut, i18nPrefix + ".DEFAULT.FormFilledOut"), _defineProperty(_DEFAULT, Operators.FormNotFilledOut, i18nPrefix + ".DEFAULT.FormNotFilledOut"), _defineProperty(_DEFAULT, Operators.Greater, i18nPrefix + ".DEFAULT.Greater"), _defineProperty(_DEFAULT, Operators.GreaterOrEqual, i18nPrefix + ".DEFAULT.GreaterOrEqual"), _defineProperty(_DEFAULT, Operators.GreaterRolling, i18nPrefix + ".DEFAULT.GreaterRolling"), _defineProperty(_DEFAULT, Operators.GreaterThanRolling, i18nPrefix + ".DEFAULT.GreaterThanRolling"), _defineProperty(_DEFAULT, Operators.In, i18nPrefix + ".DEFAULT.In"), _defineProperty(_DEFAULT, Operators.InImport, i18nPrefix + ".DEFAULT.InImport"), _defineProperty(_DEFAULT, Operators.InRange, i18nPrefix + ".DEFAULT.InRange"), _defineProperty(_DEFAULT, Operators.InRollingDateRange, i18nPrefix + ".DEFAULT.InRollingDateRange"), _defineProperty(_DEFAULT, Operators.Known, i18nPrefix + ".DEFAULT.Known"), _defineProperty(_DEFAULT, Operators.Less, i18nPrefix + ".DEFAULT.Less"), _defineProperty(_DEFAULT, Operators.LessOrEqual, i18nPrefix + ".DEFAULT.LessOrEqual"), _defineProperty(_DEFAULT, Operators.LessRolling, i18nPrefix + ".DEFAULT.LessRolling"), _defineProperty(_DEFAULT, Operators.LessThanRolling, i18nPrefix + ".DEFAULT.LessThanRolling"), _defineProperty(_DEFAULT, Operators.ListIsMember, i18nPrefix + ".DEFAULT.ListIsMember"), _defineProperty(_DEFAULT, Operators.ListIsNotMember, i18nPrefix + ".DEFAULT.ListIsNotMember"), _defineProperty(_DEFAULT, Operators.Near, i18nPrefix + ".DEFAULT.Near"), _defineProperty(_DEFAULT, Operators.NeverContained, i18nPrefix + ".DEFAULT.NeverContained"), _defineProperty(_DEFAULT, Operators.NeverEqual, i18nPrefix + ".DEFAULT.NeverEqual"), _defineProperty(_DEFAULT, Operators.NeverEqualAny, i18nPrefix + ".DEFAULT.NeverEqualAny"), _defineProperty(_DEFAULT, Operators.NeverEqualAll, i18nPrefix + ".DEFAULT.NeverEqualAll"), _defineProperty(_DEFAULT, Operators.NeverIn, i18nPrefix + ".DEFAULT.NeverIn"), _defineProperty(_DEFAULT, Operators.NotContain, i18nPrefix + ".DEFAULT.NotContain"), _defineProperty(_DEFAULT, Operators.NotContainAll, i18nPrefix + ".DEFAULT.NotContainAll"), _defineProperty(_DEFAULT, Operators.NotContainAny, i18nPrefix + ".DEFAULT.NotContainAny"), _defineProperty(_DEFAULT, Operators.NotEqual, i18nPrefix + ".DEFAULT.NotEqual"), _defineProperty(_DEFAULT, Operators.NotEqualAll, i18nPrefix + ".DEFAULT.NotEqualAll"), _defineProperty(_DEFAULT, Operators.NotEqualAny, i18nPrefix + ".DEFAULT.NotEqualAny"), _defineProperty(_DEFAULT, Operators.NeverContainedAll, i18nPrefix + ".DEFAULT.NeverContainedAll"), _defineProperty(_DEFAULT, Operators.SurveyMonkeyHasAnswered, i18nPrefix + ".DEFAULT.SurveyMonkeyHasAnswered"), _defineProperty(_DEFAULT, Operators.SurveyMonkeyHasResponded, i18nPrefix + ".DEFAULT.SurveyMonkeyHasResponded"), _defineProperty(_DEFAULT, Operators.SurveyMonkeyNotHasResponded, i18nPrefix + ".DEFAULT.SurveyMonkeyNotHasResponded"), _defineProperty(_DEFAULT, Operators.NotIn, i18nPrefix + ".DEFAULT.NotIn"), _defineProperty(_DEFAULT, Operators.NotInImport, i18nPrefix + ".DEFAULT.NotInImport"), _defineProperty(_DEFAULT, Operators.NotInRange, i18nPrefix + ".DEFAULT.NotInRange"), _defineProperty(_DEFAULT, Operators.NotKnown, i18nPrefix + ".DEFAULT.NotKnown"), _defineProperty(_DEFAULT, Operators.NotWildCardEqual, i18nPrefix + ".DEFAULT.NotWildCardEqual"), _defineProperty(_DEFAULT, Operators.NotUpdatedInLastXDays, i18nPrefix + ".DEFAULT.NotUpdatedInLastXDays"), _defineProperty(_DEFAULT, Operators.PageViewContain, i18nPrefix + ".DEFAULT.PageViewContain"), _defineProperty(_DEFAULT, Operators.PageViewEqual, i18nPrefix + ".DEFAULT.PageViewEqual"), _defineProperty(_DEFAULT, Operators.PageViewMatchRegex, i18nPrefix + ".DEFAULT.PageViewMatchRegex"), _defineProperty(_DEFAULT, Operators.PageViewNotContain, i18nPrefix + ".DEFAULT.PageViewNotContain"), _defineProperty(_DEFAULT, Operators.PageViewNotEqual, i18nPrefix + ".DEFAULT.PageViewNotEqual"), _defineProperty(_DEFAULT, Operators.PageViewNotMatchRegex, i18nPrefix + ".DEFAULT.PageViewNotMatchRegex"), _defineProperty(_DEFAULT, Operators.PrivacyConsentCompleted, i18nPrefix + ".DEFAULT.PrivacyConsentCompleted"), _defineProperty(_DEFAULT, Operators.PrivacyConsentNotCompleted, i18nPrefix + ".DEFAULT.PrivacyConsentNotCompleted"), _defineProperty(_DEFAULT, Operators.StartsWith, i18nPrefix + ".DEFAULT.StartsWith"), _defineProperty(_DEFAULT, Operators.StartsWithAny, i18nPrefix + ".DEFAULT.StartsWithAny"), _defineProperty(_DEFAULT, Operators.UpdatedAfter, i18nPrefix + ".DEFAULT.UpdatedAfter"), _defineProperty(_DEFAULT, Operators.UpdatedBefore, i18nPrefix + ".DEFAULT.UpdatedBefore"), _defineProperty(_DEFAULT, Operators.UpdatedInLastXDays, i18nPrefix + ".DEFAULT.UpdatedInLastXDays"), _defineProperty(_DEFAULT, Operators.WebinarHasAttended, i18nPrefix + ".DEFAULT.WebinarHasAttended"), _defineProperty(_DEFAULT, Operators.WebinarNotHasAttended, i18nPrefix + ".DEFAULT.WebinarNotHasAttended"), _defineProperty(_DEFAULT, Operators.WebinarNotHasRegistered, i18nPrefix + ".DEFAULT.WebinarNotHasRegistered"), _defineProperty(_DEFAULT, Operators.WebinarHasRegistered, i18nPrefix + ".DEFAULT.WebinarHasRegistered"), _defineProperty(_DEFAULT, Operators.WildCardEqual, i18nPrefix + ".DEFAULT.WildCardEqual"), _defineProperty(_DEFAULT, Operators.WorkflowActive, i18nPrefix + ".DEFAULT.WorkflowActive"), _defineProperty(_DEFAULT, Operators.WorkflowNotActive, i18nPrefix + ".DEFAULT.WorkflowNotActive"), _defineProperty(_DEFAULT, Operators.WorkflowCompleted, i18nPrefix + ".DEFAULT.WorkflowCompleted"), _defineProperty(_DEFAULT, Operators.WorkflowNotCompleted, i18nPrefix + ".DEFAULT.WorkflowNotCompleted"), _defineProperty(_DEFAULT, Operators.WorkflowEnrolled, i18nPrefix + ".DEFAULT.WorkflowEnrolled"), _defineProperty(_DEFAULT, Operators.WorkflowNotEnrolled, i18nPrefix + ".DEFAULT.WorkflowNotEnrolled"), _defineProperty(_DEFAULT, Operators.WorkflowMetGoal, i18nPrefix + ".DEFAULT.WorkflowMetGoal"), _defineProperty(_DEFAULT, Operators.WorkflowNotMetGoal, i18nPrefix + ".DEFAULT.WorkflowNotMetGoal"), _DEFAULT)), _defineProperty(_fromJS, PropertyTypes.DATE, (_PropertyTypes$DATE = {}, _defineProperty(_PropertyTypes$DATE, Operators.Greater, i18nPrefix + ".DATE.Greater"), _defineProperty(_PropertyTypes$DATE, Operators.GreaterOrEqual, i18nPrefix + ".DATE.GreaterOrEqual"), _defineProperty(_PropertyTypes$DATE, Operators.Less, i18nPrefix + ".DATE.Less"), _defineProperty(_PropertyTypes$DATE, Operators.LessOrEqual, i18nPrefix + ".DATE.LessOrEqual"), _PropertyTypes$DATE)), _defineProperty(_fromJS, PropertyTypes.DATE_TIME, (_PropertyTypes$DATE_T = {}, _defineProperty(_PropertyTypes$DATE_T, Operators.Greater, i18nPrefix + ".DATE.Greater"), _defineProperty(_PropertyTypes$DATE_T, Operators.Less, i18nPrefix + ".DATE.Less"), _PropertyTypes$DATE_T)), _defineProperty(_fromJS, REFINEMENT, (_REFINEMENT = {}, _defineProperty(_REFINEMENT, Operators.Equal, i18nPrefix + ".REFINEMENT.Equal"), _defineProperty(_REFINEMENT, Operators.Greater, i18nPrefix + ".REFINEMENT.Greater"), _defineProperty(_REFINEMENT, Operators.GreaterOrEqual, i18nPrefix + ".REFINEMENT.GreaterOrEqual"), _defineProperty(_REFINEMENT, Operators.GreaterThanRolling, i18nPrefix + ".REFINEMENT.GreaterThanRolling"), _defineProperty(_REFINEMENT, Operators.InRange, i18nPrefix + ".REFINEMENT.InRange"), _defineProperty(_REFINEMENT, Operators.Less, i18nPrefix + ".REFINEMENT.Less"), _defineProperty(_REFINEMENT, Operators.LessOrEqual, i18nPrefix + ".REFINEMENT.LessOrEqual"), _defineProperty(_REFINEMENT, Operators.LessThanRolling, i18nPrefix + ".REFINEMENT.LessThanRolling"), _REFINEMENT)), _defineProperty(_fromJS, PropertyTypes.STRING, (_PropertyTypes$STRING = {}, _defineProperty(_PropertyTypes$STRING, Operators.NotWildCardEqual, i18nPrefix + ".STRING.NotWildCardEqual"), _defineProperty(_PropertyTypes$STRING, Operators.WildCardEqual, i18nPrefix + ".STRING.WildCardEqual"), _PropertyTypes$STRING)), _defineProperty(_fromJS, 'WITH_UNKNOWN', (_WITH_UNKNOWN = {}, _defineProperty(_WITH_UNKNOWN, Operators.After, i18nPrefix + ".WITH_UNKNOWN.After"), _defineProperty(_WITH_UNKNOWN, Operators.Before, i18nPrefix + ".WITH_UNKNOWN.Before"), _defineProperty(_WITH_UNKNOWN, Operators.ContainAny, i18nPrefix + ".WITH_UNKNOWN.ContainAny"), _defineProperty(_WITH_UNKNOWN, Operators.Equal, i18nPrefix + ".WITH_UNKNOWN.Equal"), _defineProperty(_WITH_UNKNOWN, Operators.EqualAny, i18nPrefix + ".WITH_UNKNOWN.EqualAny"), _defineProperty(_WITH_UNKNOWN, Operators.EverEqual, i18nPrefix + ".WITH_UNKNOWN.EverEqual"), _defineProperty(_WITH_UNKNOWN, Operators.EverIn, i18nPrefix + ".WITH_UNKNOWN.EverIn"), _defineProperty(_WITH_UNKNOWN, Operators.Greater, i18nPrefix + ".WITH_UNKNOWN.Greater"), _defineProperty(_WITH_UNKNOWN, Operators.GreaterOrEqual, i18nPrefix + ".WITH_UNKNOWN.GreaterOrEqual"), _defineProperty(_WITH_UNKNOWN, Operators.In, i18nPrefix + ".WITH_UNKNOWN.In"), _defineProperty(_WITH_UNKNOWN, Operators.Less, i18nPrefix + ".WITH_UNKNOWN.Less"), _defineProperty(_WITH_UNKNOWN, Operators.LessOrEqual, i18nPrefix + ".WITH_UNKNOWN.LessOrEqual"), _defineProperty(_WITH_UNKNOWN, Operators.NeverContained, i18nPrefix + ".WITH_UNKNOWN.NeverContained"), _defineProperty(_WITH_UNKNOWN, Operators.NeverContainedAll, i18nPrefix + ".WITH_UNKNOWN.NeverContainedAll"), _defineProperty(_WITH_UNKNOWN, Operators.NeverEqual, i18nPrefix + ".WITH_UNKNOWN.NeverEqual"), _defineProperty(_WITH_UNKNOWN, Operators.NeverEqualAll, i18nPrefix + ".WITH_UNKNOWN.NeverEqualAll"), _defineProperty(_WITH_UNKNOWN, Operators.NeverEqualAny, i18nPrefix + ".WITH_UNKNOWN.NeverEqualAny"), _defineProperty(_WITH_UNKNOWN, Operators.NeverIn, i18nPrefix + ".WITH_UNKNOWN.NeverIn"), _defineProperty(_WITH_UNKNOWN, Operators.NotContainAll, i18nPrefix + ".WITH_UNKNOWN.NotContainAll"), _defineProperty(_WITH_UNKNOWN, Operators.NotContainAny, i18nPrefix + ".WITH_UNKNOWN.NotContainAny"), _defineProperty(_WITH_UNKNOWN, Operators.NotEqual, i18nPrefix + ".WITH_UNKNOWN.NotEqual"), _defineProperty(_WITH_UNKNOWN, Operators.NotEqualAll, i18nPrefix + ".WITH_UNKNOWN.NotEqualAll"), _defineProperty(_WITH_UNKNOWN, Operators.NotEqualAny, i18nPrefix + ".WITH_UNKNOWN.NotEqualAny"), _defineProperty(_WITH_UNKNOWN, Operators.NotIn, i18nPrefix + ".WITH_UNKNOWN.NotIn"), _defineProperty(_WITH_UNKNOWN, Operators.NotInRange, i18nPrefix + ".WITH_UNKNOWN.NotInRange"), _defineProperty(_WITH_UNKNOWN, Operators.NotUpdatedInLastXDays, i18nPrefix + ".WITH_UNKNOWN.NotUpdatedInLastXDays"), _WITH_UNKNOWN)), _fromJS));
export function getOperatorTranslationKey(Operator, field, addOrUnknown) {
  var _ref = field || {},
      refinement = _ref.refinement,
      type = _ref.type;

  var defaultTranslationKey = Operator.toString();
  var translationKey;

  if (refinement) {
    translationKey = OperatorTranslations.getIn([REFINEMENT, defaultTranslationKey]);
  } else if (addOrUnknown) {
    translationKey = OperatorTranslations.getIn(['WITH_UNKNOWN', defaultTranslationKey]);
  }

  if (!translationKey) {
    translationKey = OperatorTranslations.getIn([type, defaultTranslationKey]) || OperatorTranslations.getIn([DEFAULT, defaultTranslationKey]);
  }

  if (!translationKey) {
    // eslint-disable-next-line no-console
    console.error("translation key not found in FilterOperatorTranslations for Operator '" + Operator + "'");
  }

  return translationKey || defaultTranslationKey;
}