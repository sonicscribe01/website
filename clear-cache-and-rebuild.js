const { execSync } = require('child_process');

try {
  // Clear Next.js cache
  console.log('Clearing Next.js cache...');
  execSync('rm -rf .next');
  
  // Delete node_modules
  console.log('Removing node_modules...');
  execSync('rm -rf node_modules');
  
  // Reinstall dependencies
  console.log('Reinstalling dependencies...');
  execSync('npm install');
  
  // Rebuild the project
  console.log('Rebuilding project...');
  execSync('npm run build');
  
  console.log('Cache cleared and project rebuilt successfully!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}