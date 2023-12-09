import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  классУч: DS.belongsTo('i-i-s-prilozhenie-42-класс-уч', { inverse: null, async: false }),
  справРод: DS.belongsTo('i-i-s-prilozhenie-42-справ-род', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-prilozhenie-42-справ-уч.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классУч: {
    descriptionKey: 'models.i-i-s-prilozhenie-42-справ-уч.validations.классУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  справРод: {
    descriptionKey: 'models.i-i-s-prilozhenie-42-справ-уч.validations.справРод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправУчE', 'i-i-s-prilozhenie-42-справ-уч', {
    фио: attr('Фио', { index: 0 }),
    классУч: belongsTo('i-i-s-prilozhenie-42-класс-уч', 'Класс Ученика', {
      назв: attr('Класс Ученика', { index: 2 })
    }, { index: 1 }),
    справРод: belongsTo('i-i-s-prilozhenie-42-справ-род', 'Фио Родителя', {
      фио: attr('Фио Родителя', { index: 4 })
    }, { index: 3 })
  });

  modelClass.defineProjection('СправУчL', 'i-i-s-prilozhenie-42-справ-уч', {
    фио: attr('Фио', { index: 0 }),
    классУч: belongsTo('i-i-s-prilozhenie-42-класс-уч', 'Класс Ученика', {
      назв: attr('Класс Ученика', { index: 1 })
    }, { index: -1, hidden: true }),
    справРод: belongsTo('i-i-s-prilozhenie-42-справ-род', 'Фио Родителя', {
      фио: attr('Фио Родителя', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
