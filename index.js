const express = require('express');
const app = express();

const userRoutes = require('./routes/user.router'); // Sesuaikan dengan lokasi rute Anda

app.use(express.json());
app.use('/users', userRoutes); // Gunakan '/users' atau rute yang Anda inginkan

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
