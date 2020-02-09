from flask import Flask # import main Flask class and request object
import flask
import requests
app = Flask(__name__) # flask app

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/query-example')
def query_example():
    r = requests.get('http://api.conceptnet.io/c/en/example').text
    return flask.jsonify(r)
    # keys = json.loads(r).keys() 
    # return json.dumps(keys)

if __name__ == '__main__':
  app.run(debug=True, port=5000) #run app in debug mode on port 5000
  query_example()