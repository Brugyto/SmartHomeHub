// controllers/userController.js

let users = [
  { id: 1, name: 'Usuario1', email: 'usuario1@example.com' },
  { id: 2, name: 'Usuario2', email: 'usuario2@example.com' },
  // ... otros usuarios
];

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Obtener un usuario por ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = findUserById(userId);

  sendResponse(res, user);
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: generateUserId(), name, email };

  users.push(newUser);
  sendResponse(res, newUser, 201);
};

// Actualizar un usuario por ID
exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  const userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex], ...req.body };
    users[userIndex] = updatedUser;
    sendResponse(res, updatedUser);
  } else {
    sendError(res, 'Usuario no encontrado', 404);
  }
};

// Eliminar un usuario por ID
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  const userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.sendStatus(204);
  } else {
    sendError(res, 'Usuario no encontrado', 404);
  }
};

// Funciones de utilidad

function findUserById(userId) {
  return users.find(user => user.id === userId);
}

function findUserIndexById(userId) {
  return users.findIndex(user => user.id === userId);
}

function generateUserId() {
  return users.length + 1;
}

function sendResponse(res, data, status = 200) {
  res.status(status).json(data);
}

function sendError(res, message, status = 500) {
  res.status(status).json({ error: message });
}
