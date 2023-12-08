// controllers/deviceController.js

let devices = [
  { id: 1, name: 'Lámpara', type: 'Iluminación' },
  { id: 2, name: 'Termostato', type: 'Climatización' },
  // ... otros dispositivos
];

// Obtener todos los dispositivos
exports.getAllDevices = (req, res) => {
  res.json(devices);
};

// Obtener un dispositivo por ID
exports.getDeviceById = (req, res) => {
  const deviceId = parseInt(req.params.deviceId);
  const device = devices.find(device => device.id === deviceId);

  if (device) {
    res.json(device);
  } else {
    res.status(404).json({ error: 'Dispositivo no encontrado' });
  }
};

// Crear un nuevo dispositivo
exports.createDevice = (req, res) => {
  const { name, type } = req.body;
  const newDevice = { id: devices.length + 1, name, type };

  devices.push(newDevice);
  res.status(201).json(newDevice);
};

// Actualizar un dispositivo por ID
exports.updateDevice = (req, res) => {
  const deviceId = parseInt(req.params.deviceId);
  const deviceIndex = devices.findIndex(device => device.id === deviceId);

  if (deviceIndex !== -1) {
    const updatedDevice = { ...devices[deviceIndex], ...req.body };
    devices[deviceIndex] = updatedDevice;
    res.json(updatedDevice);
  } else {
    res.status(404).json({ error: 'Dispositivo no encontrado' });
  }
};

// Eliminar un dispositivo por ID
exports.deleteDevice = (req, res) => {
  const deviceId = parseInt(req.params.deviceId);
  devices = devices.filter(device => device.id !== deviceId);
  res.sendStatus(204);
};
