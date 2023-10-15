export default function objType(obj: unknown, shouldTreatIterableAsObject: boolean): string {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === 'Object') {
    if (!shouldTreatIterableAsObject && typeof obj[Symbol.iterator] === 'function') {
      return 'Iterable';
    }
    return obj.constructor.name;
  }

  return type;
}
