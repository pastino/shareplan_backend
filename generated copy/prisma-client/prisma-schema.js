"use strict";
// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = "type AggregateBanner {\n  count: Int!\n}\n\ntype AggregateCleaning {\n  count: Int!\n}\n\ntype AggregateCompany {\n  count: Int!\n}\n\ntype AggregateUser {\n  count: Int!\n}\n\ntype Banner {\n  id: ID!\n  imageUrl: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype BannerConnection {\n  pageInfo: PageInfo!\n  edges: [BannerEdge]!\n  aggregate: AggregateBanner!\n}\n\ninput BannerCreateInput {\n  id: ID\n  imageUrl: String!\n}\n\ntype BannerEdge {\n  node: Banner!\n  cursor: String!\n}\n\nenum BannerOrderByInput {\n  id_ASC\n  id_DESC\n  imageUrl_ASC\n  imageUrl_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype BannerPreviousValues {\n  id: ID!\n  imageUrl: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype BannerSubscriptionPayload {\n  mutation: MutationType!\n  node: Banner\n  updatedFields: [String!]\n  previousValues: BannerPreviousValues\n}\n\ninput BannerSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: BannerWhereInput\n  AND: [BannerSubscriptionWhereInput!]\n  OR: [BannerSubscriptionWhereInput!]\n  NOT: [BannerSubscriptionWhereInput!]\n}\n\ninput BannerUpdateInput {\n  imageUrl: String\n}\n\ninput BannerUpdateManyMutationInput {\n  imageUrl: String\n}\n\ninput BannerWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  imageUrl: String\n  imageUrl_not: String\n  imageUrl_in: [String!]\n  imageUrl_not_in: [String!]\n  imageUrl_lt: String\n  imageUrl_lte: String\n  imageUrl_gt: String\n  imageUrl_gte: String\n  imageUrl_contains: String\n  imageUrl_not_contains: String\n  imageUrl_starts_with: String\n  imageUrl_not_starts_with: String\n  imageUrl_ends_with: String\n  imageUrl_not_ends_with: String\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  AND: [BannerWhereInput!]\n  OR: [BannerWhereInput!]\n  NOT: [BannerWhereInput!]\n}\n\ninput BannerWhereUniqueInput {\n  id: ID\n}\n\ntype BatchPayload {\n  count: Long!\n}\n\ntype Cleaning {\n  id: ID!\n  title: String!\n  imageUrl: String!\n  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype CleaningConnection {\n  pageInfo: PageInfo!\n  edges: [CleaningEdge]!\n  aggregate: AggregateCleaning!\n}\n\ninput CleaningCreateInput {\n  id: ID\n  title: String!\n  imageUrl: String!\n  companies: CompanyCreateManyWithoutCleaningInput\n}\n\ninput CleaningCreateOneWithoutCompaniesInput {\n  create: CleaningCreateWithoutCompaniesInput\n  connect: CleaningWhereUniqueInput\n}\n\ninput CleaningCreateWithoutCompaniesInput {\n  id: ID\n  title: String!\n  imageUrl: String!\n}\n\ntype CleaningEdge {\n  node: Cleaning!\n  cursor: String!\n}\n\nenum CleaningOrderByInput {\n  id_ASC\n  id_DESC\n  title_ASC\n  title_DESC\n  imageUrl_ASC\n  imageUrl_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype CleaningPreviousValues {\n  id: ID!\n  title: String!\n  imageUrl: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype CleaningSubscriptionPayload {\n  mutation: MutationType!\n  node: Cleaning\n  updatedFields: [String!]\n  previousValues: CleaningPreviousValues\n}\n\ninput CleaningSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: CleaningWhereInput\n  AND: [CleaningSubscriptionWhereInput!]\n  OR: [CleaningSubscriptionWhereInput!]\n  NOT: [CleaningSubscriptionWhereInput!]\n}\n\ninput CleaningUpdateInput {\n  title: String\n  imageUrl: String\n  companies: CompanyUpdateManyWithoutCleaningInput\n}\n\ninput CleaningUpdateManyMutationInput {\n  title: String\n  imageUrl: String\n}\n\ninput CleaningUpdateOneWithoutCompaniesInput {\n  create: CleaningCreateWithoutCompaniesInput\n  update: CleaningUpdateWithoutCompaniesDataInput\n  upsert: CleaningUpsertWithoutCompaniesInput\n  delete: Boolean\n  disconnect: Boolean\n  connect: CleaningWhereUniqueInput\n}\n\ninput CleaningUpdateWithoutCompaniesDataInput {\n  title: String\n  imageUrl: String\n}\n\ninput CleaningUpsertWithoutCompaniesInput {\n  update: CleaningUpdateWithoutCompaniesDataInput!\n  create: CleaningCreateWithoutCompaniesInput!\n}\n\ninput CleaningWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  title: String\n  title_not: String\n  title_in: [String!]\n  title_not_in: [String!]\n  title_lt: String\n  title_lte: String\n  title_gt: String\n  title_gte: String\n  title_contains: String\n  title_not_contains: String\n  title_starts_with: String\n  title_not_starts_with: String\n  title_ends_with: String\n  title_not_ends_with: String\n  imageUrl: String\n  imageUrl_not: String\n  imageUrl_in: [String!]\n  imageUrl_not_in: [String!]\n  imageUrl_lt: String\n  imageUrl_lte: String\n  imageUrl_gt: String\n  imageUrl_gte: String\n  imageUrl_contains: String\n  imageUrl_not_contains: String\n  imageUrl_starts_with: String\n  imageUrl_not_starts_with: String\n  imageUrl_ends_with: String\n  imageUrl_not_ends_with: String\n  companies_every: CompanyWhereInput\n  companies_some: CompanyWhereInput\n  companies_none: CompanyWhereInput\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  AND: [CleaningWhereInput!]\n  OR: [CleaningWhereInput!]\n  NOT: [CleaningWhereInput!]\n}\n\ninput CleaningWhereUniqueInput {\n  id: ID\n}\n\ntype Company {\n  id: ID!\n  name: String!\n  subTitle: String!\n  imageUrl: String\n  latitude: Float\n  longitude: Float\n  phoneNumber: String\n  cleaning: Cleaning\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype CompanyConnection {\n  pageInfo: PageInfo!\n  edges: [CompanyEdge]!\n  aggregate: AggregateCompany!\n}\n\ninput CompanyCreateInput {\n  id: ID\n  name: String!\n  subTitle: String!\n  imageUrl: String\n  latitude: Float\n  longitude: Float\n  phoneNumber: String\n  cleaning: CleaningCreateOneWithoutCompaniesInput\n}\n\ninput CompanyCreateManyWithoutCleaningInput {\n  create: [CompanyCreateWithoutCleaningInput!]\n  connect: [CompanyWhereUniqueInput!]\n}\n\ninput CompanyCreateWithoutCleaningInput {\n  id: ID\n  name: String!\n  subTitle: String!\n  imageUrl: String\n  latitude: Float\n  longitude: Float\n  phoneNumber: String\n}\n\ntype CompanyEdge {\n  node: Company!\n  cursor: String!\n}\n\nenum CompanyOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n  subTitle_ASC\n  subTitle_DESC\n  imageUrl_ASC\n  imageUrl_DESC\n  latitude_ASC\n  latitude_DESC\n  longitude_ASC\n  longitude_DESC\n  phoneNumber_ASC\n  phoneNumber_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype CompanyPreviousValues {\n  id: ID!\n  name: String!\n  subTitle: String!\n  imageUrl: String\n  latitude: Float\n  longitude: Float\n  phoneNumber: String\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ninput CompanyScalarWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  subTitle: String\n  subTitle_not: String\n  subTitle_in: [String!]\n  subTitle_not_in: [String!]\n  subTitle_lt: String\n  subTitle_lte: String\n  subTitle_gt: String\n  subTitle_gte: String\n  subTitle_contains: String\n  subTitle_not_contains: String\n  subTitle_starts_with: String\n  subTitle_not_starts_with: String\n  subTitle_ends_with: String\n  subTitle_not_ends_with: String\n  imageUrl: String\n  imageUrl_not: String\n  imageUrl_in: [String!]\n  imageUrl_not_in: [String!]\n  imageUrl_lt: String\n  imageUrl_lte: String\n  imageUrl_gt: String\n  imageUrl_gte: String\n  imageUrl_contains: String\n  imageUrl_not_contains: String\n  imageUrl_starts_with: String\n  imageUrl_not_starts_with: String\n  imageUrl_ends_with: String\n  imageUrl_not_ends_with: String\n  latitude: Float\n  latitude_not: Float\n  latitude_in: [Float!]\n  latitude_not_in: [Float!]\n  latitude_lt: Float\n  latitude_lte: Float\n  latitude_gt: Float\n  latitude_gte: Float\n  longitude: Float\n  longitude_not: Float\n  longitude_in: [Float!]\n  longitude_not_in: [Float!]\n  longitude_lt: Float\n  longitude_lte: Float\n  longitude_gt: Float\n  longitude_gte: Float\n  phoneNumber: String\n  phoneNumber_not: String\n  phoneNumber_in: [String!]\n  phoneNumber_not_in: [String!]\n  phoneNumber_lt: String\n  phoneNumber_lte: String\n  phoneNumber_gt: String\n  phoneNumber_gte: String\n  phoneNumber_contains: String\n  phoneNumber_not_contains: String\n  phoneNumber_starts_with: String\n  phoneNumber_not_starts_with: String\n  phoneNumber_ends_with: String\n  phoneNumber_not_ends_with: String\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  AND: [CompanyScalarWhereInput!]\n  OR: [CompanyScalarWhereInput!]\n  NOT: [CompanyScalarWhereInput!]\n}\n\ntype CompanySubscriptionPayload {\n  mutation: MutationType!\n  node: Company\n  updatedFields: [String!]\n  previousValues: CompanyPreviousValues\n}\n\ninput CompanySubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: CompanyWhereInput\n  AND: [CompanySubscriptionWhereInput!]\n  OR: [CompanySubscriptionWhereInput!]\n  NOT: [CompanySubscriptionWhereInput!]\n}\n\ninput CompanyUpdateInput {\n  name: String\n  subTitle: String\n  imageUrl: String\n  latitude: Float\n  longitude: Float\n  phoneNumber: String\n  cleaning: CleaningUpdateOneWithoutCompaniesInput\n}\n\ninput CompanyUpdateManyDataInput {\n  name: String\n  subTitle: String\n  imageUrl: String\n  latitude: Float\n  longitude: Float\n  phoneNumber: String\n}\n\ninput CompanyUpdateManyMutationInput {\n  name: String\n  subTitle: String\n  imageUrl: String\n  latitude: Float\n  longitude: Float\n  phoneNumber: String\n}\n\ninput CompanyUpdateManyWithoutCleaningInput {\n  create: [CompanyCreateWithoutCleaningInput!]\n  delete: [CompanyWhereUniqueInput!]\n  connect: [CompanyWhereUniqueInput!]\n  set: [CompanyWhereUniqueInput!]\n  disconnect: [CompanyWhereUniqueInput!]\n  update: [CompanyUpdateWithWhereUniqueWithoutCleaningInput!]\n  upsert: [CompanyUpsertWithWhereUniqueWithoutCleaningInput!]\n  deleteMany: [CompanyScalarWhereInput!]\n  updateMany: [CompanyUpdateManyWithWhereNestedInput!]\n}\n\ninput CompanyUpdateManyWithWhereNestedInput {\n  where: CompanyScalarWhereInput!\n  data: CompanyUpdateManyDataInput!\n}\n\ninput CompanyUpdateWithoutCleaningDataInput {\n  name: String\n  subTitle: String\n  imageUrl: String\n  latitude: Float\n  longitude: Float\n  phoneNumber: String\n}\n\ninput CompanyUpdateWithWhereUniqueWithoutCleaningInput {\n  where: CompanyWhereUniqueInput!\n  data: CompanyUpdateWithoutCleaningDataInput!\n}\n\ninput CompanyUpsertWithWhereUniqueWithoutCleaningInput {\n  where: CompanyWhereUniqueInput!\n  update: CompanyUpdateWithoutCleaningDataInput!\n  create: CompanyCreateWithoutCleaningInput!\n}\n\ninput CompanyWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  subTitle: String\n  subTitle_not: String\n  subTitle_in: [String!]\n  subTitle_not_in: [String!]\n  subTitle_lt: String\n  subTitle_lte: String\n  subTitle_gt: String\n  subTitle_gte: String\n  subTitle_contains: String\n  subTitle_not_contains: String\n  subTitle_starts_with: String\n  subTitle_not_starts_with: String\n  subTitle_ends_with: String\n  subTitle_not_ends_with: String\n  imageUrl: String\n  imageUrl_not: String\n  imageUrl_in: [String!]\n  imageUrl_not_in: [String!]\n  imageUrl_lt: String\n  imageUrl_lte: String\n  imageUrl_gt: String\n  imageUrl_gte: String\n  imageUrl_contains: String\n  imageUrl_not_contains: String\n  imageUrl_starts_with: String\n  imageUrl_not_starts_with: String\n  imageUrl_ends_with: String\n  imageUrl_not_ends_with: String\n  latitude: Float\n  latitude_not: Float\n  latitude_in: [Float!]\n  latitude_not_in: [Float!]\n  latitude_lt: Float\n  latitude_lte: Float\n  latitude_gt: Float\n  latitude_gte: Float\n  longitude: Float\n  longitude_not: Float\n  longitude_in: [Float!]\n  longitude_not_in: [Float!]\n  longitude_lt: Float\n  longitude_lte: Float\n  longitude_gt: Float\n  longitude_gte: Float\n  phoneNumber: String\n  phoneNumber_not: String\n  phoneNumber_in: [String!]\n  phoneNumber_not_in: [String!]\n  phoneNumber_lt: String\n  phoneNumber_lte: String\n  phoneNumber_gt: String\n  phoneNumber_gte: String\n  phoneNumber_contains: String\n  phoneNumber_not_contains: String\n  phoneNumber_starts_with: String\n  phoneNumber_not_starts_with: String\n  phoneNumber_ends_with: String\n  phoneNumber_not_ends_with: String\n  cleaning: CleaningWhereInput\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  AND: [CompanyWhereInput!]\n  OR: [CompanyWhereInput!]\n  NOT: [CompanyWhereInput!]\n}\n\ninput CompanyWhereUniqueInput {\n  id: ID\n}\n\nscalar DateTime\n\nscalar Long\n\ntype Mutation {\n  createBanner(data: BannerCreateInput!): Banner!\n  updateBanner(data: BannerUpdateInput!, where: BannerWhereUniqueInput!): Banner\n  updateManyBanners(data: BannerUpdateManyMutationInput!, where: BannerWhereInput): BatchPayload!\n  upsertBanner(where: BannerWhereUniqueInput!, create: BannerCreateInput!, update: BannerUpdateInput!): Banner!\n  deleteBanner(where: BannerWhereUniqueInput!): Banner\n  deleteManyBanners(where: BannerWhereInput): BatchPayload!\n  createCleaning(data: CleaningCreateInput!): Cleaning!\n  updateCleaning(data: CleaningUpdateInput!, where: CleaningWhereUniqueInput!): Cleaning\n  updateManyCleanings(data: CleaningUpdateManyMutationInput!, where: CleaningWhereInput): BatchPayload!\n  upsertCleaning(where: CleaningWhereUniqueInput!, create: CleaningCreateInput!, update: CleaningUpdateInput!): Cleaning!\n  deleteCleaning(where: CleaningWhereUniqueInput!): Cleaning\n  deleteManyCleanings(where: CleaningWhereInput): BatchPayload!\n  createCompany(data: CompanyCreateInput!): Company!\n  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company\n  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!\n  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!\n  deleteCompany(where: CompanyWhereUniqueInput!): Company\n  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!\n  createUser(data: UserCreateInput!): User!\n  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User\n  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!\n  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!\n  deleteUser(where: UserWhereUniqueInput!): User\n  deleteManyUsers(where: UserWhereInput): BatchPayload!\n}\n\nenum MutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\ninterface Node {\n  id: ID!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Query {\n  banner(where: BannerWhereUniqueInput!): Banner\n  banners(where: BannerWhereInput, orderBy: BannerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Banner]!\n  bannersConnection(where: BannerWhereInput, orderBy: BannerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BannerConnection!\n  cleaning(where: CleaningWhereUniqueInput!): Cleaning\n  cleanings(where: CleaningWhereInput, orderBy: CleaningOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cleaning]!\n  cleaningsConnection(where: CleaningWhereInput, orderBy: CleaningOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CleaningConnection!\n  company(where: CompanyWhereUniqueInput!): Company\n  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!\n  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!\n  user(where: UserWhereUniqueInput!): User\n  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!\n  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!\n  node(id: ID!): Node\n}\n\ntype Subscription {\n  banner(where: BannerSubscriptionWhereInput): BannerSubscriptionPayload\n  cleaning(where: CleaningSubscriptionWhereInput): CleaningSubscriptionPayload\n  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload\n  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload\n}\n\ntype User {\n  id: ID!\n  userId: String\n  nickname: String\n  password: String\n  avatar: String\n  email: String\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype UserConnection {\n  pageInfo: PageInfo!\n  edges: [UserEdge]!\n  aggregate: AggregateUser!\n}\n\ninput UserCreateInput {\n  id: ID\n  userId: String\n  nickname: String\n  password: String\n  avatar: String\n  email: String\n}\n\ntype UserEdge {\n  node: User!\n  cursor: String!\n}\n\nenum UserOrderByInput {\n  id_ASC\n  id_DESC\n  userId_ASC\n  userId_DESC\n  nickname_ASC\n  nickname_DESC\n  password_ASC\n  password_DESC\n  avatar_ASC\n  avatar_DESC\n  email_ASC\n  email_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype UserPreviousValues {\n  id: ID!\n  userId: String\n  nickname: String\n  password: String\n  avatar: String\n  email: String\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype UserSubscriptionPayload {\n  mutation: MutationType!\n  node: User\n  updatedFields: [String!]\n  previousValues: UserPreviousValues\n}\n\ninput UserSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: UserWhereInput\n  AND: [UserSubscriptionWhereInput!]\n  OR: [UserSubscriptionWhereInput!]\n  NOT: [UserSubscriptionWhereInput!]\n}\n\ninput UserUpdateInput {\n  userId: String\n  nickname: String\n  password: String\n  avatar: String\n  email: String\n}\n\ninput UserUpdateManyMutationInput {\n  userId: String\n  nickname: String\n  password: String\n  avatar: String\n  email: String\n}\n\ninput UserWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  userId: String\n  userId_not: String\n  userId_in: [String!]\n  userId_not_in: [String!]\n  userId_lt: String\n  userId_lte: String\n  userId_gt: String\n  userId_gte: String\n  userId_contains: String\n  userId_not_contains: String\n  userId_starts_with: String\n  userId_not_starts_with: String\n  userId_ends_with: String\n  userId_not_ends_with: String\n  nickname: String\n  nickname_not: String\n  nickname_in: [String!]\n  nickname_not_in: [String!]\n  nickname_lt: String\n  nickname_lte: String\n  nickname_gt: String\n  nickname_gte: String\n  nickname_contains: String\n  nickname_not_contains: String\n  nickname_starts_with: String\n  nickname_not_starts_with: String\n  nickname_ends_with: String\n  nickname_not_ends_with: String\n  password: String\n  password_not: String\n  password_in: [String!]\n  password_not_in: [String!]\n  password_lt: String\n  password_lte: String\n  password_gt: String\n  password_gte: String\n  password_contains: String\n  password_not_contains: String\n  password_starts_with: String\n  password_not_starts_with: String\n  password_ends_with: String\n  password_not_ends_with: String\n  avatar: String\n  avatar_not: String\n  avatar_in: [String!]\n  avatar_not_in: [String!]\n  avatar_lt: String\n  avatar_lte: String\n  avatar_gt: String\n  avatar_gte: String\n  avatar_contains: String\n  avatar_not_contains: String\n  avatar_starts_with: String\n  avatar_not_starts_with: String\n  avatar_ends_with: String\n  avatar_not_ends_with: String\n  email: String\n  email_not: String\n  email_in: [String!]\n  email_not_in: [String!]\n  email_lt: String\n  email_lte: String\n  email_gt: String\n  email_gte: String\n  email_contains: String\n  email_not_contains: String\n  email_starts_with: String\n  email_not_starts_with: String\n  email_ends_with: String\n  email_not_ends_with: String\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  AND: [UserWhereInput!]\n  OR: [UserWhereInput!]\n  NOT: [UserWhereInput!]\n}\n\ninput UserWhereUniqueInput {\n  id: ID\n  email: String\n}\n";
//# sourceMappingURL=prisma-schema.js.map