import { testClientWithContext } from '../../../utils/testUtils/testHelpers';
import { gql } from 'apollo-server-express';

describe('User', () => {
  // beforeEach(async () => {
  //   await createTestData();
  // });
  //
  // afterEach(async () => {
  //   await clearTestData();
  // });

  it('Should CRUD user', async () => {
    const { query } = await testClientWithContext();
    // Should return current user
    const getUserPayload = await query<any>(gql`
      query {
        getUser(id: "id") {
          id
          name
        }
      }
    `);
    expect(getUserPayload).toBeDefined();
  });
});
