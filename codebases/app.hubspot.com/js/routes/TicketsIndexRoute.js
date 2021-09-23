'use es6';

import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useLayoutEffect } from 'react';
import I18n from 'I18n';
import UILoadingOverlay from 'UIComponents/loading/UILoadingOverlay';
import { useParams } from 'react-router-dom';
import { TICKET } from 'customer-data-objects/constants/ObjectTypes';
import { useBodyClass } from '../router/useBodyClass';
import { INDEX } from 'customer-data-objects/view/PageTypes';
import IndexLoaderHelper from '../crm_ui/routes/shared/IndexLoaderHelper';
import { searchDebounced, updateDisplayQuery, reset, changeSavedFilter } from '../crm_ui/flux/grid/GridUIActions';
import { getTruncatedQuery } from 'customer-data-objects/search/ElasticSearchQuery';
import { useQueryParams } from '../router/useQueryParams';
import { buildRouteParams } from '../crm_ui/routes/shared/buildRouteParams';
import localSettings from '../utils/localSettings';
import IndexPageWrapperAsync from '../pages/IndexPageWrapperAsync';
import { saveUserSetting } from 'crm_data/settings/UserSettingsActions';
import UserSettingsKeys from 'crm_data/settings/UserSettingsKeys';
import { useTicketsAccessCheck } from './useTicketsAccessCheck';
import { withFullPageErrorBoundary } from '../errorBoundary/withFullPageErrorBoundary';
import { useStoreDependency } from 'general-store';
import { crmObjectDefinitionsDep } from '../crmObjects/deps/crmObjectDefinitionsDep';
import { pinnedViewsDep } from '../pinnedViews/deps/pinnedViewsDep';
import { withProvidedObjectTypeId } from '../objectTypeIdContext/components/withProvidedObjectTypeId';
import { useSelectedObjectTypeId } from '../objectTypeIdContext/hooks/useSelectedObjectTypeId';
import { fetchFieldLevelPermissionsDependency } from '../crm_ui/property/fieldLevelPermissionsUIDependencies';
import Pipeline, { allPipelineStores } from '../crm_ui/filter/pipelineTypes/all';
import { isResolved } from 'crm_data/flux/LoadingStatus';
import { useHasAllGates } from '../rewrite/auth/hooks/useHasAllGates';
import withGateOverride from 'crm_data/gates/withGateOverride';
export var pipelinesDep = {
  stores: allPipelineStores,
  deref: function deref(_ref) {
    var objectType = _ref.objectType;
    return Pipeline.getPipelines(objectType);
  }
};
export var ticketsIndexLoaderCallback = function ticketsIndexLoaderCallback(_ref2) {
  var associations = _ref2.associations,
      favoriteColumns = _ref2.favoriteColumns,
      hasAllGates = _ref2.hasAllGates,
      normalizedQuery = _ref2.normalizedQuery,
      properties = _ref2.properties,
      query = _ref2.query,
      requiredColumns = _ref2.requiredColumns,
      setDataCallback = _ref2.setDataCallback,
      view = _ref2.view,
      viewId = _ref2.viewId;
  localSettings.set('tickets.default', INDEX);
  saveUserSetting(UserSettingsKeys.TICKET_VIEWTYPE_DEFAULT, INDEX);
  reset({
    objectType: TICKET,
    displayQuery: query.query
  });
  var searchQuery = normalizedQuery.query ? normalizedQuery.query : '';
  searchDebounced({
    query: getTruncatedQuery(searchQuery),
    objectType: TICKET
  });
  updateDisplayQuery({
    displayQuery: getTruncatedQuery(searchQuery),
    objectType: TICKET
  });
  changeSavedFilter({
    viewId: viewId,
    objectType: TICKET,
    pageType: INDEX
  });
  var isFlexibleAssociationsUngated = withGateOverride('flexible-associations', hasAllGates('flexible-associations'));
  var isNewAssociationsUngated = withGateOverride('CRM:Datasets:NewAssociations', hasAllGates('CRM:Datasets:NewAssociations'));
  var params = buildRouteParams({
    associations: associations,
    favoriteColumns: favoriteColumns,
    isFlexibleAssociationsUngated: isFlexibleAssociationsUngated,
    isNewAssociationsUngated: isNewAssociationsUngated,
    normalizedQuery: normalizedQuery,
    objectType: TICKET,
    properties: properties,
    query: query,
    requiredColumns: requiredColumns,
    view: view,
    viewId: viewId
  });
  setDataCallback(params);
};

function TicketsIndexRoute() {
  var query = useQueryParams();

  var _useParams = useParams(),
      viewIdParam = _useParams.viewId;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      routeData = _useState2[0],
      setRouteData = _useState2[1];

  var objectTypeId = useSelectedObjectTypeId();
  useBodyClass(TICKET);
  useTicketsAccessCheck();
  var hasAllGates = useHasAllGates();
  var isNewAssociationsUngated = withGateOverride('CRM:Datasets:NewAssociations', hasAllGates('CRM:Datasets:NewAssociations'));
  useLayoutEffect(function () {
    document.title = I18n.text('documentTitles.tickets');
    IndexLoaderHelper({
      getRouteURL: function getRouteURL(viewId) {
        return "/tickets/list/view/" + viewId + "/";
      },
      objectType: TICKET,
      query: query,
      viewIdParam: viewIdParam
    }, function (_ref3) {
      var associations = _ref3.associations,
          view = _ref3.view,
          viewId = _ref3.viewId,
          favoriteColumns = _ref3.favoriteColumns,
          normalizedQuery = _ref3.normalizedQuery,
          properties = _ref3.properties;
      ticketsIndexLoaderCallback({
        associations: associations,
        favoriteColumns: favoriteColumns,
        normalizedQuery: normalizedQuery,
        properties: properties,
        query: query,
        requiredColumns: isNewAssociationsUngated ? ['subject'] : ['relatesToCompany', 'relatesToContact', 'subject'],
        setDataCallback: setRouteData,
        view: view,
        viewId: viewId,
        hasAllGates: hasAllGates
      });
    });
  }, [hasAllGates, isNewAssociationsUngated, query, viewIdParam]);
  useStoreDependency(pinnedViewsDep, {
    objectTypeId: objectTypeId
  });
  useStoreDependency(fetchFieldLevelPermissionsDependency, {
    objectType: TICKET
  });

  var _useStoreDependency = useStoreDependency(crmObjectDefinitionsDep, {
    objectTypeId: objectTypeId
  }),
      crmObjectDefsFetched = _useStoreDependency.isResolved;

  var pipelines = useStoreDependency(pipelinesDep, {
    objectType: TICKET
  });
  var arePipelinesFetched = isResolved(pipelines);
  var showContent = crmObjectDefsFetched && arePipelinesFetched && routeData;
  return showContent ? /*#__PURE__*/_jsx(IndexPageWrapperAsync, Object.assign({}, routeData, {
    objectType: TICKET,
    pageType: INDEX
  })) : /*#__PURE__*/_jsx(UILoadingOverlay, {});
}

export default withFullPageErrorBoundary(withProvidedObjectTypeId(TicketsIndexRoute, '0-5'));