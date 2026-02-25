
db = db.getSiblingDB("mongoflix")
db.movies.drop()
db.reviews.drop()

console.log("Seedowanie rozpoczęte!")

const moviesData = require("fs").readFileSync("data/movies.json", "utf8")
const moviesList = JSON.parse(moviesData)
db.movies.insertMany(moviesList)

console.log("dodano filmy")

const reviewsData = require("fs").readFileSync("data/reviews.json", "utf8")
const reviewsList = JSON.parse(reviewsData)
db.reviews.insertMany(reviewsList)

console.log("dodano opinie i zakończono")


