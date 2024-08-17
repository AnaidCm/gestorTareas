const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', //Punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos css
                use: ['style-loader', 'css-loader'], //Librerías louders que sirven para procesar archivos CSS
            },
            {
                test: /\.js$/, //Regex sirve para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node modules
                use: {
                    loader: 'babel-loader', //Loader para llevar JS moderno a JS antigui para que sea compatible con todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'] 
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Herramienta para generar mapas de código para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta desde el cual el servidor tomará los archivos
        compress: true, //Habilitar compresión gzip
        port:9000, //Puerto del servidor de desarrollo
    },
};