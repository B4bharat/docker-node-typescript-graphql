"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const recipe_type_1 = require("./recipe-type");
const recipe_sample_1 = require("./recipe-sample");
let RecipeResolver = class RecipeResolver {
    constructor() {
        this.items = (0, recipe_sample_1.createRecipeSamples)();
    }
    async recipe(title) {
        return await this.items.find((recipe) => recipe.title === title);
    }
    ratingsCount(recipe, minRate) {
        return recipe.ratings.filter((rating) => rating >= minRate).length;
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => recipe_type_1.Recipe, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipe", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Arg)('minRate', (type) => type_graphql_1.Int, { defaultValue: 0.0 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipe_type_1.Recipe, Number]),
    __metadata("design:returntype", Number)
], RecipeResolver.prototype, "ratingsCount", null);
RecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)((of) => recipe_type_1.Recipe)
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
