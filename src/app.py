# Importo el modulo Flask, Jsonify y request del archivo flask
from flask import Flask, jsonify, request
from flask_cors import CORS  # Importo el modulo CORS del archivo flask_cors

# Importo el modulo SQLAlchemy del archivo flask_sqlalchemy
from flask_sqlalchemy import SQLAlchemy
# Importo el modulo Marshmallow del archivo flask_marshmallow
from flask_marshmallow import Marshmallow

app = Flask(__name__)  # Creo un objeto 'app' de Flask
# le paso como parametro la propiedad __name__
# app es mi aplicacion de servidor, va a ser mi servidor

CORS(app)  # Instancio el objeto CORS y le paso como parametro la propiedad app
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://sql10503850:1TcTipTp9b@sql10.freemysqlhosting.net/sql10503850'  # Configuro la propiedad SQLALCHEMY_DATABASE_URI
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/flaskmysql'
#                                                        user:clave@localhost/nombreBaseDatos
# Configuro el modulo SQLAlchemy
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Instancio el objeto db con SQLAlchemy y le paso como parametro la propiedad app
db = SQLAlchemy(app)
# Instancio el objeto ma con Marshmallow y le paso como parametro la propiedad app
ma = Marshmallow(app)


# Creo una clase para la tabla de la base de datos
class Producto(db.Model):   # La clase Producto hereda de db.Model
    # define los campos de la tabla
    # crea la columna id de la tabla
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))  # crea la columna nombre de la tabla
    precio = db.Column(db.Integer)  # crea la columna precio de la tabla
    stock = db.Column(db.Integer)  # crea la columna stock de la tabla

    def __init__(self, nombre, precio, stock):  # define el constructor de la clase
        # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.nombre = nombre  # le asigna el valor de nombre a la propiedad nombre
        self.precio = precio  # le asigna el valor de precio a la propiedad precio
        self.stock = stock  # le asigna el valor de stock a la propiedad stock


db.create_all()  # crea la tabla en la base de datos
#  ************************************************************


class ProductoSchema(ma.Schema):  # Creo una clase para el esquema de la base de datos
    class Meta:  # Defino la clase Meta
        # defino los campos que quiero mostrar
        fields = ('id', 'nombre', 'precio', 'stock')


producto_schema = ProductoSchema()            # para crear un producto nuevo
# multiples registros para crear un producto nuevo
productos_schema = ProductoSchema(many=True)


# Creo una ruta para obtener todos los productos
@app.route('/productos', methods=['GET'])
def get_Productos():  # Creo una funcion para obtener todos los productos
    # obtengo todos los productos de la base de datos
    all_productos = Producto.query.all()
    result = productos_schema.dump(all_productos)  # serializo los productos
    return jsonify(result)  # retorno el resultado en formato json


# Creo una ruta para obtener un producto
@app.route('/productos/<id>', methods=['GET'])
def get_producto(id):  # Creo una funcion para obtener un producto
    # obtengo un producto de la base de datos
    producto = Producto.query.get(id)
    # retorno el producto en formato json
    return producto_schema.jsonify(producto)


@app.route('/productos', methods=['POST'])  # POST para crear un nuevo producto
def create_producto():  # Creo una funcion para crear un nuevo producto
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre = request.json['nombre']  # obtengo el nombre del json
    precio = request.json['precio']  # obtengo el precio del json
    stock = request.json['stock']  # obtengo el stock del json
    new_producto = Producto(nombre, precio, stock)  # creo un nuevo producto
    db.session.add(new_producto)  # lo agrego a la base de datos
    db.session.commit()  # lo guardo en la base de datos
    return producto_schema.jsonify(new_producto)  # lo devuelvo al cliente


# PUT para actualizar un producto
@app.route('/productos/<id>', methods=['PUT'])
def update_producto(id):  # le paso el id del producto que quiero actualizar
    # obtengo el producto que quiero actualizar
    producto = Producto.query.get(id)

    nombre = request.json['nombre']  # obtengo el nombre del json
    precio = request.json['precio']  # obtengo el precio del json
    stock = request.json['stock']  # obtengo el stock del json

    producto.nombre = nombre  # actualizo el nombre del producto
    producto.precio = precio  # actualizo el precio del producto
    producto.stock = stock  # actualizo el stock del producto
    db.session.commit()  # lo guardo en la base de datos
    return producto_schema.jsonify(producto)  # lo devuelvo al cliente


# DELETE para eliminar un producto
@app.route('/producto/<id>', methods=['DELETE'])
def delete_producto(id):  # le paso el id del producto que quiero eliminar
    # obtengo el producto que quiero eliminar
    producto = Producto.query.get(id)
    db.session.delete(producto)  # lo elimino de la base de datos
    db.session.commit()  # lo guardo en la base de datos
    return producto_schema.jsonify(producto)  # lo devuelvo al cliente


# programa principal
if __name__ == '__main__':  # Sí el nombre del archivo es el mismo que el nombre de la clase
    app.run(debug=True, port=5000)
    # Inicio el servidor app con el parámetro debug activado,
    # por si hay cambios en la fuente se reinicie la aplicacion
    # y le paso el puerto donde se va a ejecutar nuestro servidor
    # (pueden utilizar otro puerto)
