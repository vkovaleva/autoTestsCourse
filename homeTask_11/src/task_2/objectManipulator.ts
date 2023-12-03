interface ObjectManipulatorInterface<T> {
  set<K extends keyof T>(key: K, value: T[K]): ObjectManipulatorInterface<T>;
  get<K extends keyof T>(key: K): T[K] | undefined;
  delete<K extends keyof T>(key: K): ObjectManipulatorInterface<T>;
  getObject(): T;
}

export default class ObjectManipulator<T> implements ObjectManipulatorInterface<T> {
  constructor(protected obj: T) {}

  public set<K extends keyof T>(key: K, value: T[K]) {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get<K extends keyof T>(key: K) {
    return this.obj[key];
  }

  public delete<K extends keyof T>(key: K) {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject() {
    return this.obj;
  }
}
