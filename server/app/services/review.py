from flask import jsonify, request
from app.controls.controls import Controls

class Review(Controls):
    def __init__(self):
        super().__init__()

    def create_review(self):
        print(request.form)
        print(request.files)
        self.review_image_form(request)
        return jsonify(message="asdf")

    def get_review_list(self,uid):
        result = []
        item = {}
        # item = {"uid" : uid}
        reviews = self.get_reviews(item)

        for review in reviews:
            review['_id'] = str(review.get('_id'))
            result.append(review)

        return jsonify(message="asdf", code=200, result=result)

    def remove_review(self):
        deleted = self.delete_review_data(request.get_json())
        print(deleted)
        
        return jsonify(message="delete", code=200)