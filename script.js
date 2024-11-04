Vue.createApp({
    data() {
        return {
            nuevoProducto: {
                nombre: '',
                cantidad: 1,
                precio: 0
            },
            productos: []
        };
    },
    computed: {
        totalStock() {
            return this.productos.reduce((total, producto) => total + producto.cantidad, 0);
        },
        totalInvertido() {
            return this.productos.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
        }
    },
    methods: {
        agregarProducto() {
            if (this.nuevoProducto.nombre && 
                this.nuevoProducto.cantidad > 0 && 
                this.nuevoProducto.cantidad <= 12 && 
                this.nuevoProducto.precio >= 0) {
                
                this.productos.push({ ...this.nuevoProducto });
                this.nuevoProducto.nombre = '';
                this.nuevoProducto.cantidad = 1;
                this.nuevoProducto.precio = 0;
            } else {
                alert("Por favor, asegúrate de que todos los campos son válidos y que la cantidad no excede 12.");
            }
        },
        calcularImporte(producto) {
            return producto.cantidad * producto.precio;
        },
        formatoMoneda(value) {
            return `$${value.toFixed(2)}`;
        }
    }
}).mount('#app');
