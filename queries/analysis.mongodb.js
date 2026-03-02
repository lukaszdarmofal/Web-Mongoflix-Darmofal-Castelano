// Movies in the action category after 2020

print("\n - Movies in the 'Action' category after 2020 -");

db.movies.aggregate([
  {
    $match: {
      movieGenres: "action",
      movieRelease: { $gt: 2020 }
    }
  },
  {
    $project: {
      _id: 0,
      movieName: 1,
      movieRelease: 1
    }
  }
]).forEach(doc => printjson(doc));