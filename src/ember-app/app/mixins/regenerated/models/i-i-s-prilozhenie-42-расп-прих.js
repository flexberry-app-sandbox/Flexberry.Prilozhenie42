import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  периодКонца: DS.attr('date'),
  периодНачала: DS.attr('date'),
  урок: DS.attr('string')
});

export let ValidationRules = {
  периодКонца: {
    descriptionKey: 'models.i-i-s-prilozhenie-42-расп-прих.validations.периодКонца.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  периодНачала: {
    descriptionKey: 'models.i-i-s-prilozhenie-42-расп-прих.validations.периодНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  урок: {
    descriptionKey: 'models.i-i-s-prilozhenie-42-расп-прих.validations.урок.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РаспПрихE', 'i-i-s-prilozhenie-42-расп-прих', {
    урок: attr('Урок', { index: 0 }),
    периодНачала: attr('Период Начала', { index: 1 }),
    периодКонца: attr('Период Окончания', { index: 2 })
  });

  modelClass.defineProjection('РаспПрихL', 'i-i-s-prilozhenie-42-расп-прих', {
    урок: attr('Урок', { index: 0 }),
    периодНачала: attr('Период Начала', { index: 1 }),
    периодКонца: attr('Период Окончания', { index: 2 })
  });
};
