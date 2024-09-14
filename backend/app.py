from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Database connection
db_config = {
    'user': 'root',
    'password': 'admin123',  # Replace with your MySQL root password
    'host': '127.0.0.1',
    'database': 'finance_tracker'
}

def get_db_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        return None

# Root route to fix the 404 error
@app.route('/')
def home():
    return "Welcome to the Personal Finance Tracker API!"

# Route to handle transactions (GET and POST)
@app.route('/transactions', methods=['GET', 'POST'])
def manage_transactions():
    if request.method == 'POST':
        data = request.json
        conn = get_db_connection()
        if conn is None:
            return jsonify({'error': 'Database connection failed'}), 500
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO transactions (amount, category, date) VALUES (%s, %s, %s)',
            (data['amount'], data['category'], data['date'])
        )
        conn.commit()
        conn.close()
        return jsonify({'status': 'success'}), 201

    if request.method == 'GET':
        conn = get_db_connection()
        if conn is None:
            return jsonify({'error': 'Database connection failed'}), 500
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM transactions')
        transactions = cursor.fetchall()
        conn.close()
        return jsonify(transactions)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
