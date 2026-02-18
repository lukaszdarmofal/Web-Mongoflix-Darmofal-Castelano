
# Struktura kolekcji `movies` (tutaj będą filmy)

```
_id: int,
movieName: string,
movieRelease: int,
movieGenres: Array<string>,
movieActors: Array<string>,
movieDirector: string
```

# Struktura kolekcji `reviews` (tutaj będą opinie)

```
_id: int,
movieName: string,
userName: string,
rating: float,
reviewContent: string
```

#### !! Dla kolekcji `reviews` podczas wypełniania kolekcji sprawdamy czy nie ma takiego samego `userName` dla `movieName` !!
