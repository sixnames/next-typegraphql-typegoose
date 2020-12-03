import { testClient } from '../../test/jest.setup';
import { TestQuery, TestSetOptions } from 'apollo-server-integration-testing';
import { DEFAULT_CITY, DEFAULT_LANG } from '../../../config';

interface WithUserMutationInterface {
  mutate: TestQuery;
  query: TestQuery;
  setOptions: TestSetOptions;
}

interface GetTestClientWithUserInterface {
  city?: string;
  lang?: string;
  headers?: any;
}

export async function testClientWithContext(
  args?: GetTestClientWithUserInterface,
): Promise<WithUserMutationInterface> {
  const { city = DEFAULT_CITY, lang = DEFAULT_LANG, headers } = args || {
    city: DEFAULT_CITY,
    lang: DEFAULT_LANG,
    headers: undefined,
  };

  const { setOptions, mutate, query } = testClient;

  const session = {
    user: null,
    userId: null,
    roleId: null,
  };

  setOptions({
    request: {
      city,
      lang,
      defaultLang: DEFAULT_LANG,
      session,
      headers,
    },
  });

  return { mutate, query, setOptions };
}
