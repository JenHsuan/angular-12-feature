export enum ROUTE_TYPE {
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DEPRECATIONS = 'DEPRECATIONS',
  DOCUMENTS = 'DOCUMENTS',
  HOME = 'HOME',
  NOTES = 'NOTES',
  MIGRATIONS = 'MIGRATIONS',
  I18N_TRANSITION = 'I18N_TRANSITION',
  NULLISH_COALESCING = 'NULLISH_COALESCING',
  LEARNING_RESOURCE = 'LEARNING_RESOURCE',
  STYLISH_IMPROVEMENTS = 'STYLISH_IMPROVEMENTS',
  STRICT_MODE = 'STRICT_MODE',
  LANGUAGE_SERVICE = 'LANGUAGE_SERVICE',
  TODO = 'TODO'
}

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/migrations', ROUTE_TYPE.MIGRATIONS],
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/documents', ROUTE_TYPE.DOCUMENTS],
  ['/i18n-transition', ROUTE_TYPE.I18N_TRANSITION],
  ['/nullish-coalescing', ROUTE_TYPE.NULLISH_COALESCING],
  ['/learning-resource', ROUTE_TYPE.LEARNING_RESOURCE],
  ['/stylish-improvements', ROUTE_TYPE.STYLISH_IMPROVEMENTS],
  ['/strict-mode', ROUTE_TYPE.STRICT_MODE],
  ['/language-service', ROUTE_TYPE.LANGUAGE_SERVICE],
  ['/todo', ROUTE_TYPE.TODO],
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.MIGRATIONS, 'Upgrade to Angular 12'],
  [ROUTE_TYPE.HOME, 'Notes of Angular v12'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.NOTES, 'Other Features'],
  [ROUTE_TYPE.DOCUMENTS, 'Official Documents'],
  [ROUTE_TYPE.LEARNING_RESOURCE, 'Official New Learning Resources'],
  [ROUTE_TYPE.I18N_TRANSITION, 'Bugfix - i18n message ID transition'],
  [ROUTE_TYPE.NULLISH_COALESCING, 'New Feature - Nullish Coalescing is Enabled on Template'],
  [ROUTE_TYPE.STRICT_MODE, 'Enhancement - Enable the Strict Mode on TypeScript and Angular by Default'],
  [ROUTE_TYPE.STYLISH_IMPROVEMENTS, 'New Feature - Stylish Improvements'],
  [ROUTE_TYPE.LANGUAGE_SERVICE, 'Enhancement - Angular Language Service with Ivy'],
  [ROUTE_TYPE.TODO, 'Todo list'],
]);