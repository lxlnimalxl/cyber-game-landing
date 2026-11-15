const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // 1. Desktop Full Viewport & Sections
  await page.setViewport({ width: 1520, height: 1000, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5181/', { waitUntil: 'networkidle0' });
  await page.waitForSelector('#home');
  await new Promise(r => setTimeout(r, 2000));

  // Desktop Hero
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '01-desktop-hero.png'),
    clip: { x: 0, y: 0, width: 1520, height: 1000 }
  });
  console.log('Captured 01-desktop-hero.png');

  // Full page screenshot
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '00-full-page.png'),
    fullPage: true
  });
  console.log('Captured 00-full-page.png');

  // Desktop About Section
  const aboutEl = await page.$('#about');
  if (aboutEl) {
    await aboutEl.screenshot({
      path: path.join(SCREENSHOT_DIR, '02-desktop-about.png')
    });
    console.log('Captured 02-desktop-about.png');
  }

  // Desktop Services Section
  const servicesEl = await page.$('#services');
  if (servicesEl) {
    await servicesEl.screenshot({
      path: path.join(SCREENSHOT_DIR, '03-desktop-services.png')
    });
    console.log('Captured 03-desktop-services.png');
  }

  // Desktop Media Section
  const mediaEl = await page.$('#media');
  if (mediaEl) {
    await mediaEl.screenshot({
      path: path.join(SCREENSHOT_DIR, '04-desktop-media.png')
    });
    console.log('Captured 04-desktop-media.png');
  }

  // Desktop FAQ Section
  const faqEl = await page.$('#faq');
  if (faqEl) {
    await faqEl.screenshot({
      path: path.join(SCREENSHOT_DIR, '05-desktop-faq.png')
    });
    console.log('Captured 05-desktop-faq.png');
  }

  // Modal Screenshot: Open Get Started Modal
  await page.evaluate(() => {
    const btn = document.querySelector('button.bg-cyber-gradient');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '06-modal-operative-pass.png'),
    clip: { x: 0, y: 0, width: 1520, height: 1000 }
  });
  console.log('Captured 06-modal-operative-pass.png');

  // 2. Tablet Viewport
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5181/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '07-tablet-view.png')
  });
  console.log('Captured 07-tablet-view.png');

  // 3. Mobile Viewport (iPhone 14 Pro)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5181/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '08-mobile-view.png')
  });
  console.log('Captured 08-mobile-view.png');

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
