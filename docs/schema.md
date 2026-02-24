
## Struktura kolekcji `movies` (tutaj będą filmy)


|     POLE       |   TYP DANYCH   |           OPIS           |     PRZYKŁAD     |
|:--------------:|:--------------:|:------------------------:|:----------------:|
| _id            | int            | id filmu                 | 1                |
| movieName      | string         | nazwa filmu              | Hobbit           |
| movieRelease   | int            | rok wydania filmu        | 2015             |
| movieGenres    | Array<string>  | lista z gatunkami filmu  | [akcja, sci-fi]  |
| movieActors    | Array<string>  | lista aktorów filmu      | [Osoba1, osoba2] |
| movieDirector  | string         | reżyser filmu            | Łukasz Darmofał  |


## Struktura kolekcji `reviews` (tutaj będą opinie)

|     POLE       |   TYP DANYCH   |           OPIS           |     PRZYKŁAD     |
|:--------------:|:--------------:|:------------------------:|:----------------:|
| _id            | int            | id opinii                | 1                |
| movieName      | string         | nazwa filmu              | Hobbit           |
| rating         | float          | ocena filmu (0-5)        | 3.2              |
| reviewContent  | string         | zawartość opinii         | wspaniały film   |


#### !! Dla kolekcji `reviews` podczas wypełniania kolekcji sprawdamy czy nie ma takiego samego `userName` dla `movieName` !!
