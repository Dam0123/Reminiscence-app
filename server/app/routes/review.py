from app import app

from app.services.review import Review

post = ["POST"]
get = ["GET"]
both = ["GET", "POST"]

r = Review()

app.add_url_rule("/create/review", methods=post, view_func=r.create_review)
app.add_url_rule("/get/review/list", defaults={"uid" : None}, methods=get, view_func=r.get_review_list)
app.add_url_rule("/get/review/list/<uid>", methods=get, view_func=r.get_review_list)
app.add_url_rule("/remove/review", methods=post, view_func=r.remove_review)
