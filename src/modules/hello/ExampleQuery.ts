import {
  GraphQLString,
  GraphQLFieldConfig,
  Thunk,
  GraphQLFieldConfigMap
} from "graphql";

const t: GraphQLFieldConfig<any, any> = {
  type: GraphQLString,
  resolve: (_, { input }, context, info) => {
    return new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
        clearTimeout(wait);
        resolve("hello man");
      }, 200);
    });
  }
};
const ExampleQuery: Thunk<GraphQLFieldConfigMap<any, any>> = {
  hello: t
};

export { ExampleQuery };
