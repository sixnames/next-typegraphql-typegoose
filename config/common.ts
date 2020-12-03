// Time
export const ONE_SECOND = 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const ONE_HOUR = ONE_MINUTE * 60;
export const ONE_DAY = ONE_HOUR * 24;
export const ONE_WEEK = ONE_DAY * 7;

// Addresses
export const GEO_POINT_TYPE = 'Point';

// Admin
export const ADMIN_NAME = 'admin';
export const ADMIN_LAST_NAME = 'site';
export const ADMIN_EMAIL = 'admin@gmail.com';
export const ADMIN_PHONE = '+79998884433';
export const ADMIN_PASSWORD = 'admin';

// Roles
export const OPERATION_TYPE_CREATE = 'create';
export const OPERATION_TYPE_READ = 'read';
export const OPERATION_TYPE_UPDATE = 'update';
export const OPERATION_TYPE_DELETE = 'delete';
export const OPERATION_TYPE_ENUM = [
  OPERATION_TYPE_CREATE,
  OPERATION_TYPE_READ,
  OPERATION_TYPE_UPDATE,
  OPERATION_TYPE_DELETE,
];

export const ROLE_EMPTY_CUSTOM_FILTER = '{}';

export const OPERATION_TYPES_LIST = [
  { id: OPERATION_TYPE_CREATE, nameString: 'Создание' },
  { id: OPERATION_TYPE_READ, nameString: 'Чтение' },
  { id: OPERATION_TYPE_UPDATE, nameString: 'Изменение' },
  { id: OPERATION_TYPE_DELETE, nameString: 'Удаление' },
];

// Cookies
export const LANG_COOKIE_KEY = 'lang';
export const CART_COOKIE_KEY = 'cart';

// Internationalization
export const THEME_COOKIE_KEY = 'theme';
export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

export const DEFAULT_LANG = 'ru-RU';
export const SECONDARY_LANG = 'en-EN';

export const CITY_COOKIE_KEY = 'city';
export const LANG_COOKIE_HEADER = 'accept-language';
export const LANG_NOT_FOUND_FIELD_MESSAGE = 'Field translation not found';
export const LANG_DEFAULT_TITLE_SEPARATOR = ' или ';
export const LANG_SECONDARY_TITLE_SEPARATOR = ' or ';

// Cities
export const DEFAULT_COUNTRY = 'Россия';
export const SECONDARY_COUNTRY = 'USA';
export const DEFAULT_CITY = 'moscow';
export const SECONDARY_CITY = 'ny';
export const DEFAULT_CURRENCY = 'р.';
export const SECONDARY_CURRENCY = '$';

// GENDER
export const GENDER_SHE = 'she';
export const GENDER_HE = 'he';
export const GENDER_IT = 'it';

export const GENDER_ENUMS = [GENDER_HE, GENDER_SHE, GENDER_IT];

// CONFIG VARIANTS
export const CONFIG_VARIANT_STRING = 'string';
export const CONFIG_VARIANT_NUMBER = 'number';
export const CONFIG_VARIANT_PHONE = 'tel';
export const CONFIG_VARIANT_EMAIL = 'email';
export const CONFIG_VARIANT_ASSET = 'asset';

export const CONFIG_VARIANTS_ENUMS = [
  CONFIG_VARIANT_STRING,
  CONFIG_VARIANT_NUMBER,
  CONFIG_VARIANT_PHONE,
  CONFIG_VARIANT_EMAIL,
  CONFIG_VARIANT_ASSET,
];

export const CONFIG_VARIANTS_LIST = [
  { id: CONFIG_VARIANT_STRING, nameString: 'Строка' },
  { id: CONFIG_VARIANT_NUMBER, nameString: 'Число' },
  { id: CONFIG_VARIANT_PHONE, nameString: 'Телефон' },
  { id: CONFIG_VARIANT_EMAIL, nameString: 'Email' },
  { id: CONFIG_VARIANT_ASSET, nameString: 'Изображение' },
];

// OPTIONS GROUP VARIANTS
export const OPTIONS_GROUP_VARIANT_TEXT = 'text';
export const OPTIONS_GROUP_VARIANT_ICON = 'icon';
export const OPTIONS_GROUP_VARIANT_COLOR = 'color';

export const OPTIONS_GROUP_VARIANT_ENUMS = [
  OPTIONS_GROUP_VARIANT_TEXT,
  OPTIONS_GROUP_VARIANT_ICON,
  OPTIONS_GROUP_VARIANT_COLOR,
];

// ATTRIBUTE VARIANTS
export const ATTRIBUTE_VARIANT_SELECT = 'select';
export const ATTRIBUTE_VARIANT_MULTIPLE_SELECT = 'multipleSelect';
export const ATTRIBUTE_VARIANT_STRING = 'string';
export const ATTRIBUTE_VARIANT_NUMBER = 'number';

