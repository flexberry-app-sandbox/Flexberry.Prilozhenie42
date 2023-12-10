import { Serializer as РаспПрихSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-42-расп-прих';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РаспПрихSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
