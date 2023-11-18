import puppeteer from "puppeteer";
const url = 'https://www.linkcorreios.com.br/?id=';


export default async function Getstatus({id}){


      
            const browser = await puppeteer.launch({
            headless: true, 
            });
            const page = await browser.newPage();
            await page.goto(`${url}${id}`);
            const els = await page.$$('div.singlepost');

            const result = new Object();
        
            const arr2 = [];
           
            for (let i = 0; i < els.length; i++) {
                const title = await els[i].$eval('h2', h2 => h2.textContent);
                console.log(title);
                result.titulo = title;
                const text = await els[i].$eval('p', p => p.textContent);
                result.detalhes = text;
            }

            var status = await page.$$eval('ul.linha_status > li', elements=> elements.map(item=>item.textContent));

              const chunks = 3;

             
             
              while(status.length > 0)
                {
                     const chunk = status.splice(0, chunks);
                     arr2.push(chunk);

                }


            result.historico = {...arr2};
            await browser.close();


            return result;
     
}

