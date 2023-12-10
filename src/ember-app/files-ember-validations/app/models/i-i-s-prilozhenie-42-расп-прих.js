import {
  defineNamespace,
  defineProjections,
  Model as РаспПрихMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-42-расп-прих';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РаспПрихMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
