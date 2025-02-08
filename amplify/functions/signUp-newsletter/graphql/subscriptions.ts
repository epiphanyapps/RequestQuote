/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateQuoteRequest = /* GraphQL */ `subscription OnCreateQuoteRequest(
  $filter: ModelSubscriptionQuoteRequestFilterInput
) {
  onCreateQuoteRequest(filter: $filter) {
    content
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateQuoteRequestSubscriptionVariables,
  APITypes.OnCreateQuoteRequestSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
    comment
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteQuoteRequest = /* GraphQL */ `subscription OnDeleteQuoteRequest(
  $filter: ModelSubscriptionQuoteRequestFilterInput
) {
  onDeleteQuoteRequest(filter: $filter) {
    content
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteQuoteRequestSubscriptionVariables,
  APITypes.OnDeleteQuoteRequestSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
    comment
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateQuoteRequest = /* GraphQL */ `subscription OnUpdateQuoteRequest(
  $filter: ModelSubscriptionQuoteRequestFilterInput
) {
  onUpdateQuoteRequest(filter: $filter) {
    content
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateQuoteRequestSubscriptionVariables,
  APITypes.OnUpdateQuoteRequestSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
    comment
    createdAt
    id
    name
    rating
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
