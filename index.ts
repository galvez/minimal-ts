
const value = 1

export function vanilla (something) {
  console.log(something)
}

vanilla(value)

interface InnerOptions {
  mustHaveThisOneString: string;
  [x: string | number | symbol]: unknown;
}

interface Options {
  aString: string;
  aNumber: number;
  aBoolean: boolean;
  anArrayOfStrings: string[];
  anArrayOfInnerOptions: Array<InnerOptions>;
}

interface Result {
  aString: string;
  aNumber: number;
  aBoolean: boolean;
}

export function foobar (options: Options): Result {
  return {
    aString: 'string',
    aNumber: 123,
    aBoolean: true,
  }
}

foobar({
  aString: 'string',
  aNumber: 123,
  aBoolean: true,
  // anArrayOfStrings: ['string', 'string'],
  anArrayOfInnerOptions: [{
    mustHaveThisOneString: 'string',
    canHaveThisOtherThing: false,
  }],
})
