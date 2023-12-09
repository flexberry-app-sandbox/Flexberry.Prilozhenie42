import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-42-справ-долж', 'Unit | Serializer | i-i-s-prilozhenie-42-справ-долж', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-42-справ-долж',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-prilozhenie-42-база-данных',
    'model:i-i-s-prilozhenie-42-карт-доступ',
    'model:i-i-s-prilozhenie-42-класс-уч',
    'model:i-i-s-prilozhenie-42-справ-долж',
    'model:i-i-s-prilozhenie-42-справ-сотр',
    'model:i-i-s-prilozhenie-42-справ-уч',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
