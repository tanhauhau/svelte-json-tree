export default function objType(obj) {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === 'Object') {
    if (typeof obj[Symbol.iterator] === 'function') {
      return 'Iterable';
    }
    return obj.constructor.name;
  }

  return type;
}

export function isPrimitive(obj) {
  switch(objType(obj)) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Null':
    case 'Undefined':
      return true;
    default:
      return false;
  }
}