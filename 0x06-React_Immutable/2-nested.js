import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedObject = fromJS(object);

  return mappedObject.getIn(array, undefined);
}
