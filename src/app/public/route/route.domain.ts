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
  //TODO = 'TODO',
  HTTP_CONTEXT = 'HTTP_CONTEXT',
  DEBUGGING_PLAYLIST = 'DEBUGGING_PLAYLIST'
}

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/documents', ROUTE_TYPE.DOCUMENTS],
  ['/migrations', ROUTE_TYPE.MIGRATIONS],
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/http-context', ROUTE_TYPE.HTTP_CONTEXT],
  ['/nullish-coalescing', ROUTE_TYPE.NULLISH_COALESCING],
  ['/stylish-improvements', ROUTE_TYPE.STYLISH_IMPROVEMENTS],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/i18n-transition', ROUTE_TYPE.I18N_TRANSITION],
  ['/debugging-playlist', ROUTE_TYPE.DEBUGGING_PLAYLIST],
  ['/strict-mode', ROUTE_TYPE.STRICT_MODE],
  ['/language-service', ROUTE_TYPE.LANGUAGE_SERVICE],
  //['/todo', ROUTE_TYPE.TODO],
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.MIGRATIONS, 'Upgrade to Angular 12'],
  [ROUTE_TYPE.HOME, 'Notes of Angular v12'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.NOTES, 'Minor Features'],
  [ROUTE_TYPE.DOCUMENTS, 'About This Website'],
  [ROUTE_TYPE.I18N_TRANSITION, 'Bugfix - i18n message ID transition'],
  [ROUTE_TYPE.DEBUGGING_PLAYLIST, 'Instructions - [Debugging] Angular Error Messages'],
  [ROUTE_TYPE.NULLISH_COALESCING, 'Feature - Nullish Coalescing'],
  [ROUTE_TYPE.STRICT_MODE, 'Enhancement - Enable the Strict Mode on TypeScript and Angular by Default'],
  [ROUTE_TYPE.STYLISH_IMPROVEMENTS, 'Feature - Stylish Improvements'],
  [ROUTE_TYPE.LANGUAGE_SERVICE, 'Enhancement - Angular Language Service with Ivy'],
  //[ROUTE_TYPE.TODO, 'Todo list'],
  [ROUTE_TYPE.HTTP_CONTEXT, 'Feature - Pass Metadata to Interceptors']
]);

export const sideBarList = [
  ROUTE_TYPE.DOCUMENTS,
  ROUTE_TYPE.MIGRATIONS,
  ROUTE_TYPE.BREAKING_CHANGE,
  ROUTE_TYPE.DEPRECATIONS,
  ROUTE_TYPE.HTTP_CONTEXT,
  ROUTE_TYPE.NULLISH_COALESCING,
  ROUTE_TYPE.STYLISH_IMPROVEMENTS,
  ROUTE_TYPE.NOTES,
  ROUTE_TYPE.I18N_TRANSITION,
  ROUTE_TYPE.DEBUGGING_PLAYLIST,
  ROUTE_TYPE.STRICT_MODE,
  ROUTE_TYPE.LANGUAGE_SERVICE,
  //ROUTE_TYPE.TODO
];