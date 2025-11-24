from . import users_bp
from .schemas import UserCreate, UserUpdate
from pydantic import ValidationError
from .services import UserService
from app.utils import api_response
from app.constants import messages
from flask import request, jsonify

@users_bp.route('/', methods=['POST'])
def create_users():
    try:
        user_json = request.form.to_dict()

        user_data = UserCreate(**user_json)
  
    except ValidationError as e:
        return api_response.error(messages.INVALID_DATA, 400, e.errors())
    
    profile_file = request.files.get('profile_image')

    user_out = UserService.create_user(user_data, profile_file)

    return api_response.success(messages.USER_CREATED, user_out.model_dump(), 201)

@users_bp.route('/<user_id>', methods=['GET'])
def get_user(user_id):
    user_out = UserService.get_user(user_id)
    if user_out is None:
        return api_response.error(messages.USER_NOT_FOUND, 404)
    return api_response.success(messages.USER_FETCHED, user_out.model_dump(), 200)

@users_bp.route('/', methods=['GET'])
def get_all_users():
    users = UserService.get_all_users()
    users_list = [user.model_dump() for user in users]
    return api_response.success(messages.USER_FETCHED, users_list, 200)

@users_bp.route('/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    success = UserService.delete_user(user_id)
    if not success:
        return api_response.error(messages.USER_NOT_FOUND, 404)
    return api_response.success(messages.USER_DELETED, 200)

@users_bp.route('/<user_id>', methods=['PATCH'])
def update_user(user_id):
    try:
        user_json = request.form.to_dict()

        user_data = UserUpdate(**user_json)
    
    except ValidationError as e:
        return api_response.error(messages.INVALID_DATA, 400, e.errors())

    profile_file = request.files.get('profile_image')

    user_out = UserService.update_user(user_id, user_data, profile_file)

    if user_out is None:
        return api_response.error(messages.USER_NOT_FOUND, 404)

    return api_response.success(messages.USER_UPDATED, user_out.model_dump(), 200)
