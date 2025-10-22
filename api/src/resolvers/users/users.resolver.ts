import { Resolver, Query, Mutation, Args, Int  } from '@nestjs/graphql';
import { UserService } from '../../services/user/user.service';
import { User } from '../../users/entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id.toString());
  }

//   @Mutation(() => User)
//   createUser(
//     @Args('name') name: string,
//     @Args('email') email: string,
//   ): User {
//     return this.usersService.create({ name, email });
//   }
}