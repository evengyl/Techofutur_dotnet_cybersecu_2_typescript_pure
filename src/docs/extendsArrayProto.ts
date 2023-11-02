export {};

declare global {
  interface Array<T> {
    any(selector?: (x: T) => boolean): boolean;
    all(selector: (x: T) => boolean): boolean;
    contains(value: any): boolean;
    count(selector?: (x: T) => boolean): number;
    distinct(selector: (x: T) => any): Array<T>;
    firstOrDefault(selector?: (x: T) => boolean): T | null;
    insert(index: number, item: T): Array<T>;
    max(selector: (x: T) => number): number | null;
    min(selector: (x: T) => number): number | null;
    orderBy(selector: (x: T) => any): Array<T>;
    orderByDescending(selector: (x: T) => any): Array<T>;
    remove(x: T): Array<T>;
    select<TResult>(selector: (x: T) => TResult): Array<TResult>;
    selectMany<TResult>(selector: (x: T) => TResult[]): Array<TResult>;
    sum(selector: (x: T) => number): number;
    sum(selector: (x: T) => number, fractionDigits: number): number;
    where(selector: (x: T) => boolean): Array<T>;
  }
}

Array.prototype.any = function <T>(this: Array<T>, selector?: (x: T) => boolean): boolean {
  if (!selector) {
    return this.length > 0;
  }

  return this.some(selector);
};

Array.prototype.all = function <T>(this: Array<T>, selector: (x: T) => boolean): boolean {
  return this.every(selector);
};

Array.prototype.contains = function <T>(this: Array<T>, value: any): boolean {
  return this.find(f => f === value) !== undefined;
};

Array.prototype.count = function <T>(this: Array<T>, selector: (x: T) => boolean): number {
  if (!selector) {
    return this.length;
  }

  return this.where(selector).length;
};

Array.prototype.distinct = function <T>(this: Array<T>, selector: (x: T) => any): Array<T> {
  return [
    ...new Map(this.map(x => [selector(x), x])).values(),
  ];
};

Array.prototype.firstOrDefault = function <T>(selector?: (x: T) => boolean): T | null {
  if (!selector) {
    return this.length > 0 ? this[0] : null;
  }

  return this.reduce((previous, currentValue) => {
    if (!previous && selector(currentValue)) {
      previous = currentValue;
    }

    return previous;
  }, null);
};

Array.prototype.insert = function <T>(index: number, item: T): Array<T> {
  this.splice(index, 0, item);

  return this;
};

Array.prototype.max = function <T>(selector: (x: T) => number): number | null {
  if (this.length === 0) {
    return null;
  }

  return Math.max(... this.select(selector));
};

Array.prototype.min = function <T>(selector: (x: T) => number): number | null {
  if (this.length === 0) {
    return null;
  }

  return Math.min(... this.select(selector));
};

Array.prototype.orderBy = function <T>(selector: (x: T) => any): Array<T> {
  return this.sort((a, b) => selector(a) > selector(b) ? 1 : -1);
};

Array.prototype.orderByDescending = function <T>(selector: (x: T) => any): Array<T> {
  return this.sort((a, b) => selector(a) > selector(b) ? -1 : 1);
};

Array.prototype.remove = function <T>(this: Array<T>, item: T): Array<T> {
  this.splice(this.indexOf(item), 1);

  return this;
};

Array.prototype.select = function <T, TResult>(this: Array<T>, selector: (x: T) => TResult): Array<TResult> {
  return this.map(selector).where(x => !!(x));
};

Array.prototype.selectMany = function <T, TResult>(this: Array<T>, selector: (x: T) => TResult[]): Array<TResult> {
  const result: TResult[] = [];

  for (const items of this.select(selector)) {
    result.push(...items);
  }

  return result;
};

Array.prototype.sum = function <T>(this: Array<T>, selector: (x: T) => number, fractionDigits: number = 2): number {
  let sum: number = 0;

  for (const item of this) {
    sum += parseFloat((selector(item) ?? 0).toString());
  }

  return fractionDigits;
};

Array.prototype.where = function <T>(this: Array<T>, selector: (x: T) => boolean): Array<T> {
  return this.filter(selector);
};



