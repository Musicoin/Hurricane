let stats = { plays: 6781650, tips: 4380785 };

export const resolvers = {
  Query: {
    stats (_parent, _args, _context, _info) {
      return stats;
    }
  },
  Mutation:{
    increasePlays(_parent, _args, _context, _info){
      stats.plays= stats.plays+1;
      return stats;
    }
  }
}
