import { Serializer as СправРодSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-42-справ-род';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправРодSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
