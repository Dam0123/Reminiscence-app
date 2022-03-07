from flask import jsonify, request
from app.controls.controls import Controls

class Response(object):
    def response_failure(self, message="not found", code=404):
        return jsonify(message=message, code=code), code if code <= 450 else 404

    def response_success(self, result, message="response done", code=200):
        if not result:
            return self.response_failure(code=20000)
        return jsonify(message=message, code=code, result=result), code

class Rated(Controls):
    def __init__(self):
        super().__init__()
        self.response = Response()

    def get_my_rating_list(self, uid):
        item = {"uid" : uid}
        results = []
        res = self.get_rated_dataset(item)
        for result in res:
            del result['_id']
            result['vote_average'] = result.get('rating')
            results.append(result)
        # print(results)
        return self.response.response_success(results)

    def get_content_detail(self, id, uid):
        item = {"uid": uid, "id": id}
        print(item)
        if not id:
            return self.response.response_success(code=202, result={"loadDetail" : False})
        try:
            item['id'] = int(id)
        except:
            pass
        result = self.get_rated_data(item)
        w_result = self.get_wish_data(item)

        is_wish = False
        if result or w_result:
            if not result and w_result:
                result = w_result

            del result['_id']
            wish = self.get_wish_data(item)
            is_wish = wish != None
            result['isWish'] = is_wish

            return self.response.response_success(result)
        return self.response.response_failure()

    def rated(self):
        data = request.get_json()
        id = data.get('id', None)
        uid = data.get('uid', None)
        item = {"uid": uid, "id": id}
        result = self.get_rated_data(item)
        # item['rating'] = data.get('rating')
        
        if not result:
            # c_inserted = self.insert_content(data)
            inserted = self.insert_rated_data(data)
            print(f"inserted : {inserted}")
        else:
            updated = self.update_rated_data(item, {"rating" : data.get('rating')})
            print(item)
            print(f"updated : {updated}")
        return self.response.response_success({"code": "hello"})