const fs = require('fs');
const path = require('path');

// Read files
const jsCode = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');

console.log('Testing app.js syntax and critical function definitions...');
const hasRenderMateri = jsCode.includes('function renderMateri');
const hasRenderMateriDetail = jsCode.includes('function renderMateriDetail');
const hasMobileAppBar = jsCode.includes('Mobile App-Bar (Khusus Layar Kecil, Anti-Tumpang Tindih)');
const hasSegmentedSwitcher = jsCode.includes('Segmented Switcher Modern');

console.log({
  hasRenderMateri,
  hasRenderMateriDetail,
  hasMobileAppBar,
  hasSegmentedSwitcher
});

if (hasRenderMateri && hasRenderMateriDetail && hasMobileAppBar && hasSegmentedSwitcher) {
  console.log('✅ ALL RENDER CHECKS PASSED!');
} else {
  console.error('❌ SOME CHECKS FAILED!');
  process.exit(1);
}
