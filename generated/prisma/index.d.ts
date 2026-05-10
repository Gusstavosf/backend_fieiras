
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model armarios
 * 
 */
export type armarios = $Result.DefaultSelection<Prisma.$armariosPayload>
/**
 * Model estoque_fieiras
 * 
 */
export type estoque_fieiras = $Result.DefaultSelection<Prisma.$estoque_fieirasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const status_fieira: {
  morta: 'morta',
  nova: 'nova',
  polida: 'polida',
  requisi__o: 'requisi__o',
  requisicao: 'requisicao'
};

export type status_fieira = (typeof status_fieira)[keyof typeof status_fieira]

}

export type status_fieira = $Enums.status_fieira

export const status_fieira: typeof $Enums.status_fieira

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Armarios
 * const armarios = await prisma.armarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Armarios
   * const armarios = await prisma.armarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.armarios`: Exposes CRUD operations for the **armarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Armarios
    * const armarios = await prisma.armarios.findMany()
    * ```
    */
  get armarios(): Prisma.armariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estoque_fieiras`: Exposes CRUD operations for the **estoque_fieiras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estoque_fieiras
    * const estoque_fieiras = await prisma.estoque_fieiras.findMany()
    * ```
    */
  get estoque_fieiras(): Prisma.estoque_fieirasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    armarios: 'armarios',
    estoque_fieiras: 'estoque_fieiras'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "armarios" | "estoque_fieiras"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      armarios: {
        payload: Prisma.$armariosPayload<ExtArgs>
        fields: Prisma.armariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.armariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.armariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>
          }
          findFirst: {
            args: Prisma.armariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.armariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>
          }
          findMany: {
            args: Prisma.armariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>[]
          }
          create: {
            args: Prisma.armariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>
          }
          createMany: {
            args: Prisma.armariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.armariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>[]
          }
          delete: {
            args: Prisma.armariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>
          }
          update: {
            args: Prisma.armariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>
          }
          deleteMany: {
            args: Prisma.armariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.armariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.armariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>[]
          }
          upsert: {
            args: Prisma.armariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$armariosPayload>
          }
          aggregate: {
            args: Prisma.ArmariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArmarios>
          }
          groupBy: {
            args: Prisma.armariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArmariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.armariosCountArgs<ExtArgs>
            result: $Utils.Optional<ArmariosCountAggregateOutputType> | number
          }
        }
      }
      estoque_fieiras: {
        payload: Prisma.$estoque_fieirasPayload<ExtArgs>
        fields: Prisma.estoque_fieirasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estoque_fieirasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estoque_fieirasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>
          }
          findFirst: {
            args: Prisma.estoque_fieirasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estoque_fieirasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>
          }
          findMany: {
            args: Prisma.estoque_fieirasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>[]
          }
          create: {
            args: Prisma.estoque_fieirasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>
          }
          createMany: {
            args: Prisma.estoque_fieirasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estoque_fieirasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>[]
          }
          delete: {
            args: Prisma.estoque_fieirasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>
          }
          update: {
            args: Prisma.estoque_fieirasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>
          }
          deleteMany: {
            args: Prisma.estoque_fieirasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estoque_fieirasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estoque_fieirasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>[]
          }
          upsert: {
            args: Prisma.estoque_fieirasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoque_fieirasPayload>
          }
          aggregate: {
            args: Prisma.Estoque_fieirasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstoque_fieiras>
          }
          groupBy: {
            args: Prisma.estoque_fieirasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estoque_fieirasGroupByOutputType>[]
          }
          count: {
            args: Prisma.estoque_fieirasCountArgs<ExtArgs>
            result: $Utils.Optional<Estoque_fieirasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    armarios?: armariosOmit
    estoque_fieiras?: estoque_fieirasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArmariosCountOutputType
   */

  export type ArmariosCountOutputType = {
    estoque_fieiras: number
  }

  export type ArmariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estoque_fieiras?: boolean | ArmariosCountOutputTypeCountEstoque_fieirasArgs
  }

  // Custom InputTypes
  /**
   * ArmariosCountOutputType without action
   */
  export type ArmariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmariosCountOutputType
     */
    select?: ArmariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArmariosCountOutputType without action
   */
  export type ArmariosCountOutputTypeCountEstoque_fieirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estoque_fieirasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model armarios
   */

  export type AggregateArmarios = {
    _count: ArmariosCountAggregateOutputType | null
    _avg: ArmariosAvgAggregateOutputType | null
    _sum: ArmariosSumAggregateOutputType | null
    _min: ArmariosMinAggregateOutputType | null
    _max: ArmariosMaxAggregateOutputType | null
  }

  export type ArmariosAvgAggregateOutputType = {
    id: number | null
    largura: Decimal | null
    espessura: Decimal | null
  }

  export type ArmariosSumAggregateOutputType = {
    id: number | null
    largura: Decimal | null
    espessura: Decimal | null
  }

  export type ArmariosMinAggregateOutputType = {
    id: number | null
    name: string | null
    largura: Decimal | null
    espessura: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArmariosMaxAggregateOutputType = {
    id: number | null
    name: string | null
    largura: Decimal | null
    espessura: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArmariosCountAggregateOutputType = {
    id: number
    name: number
    largura: number
    espessura: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ArmariosAvgAggregateInputType = {
    id?: true
    largura?: true
    espessura?: true
  }

  export type ArmariosSumAggregateInputType = {
    id?: true
    largura?: true
    espessura?: true
  }

  export type ArmariosMinAggregateInputType = {
    id?: true
    name?: true
    largura?: true
    espessura?: true
    created_at?: true
    updated_at?: true
  }

  export type ArmariosMaxAggregateInputType = {
    id?: true
    name?: true
    largura?: true
    espessura?: true
    created_at?: true
    updated_at?: true
  }

  export type ArmariosCountAggregateInputType = {
    id?: true
    name?: true
    largura?: true
    espessura?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ArmariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which armarios to aggregate.
     */
    where?: armariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of armarios to fetch.
     */
    orderBy?: armariosOrderByWithRelationInput | armariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: armariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` armarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` armarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned armarios
    **/
    _count?: true | ArmariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArmariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArmariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArmariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArmariosMaxAggregateInputType
  }

  export type GetArmariosAggregateType<T extends ArmariosAggregateArgs> = {
        [P in keyof T & keyof AggregateArmarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArmarios[P]>
      : GetScalarType<T[P], AggregateArmarios[P]>
  }




  export type armariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: armariosWhereInput
    orderBy?: armariosOrderByWithAggregationInput | armariosOrderByWithAggregationInput[]
    by: ArmariosScalarFieldEnum[] | ArmariosScalarFieldEnum
    having?: armariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArmariosCountAggregateInputType | true
    _avg?: ArmariosAvgAggregateInputType
    _sum?: ArmariosSumAggregateInputType
    _min?: ArmariosMinAggregateInputType
    _max?: ArmariosMaxAggregateInputType
  }

  export type ArmariosGroupByOutputType = {
    id: number
    name: string
    largura: Decimal | null
    espessura: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    _count: ArmariosCountAggregateOutputType | null
    _avg: ArmariosAvgAggregateOutputType | null
    _sum: ArmariosSumAggregateOutputType | null
    _min: ArmariosMinAggregateOutputType | null
    _max: ArmariosMaxAggregateOutputType | null
  }

  type GetArmariosGroupByPayload<T extends armariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArmariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArmariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArmariosGroupByOutputType[P]>
            : GetScalarType<T[P], ArmariosGroupByOutputType[P]>
        }
      >
    >


  export type armariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    largura?: boolean
    espessura?: boolean
    created_at?: boolean
    updated_at?: boolean
    estoque_fieiras?: boolean | armarios$estoque_fieirasArgs<ExtArgs>
    _count?: boolean | ArmariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["armarios"]>

  export type armariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    largura?: boolean
    espessura?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["armarios"]>

  export type armariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    largura?: boolean
    espessura?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["armarios"]>

  export type armariosSelectScalar = {
    id?: boolean
    name?: boolean
    largura?: boolean
    espessura?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type armariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "largura" | "espessura" | "created_at" | "updated_at", ExtArgs["result"]["armarios"]>
  export type armariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estoque_fieiras?: boolean | armarios$estoque_fieirasArgs<ExtArgs>
    _count?: boolean | ArmariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type armariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type armariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $armariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "armarios"
    objects: {
      estoque_fieiras: Prisma.$estoque_fieirasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      largura: Prisma.Decimal | null
      espessura: Prisma.Decimal | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["armarios"]>
    composites: {}
  }

  type armariosGetPayload<S extends boolean | null | undefined | armariosDefaultArgs> = $Result.GetResult<Prisma.$armariosPayload, S>

  type armariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<armariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArmariosCountAggregateInputType | true
    }

  export interface armariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['armarios'], meta: { name: 'armarios' } }
    /**
     * Find zero or one Armarios that matches the filter.
     * @param {armariosFindUniqueArgs} args - Arguments to find a Armarios
     * @example
     * // Get one Armarios
     * const armarios = await prisma.armarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends armariosFindUniqueArgs>(args: SelectSubset<T, armariosFindUniqueArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Armarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {armariosFindUniqueOrThrowArgs} args - Arguments to find a Armarios
     * @example
     * // Get one Armarios
     * const armarios = await prisma.armarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends armariosFindUniqueOrThrowArgs>(args: SelectSubset<T, armariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Armarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {armariosFindFirstArgs} args - Arguments to find a Armarios
     * @example
     * // Get one Armarios
     * const armarios = await prisma.armarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends armariosFindFirstArgs>(args?: SelectSubset<T, armariosFindFirstArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Armarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {armariosFindFirstOrThrowArgs} args - Arguments to find a Armarios
     * @example
     * // Get one Armarios
     * const armarios = await prisma.armarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends armariosFindFirstOrThrowArgs>(args?: SelectSubset<T, armariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Armarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {armariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Armarios
     * const armarios = await prisma.armarios.findMany()
     * 
     * // Get first 10 Armarios
     * const armarios = await prisma.armarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const armariosWithIdOnly = await prisma.armarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends armariosFindManyArgs>(args?: SelectSubset<T, armariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Armarios.
     * @param {armariosCreateArgs} args - Arguments to create a Armarios.
     * @example
     * // Create one Armarios
     * const Armarios = await prisma.armarios.create({
     *   data: {
     *     // ... data to create a Armarios
     *   }
     * })
     * 
     */
    create<T extends armariosCreateArgs>(args: SelectSubset<T, armariosCreateArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Armarios.
     * @param {armariosCreateManyArgs} args - Arguments to create many Armarios.
     * @example
     * // Create many Armarios
     * const armarios = await prisma.armarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends armariosCreateManyArgs>(args?: SelectSubset<T, armariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Armarios and returns the data saved in the database.
     * @param {armariosCreateManyAndReturnArgs} args - Arguments to create many Armarios.
     * @example
     * // Create many Armarios
     * const armarios = await prisma.armarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Armarios and only return the `id`
     * const armariosWithIdOnly = await prisma.armarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends armariosCreateManyAndReturnArgs>(args?: SelectSubset<T, armariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Armarios.
     * @param {armariosDeleteArgs} args - Arguments to delete one Armarios.
     * @example
     * // Delete one Armarios
     * const Armarios = await prisma.armarios.delete({
     *   where: {
     *     // ... filter to delete one Armarios
     *   }
     * })
     * 
     */
    delete<T extends armariosDeleteArgs>(args: SelectSubset<T, armariosDeleteArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Armarios.
     * @param {armariosUpdateArgs} args - Arguments to update one Armarios.
     * @example
     * // Update one Armarios
     * const armarios = await prisma.armarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends armariosUpdateArgs>(args: SelectSubset<T, armariosUpdateArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Armarios.
     * @param {armariosDeleteManyArgs} args - Arguments to filter Armarios to delete.
     * @example
     * // Delete a few Armarios
     * const { count } = await prisma.armarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends armariosDeleteManyArgs>(args?: SelectSubset<T, armariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Armarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {armariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Armarios
     * const armarios = await prisma.armarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends armariosUpdateManyArgs>(args: SelectSubset<T, armariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Armarios and returns the data updated in the database.
     * @param {armariosUpdateManyAndReturnArgs} args - Arguments to update many Armarios.
     * @example
     * // Update many Armarios
     * const armarios = await prisma.armarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Armarios and only return the `id`
     * const armariosWithIdOnly = await prisma.armarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends armariosUpdateManyAndReturnArgs>(args: SelectSubset<T, armariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Armarios.
     * @param {armariosUpsertArgs} args - Arguments to update or create a Armarios.
     * @example
     * // Update or create a Armarios
     * const armarios = await prisma.armarios.upsert({
     *   create: {
     *     // ... data to create a Armarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Armarios we want to update
     *   }
     * })
     */
    upsert<T extends armariosUpsertArgs>(args: SelectSubset<T, armariosUpsertArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Armarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {armariosCountArgs} args - Arguments to filter Armarios to count.
     * @example
     * // Count the number of Armarios
     * const count = await prisma.armarios.count({
     *   where: {
     *     // ... the filter for the Armarios we want to count
     *   }
     * })
    **/
    count<T extends armariosCountArgs>(
      args?: Subset<T, armariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArmariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Armarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArmariosAggregateArgs>(args: Subset<T, ArmariosAggregateArgs>): Prisma.PrismaPromise<GetArmariosAggregateType<T>>

    /**
     * Group by Armarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {armariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends armariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: armariosGroupByArgs['orderBy'] }
        : { orderBy?: armariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, armariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArmariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the armarios model
   */
  readonly fields: armariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for armarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__armariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estoque_fieiras<T extends armarios$estoque_fieirasArgs<ExtArgs> = {}>(args?: Subset<T, armarios$estoque_fieirasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the armarios model
   */
  interface armariosFieldRefs {
    readonly id: FieldRef<"armarios", 'Int'>
    readonly name: FieldRef<"armarios", 'String'>
    readonly largura: FieldRef<"armarios", 'Decimal'>
    readonly espessura: FieldRef<"armarios", 'Decimal'>
    readonly created_at: FieldRef<"armarios", 'DateTime'>
    readonly updated_at: FieldRef<"armarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * armarios findUnique
   */
  export type armariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * Filter, which armarios to fetch.
     */
    where: armariosWhereUniqueInput
  }

  /**
   * armarios findUniqueOrThrow
   */
  export type armariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * Filter, which armarios to fetch.
     */
    where: armariosWhereUniqueInput
  }

  /**
   * armarios findFirst
   */
  export type armariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * Filter, which armarios to fetch.
     */
    where?: armariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of armarios to fetch.
     */
    orderBy?: armariosOrderByWithRelationInput | armariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for armarios.
     */
    cursor?: armariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` armarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` armarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of armarios.
     */
    distinct?: ArmariosScalarFieldEnum | ArmariosScalarFieldEnum[]
  }

  /**
   * armarios findFirstOrThrow
   */
  export type armariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * Filter, which armarios to fetch.
     */
    where?: armariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of armarios to fetch.
     */
    orderBy?: armariosOrderByWithRelationInput | armariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for armarios.
     */
    cursor?: armariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` armarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` armarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of armarios.
     */
    distinct?: ArmariosScalarFieldEnum | ArmariosScalarFieldEnum[]
  }

  /**
   * armarios findMany
   */
  export type armariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * Filter, which armarios to fetch.
     */
    where?: armariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of armarios to fetch.
     */
    orderBy?: armariosOrderByWithRelationInput | armariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing armarios.
     */
    cursor?: armariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` armarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` armarios.
     */
    skip?: number
    distinct?: ArmariosScalarFieldEnum | ArmariosScalarFieldEnum[]
  }

  /**
   * armarios create
   */
  export type armariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * The data needed to create a armarios.
     */
    data: XOR<armariosCreateInput, armariosUncheckedCreateInput>
  }

  /**
   * armarios createMany
   */
  export type armariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many armarios.
     */
    data: armariosCreateManyInput | armariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * armarios createManyAndReturn
   */
  export type armariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * The data used to create many armarios.
     */
    data: armariosCreateManyInput | armariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * armarios update
   */
  export type armariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * The data needed to update a armarios.
     */
    data: XOR<armariosUpdateInput, armariosUncheckedUpdateInput>
    /**
     * Choose, which armarios to update.
     */
    where: armariosWhereUniqueInput
  }

  /**
   * armarios updateMany
   */
  export type armariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update armarios.
     */
    data: XOR<armariosUpdateManyMutationInput, armariosUncheckedUpdateManyInput>
    /**
     * Filter which armarios to update
     */
    where?: armariosWhereInput
    /**
     * Limit how many armarios to update.
     */
    limit?: number
  }

  /**
   * armarios updateManyAndReturn
   */
  export type armariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * The data used to update armarios.
     */
    data: XOR<armariosUpdateManyMutationInput, armariosUncheckedUpdateManyInput>
    /**
     * Filter which armarios to update
     */
    where?: armariosWhereInput
    /**
     * Limit how many armarios to update.
     */
    limit?: number
  }

  /**
   * armarios upsert
   */
  export type armariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * The filter to search for the armarios to update in case it exists.
     */
    where: armariosWhereUniqueInput
    /**
     * In case the armarios found by the `where` argument doesn't exist, create a new armarios with this data.
     */
    create: XOR<armariosCreateInput, armariosUncheckedCreateInput>
    /**
     * In case the armarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<armariosUpdateInput, armariosUncheckedUpdateInput>
  }

  /**
   * armarios delete
   */
  export type armariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    /**
     * Filter which armarios to delete.
     */
    where: armariosWhereUniqueInput
  }

  /**
   * armarios deleteMany
   */
  export type armariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which armarios to delete
     */
    where?: armariosWhereInput
    /**
     * Limit how many armarios to delete.
     */
    limit?: number
  }

  /**
   * armarios.estoque_fieiras
   */
  export type armarios$estoque_fieirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    where?: estoque_fieirasWhereInput
    orderBy?: estoque_fieirasOrderByWithRelationInput | estoque_fieirasOrderByWithRelationInput[]
    cursor?: estoque_fieirasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Estoque_fieirasScalarFieldEnum | Estoque_fieirasScalarFieldEnum[]
  }

  /**
   * armarios without action
   */
  export type armariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
  }


  /**
   * Model estoque_fieiras
   */

  export type AggregateEstoque_fieiras = {
    _count: Estoque_fieirasCountAggregateOutputType | null
    _avg: Estoque_fieirasAvgAggregateOutputType | null
    _sum: Estoque_fieirasSumAggregateOutputType | null
    _min: Estoque_fieirasMinAggregateOutputType | null
    _max: Estoque_fieirasMaxAggregateOutputType | null
  }

  export type Estoque_fieirasAvgAggregateOutputType = {
    id: number | null
    id_armario: number | null
  }

  export type Estoque_fieirasSumAggregateOutputType = {
    id: number | null
    id_armario: number | null
  }

  export type Estoque_fieirasMinAggregateOutputType = {
    id: number | null
    id_armario: number | null
    codigo: string | null
    data_modificacao: string | null
    status: $Enums.status_fieira | null
    espessura_atual: string | null
    largura_atual: string | null
    utilizacao: string | null
    producao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Estoque_fieirasMaxAggregateOutputType = {
    id: number | null
    id_armario: number | null
    codigo: string | null
    data_modificacao: string | null
    status: $Enums.status_fieira | null
    espessura_atual: string | null
    largura_atual: string | null
    utilizacao: string | null
    producao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Estoque_fieirasCountAggregateOutputType = {
    id: number
    id_armario: number
    codigo: number
    data_modificacao: number
    status: number
    espessura_atual: number
    largura_atual: number
    utilizacao: number
    producao: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Estoque_fieirasAvgAggregateInputType = {
    id?: true
    id_armario?: true
  }

  export type Estoque_fieirasSumAggregateInputType = {
    id?: true
    id_armario?: true
  }

  export type Estoque_fieirasMinAggregateInputType = {
    id?: true
    id_armario?: true
    codigo?: true
    data_modificacao?: true
    status?: true
    espessura_atual?: true
    largura_atual?: true
    utilizacao?: true
    producao?: true
    created_at?: true
    updated_at?: true
  }

  export type Estoque_fieirasMaxAggregateInputType = {
    id?: true
    id_armario?: true
    codigo?: true
    data_modificacao?: true
    status?: true
    espessura_atual?: true
    largura_atual?: true
    utilizacao?: true
    producao?: true
    created_at?: true
    updated_at?: true
  }

  export type Estoque_fieirasCountAggregateInputType = {
    id?: true
    id_armario?: true
    codigo?: true
    data_modificacao?: true
    status?: true
    espessura_atual?: true
    largura_atual?: true
    utilizacao?: true
    producao?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Estoque_fieirasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estoque_fieiras to aggregate.
     */
    where?: estoque_fieirasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estoque_fieiras to fetch.
     */
    orderBy?: estoque_fieirasOrderByWithRelationInput | estoque_fieirasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estoque_fieirasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estoque_fieiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estoque_fieiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estoque_fieiras
    **/
    _count?: true | Estoque_fieirasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estoque_fieirasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estoque_fieirasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estoque_fieirasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estoque_fieirasMaxAggregateInputType
  }

  export type GetEstoque_fieirasAggregateType<T extends Estoque_fieirasAggregateArgs> = {
        [P in keyof T & keyof AggregateEstoque_fieiras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstoque_fieiras[P]>
      : GetScalarType<T[P], AggregateEstoque_fieiras[P]>
  }




  export type estoque_fieirasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estoque_fieirasWhereInput
    orderBy?: estoque_fieirasOrderByWithAggregationInput | estoque_fieirasOrderByWithAggregationInput[]
    by: Estoque_fieirasScalarFieldEnum[] | Estoque_fieirasScalarFieldEnum
    having?: estoque_fieirasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estoque_fieirasCountAggregateInputType | true
    _avg?: Estoque_fieirasAvgAggregateInputType
    _sum?: Estoque_fieirasSumAggregateInputType
    _min?: Estoque_fieirasMinAggregateInputType
    _max?: Estoque_fieirasMaxAggregateInputType
  }

  export type Estoque_fieirasGroupByOutputType = {
    id: number
    id_armario: number | null
    codigo: string | null
    data_modificacao: string | null
    status: $Enums.status_fieira | null
    espessura_atual: string | null
    largura_atual: string | null
    utilizacao: string | null
    producao: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Estoque_fieirasCountAggregateOutputType | null
    _avg: Estoque_fieirasAvgAggregateOutputType | null
    _sum: Estoque_fieirasSumAggregateOutputType | null
    _min: Estoque_fieirasMinAggregateOutputType | null
    _max: Estoque_fieirasMaxAggregateOutputType | null
  }

  type GetEstoque_fieirasGroupByPayload<T extends estoque_fieirasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estoque_fieirasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estoque_fieirasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estoque_fieirasGroupByOutputType[P]>
            : GetScalarType<T[P], Estoque_fieirasGroupByOutputType[P]>
        }
      >
    >


  export type estoque_fieirasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_armario?: boolean
    codigo?: boolean
    data_modificacao?: boolean
    status?: boolean
    espessura_atual?: boolean
    largura_atual?: boolean
    utilizacao?: boolean
    producao?: boolean
    created_at?: boolean
    updated_at?: boolean
    armarios?: boolean | estoque_fieiras$armariosArgs<ExtArgs>
  }, ExtArgs["result"]["estoque_fieiras"]>

  export type estoque_fieirasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_armario?: boolean
    codigo?: boolean
    data_modificacao?: boolean
    status?: boolean
    espessura_atual?: boolean
    largura_atual?: boolean
    utilizacao?: boolean
    producao?: boolean
    created_at?: boolean
    updated_at?: boolean
    armarios?: boolean | estoque_fieiras$armariosArgs<ExtArgs>
  }, ExtArgs["result"]["estoque_fieiras"]>

  export type estoque_fieirasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_armario?: boolean
    codigo?: boolean
    data_modificacao?: boolean
    status?: boolean
    espessura_atual?: boolean
    largura_atual?: boolean
    utilizacao?: boolean
    producao?: boolean
    created_at?: boolean
    updated_at?: boolean
    armarios?: boolean | estoque_fieiras$armariosArgs<ExtArgs>
  }, ExtArgs["result"]["estoque_fieiras"]>

  export type estoque_fieirasSelectScalar = {
    id?: boolean
    id_armario?: boolean
    codigo?: boolean
    data_modificacao?: boolean
    status?: boolean
    espessura_atual?: boolean
    largura_atual?: boolean
    utilizacao?: boolean
    producao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type estoque_fieirasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_armario" | "codigo" | "data_modificacao" | "status" | "espessura_atual" | "largura_atual" | "utilizacao" | "producao" | "created_at" | "updated_at", ExtArgs["result"]["estoque_fieiras"]>
  export type estoque_fieirasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    armarios?: boolean | estoque_fieiras$armariosArgs<ExtArgs>
  }
  export type estoque_fieirasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    armarios?: boolean | estoque_fieiras$armariosArgs<ExtArgs>
  }
  export type estoque_fieirasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    armarios?: boolean | estoque_fieiras$armariosArgs<ExtArgs>
  }

  export type $estoque_fieirasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estoque_fieiras"
    objects: {
      armarios: Prisma.$armariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_armario: number | null
      codigo: string | null
      data_modificacao: string | null
      status: $Enums.status_fieira | null
      espessura_atual: string | null
      largura_atual: string | null
      utilizacao: string | null
      producao: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["estoque_fieiras"]>
    composites: {}
  }

  type estoque_fieirasGetPayload<S extends boolean | null | undefined | estoque_fieirasDefaultArgs> = $Result.GetResult<Prisma.$estoque_fieirasPayload, S>

  type estoque_fieirasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estoque_fieirasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Estoque_fieirasCountAggregateInputType | true
    }

  export interface estoque_fieirasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estoque_fieiras'], meta: { name: 'estoque_fieiras' } }
    /**
     * Find zero or one Estoque_fieiras that matches the filter.
     * @param {estoque_fieirasFindUniqueArgs} args - Arguments to find a Estoque_fieiras
     * @example
     * // Get one Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estoque_fieirasFindUniqueArgs>(args: SelectSubset<T, estoque_fieirasFindUniqueArgs<ExtArgs>>): Prisma__estoque_fieirasClient<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estoque_fieiras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estoque_fieirasFindUniqueOrThrowArgs} args - Arguments to find a Estoque_fieiras
     * @example
     * // Get one Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estoque_fieirasFindUniqueOrThrowArgs>(args: SelectSubset<T, estoque_fieirasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estoque_fieirasClient<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoque_fieiras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoque_fieirasFindFirstArgs} args - Arguments to find a Estoque_fieiras
     * @example
     * // Get one Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estoque_fieirasFindFirstArgs>(args?: SelectSubset<T, estoque_fieirasFindFirstArgs<ExtArgs>>): Prisma__estoque_fieirasClient<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoque_fieiras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoque_fieirasFindFirstOrThrowArgs} args - Arguments to find a Estoque_fieiras
     * @example
     * // Get one Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estoque_fieirasFindFirstOrThrowArgs>(args?: SelectSubset<T, estoque_fieirasFindFirstOrThrowArgs<ExtArgs>>): Prisma__estoque_fieirasClient<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estoque_fieiras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoque_fieirasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.findMany()
     * 
     * // Get first 10 Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estoque_fieirasWithIdOnly = await prisma.estoque_fieiras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends estoque_fieirasFindManyArgs>(args?: SelectSubset<T, estoque_fieirasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estoque_fieiras.
     * @param {estoque_fieirasCreateArgs} args - Arguments to create a Estoque_fieiras.
     * @example
     * // Create one Estoque_fieiras
     * const Estoque_fieiras = await prisma.estoque_fieiras.create({
     *   data: {
     *     // ... data to create a Estoque_fieiras
     *   }
     * })
     * 
     */
    create<T extends estoque_fieirasCreateArgs>(args: SelectSubset<T, estoque_fieirasCreateArgs<ExtArgs>>): Prisma__estoque_fieirasClient<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estoque_fieiras.
     * @param {estoque_fieirasCreateManyArgs} args - Arguments to create many Estoque_fieiras.
     * @example
     * // Create many Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estoque_fieirasCreateManyArgs>(args?: SelectSubset<T, estoque_fieirasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estoque_fieiras and returns the data saved in the database.
     * @param {estoque_fieirasCreateManyAndReturnArgs} args - Arguments to create many Estoque_fieiras.
     * @example
     * // Create many Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estoque_fieiras and only return the `id`
     * const estoque_fieirasWithIdOnly = await prisma.estoque_fieiras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estoque_fieirasCreateManyAndReturnArgs>(args?: SelectSubset<T, estoque_fieirasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estoque_fieiras.
     * @param {estoque_fieirasDeleteArgs} args - Arguments to delete one Estoque_fieiras.
     * @example
     * // Delete one Estoque_fieiras
     * const Estoque_fieiras = await prisma.estoque_fieiras.delete({
     *   where: {
     *     // ... filter to delete one Estoque_fieiras
     *   }
     * })
     * 
     */
    delete<T extends estoque_fieirasDeleteArgs>(args: SelectSubset<T, estoque_fieirasDeleteArgs<ExtArgs>>): Prisma__estoque_fieirasClient<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estoque_fieiras.
     * @param {estoque_fieirasUpdateArgs} args - Arguments to update one Estoque_fieiras.
     * @example
     * // Update one Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estoque_fieirasUpdateArgs>(args: SelectSubset<T, estoque_fieirasUpdateArgs<ExtArgs>>): Prisma__estoque_fieirasClient<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estoque_fieiras.
     * @param {estoque_fieirasDeleteManyArgs} args - Arguments to filter Estoque_fieiras to delete.
     * @example
     * // Delete a few Estoque_fieiras
     * const { count } = await prisma.estoque_fieiras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estoque_fieirasDeleteManyArgs>(args?: SelectSubset<T, estoque_fieirasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estoque_fieiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoque_fieirasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estoque_fieirasUpdateManyArgs>(args: SelectSubset<T, estoque_fieirasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estoque_fieiras and returns the data updated in the database.
     * @param {estoque_fieirasUpdateManyAndReturnArgs} args - Arguments to update many Estoque_fieiras.
     * @example
     * // Update many Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estoque_fieiras and only return the `id`
     * const estoque_fieirasWithIdOnly = await prisma.estoque_fieiras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends estoque_fieirasUpdateManyAndReturnArgs>(args: SelectSubset<T, estoque_fieirasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estoque_fieiras.
     * @param {estoque_fieirasUpsertArgs} args - Arguments to update or create a Estoque_fieiras.
     * @example
     * // Update or create a Estoque_fieiras
     * const estoque_fieiras = await prisma.estoque_fieiras.upsert({
     *   create: {
     *     // ... data to create a Estoque_fieiras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estoque_fieiras we want to update
     *   }
     * })
     */
    upsert<T extends estoque_fieirasUpsertArgs>(args: SelectSubset<T, estoque_fieirasUpsertArgs<ExtArgs>>): Prisma__estoque_fieirasClient<$Result.GetResult<Prisma.$estoque_fieirasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estoque_fieiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoque_fieirasCountArgs} args - Arguments to filter Estoque_fieiras to count.
     * @example
     * // Count the number of Estoque_fieiras
     * const count = await prisma.estoque_fieiras.count({
     *   where: {
     *     // ... the filter for the Estoque_fieiras we want to count
     *   }
     * })
    **/
    count<T extends estoque_fieirasCountArgs>(
      args?: Subset<T, estoque_fieirasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estoque_fieirasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estoque_fieiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estoque_fieirasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Estoque_fieirasAggregateArgs>(args: Subset<T, Estoque_fieirasAggregateArgs>): Prisma.PrismaPromise<GetEstoque_fieirasAggregateType<T>>

    /**
     * Group by Estoque_fieiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoque_fieirasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends estoque_fieirasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estoque_fieirasGroupByArgs['orderBy'] }
        : { orderBy?: estoque_fieirasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, estoque_fieirasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstoque_fieirasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estoque_fieiras model
   */
  readonly fields: estoque_fieirasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estoque_fieiras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estoque_fieirasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    armarios<T extends estoque_fieiras$armariosArgs<ExtArgs> = {}>(args?: Subset<T, estoque_fieiras$armariosArgs<ExtArgs>>): Prisma__armariosClient<$Result.GetResult<Prisma.$armariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estoque_fieiras model
   */
  interface estoque_fieirasFieldRefs {
    readonly id: FieldRef<"estoque_fieiras", 'Int'>
    readonly id_armario: FieldRef<"estoque_fieiras", 'Int'>
    readonly codigo: FieldRef<"estoque_fieiras", 'String'>
    readonly data_modificacao: FieldRef<"estoque_fieiras", 'String'>
    readonly status: FieldRef<"estoque_fieiras", 'status_fieira'>
    readonly espessura_atual: FieldRef<"estoque_fieiras", 'String'>
    readonly largura_atual: FieldRef<"estoque_fieiras", 'String'>
    readonly utilizacao: FieldRef<"estoque_fieiras", 'String'>
    readonly producao: FieldRef<"estoque_fieiras", 'String'>
    readonly created_at: FieldRef<"estoque_fieiras", 'DateTime'>
    readonly updated_at: FieldRef<"estoque_fieiras", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * estoque_fieiras findUnique
   */
  export type estoque_fieirasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * Filter, which estoque_fieiras to fetch.
     */
    where: estoque_fieirasWhereUniqueInput
  }

  /**
   * estoque_fieiras findUniqueOrThrow
   */
  export type estoque_fieirasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * Filter, which estoque_fieiras to fetch.
     */
    where: estoque_fieirasWhereUniqueInput
  }

  /**
   * estoque_fieiras findFirst
   */
  export type estoque_fieirasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * Filter, which estoque_fieiras to fetch.
     */
    where?: estoque_fieirasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estoque_fieiras to fetch.
     */
    orderBy?: estoque_fieirasOrderByWithRelationInput | estoque_fieirasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estoque_fieiras.
     */
    cursor?: estoque_fieirasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estoque_fieiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estoque_fieiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estoque_fieiras.
     */
    distinct?: Estoque_fieirasScalarFieldEnum | Estoque_fieirasScalarFieldEnum[]
  }

  /**
   * estoque_fieiras findFirstOrThrow
   */
  export type estoque_fieirasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * Filter, which estoque_fieiras to fetch.
     */
    where?: estoque_fieirasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estoque_fieiras to fetch.
     */
    orderBy?: estoque_fieirasOrderByWithRelationInput | estoque_fieirasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estoque_fieiras.
     */
    cursor?: estoque_fieirasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estoque_fieiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estoque_fieiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estoque_fieiras.
     */
    distinct?: Estoque_fieirasScalarFieldEnum | Estoque_fieirasScalarFieldEnum[]
  }

  /**
   * estoque_fieiras findMany
   */
  export type estoque_fieirasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * Filter, which estoque_fieiras to fetch.
     */
    where?: estoque_fieirasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estoque_fieiras to fetch.
     */
    orderBy?: estoque_fieirasOrderByWithRelationInput | estoque_fieirasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estoque_fieiras.
     */
    cursor?: estoque_fieirasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estoque_fieiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estoque_fieiras.
     */
    skip?: number
    distinct?: Estoque_fieirasScalarFieldEnum | Estoque_fieirasScalarFieldEnum[]
  }

  /**
   * estoque_fieiras create
   */
  export type estoque_fieirasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * The data needed to create a estoque_fieiras.
     */
    data: XOR<estoque_fieirasCreateInput, estoque_fieirasUncheckedCreateInput>
  }

  /**
   * estoque_fieiras createMany
   */
  export type estoque_fieirasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estoque_fieiras.
     */
    data: estoque_fieirasCreateManyInput | estoque_fieirasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estoque_fieiras createManyAndReturn
   */
  export type estoque_fieirasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * The data used to create many estoque_fieiras.
     */
    data: estoque_fieirasCreateManyInput | estoque_fieirasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * estoque_fieiras update
   */
  export type estoque_fieirasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * The data needed to update a estoque_fieiras.
     */
    data: XOR<estoque_fieirasUpdateInput, estoque_fieirasUncheckedUpdateInput>
    /**
     * Choose, which estoque_fieiras to update.
     */
    where: estoque_fieirasWhereUniqueInput
  }

  /**
   * estoque_fieiras updateMany
   */
  export type estoque_fieirasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estoque_fieiras.
     */
    data: XOR<estoque_fieirasUpdateManyMutationInput, estoque_fieirasUncheckedUpdateManyInput>
    /**
     * Filter which estoque_fieiras to update
     */
    where?: estoque_fieirasWhereInput
    /**
     * Limit how many estoque_fieiras to update.
     */
    limit?: number
  }

  /**
   * estoque_fieiras updateManyAndReturn
   */
  export type estoque_fieirasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * The data used to update estoque_fieiras.
     */
    data: XOR<estoque_fieirasUpdateManyMutationInput, estoque_fieirasUncheckedUpdateManyInput>
    /**
     * Filter which estoque_fieiras to update
     */
    where?: estoque_fieirasWhereInput
    /**
     * Limit how many estoque_fieiras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * estoque_fieiras upsert
   */
  export type estoque_fieirasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * The filter to search for the estoque_fieiras to update in case it exists.
     */
    where: estoque_fieirasWhereUniqueInput
    /**
     * In case the estoque_fieiras found by the `where` argument doesn't exist, create a new estoque_fieiras with this data.
     */
    create: XOR<estoque_fieirasCreateInput, estoque_fieirasUncheckedCreateInput>
    /**
     * In case the estoque_fieiras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estoque_fieirasUpdateInput, estoque_fieirasUncheckedUpdateInput>
  }

  /**
   * estoque_fieiras delete
   */
  export type estoque_fieirasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
    /**
     * Filter which estoque_fieiras to delete.
     */
    where: estoque_fieirasWhereUniqueInput
  }

  /**
   * estoque_fieiras deleteMany
   */
  export type estoque_fieirasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estoque_fieiras to delete
     */
    where?: estoque_fieirasWhereInput
    /**
     * Limit how many estoque_fieiras to delete.
     */
    limit?: number
  }

  /**
   * estoque_fieiras.armarios
   */
  export type estoque_fieiras$armariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the armarios
     */
    select?: armariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the armarios
     */
    omit?: armariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: armariosInclude<ExtArgs> | null
    where?: armariosWhereInput
  }

  /**
   * estoque_fieiras without action
   */
  export type estoque_fieirasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque_fieiras
     */
    select?: estoque_fieirasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque_fieiras
     */
    omit?: estoque_fieirasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoque_fieirasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArmariosScalarFieldEnum: {
    id: 'id',
    name: 'name',
    largura: 'largura',
    espessura: 'espessura',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ArmariosScalarFieldEnum = (typeof ArmariosScalarFieldEnum)[keyof typeof ArmariosScalarFieldEnum]


  export const Estoque_fieirasScalarFieldEnum: {
    id: 'id',
    id_armario: 'id_armario',
    codigo: 'codigo',
    data_modificacao: 'data_modificacao',
    status: 'status',
    espessura_atual: 'espessura_atual',
    largura_atual: 'largura_atual',
    utilizacao: 'utilizacao',
    producao: 'producao',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Estoque_fieirasScalarFieldEnum = (typeof Estoque_fieirasScalarFieldEnum)[keyof typeof Estoque_fieirasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'status_fieira'
   */
  export type Enumstatus_fieiraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_fieira'>
    


  /**
   * Reference to a field of type 'status_fieira[]'
   */
  export type ListEnumstatus_fieiraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_fieira[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type armariosWhereInput = {
    AND?: armariosWhereInput | armariosWhereInput[]
    OR?: armariosWhereInput[]
    NOT?: armariosWhereInput | armariosWhereInput[]
    id?: IntFilter<"armarios"> | number
    name?: StringFilter<"armarios"> | string
    largura?: DecimalNullableFilter<"armarios"> | Decimal | DecimalJsLike | number | string | null
    espessura?: DecimalNullableFilter<"armarios"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"armarios"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"armarios"> | Date | string | null
    estoque_fieiras?: Estoque_fieirasListRelationFilter
  }

  export type armariosOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    largura?: SortOrderInput | SortOrder
    espessura?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    estoque_fieiras?: estoque_fieirasOrderByRelationAggregateInput
  }

  export type armariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: armariosWhereInput | armariosWhereInput[]
    OR?: armariosWhereInput[]
    NOT?: armariosWhereInput | armariosWhereInput[]
    name?: StringFilter<"armarios"> | string
    largura?: DecimalNullableFilter<"armarios"> | Decimal | DecimalJsLike | number | string | null
    espessura?: DecimalNullableFilter<"armarios"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"armarios"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"armarios"> | Date | string | null
    estoque_fieiras?: Estoque_fieirasListRelationFilter
  }, "id">

  export type armariosOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    largura?: SortOrderInput | SortOrder
    espessura?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: armariosCountOrderByAggregateInput
    _avg?: armariosAvgOrderByAggregateInput
    _max?: armariosMaxOrderByAggregateInput
    _min?: armariosMinOrderByAggregateInput
    _sum?: armariosSumOrderByAggregateInput
  }

  export type armariosScalarWhereWithAggregatesInput = {
    AND?: armariosScalarWhereWithAggregatesInput | armariosScalarWhereWithAggregatesInput[]
    OR?: armariosScalarWhereWithAggregatesInput[]
    NOT?: armariosScalarWhereWithAggregatesInput | armariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"armarios"> | number
    name?: StringWithAggregatesFilter<"armarios"> | string
    largura?: DecimalNullableWithAggregatesFilter<"armarios"> | Decimal | DecimalJsLike | number | string | null
    espessura?: DecimalNullableWithAggregatesFilter<"armarios"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"armarios"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"armarios"> | Date | string | null
  }

  export type estoque_fieirasWhereInput = {
    AND?: estoque_fieirasWhereInput | estoque_fieirasWhereInput[]
    OR?: estoque_fieirasWhereInput[]
    NOT?: estoque_fieirasWhereInput | estoque_fieirasWhereInput[]
    id?: IntFilter<"estoque_fieiras"> | number
    id_armario?: IntNullableFilter<"estoque_fieiras"> | number | null
    codigo?: StringNullableFilter<"estoque_fieiras"> | string | null
    data_modificacao?: StringNullableFilter<"estoque_fieiras"> | string | null
    status?: Enumstatus_fieiraNullableFilter<"estoque_fieiras"> | $Enums.status_fieira | null
    espessura_atual?: StringNullableFilter<"estoque_fieiras"> | string | null
    largura_atual?: StringNullableFilter<"estoque_fieiras"> | string | null
    utilizacao?: StringNullableFilter<"estoque_fieiras"> | string | null
    producao?: StringNullableFilter<"estoque_fieiras"> | string | null
    created_at?: DateTimeNullableFilter<"estoque_fieiras"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"estoque_fieiras"> | Date | string | null
    armarios?: XOR<ArmariosNullableScalarRelationFilter, armariosWhereInput> | null
  }

  export type estoque_fieirasOrderByWithRelationInput = {
    id?: SortOrder
    id_armario?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    data_modificacao?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    espessura_atual?: SortOrderInput | SortOrder
    largura_atual?: SortOrderInput | SortOrder
    utilizacao?: SortOrderInput | SortOrder
    producao?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    armarios?: armariosOrderByWithRelationInput
  }

  export type estoque_fieirasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: estoque_fieirasWhereInput | estoque_fieirasWhereInput[]
    OR?: estoque_fieirasWhereInput[]
    NOT?: estoque_fieirasWhereInput | estoque_fieirasWhereInput[]
    id_armario?: IntNullableFilter<"estoque_fieiras"> | number | null
    codigo?: StringNullableFilter<"estoque_fieiras"> | string | null
    data_modificacao?: StringNullableFilter<"estoque_fieiras"> | string | null
    status?: Enumstatus_fieiraNullableFilter<"estoque_fieiras"> | $Enums.status_fieira | null
    espessura_atual?: StringNullableFilter<"estoque_fieiras"> | string | null
    largura_atual?: StringNullableFilter<"estoque_fieiras"> | string | null
    utilizacao?: StringNullableFilter<"estoque_fieiras"> | string | null
    producao?: StringNullableFilter<"estoque_fieiras"> | string | null
    created_at?: DateTimeNullableFilter<"estoque_fieiras"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"estoque_fieiras"> | Date | string | null
    armarios?: XOR<ArmariosNullableScalarRelationFilter, armariosWhereInput> | null
  }, "id">

  export type estoque_fieirasOrderByWithAggregationInput = {
    id?: SortOrder
    id_armario?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    data_modificacao?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    espessura_atual?: SortOrderInput | SortOrder
    largura_atual?: SortOrderInput | SortOrder
    utilizacao?: SortOrderInput | SortOrder
    producao?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: estoque_fieirasCountOrderByAggregateInput
    _avg?: estoque_fieirasAvgOrderByAggregateInput
    _max?: estoque_fieirasMaxOrderByAggregateInput
    _min?: estoque_fieirasMinOrderByAggregateInput
    _sum?: estoque_fieirasSumOrderByAggregateInput
  }

  export type estoque_fieirasScalarWhereWithAggregatesInput = {
    AND?: estoque_fieirasScalarWhereWithAggregatesInput | estoque_fieirasScalarWhereWithAggregatesInput[]
    OR?: estoque_fieirasScalarWhereWithAggregatesInput[]
    NOT?: estoque_fieirasScalarWhereWithAggregatesInput | estoque_fieirasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"estoque_fieiras"> | number
    id_armario?: IntNullableWithAggregatesFilter<"estoque_fieiras"> | number | null
    codigo?: StringNullableWithAggregatesFilter<"estoque_fieiras"> | string | null
    data_modificacao?: StringNullableWithAggregatesFilter<"estoque_fieiras"> | string | null
    status?: Enumstatus_fieiraNullableWithAggregatesFilter<"estoque_fieiras"> | $Enums.status_fieira | null
    espessura_atual?: StringNullableWithAggregatesFilter<"estoque_fieiras"> | string | null
    largura_atual?: StringNullableWithAggregatesFilter<"estoque_fieiras"> | string | null
    utilizacao?: StringNullableWithAggregatesFilter<"estoque_fieiras"> | string | null
    producao?: StringNullableWithAggregatesFilter<"estoque_fieiras"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"estoque_fieiras"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"estoque_fieiras"> | Date | string | null
  }

  export type armariosCreateInput = {
    name: string
    largura?: Decimal | DecimalJsLike | number | string | null
    espessura?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    estoque_fieiras?: estoque_fieirasCreateNestedManyWithoutArmariosInput
  }

  export type armariosUncheckedCreateInput = {
    id?: number
    name: string
    largura?: Decimal | DecimalJsLike | number | string | null
    espessura?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    estoque_fieiras?: estoque_fieirasUncheckedCreateNestedManyWithoutArmariosInput
  }

  export type armariosUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    espessura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estoque_fieiras?: estoque_fieirasUpdateManyWithoutArmariosNestedInput
  }

  export type armariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    espessura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estoque_fieiras?: estoque_fieirasUncheckedUpdateManyWithoutArmariosNestedInput
  }

  export type armariosCreateManyInput = {
    id?: number
    name: string
    largura?: Decimal | DecimalJsLike | number | string | null
    espessura?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type armariosUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    espessura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type armariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    espessura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estoque_fieirasCreateInput = {
    id: number
    codigo?: string | null
    data_modificacao?: string | null
    status?: $Enums.status_fieira | null
    espessura_atual?: string | null
    largura_atual?: string | null
    utilizacao?: string | null
    producao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    armarios?: armariosCreateNestedOneWithoutEstoque_fieirasInput
  }

  export type estoque_fieirasUncheckedCreateInput = {
    id: number
    id_armario?: number | null
    codigo?: string | null
    data_modificacao?: string | null
    status?: $Enums.status_fieira | null
    espessura_atual?: string | null
    largura_atual?: string | null
    utilizacao?: string | null
    producao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type estoque_fieirasUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    data_modificacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_fieiraFieldUpdateOperationsInput | $Enums.status_fieira | null
    espessura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    largura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    utilizacao?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    armarios?: armariosUpdateOneWithoutEstoque_fieirasNestedInput
  }

  export type estoque_fieirasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_armario?: NullableIntFieldUpdateOperationsInput | number | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    data_modificacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_fieiraFieldUpdateOperationsInput | $Enums.status_fieira | null
    espessura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    largura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    utilizacao?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estoque_fieirasCreateManyInput = {
    id: number
    id_armario?: number | null
    codigo?: string | null
    data_modificacao?: string | null
    status?: $Enums.status_fieira | null
    espessura_atual?: string | null
    largura_atual?: string | null
    utilizacao?: string | null
    producao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type estoque_fieirasUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    data_modificacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_fieiraFieldUpdateOperationsInput | $Enums.status_fieira | null
    espessura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    largura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    utilizacao?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estoque_fieirasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_armario?: NullableIntFieldUpdateOperationsInput | number | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    data_modificacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_fieiraFieldUpdateOperationsInput | $Enums.status_fieira | null
    espessura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    largura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    utilizacao?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Estoque_fieirasListRelationFilter = {
    every?: estoque_fieirasWhereInput
    some?: estoque_fieirasWhereInput
    none?: estoque_fieirasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type estoque_fieirasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type armariosCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    largura?: SortOrder
    espessura?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type armariosAvgOrderByAggregateInput = {
    id?: SortOrder
    largura?: SortOrder
    espessura?: SortOrder
  }

  export type armariosMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    largura?: SortOrder
    espessura?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type armariosMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    largura?: SortOrder
    espessura?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type armariosSumOrderByAggregateInput = {
    id?: SortOrder
    largura?: SortOrder
    espessura?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumstatus_fieiraNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_fieira | Enumstatus_fieiraFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_fieira[] | ListEnumstatus_fieiraFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_fieira[] | ListEnumstatus_fieiraFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_fieiraNullableFilter<$PrismaModel> | $Enums.status_fieira | null
  }

  export type ArmariosNullableScalarRelationFilter = {
    is?: armariosWhereInput | null
    isNot?: armariosWhereInput | null
  }

  export type estoque_fieirasCountOrderByAggregateInput = {
    id?: SortOrder
    id_armario?: SortOrder
    codigo?: SortOrder
    data_modificacao?: SortOrder
    status?: SortOrder
    espessura_atual?: SortOrder
    largura_atual?: SortOrder
    utilizacao?: SortOrder
    producao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type estoque_fieirasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_armario?: SortOrder
  }

  export type estoque_fieirasMaxOrderByAggregateInput = {
    id?: SortOrder
    id_armario?: SortOrder
    codigo?: SortOrder
    data_modificacao?: SortOrder
    status?: SortOrder
    espessura_atual?: SortOrder
    largura_atual?: SortOrder
    utilizacao?: SortOrder
    producao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type estoque_fieirasMinOrderByAggregateInput = {
    id?: SortOrder
    id_armario?: SortOrder
    codigo?: SortOrder
    data_modificacao?: SortOrder
    status?: SortOrder
    espessura_atual?: SortOrder
    largura_atual?: SortOrder
    utilizacao?: SortOrder
    producao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type estoque_fieirasSumOrderByAggregateInput = {
    id?: SortOrder
    id_armario?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumstatus_fieiraNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_fieira | Enumstatus_fieiraFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_fieira[] | ListEnumstatus_fieiraFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_fieira[] | ListEnumstatus_fieiraFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_fieiraNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_fieira | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_fieiraNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_fieiraNullableFilter<$PrismaModel>
  }

  export type estoque_fieirasCreateNestedManyWithoutArmariosInput = {
    create?: XOR<estoque_fieirasCreateWithoutArmariosInput, estoque_fieirasUncheckedCreateWithoutArmariosInput> | estoque_fieirasCreateWithoutArmariosInput[] | estoque_fieirasUncheckedCreateWithoutArmariosInput[]
    connectOrCreate?: estoque_fieirasCreateOrConnectWithoutArmariosInput | estoque_fieirasCreateOrConnectWithoutArmariosInput[]
    createMany?: estoque_fieirasCreateManyArmariosInputEnvelope
    connect?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
  }

  export type estoque_fieirasUncheckedCreateNestedManyWithoutArmariosInput = {
    create?: XOR<estoque_fieirasCreateWithoutArmariosInput, estoque_fieirasUncheckedCreateWithoutArmariosInput> | estoque_fieirasCreateWithoutArmariosInput[] | estoque_fieirasUncheckedCreateWithoutArmariosInput[]
    connectOrCreate?: estoque_fieirasCreateOrConnectWithoutArmariosInput | estoque_fieirasCreateOrConnectWithoutArmariosInput[]
    createMany?: estoque_fieirasCreateManyArmariosInputEnvelope
    connect?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type estoque_fieirasUpdateManyWithoutArmariosNestedInput = {
    create?: XOR<estoque_fieirasCreateWithoutArmariosInput, estoque_fieirasUncheckedCreateWithoutArmariosInput> | estoque_fieirasCreateWithoutArmariosInput[] | estoque_fieirasUncheckedCreateWithoutArmariosInput[]
    connectOrCreate?: estoque_fieirasCreateOrConnectWithoutArmariosInput | estoque_fieirasCreateOrConnectWithoutArmariosInput[]
    upsert?: estoque_fieirasUpsertWithWhereUniqueWithoutArmariosInput | estoque_fieirasUpsertWithWhereUniqueWithoutArmariosInput[]
    createMany?: estoque_fieirasCreateManyArmariosInputEnvelope
    set?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
    disconnect?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
    delete?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
    connect?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
    update?: estoque_fieirasUpdateWithWhereUniqueWithoutArmariosInput | estoque_fieirasUpdateWithWhereUniqueWithoutArmariosInput[]
    updateMany?: estoque_fieirasUpdateManyWithWhereWithoutArmariosInput | estoque_fieirasUpdateManyWithWhereWithoutArmariosInput[]
    deleteMany?: estoque_fieirasScalarWhereInput | estoque_fieirasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type estoque_fieirasUncheckedUpdateManyWithoutArmariosNestedInput = {
    create?: XOR<estoque_fieirasCreateWithoutArmariosInput, estoque_fieirasUncheckedCreateWithoutArmariosInput> | estoque_fieirasCreateWithoutArmariosInput[] | estoque_fieirasUncheckedCreateWithoutArmariosInput[]
    connectOrCreate?: estoque_fieirasCreateOrConnectWithoutArmariosInput | estoque_fieirasCreateOrConnectWithoutArmariosInput[]
    upsert?: estoque_fieirasUpsertWithWhereUniqueWithoutArmariosInput | estoque_fieirasUpsertWithWhereUniqueWithoutArmariosInput[]
    createMany?: estoque_fieirasCreateManyArmariosInputEnvelope
    set?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
    disconnect?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
    delete?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
    connect?: estoque_fieirasWhereUniqueInput | estoque_fieirasWhereUniqueInput[]
    update?: estoque_fieirasUpdateWithWhereUniqueWithoutArmariosInput | estoque_fieirasUpdateWithWhereUniqueWithoutArmariosInput[]
    updateMany?: estoque_fieirasUpdateManyWithWhereWithoutArmariosInput | estoque_fieirasUpdateManyWithWhereWithoutArmariosInput[]
    deleteMany?: estoque_fieirasScalarWhereInput | estoque_fieirasScalarWhereInput[]
  }

  export type armariosCreateNestedOneWithoutEstoque_fieirasInput = {
    create?: XOR<armariosCreateWithoutEstoque_fieirasInput, armariosUncheckedCreateWithoutEstoque_fieirasInput>
    connectOrCreate?: armariosCreateOrConnectWithoutEstoque_fieirasInput
    connect?: armariosWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumstatus_fieiraFieldUpdateOperationsInput = {
    set?: $Enums.status_fieira | null
  }

  export type armariosUpdateOneWithoutEstoque_fieirasNestedInput = {
    create?: XOR<armariosCreateWithoutEstoque_fieirasInput, armariosUncheckedCreateWithoutEstoque_fieirasInput>
    connectOrCreate?: armariosCreateOrConnectWithoutEstoque_fieirasInput
    upsert?: armariosUpsertWithoutEstoque_fieirasInput
    disconnect?: armariosWhereInput | boolean
    delete?: armariosWhereInput | boolean
    connect?: armariosWhereUniqueInput
    update?: XOR<XOR<armariosUpdateToOneWithWhereWithoutEstoque_fieirasInput, armariosUpdateWithoutEstoque_fieirasInput>, armariosUncheckedUpdateWithoutEstoque_fieirasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumstatus_fieiraNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_fieira | Enumstatus_fieiraFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_fieira[] | ListEnumstatus_fieiraFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_fieira[] | ListEnumstatus_fieiraFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_fieiraNullableFilter<$PrismaModel> | $Enums.status_fieira | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatus_fieiraNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_fieira | Enumstatus_fieiraFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_fieira[] | ListEnumstatus_fieiraFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_fieira[] | ListEnumstatus_fieiraFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_fieiraNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_fieira | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_fieiraNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_fieiraNullableFilter<$PrismaModel>
  }

  export type estoque_fieirasCreateWithoutArmariosInput = {
    id: number
    codigo?: string | null
    data_modificacao?: string | null
    status?: $Enums.status_fieira | null
    espessura_atual?: string | null
    largura_atual?: string | null
    utilizacao?: string | null
    producao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type estoque_fieirasUncheckedCreateWithoutArmariosInput = {
    id: number
    codigo?: string | null
    data_modificacao?: string | null
    status?: $Enums.status_fieira | null
    espessura_atual?: string | null
    largura_atual?: string | null
    utilizacao?: string | null
    producao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type estoque_fieirasCreateOrConnectWithoutArmariosInput = {
    where: estoque_fieirasWhereUniqueInput
    create: XOR<estoque_fieirasCreateWithoutArmariosInput, estoque_fieirasUncheckedCreateWithoutArmariosInput>
  }

  export type estoque_fieirasCreateManyArmariosInputEnvelope = {
    data: estoque_fieirasCreateManyArmariosInput | estoque_fieirasCreateManyArmariosInput[]
    skipDuplicates?: boolean
  }

  export type estoque_fieirasUpsertWithWhereUniqueWithoutArmariosInput = {
    where: estoque_fieirasWhereUniqueInput
    update: XOR<estoque_fieirasUpdateWithoutArmariosInput, estoque_fieirasUncheckedUpdateWithoutArmariosInput>
    create: XOR<estoque_fieirasCreateWithoutArmariosInput, estoque_fieirasUncheckedCreateWithoutArmariosInput>
  }

  export type estoque_fieirasUpdateWithWhereUniqueWithoutArmariosInput = {
    where: estoque_fieirasWhereUniqueInput
    data: XOR<estoque_fieirasUpdateWithoutArmariosInput, estoque_fieirasUncheckedUpdateWithoutArmariosInput>
  }

  export type estoque_fieirasUpdateManyWithWhereWithoutArmariosInput = {
    where: estoque_fieirasScalarWhereInput
    data: XOR<estoque_fieirasUpdateManyMutationInput, estoque_fieirasUncheckedUpdateManyWithoutArmariosInput>
  }

  export type estoque_fieirasScalarWhereInput = {
    AND?: estoque_fieirasScalarWhereInput | estoque_fieirasScalarWhereInput[]
    OR?: estoque_fieirasScalarWhereInput[]
    NOT?: estoque_fieirasScalarWhereInput | estoque_fieirasScalarWhereInput[]
    id?: IntFilter<"estoque_fieiras"> | number
    id_armario?: IntNullableFilter<"estoque_fieiras"> | number | null
    codigo?: StringNullableFilter<"estoque_fieiras"> | string | null
    data_modificacao?: StringNullableFilter<"estoque_fieiras"> | string | null
    status?: Enumstatus_fieiraNullableFilter<"estoque_fieiras"> | $Enums.status_fieira | null
    espessura_atual?: StringNullableFilter<"estoque_fieiras"> | string | null
    largura_atual?: StringNullableFilter<"estoque_fieiras"> | string | null
    utilizacao?: StringNullableFilter<"estoque_fieiras"> | string | null
    producao?: StringNullableFilter<"estoque_fieiras"> | string | null
    created_at?: DateTimeNullableFilter<"estoque_fieiras"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"estoque_fieiras"> | Date | string | null
  }

  export type armariosCreateWithoutEstoque_fieirasInput = {
    name: string
    largura?: Decimal | DecimalJsLike | number | string | null
    espessura?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type armariosUncheckedCreateWithoutEstoque_fieirasInput = {
    id?: number
    name: string
    largura?: Decimal | DecimalJsLike | number | string | null
    espessura?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type armariosCreateOrConnectWithoutEstoque_fieirasInput = {
    where: armariosWhereUniqueInput
    create: XOR<armariosCreateWithoutEstoque_fieirasInput, armariosUncheckedCreateWithoutEstoque_fieirasInput>
  }

  export type armariosUpsertWithoutEstoque_fieirasInput = {
    update: XOR<armariosUpdateWithoutEstoque_fieirasInput, armariosUncheckedUpdateWithoutEstoque_fieirasInput>
    create: XOR<armariosCreateWithoutEstoque_fieirasInput, armariosUncheckedCreateWithoutEstoque_fieirasInput>
    where?: armariosWhereInput
  }

  export type armariosUpdateToOneWithWhereWithoutEstoque_fieirasInput = {
    where?: armariosWhereInput
    data: XOR<armariosUpdateWithoutEstoque_fieirasInput, armariosUncheckedUpdateWithoutEstoque_fieirasInput>
  }

  export type armariosUpdateWithoutEstoque_fieirasInput = {
    name?: StringFieldUpdateOperationsInput | string
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    espessura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type armariosUncheckedUpdateWithoutEstoque_fieirasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    espessura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estoque_fieirasCreateManyArmariosInput = {
    id: number
    codigo?: string | null
    data_modificacao?: string | null
    status?: $Enums.status_fieira | null
    espessura_atual?: string | null
    largura_atual?: string | null
    utilizacao?: string | null
    producao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type estoque_fieirasUpdateWithoutArmariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    data_modificacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_fieiraFieldUpdateOperationsInput | $Enums.status_fieira | null
    espessura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    largura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    utilizacao?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estoque_fieirasUncheckedUpdateWithoutArmariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    data_modificacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_fieiraFieldUpdateOperationsInput | $Enums.status_fieira | null
    espessura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    largura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    utilizacao?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estoque_fieirasUncheckedUpdateManyWithoutArmariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    data_modificacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_fieiraFieldUpdateOperationsInput | $Enums.status_fieira | null
    espessura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    largura_atual?: NullableStringFieldUpdateOperationsInput | string | null
    utilizacao?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}