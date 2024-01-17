
Integración de OneSignal en React Native - Documentación
Esta guía detallada te llevará a través de los pasos necesarios para integrar OneSignal en tu aplicación React Native y habilitar el envío de notificaciones. Asegúrate de seguir cada paso cuidadosamente para lograr una integración exitosa.

Enlaces de Referencia
Configuración del SDK Móvil de OneSignal
Generación de Credenciales de Firebase para OneSignal
Configuración del SDK de React Native en OneSignal
1. Creación de Cuenta en OneSignal
Accede al sitio oficial de OneSignal y crea una cuenta. El plan gratuito es suficiente para las etapas de prueba y desarrollo.

2. Creación de Cuenta en Firebase
Crea una cuenta en Firebase para utilizar su servidor de envío de mensajes.

3. Creación de la Aplicación en OneSignal
Después de crear tu cuenta en OneSignal, crea una aplicación. Si no se solicita desde el panel inicial, selecciona "New App" en la esquina superior derecha. Elige el nombre y selecciona el sistema operativo (puedes agregar más, como Android e iOS, posteriormente).

4. Creación de Proyecto en Firebase
Crea un proyecto en Firebase que servirá como servidor para la aplicación de OneSignal y el envío de notificaciones.

5. Conexión de Firebase con OneSignal
Ve a las configuraciones del proyecto de Firebase, luego a la pestaña "Cloud Messaging".
Selecciona la única opción disponible al hacer clic en los tres puntos a la derecha de "API de Cloud Messaging" y habilítala.
Ve a la pestaña "Cuentas de Servicio", genera una clave privada y súbela en OneSignal.
6. Selección del SDK del Proyecto
Selecciona React Native como el SDK para tu proyecto.

7. Configuración del Proyecto de React Native
Ejecuta npm install --save react-native-onesignal en tu proyecto.
Agrega las configuraciones al archivo raíz del proyecto:
javascript
Copy code
import { LogLevel, OneSignal } from 'react-native-onesignal';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize("AQUÍ DEBES COLOCAR EL API ID PROPORCIONADO POR ONE SIGNAL");
OneSignal.Notifications.requestPermission(true);
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notificación clickeada:', event);
});
8. Envío de Notificación
Después de completar las configuraciones, accede al panel de OneSignal y envía una notificación para probar.

¡Listo! Habrás completado la integración de OneSignal en tu aplicación React Native. Este procedimiento ya ha sido probado con éxito en una aplicación básica destinada a las pruebas de notificaciones desde OneSignal.