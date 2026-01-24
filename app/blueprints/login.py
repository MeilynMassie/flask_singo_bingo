#OVERVIEW: Login page for user to create username, join lobby, and pick an avatar
from pathlib import Path
from flask import Blueprint, render_template, jsonify
from app.services.db import db_add_user, db_get_avatars
from app.blueprints.welcome import generateLobbyCode

login_bp = Blueprint('login', __name__)

@login_bp.route('/')
@login_bp.route('/login')
def login():
    return render_template('login.html', lobby_code=generateLobbyCode())

@login_bp.route('/create-user/<username>/<lobby_code>/<avatar>')
def create_user(username, lobby_code, avatar):
    print(f"Creating user: {username}, Lobby Code: {lobby_code}, Avatar: {avatar}")
    db_add_user(username, lobby_code)
    # return jsonify({'status': 'success', 'message': f'User {username} created in lobby {lobby_code} with avatar {avatar}.'})

@login_bp.route('/db/GetAvatarImages')
def get_avatar_images():
    avatars = db_get_avatars()
    avatar_list = [{'id': avatar[0], 'filePath': 'static/imgs/avatars/'+avatar[1]} for avatar in avatars]
    return jsonify(avatar_list)

# def getStaticImagesPath(filename):
#     # Get base directory of the project
#     baseDir = Path(__file__).resolve().parent.parent.parent
#     staticDir = baseDir / 'app' / 'static' / 'imgs' / 'avatars'
#     path = staticDir / filename
#     return str(path)