export const resolvers = {
  Query: {
    stats (_parent, _args, _context, _info) {
      return { plays: "6,781,650", tips: "4,380,785" }
    }
  }
}
