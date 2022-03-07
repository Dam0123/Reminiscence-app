from flask import jsonify, request
from app.controls.controls import Controls

class Response(object):
    def response_failure(self, message="not found", code=404):
        return jsonify(message=message, code=code), code if code <= 450 else 404

    def response_success(self, result, message="response done", code=200):
        if not result:
            return self.response_failure(code=20000)
        return jsonify(message=message, code=code, result=result), code

class WishList(Controls):
    def __init__(self):
        super().__init__()
        self.response = Response()

    def get_my_wish_list(self, uid):
        item = {"uid" : uid}
        results = []
        res = self.get_wishlist_dataset(item)
        
        for result in res:
            del result['_id']
            average = result['vote_average']
            result['vote_average'] = result.get('rating', average)
            results.append(result)
        print(len(results))
        return self.response.response_success(results)

    def wish(self):
        is_wish = False
        data = request.get_json()
        id = data.get('id', None)
        uid = data.get('uid', None)
        item = {"uid": uid, "id": id}
        result = self.get_wish_data(item)
        
        if not result:
            inserted = self.insert_wish_data(data)
            print(f"inserted : {inserted}")
            is_wish = True
        else:
            delete = self.delete_wish_data(item)
            print(f"delete : {delete}")
            is_wish = False

        return self.response.response_success({"wish": is_wish})