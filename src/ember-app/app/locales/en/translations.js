import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_42КартДоступLForm from './forms/i-i-s-prilozhenie-42-карт-доступ-l';
import IISPrilozhenie_42КлассУчLForm from './forms/i-i-s-prilozhenie-42-класс-уч-l';
import IISPrilozhenie_42РаспПрихLForm from './forms/i-i-s-prilozhenie-42-расп-прих-l';
import IISPrilozhenie_42СправДолжLForm from './forms/i-i-s-prilozhenie-42-справ-долж-l';
import IISPrilozhenie_42СправРодLForm from './forms/i-i-s-prilozhenie-42-справ-род-l';
import IISPrilozhenie_42СправСотрLForm from './forms/i-i-s-prilozhenie-42-справ-сотр-l';
import IISPrilozhenie_42СправУчLForm from './forms/i-i-s-prilozhenie-42-справ-уч-l';
import IISPrilozhenie_42КартДоступEForm from './forms/i-i-s-prilozhenie-42-карт-доступ-e';
import IISPrilozhenie_42КлассУчEForm from './forms/i-i-s-prilozhenie-42-класс-уч-e';
import IISPrilozhenie_42РаспПрихEForm from './forms/i-i-s-prilozhenie-42-расп-прих-e';
import IISPrilozhenie_42СправДолжEForm from './forms/i-i-s-prilozhenie-42-справ-долж-e';
import IISPrilozhenie_42СправРодEForm from './forms/i-i-s-prilozhenie-42-справ-род-e';
import IISPrilozhenie_42СправСотрEForm from './forms/i-i-s-prilozhenie-42-справ-сотр-e';
import IISPrilozhenie_42СправУчEForm from './forms/i-i-s-prilozhenie-42-справ-уч-e';
import IISPrilozhenie_42БазаДанныхModel from './models/i-i-s-prilozhenie-42-база-данных';
import IISPrilozhenie_42КартДоступModel from './models/i-i-s-prilozhenie-42-карт-доступ';
import IISPrilozhenie_42КлассУчModel from './models/i-i-s-prilozhenie-42-класс-уч';
import IISPrilozhenie_42РаспПрихModel from './models/i-i-s-prilozhenie-42-расп-прих';
import IISPrilozhenie_42СправДолжModel from './models/i-i-s-prilozhenie-42-справ-долж';
import IISPrilozhenie_42СправРодModel from './models/i-i-s-prilozhenie-42-справ-род';
import IISPrilozhenie_42СправСотрModel from './models/i-i-s-prilozhenie-42-справ-сотр';
import IISPrilozhenie_42СправУчModel from './models/i-i-s-prilozhenie-42-справ-уч';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-42-база-данных': IISPrilozhenie_42БазаДанныхModel,
    'i-i-s-prilozhenie-42-карт-доступ': IISPrilozhenie_42КартДоступModel,
    'i-i-s-prilozhenie-42-класс-уч': IISPrilozhenie_42КлассУчModel,
    'i-i-s-prilozhenie-42-расп-прих': IISPrilozhenie_42РаспПрихModel,
    'i-i-s-prilozhenie-42-справ-долж': IISPrilozhenie_42СправДолжModel,
    'i-i-s-prilozhenie-42-справ-род': IISPrilozhenie_42СправРодModel,
    'i-i-s-prilozhenie-42-справ-сотр': IISPrilozhenie_42СправСотрModel,
    'i-i-s-prilozhenie-42-справ-уч': IISPrilozhenie_42СправУчModel
  },

  'application-name': 'Prilozhenie_42',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_42',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_42',
          title: 'Prilozhenie_42'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'prilozhenie-42': {
          caption: 'Prilozhenie_42',
          title: 'Prilozhenie_42',
          'i-i-s-prilozhenie-42-справ-сотр-l': {
            caption: 'Справочник Сотрудники',
            title: ''
          },
          'i-i-s-prilozhenie-42-справ-уч-l': {
            caption: 'Справочник Ученики',
            title: ''
          },
          'i-i-s-prilozhenie-42-справ-долж-l': {
            caption: 'Справочник Должности',
            title: ''
          },
          'i-i-s-prilozhenie-42-карт-доступ-l': {
            caption: 'База Данных',
            title: ''
          },
          'i-i-s-prilozhenie-42-класс-уч-l': {
            caption: 'Группа Ученика',
            title: ''
          },
          'i-i-s-prilozhenie-42-справ-род-l': {
            caption: 'Справочник Родители',
            title: ''
          },
          'i-i-s-prilozhenie-42-расп-прих-l': {
            caption: 'Расписание Прихода',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-42-карт-доступ-l': IISPrilozhenie_42КартДоступLForm,
    'i-i-s-prilozhenie-42-класс-уч-l': IISPrilozhenie_42КлассУчLForm,
    'i-i-s-prilozhenie-42-расп-прих-l': IISPrilozhenie_42РаспПрихLForm,
    'i-i-s-prilozhenie-42-справ-долж-l': IISPrilozhenie_42СправДолжLForm,
    'i-i-s-prilozhenie-42-справ-род-l': IISPrilozhenie_42СправРодLForm,
    'i-i-s-prilozhenie-42-справ-сотр-l': IISPrilozhenie_42СправСотрLForm,
    'i-i-s-prilozhenie-42-справ-уч-l': IISPrilozhenie_42СправУчLForm,
    'i-i-s-prilozhenie-42-карт-доступ-e': IISPrilozhenie_42КартДоступEForm,
    'i-i-s-prilozhenie-42-класс-уч-e': IISPrilozhenie_42КлассУчEForm,
    'i-i-s-prilozhenie-42-расп-прих-e': IISPrilozhenie_42РаспПрихEForm,
    'i-i-s-prilozhenie-42-справ-долж-e': IISPrilozhenie_42СправДолжEForm,
    'i-i-s-prilozhenie-42-справ-род-e': IISPrilozhenie_42СправРодEForm,
    'i-i-s-prilozhenie-42-справ-сотр-e': IISPrilozhenie_42СправСотрEForm,
    'i-i-s-prilozhenie-42-справ-уч-e': IISPrilozhenie_42СправУчEForm
  },

});

export default translations;
