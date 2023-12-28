export enum ROUTE_TYPE {
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DEPRECATIONS = 'DEPRECATIONS',
  DOCUMENTS = 'DOCUMENTS',
  HOME = 'HOME',
  NOTES = 'NOTES',
  MIGRATIONS = 'MIGRATIONS',
  I18N_TRANSITION = 'I18N_TRANSITION'
}

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/migrations', ROUTE_TYPE.MIGRATIONS],
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/documents', ROUTE_TYPE.DOCUMENTS],
  ['/i18n-transition', ROUTE_TYPE.I18N_TRANSITION]
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.MIGRATIONS, 'Upgrade to Angular 12'],
  [ROUTE_TYPE.HOME, 'Notes of Angular v12'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.NOTES, 'Other Features'],
  [ROUTE_TYPE.DOCUMENTS, 'Official Documents'],
  [ROUTE_TYPE.I18N_TRANSITION, 'Bugfix - i18n message ID transition'],
]);