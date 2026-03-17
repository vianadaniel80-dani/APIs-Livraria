import "dotenv/config";
import app from './src/app.js'

app.listen(process.env.PORT_SERVER, () => {
    console.log('Servidor escutando');
});

