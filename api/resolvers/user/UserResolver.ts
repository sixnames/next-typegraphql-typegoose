import { Arg, Query, Resolver, ID } from 'type-graphql';
import { User, UserModel } from '../../entities/User';

@Resolver((_of) => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(): Promise<User | null> {
    return UserModel.findOne();
  }

  @Query(() => User, { nullable: true })
  async getUser(@Arg('id', (_type) => ID) id: string): Promise<User | null> {
    return UserModel.findOne({ _id: id });
  }
}
