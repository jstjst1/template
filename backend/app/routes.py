from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

# Home route
@main.route('/')
def home():
    return jsonify({'message': 'Welcome to the Home Page'})

# Additional routes for demonstration
@main.route('/page1')
def page1():
    return jsonify({'message': 'Welcome to Page 1'})

@main.route('/page1/subpage1')
def subpage1():
    return jsonify({'message': 'Welcome to Subpage 1 of Page 1'})

@main.route('/page2')
def page2():
    return jsonify({'message': 'Welcome to Page 2'})

@main.route('/page2/subpage2')
def subpage2():
    return jsonify({'message': 'Welcome to Subpage 2 of Page 2'})

@main.route('/page3')
def page3():
    return jsonify({'message': 'Welcome to Page 3'})

@main.route('/page3/subpage3')
def subpage3():
    return jsonify({'message': 'Welcome to Subpage 3 of Page 3'})
