import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie-42.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie-42.title'),
          children: [{
            link: 'i-i-s-prilozhenie-42-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-справ-сотр-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-42-справ-уч-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-справ-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-справ-уч-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-42-справ-долж-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-справ-долж-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-справ-долж-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-42-карт-доступ-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-карт-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-карт-доступ-l.title'),
            children: null
          }, {
            link: 'i-i-s-prilozhenie-42-класс-уч-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-класс-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-класс-уч-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-42-справ-род-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-справ-род-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-42-расп-прих-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-расп-прих-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-42.i-i-s-prilozhenie-42-расп-прих-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})