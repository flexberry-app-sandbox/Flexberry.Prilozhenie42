import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РаспПрихMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-42-расп-прих';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РаспПрихMixin, Validations, {
});

defineProjections(Model);

export default Model;
