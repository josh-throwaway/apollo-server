const resolvers = {
  Query: {
    testUser(root, { id }, { models }) {
      return models.TestUser.findOne({
        where: {
          id: id
        }
      });
    },

    allTestUsers(root, args, { models }) {
      return models.TestUser.findAll();
    }
  },

  Mutation: {
    createTestUser(root, { name }, { models }) {
      return models.TestUser.create({
        name
      });
    }
  }

  // User: {
  //   async recipes(user) {
  //     return user.getRecipes();
  //   }
  // }
};

module.exports = resolvers;
