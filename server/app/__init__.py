from flask import Flask

from pymongo import MongoClient

app = Flask(__name__)

mongo = MongoClient("mongodb://localhost:27017")
db = mongo.reminiscence

from app import route

print("-" * 100)
print(f"\n{app.url_map}\n")
print("-" * 100)