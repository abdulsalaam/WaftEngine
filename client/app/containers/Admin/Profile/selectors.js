import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectUserPersonalInformationPageDomain = state =>
  state.userPersonalInformationPage || initialState;

export const makeSelectOne = () =>
  createSelector(
    selectUserPersonalInformationPageDomain,
    substate => substate.one,
  );

export const makeSelectErrors = () =>
  createSelector(
    selectUserPersonalInformationPageDomain,
    substate => substate.errors,
  );

export const makeSelectTwoFactor = () =>
  createSelector(
    selectUserPersonalInformationPageDomain,
    substate => substate.twoFactor,
  );

export const makeSelectHelperObj = () =>
  createSelector(
    selectUserPersonalInformationPageDomain,
    substate => substate.helperObj,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectUserPersonalInformationPageDomain,
    substate => substate.loading,
  );

const makeSelectUserPersonalInformationPage = () =>
  createSelector(
    selectUserPersonalInformationPageDomain,
    substate => substate,
  );

export default makeSelectUserPersonalInformationPage;
