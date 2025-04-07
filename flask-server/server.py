from flask import Flask

app = Flask(__name__, static_folder="../client/build", static_url_path="/")

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/api/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

if __name__ == "__main__":
    app.run()