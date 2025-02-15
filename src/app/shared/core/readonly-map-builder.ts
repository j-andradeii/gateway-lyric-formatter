export class ReadonlyMapBuilder<K, V> {
  private readonly map = new Map<K, V>();

  private constructor() {}

  static create<K, V>(): ReadonlyMapBuilder<K, V> {
    return new ReadonlyMapBuilder<K, V>();
  }

  set(key: K, value: V): ReadonlyMapBuilder<K, V> {
    this.map.set(key, value);
    return this;
  }

  build(): ReadonlyMap<K, V> {
    return this.map;
  }
}