export const ATTRIBUTE_VARIANTS_ENUMS = [
  ATTRIBUTE_VARIANT_SELECT,
  ATTRIBUTE_VARIANT_MULTIPLE_SELECT,
  ATTRIBUTE_VARIANT_STRING,
  ATTRIBUTE_VARIANT_NUMBER,
];

export const ATTRIBUTE_VARIANTS_LIST = [
  { id: ATTRIBUTE_VARIANT_SELECT, nameString: 'Селект' },
  { id: ATTRIBUTE_VARIANT_MULTIPLE_SELECT, nameString: 'Мульти-селект' },
  { id: ATTRIBUTE_VARIANT_STRING, nameString: 'Строка' },
  { id: ATTRIBUTE_VARIANT_NUMBER, nameString: 'Число' },
];

// ATTRIBUTE VIEW VARIANTS
export const ATTRIBUTE_VIEW_VARIANT_LIST = 'list';
export const ATTRIBUTE_VIEW_VARIANT_TEXT = 'text';
export const ATTRIBUTE_VIEW_VARIANT_TAG = 'tag';
export const ATTRIBUTE_VIEW_VARIANT_ICON = 'icon';
export const ATTRIBUTE_VIEW_VARIANT_OUTER_RATING = 'outerRating';

export const ATTRIBUTE_VIEW_VARIANTS_ENUMS = [
  ATTRIBUTE_VIEW_VARIANT_LIST,
  ATTRIBUTE_VIEW_VARIANT_TEXT,
  ATTRIBUTE_VIEW_VARIANT_TAG,
  ATTRIBUTE_VIEW_VARIANT_ICON,
  ATTRIBUTE_VIEW_VARIANT_OUTER_RATING,
];

export const ATTRIBUTE_VIEW_VARIANTS_LIST = [
  { id: ATTRIBUTE_VIEW_VARIANT_LIST, nameString: 'Список' },
  { id: ATTRIBUTE_VIEW_VARIANT_TEXT, nameString: 'Текст' },
  { id: ATTRIBUTE_VIEW_VARIANT_TAG, nameString: 'Тег' },
  { id: ATTRIBUTE_VIEW_VARIANT_ICON, nameString: 'С иконкой' },
  { id: ATTRIBUTE_VIEW_VARIANT_OUTER_RATING, nameString: 'Внешний рейтинг' },
];

// ATTRIBUTE POSITIONS IN TITLE
export const ATTRIBUTE_POSITION_IN_TITLE_BEGIN = 'begin';
export const ATTRIBUTE_POSITION_IN_TITLE_BEFORE_KEYWORD = 'beforeKeyword';
export const ATTRIBUTE_POSITION_IN_TITLE_REPLACE_KEYWORD = 'replaceKeyword';
export const ATTRIBUTE_POSITION_IN_TITLE_AFTER_KEYWORD = 'afterKeyword';
export const ATTRIBUTE_POSITION_IN_TITLE_END = 'end';

export const ATTRIBUTE_POSITION_IN_TITLE_ENUMS = [
  ATTRIBUTE_POSITION_IN_TITLE_BEGIN,
  ATTRIBUTE_POSITION_IN_TITLE_END,
  ATTRIBUTE_POSITION_IN_TITLE_BEFORE_KEYWORD,
  ATTRIBUTE_POSITION_IN_TITLE_AFTER_KEYWORD,
  ATTRIBUTE_POSITION_IN_TITLE_REPLACE_KEYWORD,
];

export const ATTRIBUTE_POSITIONS_LIST = [
  { id: ATTRIBUTE_POSITION_IN_TITLE_BEGIN, nameString: 'В начале предложения' },
  { id: ATTRIBUTE_POSITION_IN_TITLE_END, nameString: 'В конце предложения' },
  { id: ATTRIBUTE_POSITION_IN_TITLE_BEFORE_KEYWORD, nameString: 'Перед ключевым словом' },
  { id: ATTRIBUTE_POSITION_IN_TITLE_AFTER_KEYWORD, nameString: 'После ключевого слова' },
  { id: ATTRIBUTE_POSITION_IN_TITLE_REPLACE_KEYWORD, nameString: 'После ключевое слово' },
];

// PRIORITY
export const DEFAULT_PRIORITY = 1;

// RUBRICS
export const RUBRIC_LEVEL_ZERO = 0;
export const RUBRIC_LEVEL_ONE = 1;
export const RUBRIC_LEVEL_TWO = 2;
export const RUBRIC_LEVEL_THREE = 3;
export const RUBRIC_LEVEL_STEP = 1;

// SORT
export const SORT_ASC = 'asc';
export const SORT_DESC = 'desc';
