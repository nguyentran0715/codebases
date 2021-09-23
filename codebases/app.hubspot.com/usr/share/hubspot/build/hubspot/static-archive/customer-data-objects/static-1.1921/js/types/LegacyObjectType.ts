import { COMPANY, CONTACT, CONVERSATION, DEAL, ENGAGEMENT, FEEDBACK_SUBMISSION, FORM, LINE_ITEM, OBJECT_LIST, PRODUCT, QUOTE, TASK, TICKET, VISIT } from '../constants/ObjectTypes';
export function isLegacyObjectType(s) {
  return s ? [COMPANY, CONTACT, CONVERSATION, DEAL, ENGAGEMENT, FEEDBACK_SUBMISSION, FORM, LINE_ITEM, OBJECT_LIST, PRODUCT, QUOTE, TASK, TICKET, VISIT].includes(s) : false;
}