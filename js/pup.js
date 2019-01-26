const puppeteer = require('puppeteer');
(async() => {
  // Запустим браузер
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'] }
  );
  // Откроем новую страницу
  const page = await browser.newPage();
  const pageURL = 'https://www.vesselfinder.com/ru/?imo=9701279';
  
  try {
    // Попробуем перейти по URL
    await page.goto(pageURL);
    console.log(`Открываю страницу: ${pageURL}`);
  } catch (error) {
    console.log(`Не удалось открыть
      страницу: ${pageURL} из-за ошибки: ${error}`);
  }

  // Найдём все ссылки на статьи   
  // const postsSelector = '#sb-pcl a';     
  const postsSelector = 'h2.f';     
  await page.waitForSelector(postsSelector, { timeout: 0 });
  
  const portName = await page.$eval(postsSelector, el => el.innerText);
  console.log(portName);
  

  // Всё сделано, закроем браузер
  await browser.close();
  
  process.exit()
})();