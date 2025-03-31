from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask (__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message' : 'HOla desde flask'})

if __name__ == '__main__':
    app.run(debug=True, port=3000)