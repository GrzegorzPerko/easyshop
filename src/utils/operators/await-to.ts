export function awaitTo<T> (promise: Promise<T>): Promise<[null, T] | [Error]> {
    return promise.then(data => {
      return [null, data] as [null, T]
    })
    .catch((error: Error) => [error])
  }