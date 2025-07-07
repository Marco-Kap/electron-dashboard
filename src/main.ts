const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // Disables Node.js integration
      contextIsolation: true, // Isolates context between the renderer and main process
      preload: path.join(__dirname, 'preload.js'), // Optional: use if you want to expose some node functionality safely
    },
  });

  // Load the React app
  mainWindow.loadURL('http://localhost:8080'); // Or path.join(__dirname, 'dist/index.html') if using a file
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
