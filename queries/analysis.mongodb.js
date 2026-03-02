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


//Calculate average rating of all movies

print("\n--- Average rating of all movies ---");

db.reviews.aggregate([
  {
    $group: {
      _id: null,
      averageRating: { $avg: "$rating" }
    }
  }
]).forEach(doc => printjson(doc));


//Total number of movies per director

print("\n--- Total number of movies per director ---");

db.movies.aggregate([
  {
    $group: {
      _id: "$movieDirector",
      totalMovies: { $sum: 1 }
    }
  },
  {
    $sort: { totalMovies: -1 }
  }
]).forEach(doc => printjson(doc));