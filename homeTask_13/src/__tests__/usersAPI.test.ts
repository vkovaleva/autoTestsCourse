import { AxiosResponse } from 'axios';
import * as API from './services/apiProperties';
import usersSchemaArray from './data/usersSchemaArrayAPI.json';
import usersSchemaObject from './data/usersSchemaObjectAPI.json';
import './helpers/extendedExpects';
import setBaseUrlWithHeaders from './services/apiUtils';

describe(`API Users tests`, function () {
  describe(`GET /api/v1/Users`, function () {
    let response: AxiosResponse;
    const request = setBaseUrlWithHeaders(API.baseURL, API.headers);
    beforeAll(async () => {
      response = await request.url('api/v1/Users/').method('get').execute();
    });

    test(`response returns status code 200`, async () => {
      expect(response).toBeValidStatusCode(200);
    });
    test(`response contains valid body`, async () => {
      expect(response).toBeValidSchema(usersSchemaArray);
    });
  });
});

describe(`POST /api/v1/Users`, function () {
  let response: AxiosResponse<API.Body>;
  const request = setBaseUrlWithHeaders<API.Body>(API.baseURL, API.headers);
  beforeAll(async () => {
    response = await request
      .url('api/v1/Users/')
      .method('post')
      .data({ id: 0, userName: 'test', password: 'test' })
      .execute();
  });

  test(`response returns status code 200`, async () => {
    expect(response).toBeValidStatusCode(200);
  });
  test(`response contains valid body`, async () => {
    expect(response).toBeValidSchema(usersSchemaObject);
  });
});

describe(`GET /api/v1/Users/{id}`, function () {
  let response: AxiosResponse;
  const request = setBaseUrlWithHeaders<API.Body>(API.baseURL, API.headers);
  beforeAll(async () => {
    response = await request.url(`api/v1/Users/${API.userID}`).method('get').execute();
  });

  test(`response returns status code 200`, async () => {
    expect(response).toBeValidStatusCode(200);
  });
  test(`response contains valid body`, async () => {
    expect(response).toBeValidSchema(usersSchemaObject);
  });
});

describe(`PUT /api/v1/Users/{id}`, function () {
  let response: AxiosResponse<API.Body>;
  const request = setBaseUrlWithHeaders<API.Body>(API.baseURL, API.headers);
  beforeAll(async () => {
    response = await request
      .url(`api/v1/Users/${API.userID}`)
      .data({ id: 0, userName: 'test', password: 'test' })
      .method('put')
      .execute();
  });

  test(`response returns status code 200`, async () => {
    expect(response).toBeValidStatusCode(200);
  });
  test(`response contains valid body`, async () => {
    expect(response).toBeValidSchema(usersSchemaObject);
  });
});

describe(`DELETE /api/v1/Users/{id}`, function () {
  let response: AxiosResponse<API.Body>;
  const request = setBaseUrlWithHeaders<API.Body>(API.baseURL, API.headers);
  beforeAll(async () => {
    response = await request.url(`api/v1/Users/${API.userID}`).method('delete').execute();
  });

  test(`response returns status code 200`, async () => {
    expect(response).toBeValidStatusCode(200);
  });
  test(`response does not contain body`, async () => {
    expect(response).toBeWithoutBody();
  });
});
