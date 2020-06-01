// Todos los metodos y datos estan disponibles en toda la aplicacion, gracias a Context

import React, { createContext } from 'react';

const FirebaseContext = createContext(null);

export default FirebaseContext;