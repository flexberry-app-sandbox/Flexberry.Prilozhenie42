import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  справСотр: DS.belongsTo('i-i-s-prilozhenie-42-справ-сотр', { inverse: null, async: false }),
  базаДанных: DS.hasMany('i-i-s-prilozhenie-42-база-данных', { inverse: 'картДоступ', async: false })
});

export let ValidationRules = {
  справСотр: {
    descriptionKey: 'models.i-i-s-prilozhenie-42-карт-доступ.validations.справСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  базаДанных: {
    descriptionKey: 'models.i-i-s-prilozhenie-42-карт-доступ.validations.базаДанных.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартДоступE', 'i-i-s-prilozhenie-42-карт-доступ', {
    базаДанных: hasMany('i-i-s-prilozhenie-42-база-данных', 'База Данных', {
      номерКарты: attr('Номер Карты', { index: 0 })
    })
  });

  modelClass.defineProjection('КартДоступL', 'i-i-s-prilozhenie-42-карт-доступ', {
    
  });
};
