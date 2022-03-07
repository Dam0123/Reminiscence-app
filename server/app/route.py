from flask import send_from_directory

from app.routes import rated, wishlist, review

from app import app

@app.route("/image", defaults={"name" : None})
@app.route("/image/<name>")
def render_image(name):
    if not name:
        return None
    print(name)
    
    return send_from_directory("static/image", name)