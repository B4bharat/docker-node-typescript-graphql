import {
  Resolver,
  Query,
  Arg,
  ResolverInterface,
  FieldResolver,
  Root,
  Int,
} from 'type-graphql';

import { Recipe } from './recipe-type';
import { createRecipeSamples } from './recipe-sample';

@Resolver((of) => Recipe)
export class RecipeResolver implements ResolverInterface<Recipe> {
  private readonly items: Recipe[] = createRecipeSamples();

  @Query((returns) => Recipe, { nullable: true })
  async recipe(@Arg('title') title: string): Promise<Recipe | undefined> {
    return await this.items.find((recipe) => recipe.title === title);
  }

  @FieldResolver()
  ratingsCount(
    @Root() recipe: Recipe,
    @Arg('minRate', (type) => Int, { defaultValue: 0.0 }) minRate: number
  ): number {
    return recipe.ratings
      ? recipe.ratings.filter((rating) => rating >= minRate).length
      : 0;
  }
}
