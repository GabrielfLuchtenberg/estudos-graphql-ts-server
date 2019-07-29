import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { HelloQuery } from "./modules/hello";

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    ...HelloQuery
  }
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
