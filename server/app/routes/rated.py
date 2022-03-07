from app import app

from app.services.rated import Rated

post = ["POST"]
get = ["GET"]
both = ["GET", "POST"]

r = Rated()


app.add_url_rule("/detail", defaults={"id" : None, "uid" : None}, methods=get, view_func=r.get_content_detail)
app.add_url_rule("/detail/<id>", defaults={"uid" : None}, methods=get, view_func=r.get_content_detail)
app.add_url_rule("/detail/<id>/<uid>", methods=get, view_func=r.get_content_detail)
app.add_url_rule("/change/rated", methods=post, view_func=r.rated)

app.add_url_rule("/my/rated", defaults={"uid" : None}, methods=get, view_func=r.get_my_rating_list)
app.add_url_rule("/my/rated/<uid>", methods=get, view_func=r.get_my_rating_list)