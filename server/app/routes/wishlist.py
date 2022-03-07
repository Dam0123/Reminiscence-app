from app import app

from app.services.wishlist import WishList

post = ["POST"]
get = ["GET"]
both = ["GET", "POST"]

w = WishList()

app.add_url_rule("/my/wish/list", defaults={"uid" : None}, methods=get, view_func=w.get_my_wish_list)
app.add_url_rule("/my/wish/list/<uid>", methods=get, view_func=w.get_my_wish_list)

app.add_url_rule("/wish", methods=post, view_func=w.wish)