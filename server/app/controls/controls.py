from app.model.model import Model

class Controls(object):
    def __init__(self):
        super().__init__()
        self.m = Model()

    def __delete_object_value(self, item, key):
        del item[key]
    
    def __delete_object_values(self, item, keys):
        for key in keys:
            try:
                del item[key]
            except:
                continue

    def get_content(self, req):
        return self.m.find_one("content", req)

    def get_rated_data(self, request):
        return self.m.find_one("rated_list", request)

    def get_wish_data(self, request):
        return self.m.find_one("wish_list", request)

    def get_rated_dataset(self, request):
        return self.m.find_many("rated_list", request)

    def get_wishlist_dataset(self, request):
        return self.m.find_many("wish_list", request)

    def insert_content(self, request):
        return self.m.insert_one("content", request)

    def insert_rated_data(self, request):
        return self.m.insert_one("rated_list", request)
    
    def insert_wish_data(self, request):
        return self.m.insert_one("wish_list", request)

    def update_rated_data(self, prev, item):
        return self.m.update_one("rated_list", prev, item)
    
    def delete_wish_data(self, item):
        return self.m.delete_one("wish_list", item)