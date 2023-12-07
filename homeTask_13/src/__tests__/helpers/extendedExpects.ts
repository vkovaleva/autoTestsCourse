import validator from 'jsonschema';
import { AxiosResponse } from 'axios';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidStatusCode(expected: number): CustomMatcherResult;
      toBeValidSchema(schema: any): CustomMatcherResult;
      toBeWithoutBody(): CustomMatcherResult;
    }
  }
}

expect.extend({
  toBeValidStatusCode(response: AxiosResponse, expected: number) {
    const comparingResult: boolean = response.status === expected || false;
    return comparingResult
      ? {
          message: () => `Expected ${response.status} status code is received`,
          pass: true,
        }
      : {
          message: () => `The actual status code of the HTTP request is "${
            response.status
          }" expected status code "${expected}"\n 
          Url: "${response.config.url}"\n
          Params: "${JSON.stringify(response.config.params)}"\n`,
          pass: false,
        };
  },
});

expect.extend({
  toBeValidSchema(response: AxiosResponse, schema: any) {
    const schemaValidationResult = validator.validate(response.data, schema);
    let errorMessage: string;
    if (schemaValidationResult.errors.length) {
      errorMessage = schemaValidationResult.errors.reduce(function (accumulator, currentValue) {
        return `${accumulator} ${currentValue.stack}`;
      }, '');
    }
    return schemaValidationResult.valid
      ? {
          pass: true,
          message: () => `The schemes are matched`,
        }
      : {
          pass: false,
          message: () => `JSON schema validation error: ${errorMessage}\n
      Url: "${response.config.url}"\n
      Params: "${JSON.stringify(response.config.params)}"\n`,
        };
  },
});

expect.extend({
  toBeWithoutBody(response: AxiosResponse) {
    return !response.data
      ? {
          pass: true,
          message: () => `The body is absent`,
        }
      : {
          pass: false,
          message: () => `The body exists 
      Body: ${JSON.stringify(response.data)}\n
      Url: "${response.config.url}"\n
      Params: "${JSON.stringify(response.config.params)}"\n`,
        };
  },
});
