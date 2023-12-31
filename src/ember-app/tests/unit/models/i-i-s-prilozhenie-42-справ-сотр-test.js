import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-42-справ-сотр', 'Unit | Model | i-i-s-prilozhenie-42-справ-сотр', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-42-база-данных',
    'model:i-i-s-prilozhenie-42-карт-доступ',
    'model:i-i-s-prilozhenie-42-класс-уч',
    'model:i-i-s-prilozhenie-42-расп-прих',
    'model:i-i-s-prilozhenie-42-справ-долж',
    'model:i-i-s-prilozhenie-42-справ-род',
    'model:i-i-s-prilozhenie-42-справ-сотр',
    'model:i-i-s-prilozhenie-42-справ-уч',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
