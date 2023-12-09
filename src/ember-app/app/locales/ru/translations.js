import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie_42КартДоступLForm from './forms/i-i-s-prilozhenie-42-карт-доступ-l';
import IISPrilozhenie_42СправДолжLForm from './forms/i-i-s-prilozhenie-42-справ-долж-l';
import IISPrilozhenie_42СправСотрLForm from './forms/i-i-s-prilozhenie-42-справ-сотр-l';
import IISPrilozhenie_42СправУчLForm from './forms/i-i-s-prilozhenie-42-справ-уч-l';
import IISPrilozhenie_42КартДоступEForm from './forms/i-i-s-prilozhenie-42-карт-доступ-e';
import IISPrilozhenie_42СправДолжEForm from './forms/i-i-s-prilozhenie-42-справ-долж-e';
import IISPrilozhenie_42СправСотрEForm from './forms/i-i-s-prilozhenie-42-справ-сотр-e';
import IISPrilozhenie_42СправУчEForm from './forms/i-i-s-prilozhenie-42-справ-уч-e';
import IISPrilozhenie_42БазаДанныхModel from './models/i-i-s-prilozhenie-42-база-данных';
import IISPrilozhenie_42КартДоступModel from './models/i-i-s-prilozhenie-42-карт-доступ';
import IISPrilozhenie_42СправДолжModel from './models/i-i-s-prilozhenie-42-справ-долж';
import IISPrilozhenie_42СправСотрModel from './models/i-i-s-prilozhenie-42-справ-сотр';
import IISPrilozhenie_42СправУчModel from './models/i-i-s-prilozhenie-42-справ-уч';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-42-база-данных': IISPrilozhenie_42БазаДанныхModel,
    'i-i-s-prilozhenie-42-карт-доступ': IISPrilozhenie_42КартДоступModel,
    'i-i-s-prilozhenie-42-справ-долж': IISPrilozhenie_42СправДолжModel,
    'i-i-s-prilozhenie-42-справ-сотр': IISPrilozhenie_42СправСотрModel,
    'i-i-s-prilozhenie-42-справ-уч': IISPrilozhenie_42СправУчModel
  },

  'application-name': 'Prilozhenie_42',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_42',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_42',
          title: 'Prilozhenie_42'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-42-карт-доступ-l': IISPrilozhenie_42КартДоступLForm,
    'i-i-s-prilozhenie-42-справ-долж-l': IISPrilozhenie_42СправДолжLForm,
    'i-i-s-prilozhenie-42-справ-сотр-l': IISPrilozhenie_42СправСотрLForm,
    'i-i-s-prilozhenie-42-справ-уч-l': IISPrilozhenie_42СправУчLForm,
    'i-i-s-prilozhenie-42-карт-доступ-e': IISPrilozhenie_42КартДоступEForm,
    'i-i-s-prilozhenie-42-справ-долж-e': IISPrilozhenie_42СправДолжEForm,
    'i-i-s-prilozhenie-42-справ-сотр-e': IISPrilozhenie_42СправСотрEForm,
    'i-i-s-prilozhenie-42-справ-уч-e': IISPrilozhenie_42СправУчEForm
  },

});

export default translations;