import json
import uuid
from datetime import datetime
import random
import string

# Constants
MAX_TODO_TITLE_LENGTH = 128
MAX_TODO_DESCRIPTION_LENGTH = 256
MAX_TAG_LENGTH = 32
MAX_TODO_LIST_SIZE = 5 * 1024 * 1024  # 5MB
MAX_TAG_COUNT = 128

# Function to generate random string
def random_string(length):
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for i in range(length))

# Function to generate a random datetime string
def random_datetime():
    year = random.randint(2024, 2030)
    month = random.randint(1, 12)
    day = random.randint(1, 28)  # Assume February has at most 28 days
    hour = random.randint(0, 23)
    minute = random.randint(0, 59)
    second = random.randint(0, 59)
    return f"{year}-{month:02d}-{day:02d} {hour:02d}:{minute:02d}:{second:02d}"

# Function to generate a random todo
def generate_todo():
    title = random_string(MAX_TODO_TITLE_LENGTH)
    description = random_string(MAX_TODO_DESCRIPTION_LENGTH)
    expired_day = random_datetime()
    tag_index = random.randint(0, len(tags) - 1)
    return {
        "title": title,
        "description": description,
        "expired_day": expired_day,
        "tag": tag_index
    }

# Function to generate a random list of todos until the JSON string reaches a maximum size
def generate_todo_list(max_size):
    todos = []
    current_size = 0
    while current_size < max_size:
        todo = generate_todo()
        todos.append(todo)
        current_size += len(json.dumps(todo, ensure_ascii=False, separators=(',', ':')))
    return todos

# Generate random tags
tags = [random_string(MAX_TAG_LENGTH) for _ in range(MAX_TAG_COUNT)]

# Generate todo list
todos = generate_todo_list(MAX_TODO_LIST_SIZE)

# Generate UUID for user
user_uuid = str(uuid.uuid4())

# Generate list name
list_name = random_string(64)

# Create JSON object
json_data = {
    "user_uuid": user_uuid,
    "list_name": list_name,
    "tags": tags,
    "todos": todos
}

# Convert JSON object to JSON string
json_string = json.dumps(json_data, ensure_ascii=False, separators=(',', ':'))

# Print number of todos added
print("Number of todos added:", len(todos))

# Write JSON string to a file
with open("todo_list.json", "w") as file:
    file.write(json_string)

print("JSON string has been written to todo_list.json")
