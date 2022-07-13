from app import db,ma

class Producto(db.Model):  # defino la tabla
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(100))
    descripcion=db.Column(db.String(100))
    categoria=db.Column(db.Integer)
    precio=db.Column(db.Integer)
    stock=db.Column(db.Integer)
    imagen=db.Column(db.String(255))
    descuento=db.Column(db.Integer)

    def __init__(self,nombre,descripcion,categoria,precio,stock,imagen,descuento):
        self.nombre=nombre
        self.descripcion=descripcion
        self.categoria=categoria
        self.precio=precio
        self.stock=stock
        self.imagen=imagen
        self.descuento=descuento

db.create_all()  # crea las tablas 

class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre', 'descripcion','categoria','precio','stock','imagen','descuento')
 
producto_schema=ProductoSchema()            # para crear un producto
productos_schema=ProductoSchema(many=True)  # multiples registros
