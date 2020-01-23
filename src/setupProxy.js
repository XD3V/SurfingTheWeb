module.exports = function(app) {
    app.use(
      '/proxy'
      proxy({
        target: 'http://localhost:3001',
        changeOrigin: true,
      })
    );
  };