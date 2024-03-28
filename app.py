from flask import Flask, request, jsonify, render_template

app = Flask(__name__)
# Create index route to template/mainPage.html
@app.route('/')
def index():
    return render_template('mainPage.html')

@app.route('/todo/create', methods=['POST'])
def create_todo():
    # Get the JSON data from the POST request
    data = request.form
    # Print the JSON data to the console
    print(data)
    # Return a JSON response
    return data

# If __name__ == '__main__' then run the app
if __name__ == '__main__':
    app.run(debug=True)