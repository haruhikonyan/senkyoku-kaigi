'use client';

import { useEffect } from 'react';

function BootstrapProvider() {
  useEffect(() => {
    async function loadBootstrap() {
      const bootstrap = await import(
        'bootstrap/dist/js/bootstrap.bundle.min.js'
      );
      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]',
      );
      [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
      );
    }

    loadBootstrap();
  }, []);

  return null;
}

export default BootstrapProvider;
