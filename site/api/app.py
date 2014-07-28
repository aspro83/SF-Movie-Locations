#!flask/bin/python
from flask import Flask, Response, request
from data_provider import movie_provider
import json

app = Flask(__name__)


@app.route('/')
def index():
    return "No such path exists. Try /movies."


@app.route('/movies/', methods = ['GET'])
def get_movies():
    callback = request.args.get('callback',False)
    json_data = json.dumps(movie_provider.get_movies())
    if callback:
        content = "{0}({1})".format(callback, json_data)
        mimetype ='application/javascript'
        return Response(content,  mimetype=mimetype)
    else:
        return json_data


if __name__ == '__main__':
    app.run(debug = True)
