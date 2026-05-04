import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        ueber_mich: 'ueber-mich.html',
        leistungen: 'leistungen.html',
        projekte: 'projekte.html',
        blog: 'blog.html',
        kontakt: 'kontakt.html',
        game: 'game.html',
        lab: 'lab.html',
        messtechnik: 'leistungen/messtechnik.html',
        laborautomatisierung: 'leistungen/laborautomatisierung.html',
        pcb_design: 'leistungen/pcb-design.html',
        pruefmittelmanagement: 'leistungen/pruefmittelmanagement.html',
        schaltungsdesign: 'leistungen/schaltungsdesign.html',
        elektroinstallation: 'leistungen/elektroinstallation.html'
      }
    }
  }
});


