from flask import request, jsonify
from config import app, db
from models import Contact
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError
import os

# ✅ Enable CORS globally (Allow any frontend)
CORS(app, supports_credentials=True)

# ✅ Add CORS headers to all responses (for dev compatibility)
@app.after_request
def add_cors_headers(response):
    origin = request.headers.get('Origin')
    response.headers['Access-Control-Allow-Origin'] = origin or '*'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response

# ✅ Create Contact
@app.route("/create_contact", methods=["POST", "OPTIONS"])
def create_contact():
    if request.method == "OPTIONS":
        return '', 204

    data = request.get_json(force=True)
    first_name = data.get("firstName")
    last_name = data.get("lastName")
    email = data.get("email")

    if not first_name or not last_name or not email:
        return jsonify({"message": "You must include a first name, last name and email"}), 400

    new_contact = Contact(first_name=first_name, last_name=last_name, email=email)

    try:
        db.session.add(new_contact)
        db.session.commit()
        return jsonify({"message": "User created!"}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "Email already exists"}), 409
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e)}), 400

# ✅ Get All Contacts
@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = [c.to_json() for c in contacts]
    return jsonify({"contacts": json_contacts})

# ✅ Update Contact
@app.route("/update_contact/<int:user_id>", methods=["PUT", "OPTIONS"])
def update_contact(user_id):
    if request.method == "OPTIONS":
        return '', 204

    contact = Contact.query.get(user_id)
    if not contact:
        return jsonify({"message": "User not found"}), 404

    data = request.get_json(force=True)
    contact.first_name = data.get("firstName", contact.first_name)
    contact.last_name = data.get("lastName", contact.last_name)
    contact.email = data.get("email", contact.email)

    try:
        db.session.commit()
        return jsonify({"message": "Contact updated!"}), 200
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "Email already exists"}), 409
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e)}), 400

# ✅ Delete Contact
@app.route("/delete_contact/<int:user_id>", methods=["DELETE", "OPTIONS"])
def delete_contact(user_id):
    if request.method == "OPTIONS":
        return '', 204

    contact = Contact.query.get(user_id)
    if not contact:
        return jsonify({"message": "User not found"}), 404

    db.session.delete(contact)
    db.session.commit()
    return jsonify({"message": "User deleted!"}), 200

# ✅ Production-Ready Run
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    port = int(os.environ.get("PORT", 8000))  # Required for Render
    app.run(host="0.0.0.0", port=port)
