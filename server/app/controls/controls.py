from datetime import datetime

from bson import ObjectId

from app.model.model import Model

from app.utils.assets import save_item

FORMAT = "%Y-%m-%d"

class Controls(object):
    def __init__(self):
        super().__init__()
        self.m = Model()

    def get_date(self):
        return f"{datetime.strftime(datetime.now(), FORMAT)}"

    def __delete_object_value(self, item, key):
        del item[key]
    
    def __delete_object_values(self, item, keys):
        for key in keys:
            try:
                del item[key]
            except:
                continue

    def upload_files(self, files):
        filenames = []
        if type(files) == list:
            if len(files) >= 6:
                return 400, None

        for file in files:
            try:
                filename = file.filename
                filenames.append(filename)
                if filename == '': continue
                
                mime_type = file.mimetype
                _format = file.filename.split(".")[-1]
                if _format[0] != '.':
                    _format = f".{_format}"
            except:
                return 400, None
            try:
                if filename and filename != '':
                    save_item(filename, file)
            except:
                return 500, None

        return 200, ",".join(filenames)

    def make_insert_item(self, form, filename, mode="insert"):
        item = {
            "uid" : form.get("uid"),
            "review" : form.get("text"),
            "createdAt" : self.get_date(),
            "filename" : filename,
        }
        return item
            
    def review_image_form(self, request):
        files = request.files.getlist("image")
        
        upload, filenames = self.upload_files(files)
        if upload == 200:
            item = self.make_insert_item(request.form, filenames)
            self.m.insert_one("review", item)
            
        return upload

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

    def delete_review_data(self, item):
        item['_id'] = ObjectId(item.get('_id'))
        return self.m.delete_one("review", item)

    def get_reviews(self, item):
        return self.m.find_many("review", item).sort("_id", -1)