#controlador es el intermediario entre la vista y el modelo
# aqui ocurre la logica del programa
from app import *
from python.modelos.producto_modelo import *

@app.route('/productos',methods=['GET'])
def get_Productos():
    all_productos=Producto.query.all()   # es una lista
    result=productos_schema.dump(all_productos)
    return jsonify(result)
 
@app.route('/productos/<id>',methods=['GET'])
def get_producto(id):
    producto= Producto.query.get(id)
    return producto_schema.jsonify(producto)

@app.route('/productos', methods=['POST']) # crea ruta o endpoint
def create_producto():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    descripcion=request.json['descripcion']
    categoria=request.json['categoria']
    precio=request.json['precio']
    stock=request.json['stock']
    imagen=request.json['imagen']
    descuento=request.json['descuento']

    new_producto=Producto(nombre,descripcion,categoria, precio,stock,imagen,descuento)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)


@app.route('/productos/<id>' ,methods=['PUT'])
def update_producto(id):
    producto=Producto.query.get(id)   
   
    nombre=request.json['nombre']
    descripcion=request.json['descripcion']
    categoria=request.json['categoria']
    precio=request.json['precio']
    stock=request.json['stock']
    imagen=request.json['imagen']
    descuento=request.json['descuento']
 
    producto.nombre=nombre
    producto.descripcion=descripcion
    producto.categoria=categoria
    producto.precio=precio
    producto.stock=stock
    producto.imagen=imagen
    producto.descuento=descuento
    
    db.session.commit()
    return producto_schema.jsonify(producto)
 

@app.route('/productos/<id>',methods=['DELETE'])
def delete_producto(id):
    producto=Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)
