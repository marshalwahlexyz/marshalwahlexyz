from flask import Flask, jsonify
import ssl

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello, World with SSL!"})

if __name__ == "__main__":
    # Path to the SSL key and certificate files
    ssl_key_path = r'C:\Users\x\Desktop\cashloan.key'
    ssl_cert_path = r'C:\Users\x\Desktop\cashloan.crt'

    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)  # Use TLS server context
    context.load_cert_chain(ssl_cert_path, ssl_key_path)
    context.minimum_version = ssl.TLSVersion.TLSv1_2
    context.maximum_version = ssl.TLSVersion.TLSv1_3

    app.run(host='0.0.0.0', port=8443,debug=True, ssl_context=context)