// basic

function sum(a: number, b: number): number {
  return a + b;
}

type Lazy<T> = () => T;

function lazySum(a: Lazy<number>, b: Lazy<number>): Lazy<number> {
  return () => a() + b();
}

console.log("sum : \t", lazySum(() => 4, () => 5)());

// Avoiding big computations

function hang<T>(): T {
  return hang();
}

function first(a: number, b: number): number {
  return a;
}

function lazyFirst(a: Lazy<number>, b: Lazy<number>): Lazy<number> {
  return a;
}

console.log("lazy first: ", lazyFirst(() => 10, () => hang())());

// Short-circuit computation

function and(a: Lazy<boolean>, b: Lazy<boolean>): Lazy<boolean> {
  return () => !a() ? false : b();
}

function or(a: Lazy<boolean>, b: Lazy<boolean>): Lazy<boolean> {
  return () => a() ? true : b();
}

function tract<T>(x: Lazy<T>, message: string): Lazy<T> {
  return () => {
    console.log(message);
    return x();
  };
}

// Infinite Data Structures

type LazyList<T> = Lazy<
  {
    head: Lazy<T>;
    tail: LazyList<T>;
  } | null
>;

function toList<T>(xs: T[]): LazyList<T> {
  return () => {
    if (xs.length === 0) {
      return null;
    } else {
      return {
        head: () => xs[0],
        tail: toList(xs.slice(1)),
      };
    }
  };
}

console.log(toList([1, 2, 3, 4]));

function range(begin: Lazy<number>): LazyList<number> {
  return () => {
    let x = begin();
    return {
      head: () => x,
      tail: range(() => x + 1),
    };
  };
}

function printList<T>(xs: LazyList<T>) {
  let pair = xs();
  while (pair !== null) {
    console.log(pair.head());
    pair = pair.tail();
  }
}

printList(toList([1, 2, 3, 4, 5, 6, 7]));
// printList(range((() => 3)));

function take<T>(n: Lazy<number>, xs: LazyList<T>): LazyList<T> {
  return () => {
    let m = n();
    if (m > 0) {
      let pair = xs();
      return {
        head: pair.head,
        tail: take(() => m - 1, pair.tail),
      };
    } else {
      return null;
    }
  };
}

printList(take(() => 8, range(() => 3)));
