

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // indica que este tipo se expone en GraphQL
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
