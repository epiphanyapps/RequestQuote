/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createQuoteRequest = /* GraphQL */ `mutation CreateQuoteRequest(
  $condition: ModelQuoteRequestConditionInput
  $input: CreateQuoteRequestInput!
) {
  createQuoteRequest(condition: $condition, input: $input) {
    content
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuoteRequestMutationVariables,
  APITypes.CreateQuoteRequestMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $condition: ModelReviewConditionInput
  $input: CreateReviewInput!
) {
  createReview(condition: $condition, input: $input) {
    comment
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    country
    createdAt
    email
    name
    source
    updatedAt
    zip
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteQuoteRequest = /* GraphQL */ `mutation DeleteQuoteRequest(
  $condition: ModelQuoteRequestConditionInput
  $input: DeleteQuoteRequestInput!
) {
  deleteQuoteRequest(condition: $condition, input: $input) {
    content
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuoteRequestMutationVariables,
  APITypes.DeleteQuoteRequestMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $condition: ModelReviewConditionInput
  $input: DeleteReviewInput!
) {
  deleteReview(condition: $condition, input: $input) {
    comment
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    country
    createdAt
    email
    name
    source
    updatedAt
    zip
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateQuoteRequest = /* GraphQL */ `mutation UpdateQuoteRequest(
  $condition: ModelQuoteRequestConditionInput
  $input: UpdateQuoteRequestInput!
) {
  updateQuoteRequest(condition: $condition, input: $input) {
    content
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuoteRequestMutationVariables,
  APITypes.UpdateQuoteRequestMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $condition: ModelReviewConditionInput
  $input: UpdateReviewInput!
) {
  updateReview(condition: $condition, input: $input) {
    comment
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    country
    createdAt
    email
    name
    source
    updatedAt
    zip
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
