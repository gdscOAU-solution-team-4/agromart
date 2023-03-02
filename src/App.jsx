import { Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
export default function App() {
  const [isServiceWorkerSupported, setIsServiceWorkerSupported] = useState(false);
  const [isServiceWorkerRegistered, setIsServiceWorkerRegistered] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      setIsServiceWorkerSupported(true);
      navigator.serviceWorker.register('/src/service-worker.js')
        .then(registration => {
          console.log('Service worker registered:', registration);
          setIsServiceWorkerRegistered(true);
        })
        .catch(error => {
          console.log('Service worker registration failed:', error);
        });
    }
  }, []);

  const handleUnregisterClick = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration()
        .then(registration => {
          if (registration) {
            registration.unregister()
              .then(() => {
                console.log('Service worker unregistered');
                setIsServiceWorkerRegistered(false);
              })
              .catch(error => {
                console.log('Service worker unregistration failed:', error);
              });
          }
        });
    }
  };

  return (
    <>
          {isServiceWorkerSupported &&
        <div>
          {isServiceWorkerRegistered ?
            <div>
              Service worker is registered
              <button onClick={handleUnregisterClick}>Unregister</button>
            </div>
            :
            <div>Service worker is not registered</div>
          }
        </div>
      }
      {/* renders all children i.e all other routes */}
      <Outlet />
    </>
  )
}
