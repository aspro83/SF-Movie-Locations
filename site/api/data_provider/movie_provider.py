import json


def import_data():

    data = json.load(open('moviedata.json'))

    columns = data['meta']['view']['columns']
    movies_raw = data['data']
    column_names = [column['fieldName'] for column in columns]
    movies = []

    for m in movies_raw:
        movie = dict(zip(column_names, m))
        movies.append(movie)

    return movies


def get_movies():

    movies = import_data()
    return movies
