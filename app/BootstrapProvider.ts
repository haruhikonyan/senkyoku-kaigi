'use client';

import { useEffect } from 'react';

function BootstrapProvider() {
  useEffect(() => {
    async function loadBootstrap() {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }

    loadBootstrap();
  }, []);

  return null;
}

export default BootstrapProvider;
