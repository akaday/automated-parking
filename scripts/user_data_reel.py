import pymongo
import sys

def main():
    # Connect to MongoDB
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    db = client["parking"]
    users_collection = db["users"]

    # Retrieve user data
    user_data = users_collection.find()

    # Print user data
    for user in user_data:
        print(user)

if __name__ == "__main__":
    main()
