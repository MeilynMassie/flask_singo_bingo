#OVERVIEW: Login page for user to create username, join lobby, and pick an avatar
import os
from flask import Blueprint, render_template, jsonify
from app.services.db import db_add_user

login_bp = Blueprint('login', __name__)

@login_bp.route('/login')
def login():
    return render_template('login.html')