from app import db

class Model(object):
    def __init__(self):
        super().__init__()

        self.__collections = {
            "content" : db.content,
            "rated_list" : db.rated_list,
            "wish_list" : db.wish_list,
        }

    def __insert_one(self, col_name, item):
        collection = self.__collections.get(col_name, None)
        if not collection:
            return None
        return collection.insert_one(item)

    def __update_one(self, col_name, prev, item):
        collection = self.__collections.get(col_name, None)
        if not collection:
            return None
        return collection.update_one(prev, {"$set" : item})

    def __delete_one(self, col_name, item):
        collection = self.__collections.get(col_name, None)
        if not collection:
            return None
        return collection.delete_one(item)

    def __find_one(self, col_name, item):
        collection = self.__collections.get(col_name, None)
        if not collection:
            return None
        return collection.find_one(item)

    def __find_many(self, col_name, item):
        collection = self.__collections.get(col_name, None)
        if not collection:
            return None
        return collection.find(item)

    def insert_one(self, collection, item):
        return self.__insert_one(collection, item).inserted_id

    def update_one(self, collection, prev, item):
        return self.__update_one(collection, prev, item).raw_result
    
    def delete_one(self, collection, item):
        return self.__delete_one(collection, item).raw_result

    def find_one(self, collection, item):
        return self.__find_one(collection, item)

    def find_many(self, collection, item):
        return self.__find_many(collection, item)