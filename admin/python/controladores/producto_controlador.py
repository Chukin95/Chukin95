# controlador es el intermediario entre la vista y el modelo
# aqui ocurre la logica del programa
from app import *
from python.modelos.producto_modelo import *
from sqlalchemy import desc, asc


@app.route('/productos', methods=['GET'])
def get_Productos():
    productos_filtrados = Producto.query.all()   # es una lista
    result = productos_schema.dump(productos_filtrados)
    return jsonify(result)


@app.route('/productos/<id>', methods=['GET'])
def get_producto(id):
    producto = Producto.query.get(id)
    return producto_schema.jsonify(producto)


@app.route('/productos', methods=['POST'])  # crea ruta o endpoint
def create_producto():
    # print(request.json)  # request.json contiene el json que envio el cliente
    nombre = request.json['nombre']
    descripcion = request.json['descripcion']
    categoria = request.json['categoria']
    precio = request.json['precio']
    stock = request.json['stock']
    imagen = request.json['imagen']
    descuento = request.json['descuento']

    new_producto = Producto(nombre, descripcion, categoria,
                            precio, stock, imagen, descuento)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)


@app.route('/productos/<id>', methods=['PUT'])
def update_producto(id):
    producto = Producto.query.get(id)

    nombre = request.json['nombre']
    descripcion = request.json['descripcion']
    categoria = request.json['categoria']
    precio = request.json['precio']
    stock = request.json['stock']
    imagen = request.json['imagen']
    descuento = request.json['descuento']

    producto.nombre = nombre
    producto.descripcion = descripcion
    producto.categoria = categoria
    producto.precio = precio
    producto.stock = stock
    producto.imagen = imagen
    producto.descuento = descuento

    db.session.commit()
    return producto_schema.jsonify(producto)


@app.route('/productos/<id>', methods=['DELETE'])
def delete_producto(id):
    producto = Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)


@app.route('/productos/filtros', methods=['GET'])
def get_ProductosFiltrados(): # filtrar por categoria, nombre, precio, stock, descuento ordenar por precio nombre
    categoria = request.args.get('categoria')
    filtrar = request.args.get('filtrar')
    orden = request.args.get('orden')
    if categoria == "":
        categoria = None
    if filtrar == "":
        filtrar = None
    if orden == "":
        orden = 'DESC'
    
    if categoria is not None:
        if filtrar == 'precio':
            if orden == 'ASC':
                productos_filtrados = Producto.query.filter_by(categoria=categoria).order_by(asc(Producto.precio)).all()
            else:
                productos_filtrados = Producto.query.filter_by(categoria=categoria).order_by(desc(Producto.precio)).all()
        elif filtrar == 'nombre':
            if orden == 'ASC':
                productos_filtrados = Producto.query.filter_by(categoria=categoria).order_by(asc(Producto.nombre)).all()
            else:
                productos_filtrados = Producto.query.filter_by(categoria=categoria).order_by(desc(Producto.nombre)).all()
        elif filtrar == 'stock':
            if orden == 'ASC':
                productos_filtrados = Producto.query.filter_by(categoria=categoria).order_by(asc(Producto.stock)).all()
            else:
                productos_filtrados = Producto.query.filter_by(categoria=categoria).order_by(desc(Producto.stock)).all()
        elif filtrar == 'descuento':
            if orden == 'ASC':
                productos_filtrados = Producto.query.filter_by(categoria=categoria).order_by(asc(Producto.descuento)).all()
            else:
                productos_filtrados = Producto.query.filter_by(categoria=categoria).order_by(desc(Producto.descuento)).all()
    elif filtrar is not None:
        if filtrar == 'precio':
            if orden == 'ASC':
                productos_filtrados = Producto.query.order_by(asc(Producto.precio)).all()
            else:
                productos_filtrados = Producto.query.order_by(desc(Producto.precio)).all()
        elif filtrar == 'nombre':
            if orden == 'ASC':
                productos_filtrados = Producto.query.order_by(asc(Producto.nombre)).all()
            else:
                productos_filtrados = Producto.query.order_by(desc(Producto.nombre)).all()
        elif filtrar == 'stock':
            if orden == 'ASC':
                productos_filtrados = Producto.query.order_by(asc(Producto.stock)).all()
            else:
                productos_filtrados = Producto.query.order_by(desc(Producto.stock)).all()
        elif filtrar == 'descuento':
            if orden == 'ASC':
                productos_filtrados = Producto.query.order_by(asc(Producto.descuento)).all()
            else:
                productos_filtrados = Producto.query.order_by(desc(Producto.descuento)).all()
    else:
        productos_filtrados = Producto.query.all()
    result = productos_schema.dump(productos_filtrados)
    #productos_filtrados = Producto.query.filter(categoria=request.args.get('categoria'), filtrar=request.args.get('filtrar')).order_by(request.args.get('orden'))
    #productos_filtrados = Producto.query.filter(categoria=request.args.get('categoria')).order_by(request.args.get('orden'))

    #result = productos_schema.dump(productos_filtrados)
    return jsonify(result)
