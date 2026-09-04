/* =========================================================
	CATALOGO DE PRODUTOS
	========================================================= */
const products = [
{id:1,name:'Monitor Gamer ASUS ROG Strix OLED 27", QHD, 280Hz, 0.03ms, QD-OLED, G-SYNC, Adaptive-Sync, HDR10, A.I. Assistant Technology - XG27ACDMS',brand:'ASUS',category:'Monitores',price:4999.99,old:6222.21,rating:4.8,reviews:328,sale:true,best:true,visual:'◉',image:'image/Pc roxo.png',description:'É um monitor QD-OLED de 26,5", com resolução 1440p, 280 Hz e resposta de 0,03 ms, oferecendo imagens rápidas e cores precisas. Conta com HDR 400 True Black, 99% DCI-P3 e proteção contra burn-in com o ASUS OLED Care Pro e sensor de proximidade.Também possui recursos de IA para jogos, ajustes ergonômicos completos, suporte VESA, conexão HDMI 2.1, DisplayPort 1.4 e USB-C, além de G-SYNC e Adaptive Sync para uma jogabilidade mais fluida.',specs:['27 polegadas','QHD 2560x1440','280 Hz','QD-OLED'],power:120},
{id:2,name:'Placa-Mãe Asus TUF Gaming B550M-PLUS, AMD AM4, mATX , DDR4, M.2, Aura para fita RGB - 90MB14A0-C1BAY0',brand:'ASUS',category:'Placas-mãe',price:740.79,old:1022.57,rating:4.2,reviews:187,sale:true,best:true,visual:'◆',image:'image/Placa mãe.png',description:'A TUF Gaming B550M-PLUS é uma placa-mãe AMD focada em alto desempenho, estabilidade e durabilidade. Possui alimentação reforçada, suporte a Ryzen, memórias e SSDs rápidos, além de um sistema de refrigeração eficiente para manter VRM e SSD M.2 em temperaturas ideais.',specs:['Socket AM4','Chipset B550','mATX','DDR4'],power:55,socket:'AM4',ram:'DDR4',form:'mATX'},
{id:3,name:'Gabinete Gamer Liketec Hurricane, Mid Tower, ATX, Frontal Mesh, Lateral em Vidro Temperado, 3x Fans, Preto- LC-AT-HURRICANE-3FR',brand:'Liketec',category:'Gabinetes',price:149.99,old:177.77,rating:4.4,reviews:94,sale:true,best:false,visual:'▦',image:'image/Gabinete preto led.png',description:'O Gabinete Gamer Liketec Hurricane foi desenvolvido para configurações que exigem bom fluxo de ar, compatibilidade com placas-mãe ATX e visual gamer.Seu painel frontal em mesh permite a entrada direta de ar, trabalhando em conjunto com as três ventoinhas Rainbow inclusas para auxiliar na refrigeração dos componentes internos.O painel lateral em vidro temperado oferece ampla visualização do setup, enquanto a estrutura totalmente preta proporciona um acabamento moderno e versátil. É uma opção indicada para computadores gamers, integradores e usuários que buscam ventilação frontal eficiente com iluminação RGB fixa.',specs:['Mid Tower','ATX','Mesh frontal','3x Fans'],power:0,form:'ATX'},
{id:4,name:'Fonte MSI MPG Ai1600TS PCIE5, 1600W, 80 Plus Titanium, Modular, Silent, PFC Ativo, Com Cabo, Preto - MPGAi1600TSPCIE5',brand:'MSI',category:'Fontes',price:3399.99,old:3888.88,rating:3.8,reviews:211,sale:true,best:true,visual:'▣',image:'image/fonte.png',description:'A fonte possui 1600W de potência e certificação 80 PLUS Titânio, oferecendo alta eficiência e estabilidade. É totalmente modular, possui 2 conectores PCIe 5.0 de 600W, várias conexões para GPUs e armazenamento, além de ventoinha FDB de 135 mm silenciosa e diversos sistemas de proteção elétrica.',specs:['1600W','80 Plus Titanium','Modular','PCIe 5.0'],power:1600},
{id:5,name:'Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo), Cache 36MB, 8 Núcleos, 16 Threads, AM4, Sem Vídeo Integrado - 100-100000926WOF',brand:'AMD',category:'Processadores',price:1299.99,old:2686.16,rating:4.9,reviews:402,sale:true,best:true,visual:'▰',image:'image/processador ryzen 5.png',description:'O Ryzen 7 5700X é um processador de 8 núcleos e 16 threads, com até 4,6 GHz, focado em jogos e tarefas pesadas. Utiliza a arquitetura Zen 3 de 7 nm, oferecendo bom desempenho e eficiência energética. Não possui vídeo integrado.',specs:['3.4GHz (4.6GHz Max Turbo)','Cache 36MB','8 Núcleos','16 Threads'],power:105,socket:'AM4',ram:'DDR4'},
{id:6,name:'Memória RAM Kingston Fury Beast, 16GB, 3200MHz, DDR4, CL16, Preto - KF432C16BB1/16',brand:'Kingston',category:'Memórias RAM',price:749.99,old:1660.05,rating:4.7,reviews:156,sale:true,best:false,visual:'▣',image:'image/Memoria ram.png',description:'A Kingston Fury Beast 16GB DDR4 oferece 3200 MHz de velocidade e latência CL16, garantindo bom desempenho em jogos e multitarefas. Possui suporte a XMP 2.0, configuração fácil, boa estabilidade e dissipador de calor para manter a temperatura controlada.',specs:['16 GB','3200 MHz','DDR4','CL16'],power:5,ram:'DDR4'},
{id:7,name:'Placa de Vídeo RX 7600 Challenger ASRock AMD Radeon, 8GB GDDR6 - 90-GA41ZZ-00UANF',brand:'ASRock',category:'Placas de vídeo',price:1819.99,old:2823.52,rating:4.8,reviews:76,sale:false,best:false,visual:'▥',image:'image/Placa video.png',description:'A placa de vídeo possui duas ventoinhas para boa refrigeração e suporta 4K e 8K. Conta com PCIe 4.0, AMD Eyefinity para múltiplos monitores e tecnologias AMD que melhoram gráficos, desempenho, streaming e qualidade de imagem.',specs:['8 GB GDDR6','Radeon RX 7600','PCIe 4.0','Dual Fan'],power:165},
{id:8,name:'SSD SanDisk WD Green SATA, 500GB, 2.5", Leitura: 545MB/s, Gravação: 430MB/s - WDS500G5G0A',brand:'SanDisk',category:'SSDs',price:599.99,old:699.99,rating:5.0,reviews:143,sale:false,best:true,visual:'▭',image:'image/ssd.png',description:'O SSD WD Green SATA de 500GB oferece velocidade de leitura de até 545 MB/s, deixando o PC mais rápido para iniciar e abrir programas. É resistente, econômico e silencioso, possui formato 2,5", software para clonagem e monitoramento, além de 3 anos de garantia.',specs:['500 GB','SATA','2.5"','545 MB/s'],power:5,storage:'SATA'},
{id:9,name:'HD Seagate Pipeline Slim ST1000VM002 SATA 3 1TB 5900rpm 3.5" Armazenamento Interno Desempenho Eficiente',brand:'Seagate',category:'HDs',price:675.12,old:799,rating:4.8,reviews:87,sale:false,best:false,visual:'▰',image:'image/hd.png',description:'O HD Seagate Pipeline Slim de 1TB oferece bastante espaço para armazenar arquivos, com SATA III, velocidade de 5900 RPM e baixo consumo de energia. É silencioso, gera pouco calor e é adequado para uso contínuo, como PCs e sistemas de vigilância.',specs:['1 TB','SATA III','5900 RPM','3.5"'],power:8,storage:'SATA'},
{id:10,name:'Air Cooler Para Processador Deepcool Ak400 Bk, Intel/Amd - Preto',brand:'DeepCool',category:'Coolers',price:139.90,old:179.90,rating:4.1,reviews:266,sale:false,best:true,visual:'◉',image:'image/coller.png',description:'O DeepCool AK400 é um cooler eficiente e silencioso, com capacidade de dissipar até 220W. Possui 4 heat pipes de cobre, ventoinha de 120 mm com rolamento FDB e controle PWM, oferecendo bom desempenho e ótimo custo-benefício para processadores Intel e AMD.',specs:['120 mm','4 heat pipes','Até 220W TDP','PWM'],power:5,sockets:['AM4','AM5','LGA1700','LGA1200']},
{id:11,name:'PC Gamer Lamia III, AMD Ryzen 5 3400G, 16GB DDR4, SSD 480GB',brand:'Lamia',category:'PC Gamer Montado',price:2229.99,old:4214.36,rating:5.0,reviews:132,sale:false,best:false,visual:'◉',image:'image/Pc montado.png',description:'Computador de entrada/intermediário equipado com AMD Ryzen 5 3400G (4 núcleos e 8 threads), 16 GB de RAM DDR4 e SSD de 480 GB. Ele utiliza os gráficos integrados Radeon Vega, ou seja, não possui placa de vídeo dedicada. É adequado para estudos, trabalho, navegação e jogos mais leves, mas tem limitações para jogos atuais mais pesados.',specs:['AMD Ryzen 5 3400G','16 GB DDR4','SSD 480 GB','Gráficos Vega integrados'],power:65},
{id:12,name:'CoolerMaster M2000 - 2000W Power Supply Unit, Fully Modular, 80+ Platinium, Black',brand:'Cooler Master',category:'Fontes',price:3156.57,rating:4.7,reviews:221,sale:false,best:true,visual:'◉',image:'image/coller 2000W.png',description:'A Cooler Master M2000 Platinum é uma fonte de alimentação (PSU) de 2000 W, totalmente modular e com certificação 80 PLUS Platinum. Ela foi projetada para sistemas de altíssimo consumo, como servidores, máquinas de renderização e sistemas de computação pesada. Possui formato ATX, uma linha de 12 V e ventilador de 135 mm.',specs:['2000W','80+ Platinum','Totalmente modular','Ventilador 135mm'],power:2000},
{id:13,name:'Teclado Mecânico Gamer Rise Mode GM1 Black, RGB, Switch Outemu Brown - RM-TCM-GM1-BBRO',brand:'Rise Mode',category:'Teclados',price:99.99,old:149.99,rating:4.8,reviews:68,sale:false,best:false,visual:'▦',image:'image/teclado.png',description:'Compacto e leve, o produto oferece ótima liberdade de movimento, com teclas macias e responsivas para maior precisão. A iluminação RGB personalizável também proporciona mais estilo e imersão durante os jogos.',specs:['Switch Outemu Brown','RGB','ABNT2','USB-C'],power:5},
{id:14,name:'Mouse Gamer sem Fio Attack Shark X3 Tri-Mode, 26.000 DPI, Sensor Óptico PAW3395, 6 Botões Programáveis - Vermelho',brand:'Attack Shark',category:'Mouses',price:199.99,old:399.99,rating:4.6,reviews:109,sale:false,best:false,visual:'▰',image:'image/Mouse.png',description:'O Attack Shark X3 é um mouse gamer ultraleve de apenas 49 g, equipado com sensor PixArt PAW3395 de até 26.000 DPI, oferecendo alta precisão e velocidade. Possui conexão tri-mode (2.4 GHz, Bluetooth 5.2 e USB-C) e autonomia de até 200 horas. Conta ainda com switches Kailh GM 8.0, pés 100% PTFE e software para personalização de botões, polling rate e LOD.',specs:['26.000 DPI','Sensor PAW3395','Tri-mode (2.4G/BT/USB-C)','49g ultraleve'],power:2},
{id:15,name:'Headset Gamer Rise Mode Moom, Rainbow, Driver 50mm, USB e P2, Branco - RM-HS-M-W',brand:'Rise Mode',category:'Headsets',price:131.99,rating:4.6,reviews:53,sale:false,best:false,visual:'▱',image:'image/Headset.png',description:'Construído com materiais duráveis e confortáveis, possui alto-falantes de 50mm que oferecem som claro, graves profundos e agudos nítidos, além de alta sensibilidade para captar todos os detalhes do jogo e um microfone que garante comunicação clara.',specs:['Intel Core Ultra 7','16 GB RAM','SSD 1 TB','OLED 14” 3K'],power:65},
{id:16,name:'Webcam Rise Mode Vision Double Mic, 1080P, 30 FPS, 2x Microfone Digital, USB, Preto - RM-WECM-1080D-B',brand:'Rise Mode',category:'Câmeras',price:119.99,old:211.75,rating:4.6,reviews:75,sale:false,best:false,visual:'◉',image:'image/webcam.png',description:'A Webcam Rise Mode Vision Double Mic é ideal para videoconferências, streaming e gravações, oferecendo imagens nítidas em Full HD 1080p, áudio claro e um campo de visão de 70° para capturar você e o ambiente ao redor.',specs:['4K Ultra HD','HDR','FOV 90º','Windows Hello'],power:5},
{id:17,name:'Controle Nintendo Switch Joy-Con, Vermelho e Azul - HBCAJAEA1',brand:'Nintendo',category:'Controles',price:479.90,rating:4.7,reviews:88,sale:false,best:false,visual:'▰',image:'image/joystick.png',description:'Os controles Nintendo Switch Joy-Con vermelho e azul são versáteis e podem ser usados separadamente, juntos em um suporte ou encaixados no console. Também permitem jogar com amigos em jogos compatíveis e possuem acelerômetro e giroscópio para controles de movimento.',specs:['Wireless','Acelerômetro','Giroscópio','USB-C'],power:2},
{id:18,name:'Controle Sony Dualsense Playstation 5, Sem Fio, Branco - Ps5',brand:'Sony',category:'Controles',price:410.00,rating:4.8,reviews:190,sale:false,best:false,visual:'◌',image:'image/ps5.png',description:'O controle Sony DualSense para PlayStation 5 oferece uma experiência mais imersiva com resposta tátil e gatilhos adaptáveis. Possui microfone e alto-falante integrados, entrada para headset, sensor de movimento, botão Create e bateria recarregável, além de conexão sem fio via Bluetooth.',specs:['Wireless','Feedback háptico','Microfone integrado','USB-C'],power:3},
{id:19,name:'PC Gamer Branco Intel i7 Placa De Vídeo Rx 550 Gb Memoria Ram 16gb SSD 240GB',brand:'ZipZap',category:'PC Gamer Montado',price:2299.90,old:2903.91,rating:4.7,reviews:91,sale:false,best:true,visual:'◆',image:'image/pc branco.png',description:'O PC é montado profissionalmente, testado e atualizado antes do envio, utilizando componentes de marcas conhecidas e com garantia conforme cada peça. A máquina é enviada em embalagem adequada e conta com suporte pós-venda. O computador é novo, possui 12 meses de garantia contra defeitos de fabricação e permite a utilização de peças próprias, desde que compatíveis. Em jogos, apresenta desempenho estimado de 45–60 FPS no GTA 5 RP, 60–90 FPS no CS2, 120–140 FPS no Valorant e 50–80 FPS no Fortnite. A configuração conta com Intel Core i7-3770, placa-mãe H61, 16 GB de RAM DDR3, Radeon RX 550 4 GB, SSD de 240 GB, fonte bivolt e gabinete gamer aquário branco, com Windows 10 em versão TRIAL e sem chave de ativação.',specs:['Intel Core i7-3770','Radeon RX 550 4 GB','16 GB DDR3','SSD 240 GB','Fonte bivolt'],power:263},
{id:20,name:'Water Cooler Kraken 240',brand:'NZXT',category:'Coolers',price:749,old:849,rating:4.7,reviews:61,sale:false,best:false,visual:'◉',image:'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?auto=format&fit=crop&w=600&q=80',description:'Refrigeração líquida eficiente com monitoramento de temperatura em tempo real.',specs:['Radiador 240mm','Socket AM5 / LGA1700','Bomba Asetek','RGB'],power:8,sockets:['AM5','LGA1700']},
{id:21,name:'Headset Gamer HyperX Cloud III, Drivers 53mm, Som Surround 7.1, Microfone Removível, Preto',brand:'HyperX',category:'Headsets',price:499.99,old:699.99,rating:4.9,reviews:215,sale:true,best:true,visual:'◉',image:'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=600&q=80',description:'O HyperX Cloud III oferece som imersivo com drivers de 53mm, surround virtual 7.1 e microfone removível com redução de ruído. Conforto premium com espuma viscoelástica e estrutura em alumínio.',specs:['Drivers 53mm','Surround 7.1','Microfone removível','Alumínio'],power:3}
];

/* Categorias e icones */
const categories=[['Processadores','◉'],['Placas de vídeo','◆'],['Placas-mãe','▦'],['Memórias RAM','▥'],['SSDs','▰'],['HDs','▰'],['Fontes','▣'],['Gabinetes','▥'],['Monitores','▭'],['Teclados','⌨'],['Mouses','◒'],['Headsets','◉'],['Controles','◌'],['Notebooks','▱'],['Câmeras','◉'],['Impressoras','▤'],['Outros','＋']];
const categoryIcons={'Processadores':'microchip','Placas de vídeo':'expansion-card','Placas-mãe':'developer-board','Memórias RAM':'memory','SSDs':'harddisk','HDs':'harddisk','Fontes':'power','Gabinetes':'desktop-tower','Monitores':'monitor','Teclados':'keyboard','Mouses':'mouse','Headsets':'headphones','Controles':'gamepad-2','Notebooks':'laptop','Câmeras':'camera','Impressoras':'printer','Outros':'view-grid'};
const builderParts=[['processador','Processador','Processadores'],['motherboard','Placa-mãe','Placas-mãe'],['ram','Memória RAM','Memórias RAM'],['gpu','Placa de vídeo','Placas de vídeo'],['ssd','SSD','SSDs'],['hd','HD','HDs'],['psu','Fonte','Fontes'],['case','Gabinete','Gabinetes'],['cooler','Cooler','Coolers']];
const builderAccessories=[['monitor','Monitor','Monitores'],['keyboard','Teclado','Teclados'],['mouse','Mouse','Mouses'],['headset','Headset','Headsets'],['controller','Controle','Controles'],['webcam','Webcam','Câmeras']];

let state={view:'home',search:'',favorites:JSON.parse(localStorage.getItem('zipzap-favorites')||'[]'),cart:JSON.parse(localStorage.getItem('zipzap-cart')||'[]'),builder:{},user:JSON.parse(localStorage.getItem('zipzap-session')||'null')};
const $=s=>document.querySelector(s); const $$=s=>document.querySelectorAll(s); const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const imgSrc=p=>encodeURI(p.image||'');
const promoPreview=()=>products.slice(0,4);
const promoProducts=()=>products.slice(0,6);
const discountPct=p=>p.old&&p.old>p.price?Math.round((1-p.price/p.old)*100):0;

function productCard(p){const fav=state.favorites.includes(p.id);const off=discountPct(p);return `<article class="product-card"><div class="product-image" data-product="${p.id}">${p.sale&&off?'<span class="product-tag">- '+off+'%</span>':''}<button class="favorite-button ${fav?'active':''}" data-favorite="${p.id}" aria-label="Favoritar">${fav?'♥':'♡'}</button><img src="${imgSrc(p)}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="visual" style="display:none">${p.visual}</span></div><div class="product-info"><span class="product-brand">${p.brand} / ${p.category}</span><div class="product-name" data-product="${p.id}">${p.name}</div><div><span class="stars">★★★★★</span><span class="reviews">${Number(p.rating).toFixed(1)} (${p.reviews})</span></div>${p.sale&&p.old?`<div class="old-price">${money(p.old)}</div>`:'<div class="old-price empty-price">&nbsp;</div>'}<div class="price">${money(p.price)}</div><div class="pix">${money(Math.round(p.price*.95))} no PIX</div><button class="card-buy" data-add="${p.id}">Comprar <span>→</span></button></div></article>`}

function renderCategories(){ $('#categoryList').innerHTML=categories.map(([name])=>{const icon=name==='Processadores'?'https://api.iconify.design/fa6-solid:microchip.svg?color=white':`https://api.iconify.design/mdi:${categoryIcons[name]}.svg?color=white`;return `<button class="category-item" data-category="${name}"><span class="category-circle"><img src="${icon}" alt=""></span><span>${name}</span></button>`}).join('') }
function renderFeatured(){ const el=$('#featuredProducts'); if(!el) return; el.innerHTML=promoPreview().map(productCard).join('') }
function renderDashboardPromotions(){ $('#dashboardPromotions').innerHTML=promoPreview().map(p=>{const off=discountPct(p);return `<article class="dashboard-promo-card" data-category="${p.category}"><div class="dashboard-promo-top"><span>★ ${Number(p.rating).toFixed(1).replace('.',',')}</span><button data-favorite="${p.id}" aria-label="Favoritar"><img src="https://api.iconify.design/fa6-solid:heart.svg?color=white" alt=""> </button><button data-add="${p.id}" aria-label="Adicionar ao carrinho"><img src="https://api.iconify.design/fa6-solid:cart-shopping.svg?color=white" alt=""></button></div><div class="dashboard-promo-image" data-product="${p.id}"><img src="${imgSrc(p)}" alt="${p.name}"></div><strong data-product="${p.id}">${p.name}</strong>${p.old?`<span class="dashboard-old-price">${money(p.old)}</span>`:''}<div class="dashboard-price">${money(p.price)}${off?` <em>-${off}%</em>`:''}</div></article>`}).join('') }
function shortName(p,max=32){const name=(p.name||'').split(',')[0].split(' - ')[0].trim();return name.length>max?name.slice(0,max-1)+'…':name}
function recItem(p){return `<button type="button" class="recommendation-item" data-product="${p.id}"><span class="recommendation-visual"><img src="${imgSrc(p)}" alt=""></span><div><strong>${shortName(p)}</strong><b>${money(p.price)}</b></div></button>`}
function renderRecommendations(){
  const el=$('#dashboardRecommendations');
  if(!el) return;
  const recs=[products.find(p=>p.id===8),products.find(p=>p.id===4)].filter(Boolean);
  const gpus=products.filter(p=>p.category==='Placas de vídeo').slice(0,2);
  const gaming=[products.find(p=>p.id===11), products.find(p=>p.id===19)].filter(Boolean);
  const ssds=products.filter(p=>p.category==='SSDs').slice(0,2);
  el.innerHTML=`<div class="recommendation-card"><h3 data-view="promotions">Recomendados para você <span>›</span></h3>${recs.map(recItem).join('')}</div>
    <div class="recommendation-card"><h3 data-category="Placas de vídeo">Placas de vídeo <span>›</span></h3>${gpus.map(recItem).join('')||'<p class="empty-builder">Em breve</p>'}</div>
    <div class="recommendation-card"><h3 data-view="gaming">PC gamer <span>›</span></h3>${gaming.map(recItem).join('')}</div>
    <div class="recommendation-card"><h3 data-category="SSDs">Mais vendidos em SSD <span>›</span></h3>${ssds.map(recItem).join('')}</div>`;
}
renderDashboardPromotions();
renderRecommendations();
function showView(view, opts={}){if(view==='best'){showView('catalog',{best:true});return}state.view=view; $$('.view').forEach(v=>v.classList.remove('active')); const target=$(`#${view}View`);if(target)target.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});if(view==='catalog')renderCatalog(opts);if(view==='promotions')renderPromotions();if(view==='favorites')renderFavorites();if(view==='builder')renderBuilder();if(view==='gaming')renderGaming();if(view==='checkout')renderCheckout();}
function renderPromotions(){const list=promoProducts();$('#promotionProducts').innerHTML=list.map(productCard).join('');const more=$('#showMorePromos');if(more) more.style.display='none'}
function renderCatalog(opts={}){let list=[...products];const query=opts.search??(opts.category?'':state.search);if(opts.category){state.search='';if($('#searchInput'))$('#searchInput').value=''}if(query)list=list.filter(p=>(p.name+' '+p.brand+' '+p.category).toLowerCase().includes(query.toLowerCase()));const cat=opts.category??$('#categoryFilter')?.value;const groups={Hardware:['Processadores','Placas de vídeo','Placas-mãe','Memórias RAM','SSDs','HDs','Fontes','Gabinetes','Coolers'],Periféricos:['Monitores','Teclados','Mouses','Headsets','Controles','Câmeras','Notebooks','Impressoras']};if(groups[cat])list=list.filter(p=>groups[cat].includes(p.category));else if(cat)list=list.filter(p=>p.category===cat);const brand=$('#brandFilter')?.value;if(brand)list=list.filter(p=>p.brand===brand);const price=Number($('#priceFilter')?.value||10000);list=list.filter(p=>p.price<=price);const rating=Number($('#ratingFilter')?.value||0);if(rating)list=list.filter(p=>p.rating>=rating);if(opts.best||$('#bestFilter')?.checked)list=list.filter(p=>p.best);if($('#saleFilter')?.checked)list=list.filter(p=>p.sale);const sort=$('#sortFilter')?.value;if(sort==='price-low')list.sort((a,b)=>a.price-b.price);if(sort==='price-high')list.sort((a,b)=>b.price-a.price);if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);$('#catalogProducts').innerHTML=list.length?list.map(productCard).join(''):'<div class="favorite-empty">Nenhum produto encontrado para estes filtros.</div>';$('#resultCount').textContent=`${list.length} produtos encontrados`;if(opts.category)$('#catalogTitle').textContent=opts.category;else if(query)$('#catalogTitle').textContent=`Busca: ${query}`}
function openProduct(id){const p=products.find(x=>x.id===id);if(!p)return;showView('product',{id});$('#productDetail').innerHTML=`<div class="product-detail"><div class="detail-visual"><img src="${imgSrc(p)}" alt="${p.name}"></div><div class="detail-copy"><p class="eyebrow">${p.brand} / ${p.category}</p><h1>${p.name}</h1><div><span class="stars">★★★★★</span><span class="reviews">${p.rating} (${p.reviews} avaliações)</span></div><p class="detail-description">${p.description}</p><div class="detail-price">${money(p.price)}</div><div class="detail-pix">${money(Math.round(p.price*.95))} no PIX</div><div class="installments">ou 10x de ${money(p.price/10)} sem juros</div><div class="detail-actions"><button class="button button-dark" data-add="${p.id}">Adicionar ao carrinho <span>→</span></button><button class="outline-button" data-favorite="${p.id}">${state.favorites.includes(p.id)?'♥ Favoritado':'♡ Favoritar'}</button></div><p class="warranty-note" style="color:var(--muted)">✓ Estoque disponível &nbsp; ✓ Garantia de fábrica &nbsp; ✓ Envio em até 24h</p></div><div class="reviews-block"><p class="eyebrow">O QUE A COMUNIDADE DIZ</p><h2>Avaliações verificadas</h2>${reviewsFor(p).map(review=>`<div class="review"><div class="review-head"><strong>${review.name}</strong><span>★★★★★</span><span>${review.date}</span></div><h4>${review.title}</h4><p>${review.text}</p><button class="helpful">Isto foi útil? (${review.helpful})</button></div>`).join('')}</div></div>`}
function reviewsFor(p){return[{name:'Marina S.',date:'12/06/2025',title:'Entrega e produto impecáveis',text:`${p.name} superou minhas expectativas. Chegou muito bem embalado e o desempenho é exatamente o descrito.`,helpful:24},{name:'Rafael M.',date:'03/05/2025',title:'Excelente custo-benefício',text:'Compra tranquila, atendimento rápido e produto original. Recomendo para quem está montando um setup.',helpful:18}]}
function addCart(id,qty=1){const item=state.cart.find(x=>x.id===id);if(item)item.qty+=qty;else state.cart.push({id,qty});save();showToast('Produto adicionado ao carrinho');}
function save(){localStorage.setItem('zipzap-favorites',JSON.stringify(state.favorites));localStorage.setItem('zipzap-cart',JSON.stringify(state.cart));localStorage.setItem('zipzap-session',JSON.stringify(state.user));updateBadges()}
function updateBadges(){$('#favoritesBadge').textContent=state.favorites.length;$('#cartBadge').textContent=state.cart.reduce((n,x)=>n+x.qty,0)}
function toggleFavorite(id){const i=state.favorites.indexOf(id);if(i>-1){state.favorites.splice(i,1);showToast('Removido dos favoritos')}else{state.favorites.push(id);showToast('Adicionado aos favoritos')}save();renderFeatured();renderDashboardPromotions();if(state.view==='catalog')renderCatalog();if(state.view==='favorites')renderFavorites();if(state.view==='promotions')renderPromotions();}
function renderFavorites(){$('#favoriteProducts').innerHTML=state.favorites.length?products.filter(p=>state.favorites.includes(p.id)).map(productCard).join(''):'<div class="favorite-empty"><h2>Seu espaço de escolhas</h2><p>Toque no coração de um produto para guardá-lo aqui.</p><button class="button button-dark" data-view="promotions">Explorar ofertas →</button></div>'}

// ===== AUTENTICAÇÃO =====
function getUsers(){return JSON.parse(localStorage.getItem('zipzap-users')||'[]')}
function saveUsers(users){localStorage.setItem('zipzap-users',JSON.stringify(users))}
function registerUser(name,email,password){
  const users=getUsers();
  if(users.find(u=>u.email===email)){showToast('E-mail já cadastrado');return false}
  users.push({name,email,password});
  saveUsers(users);
  state.user={name,email};
  save();
  showToast('Conta criada com sucesso!');
  return true;
}
function loginUser(email,password){
  const users=getUsers();
  const user=users.find(u=>u.email===email&&u.password===password);
  if(!user){showToast('E-mail ou senha incorretos');return false}
  state.user={name:user.name,email:user.email};
  save();
  showToast('Login realizado!');
  return true;
}
function logoutUser(){
  state.user=null;
  save();
  showToast('Você saiu da conta');
}

// ===== PEDIDOS =====
async function fetchUserOrders(email){
  try{
    const response = await fetch(`/api/orders?email=${encodeURIComponent(email)}`);
    if(!response.ok) throw new Error('Erro ao buscar pedidos');
    return await response.json();
  }catch(e){
    console.error('Erro ao buscar pedidos:', e);
    return [];
  }
}

// ===== PAINEL =====
function panel(type){
  let content='';
  if(type==='cart'){
    content=`<p class="panel-eyebrow">SUA SACOLA / ${state.cart.reduce((n,x)=>n+x.qty,0)} ITENS</p><h2 class="panel-title">Seu carrinho</h2>${cartContent()}`;
  } else if(type==='account'){
    if(state.user){
      content=`<p class="panel-eyebrow">ZIPZAP ACCOUNT</p><h2 class="panel-title">Olá, ${state.user.name}!</h2>
      <div class="account-tabs" style="display:flex;gap:5px;border-bottom:1px solid var(--line);margin-bottom:20px">
        <button class="account-tab active" data-tab="profile" style="padding:8px 12px;font-size:11px;border-bottom:2px solid var(--ink);cursor:pointer">Meus dados</button>
        <button class="account-tab" data-tab="orders" style="padding:8px 12px;font-size:11px;border-bottom:2px solid transparent;cursor:pointer">Meus pedidos</button>
        <button class="account-tab" data-tab="addresses" style="padding:8px 12px;font-size:11px;border-bottom:2px solid transparent;cursor:pointer">Endereços</button>
        <button class="account-tab" data-tab="security" style="padding:8px 12px;font-size:11px;border-bottom:2px solid transparent;cursor:pointer">Segurança</button>
      </div>
      <div id="accountTabContent">
        <div class="account-section" data-section="profile">
          <h3 style="margin-top:0">Dados da conta</h3>
          <p><strong>Nome:</strong> ${state.user.name}</p>
          <p><strong>E-mail:</strong> ${state.user.email}</p>
          <button class="panel-button" id="editProfileBtn">Editar dados</button>
        </div>
        <div class="account-section" data-section="orders" style="display:none">
          <h3 style="margin-top:0">Histórico de pedidos</h3>
          <div id="ordersList">Carregando...</div>
        </div>
        <div class="account-section" data-section="addresses" style="display:none">
          <h3 style="margin-top:0">Endereços cadastrados</h3>
          <p>Nenhum endereço cadastrado.</p>
        </div>
        <div class="account-section" data-section="security" style="display:none">
          <h3 style="margin-top:0">Segurança</h3>
          <button class="panel-button" id="logoutBtn">Sair da conta</button>
        </div>
      </div>`;
      // Carregar pedidos automaticamente
      setTimeout(async () => {
        const orders = await fetchUserOrders(state.user.email);
        const ordersList = $('#ordersList');
        if(ordersList){
          if(orders.length === 0){
            ordersList.innerHTML = '<p>Você ainda não fez nenhum pedido.</p>';
          } else {
            ordersList.innerHTML = orders.map(order => `
              <div class="order-item" style="border-bottom:1px solid var(--line);padding:10px 0">
                <strong>${order.id}</strong> - ${new Date(order.createdAt).toLocaleDateString('pt-BR')}
                <br>Total: ${money(order.total)}
                <br>Status: ${order.status}
              </div>`).join('');
          }
        }
      }, 100);
    } else {
      content=`<p class="panel-eyebrow">ZIPZAP ACCOUNT</p><h2 class="panel-title">Bem-vindo de volta.</h2>
      <form class="login-form" id="loginForm">
        <label>E-MAIL</label><input type="email" id="loginEmail" required placeholder="seu@email.com">
        <label>SENHA</label><input type="password" id="loginPassword" required placeholder="••••••••">
        <div class="login-options"><label><input type="checkbox"> Lembrar de mim</label><a>Esqueci minha senha</a></div>
        <button class="panel-button" type="submit" id="loginSubmit">Entrar →</button>
        <p style="text-align:center;color:var(--muted);font-size:10px;margin-top:10px">Ainda não tem uma conta? <u id="showRegister">Criar conta</u></p>
      </form>
      <div class="social-login"><button>G  Google</button><button>  Apple</button></div>`;
    }
  } else if(type==='notifications'){
    content=`<p class="panel-eyebrow">CENTRAL DE AVISOS</p><h2 class="panel-title">Notificações</h2>
      <div class="notification-item"><strong>Promoção disponível</strong><small>Há ofertas especiais esperando por você.</small></div>
      <div class="notification-item"><strong>Produto voltou ao estoque</strong><small>O Ryzen 7 7800X3D está disponível novamente.</small></div>
      <div class="notification-item"><strong>Pedido atualizado</strong><small>Seu pedido #NX2048 foi despachado.</small></div>`;
  } else if(type==='support'){
    content=`<p class="panel-eyebrow">ZIPZAP SUPPORT</p><h2 class="panel-title">Como podemos ajudar?</h2>
      <select class="support-select" id="supportSelect">
        <option value="">Escolha um assunto</option>
        <option value="pedido">Pedido</option>
        <option value="produto">Produto</option>
        <option value="pagamento">Pagamento</option>
        <option value="garantia">Garantia</option>
        <option value="montagem">Montagem de PC</option>
      </select>
      <div id="supportAnswer" style="background:var(--cream);padding:15px;font-size:11px;margin-bottom:15px;display:none"></div>
      <div class="faq" data-faq="1">Como acompanho meu pedido? <b>+</b></div>
      <div class="faq-answer" data-answer="1" style="display:none;padding:10px;border-bottom:1px solid var(--line);font-size:11px;color:var(--muted)">Após a confirmação, você recebe um e-mail com o código de rastreio. Também pode acompanhar na área "Meus pedidos".</div>
      <div class="faq" data-faq="2">Qual o prazo de garantia? <b>+</b></div>
      <div class="faq-answer" data-answer="2" style="display:none;padding:10px;border-bottom:1px solid var(--line);font-size:11px;color:var(--muted)">Todos os produtos têm garantia de fábrica, que varia de 3 a 12 meses conforme a marca.</div>
      <div class="faq" data-faq="3">Vocês montam o PC? <b>+</b></div>
      <div class="faq-answer" data-answer="3" style="display:none;padding:10px;border-bottom:1px solid var(--line);font-size:11px;color:var(--muted)">Sim! Oferecemos montagem gratuita na compra de todas as peças.</div>
      <div class="chat-input"><input placeholder="Digite sua dúvida..."><button>→</button></div>`;
  }
  $('#panelContent').innerHTML=content;
  $('#overlay').classList.add('open');
  $('#sidePanel').classList.add('open');

  // Eventos do login/cadastro
  const loginForm=$('#loginForm');
  if(loginForm){
    loginForm.addEventListener('submit',e=>{
      e.preventDefault();
      const email=$('#loginEmail').value.trim();
      const password=$('#loginPassword').value;
      if(loginUser(email,password)){
        panel('account');
      }
    });
    $('#showRegister')?.addEventListener('click',()=>{
      $('#panelContent').innerHTML=`<p class="panel-eyebrow">ZIPZAP ACCOUNT</p><h2 class="panel-title">Criar conta</h2>
        <form class="login-form" id="registerForm">
          <label>NOME</label><input type="text" id="regName" required placeholder="Seu nome">
          <label>E-MAIL</label><input type="email" id="regEmail" required placeholder="seu@email.com">
          <label>SENHA</label><input type="password" id="regPassword" required placeholder="••••••••">
          <button class="panel-button" type="submit">Cadastrar →</button>
          <p style="text-align:center;color:var(--muted);font-size:10px;margin-top:10px">Já tem conta? <u id="showLogin">Entrar</u></p>
        </form>`;
      $('#registerForm').addEventListener('submit',e=>{
        e.preventDefault();
        const name=$('#regName').value.trim();
        const email=$('#regEmail').value.trim();
        const password=$('#regPassword').value;
        if(registerUser(name,email,password)){
          panel('account');
        }
      });
      $('#showLogin').addEventListener('click',()=>panel('account'));
    });
  }
  
  // Logout
  $('#logoutBtn')?.addEventListener('click',()=>{
    logoutUser();
    panel('account');
  });

  // Editar perfil
  $('#editProfileBtn')?.addEventListener('click',()=>{
    const newName = prompt('Novo nome:', state.user.name);
    if(newName && newName.trim()){
      const users = getUsers();
      const user = users.find(u => u.email === state.user.email);
      if(user) user.name = newName.trim();
      saveUsers(users);
      state.user.name = newName.trim();
      save();
      showToast('Nome atualizado!');
      panel('account');
    }
  });

  // Suporte
  const supportSelect=$('#supportSelect');
  if(supportSelect){
    supportSelect.addEventListener('change',()=>{
      const val=supportSelect.value;
      const answerBox=$('#supportAnswer');
      const answers={
        pedido:'Para acompanhar seu pedido, acesse "Meus pedidos" na sua conta ou use o código de rastreio enviado por e-mail.',
        produto:'Caso tenha dúvidas sobre um produto, consulte a página do item ou fale com um atendente pelo chat.',
        pagamento:'Aceitamos Pix, cartão de crédito em até 10x sem juros e boleto bancário.',
        garantia:'A garantia segue o prazo do fabricante. Guarde a nota fiscal para acionar a assistência.',
        montagem:'Oferecemos montagem gratuita para PCs com peças compradas na ZipZap. Consulte as condições.'
      };
      if(val && answers[val]){
        answerBox.style.display='block';
        answerBox.textContent=answers[val];
      } else {
        answerBox.style.display='none';
      }
    });
  }
  document.querySelectorAll('.faq').forEach(faq=>{
    faq.addEventListener('click',()=>{
      const id=faq.dataset.faq;
      const answer=document.querySelector(`.faq-answer[data-answer="${id}"]`);
      if(answer){
        answer.style.display = answer.style.display==='none' ? 'block' : 'none';
      }
    });
  });
}

// Delegação de eventos para as abas da conta (funciona mesmo após innerHTML)
document.addEventListener('click', function(e) {
  const tab = e.target.closest('.account-tab');
  if(!tab) return;

  e.preventDefault();
  e.stopPropagation();

  // Atualiza visual das abas
  document.querySelectorAll('.account-tab').forEach(t => {
    t.classList.remove('active');
    t.style.borderBottom = '2px solid transparent';
  });
  tab.classList.add('active');
  tab.style.borderBottom = '2px solid var(--ink)';

  // Mostra a seção correspondente
  const tabName = tab.dataset.tab;
  document.querySelectorAll('.account-section').forEach(section => {
    section.style.display = section.dataset.section === tabName ? 'block' : 'none';
  });

  // Se a aba for "orders", força o carregamento dos pedidos
  if(tabName === 'orders'){
    const ordersList = $('#ordersList');
    if(ordersList && !ordersList.dataset.loaded){
      ordersList.dataset.loaded = 'true';
      fetchUserOrders(state.user.email).then(orders => {
        if(orders.length === 0){
          ordersList.innerHTML = '<p>Você ainda não fez nenhum pedido.</p>';
        } else {
          ordersList.innerHTML = orders.map(order => `
            <div class="order-item" style="border-bottom:1px solid var(--line);padding:10px 0">
              <strong>${order.id}</strong> - ${new Date(order.createdAt).toLocaleDateString('pt-BR')}
              <br>Total: ${money(order.total)}
              <br>Status: ${order.status}
            </div>`).join('');
        }
      });
    }
  }
});

// ===== CARRINHO =====
function isBuildItem(item){return Boolean(item&&(item.parts||item.id===-1||String(item.id).startsWith('build-')||String(item.id).startsWith('gaming-')))}
function cartProduct(item){return isBuildItem(item)?item:products.find(p=>p.id===item.id)}
function cartContent(){if(!state.cart.length)return '<div class="favorite-empty"><p>Seu carrinho está vazio.</p></div>';const rows=state.cart.map(x=>{const p=cartProduct(x);if(!p)return '';const thumb=p.image?`<img src="${encodeURI(p.image)}" alt="${p.name||''}">`:(p.visual||'◈');const extra=p.parts?`<p class="cart-parts">${p.parts.map(part=>part.category).join(' • ')}</p>`:'';return `<div class="cart-row"><div class="cart-thumb">${thumb}</div><div><h4>${p.name}</h4><p>${money(p.price)}</p>${extra}<div class="qty"><button type="button" data-qty="${x.id}" data-change="-1">−</button>${x.qty}<button type="button" data-qty="${x.id}" data-change="1">+</button><button type="button" data-remove="${x.id}" style="margin-left:8px">×</button></div></div><strong>${money(p.price*x.qty)}</strong></div>`}).join('');const subtotal=state.cart.reduce((n,x)=>{const product=cartProduct(x);return product?n+product.price*x.qty:n},0);return rows+`<div class="cart-totals"><p>Subtotal <span>${money(subtotal)}</span></p><p>Desconto <span>-${money(subtotal*.05)}</span></p><p><strong>Total</strong><strong>${money(subtotal*.95)}</strong></p><p class="pix">No PIX: ${money(subtotal*.95*.95)}</p><button class="panel-button" id="checkout">Finalizar compra →</button></div>`}
function closePanels(){$('#overlay').classList.remove('open');$('#sidePanel').classList.remove('open')};function showToast(msg){$('#toast p').textContent=msg;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),2400)}
async function submitOrder(){
  if(!state.cart.length){showToast('Seu carrinho está vazio');return}
  const items=state.cart.map(item=>{const product=cartProduct(item);return {id:item.id,name:product?.name||'Produto',quantity:item.qty,price:product?.price||0}});
  const total=items.reduce((sum,item)=>sum+item.price*item.quantity,0);
  try{
    const form=new FormData($('#checkoutForm'));
    const customer={name:form.get('name'),email:form.get('email'),phone:form.get('phone'),address:form.get('address'),payment:form.get('payment')};
    const response=await fetch('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items,total,customer})});
    const order=await response.json();
    if(!response.ok)throw new Error(order.error||'Não foi possível registrar o pedido');
    state.cart=[];
    save();
    panel('cart');
    showToast(`Pedido ${order.id} recebido com sucesso`);
  }catch(error){
    console.error('Erro no pedido:', error);
    showToast('Não foi possível conectar ao servidor. Verifique se ele está rodando.');
  }
}
function renderCheckout(){
  const items=state.cart.map(item=>{const product=cartProduct(item);return product?`<li><span>${item.qty}x ${product.name}</span><b>${money(product.price*item.qty)}</b></li>`:''}).join('');
  const total=state.cart.reduce((sum,item)=>{const product=cartProduct(item);return product?sum+product.price*item.qty:sum},0);
  $('#checkoutContent').innerHTML=state.cart.length?`<div class="checkout-header"><button class="back-button" data-panel="cart">← Voltar ao carrinho</button><p class="eyebrow">ZIPZAP / FINALIZAÇÃO</p><h1>Finalizar compra</h1><p>Preencha seus dados para concluir o pedido.</p></div><div class="checkout-layout"><form class="checkout-form" id="checkoutForm"><h2>Seus dados</h2><label>Nome completo<input name="name" required autocomplete="name"></label><label>E-mail<input name="email" type="email" required autocomplete="email"></label><label>Telefone<input name="phone" type="tel" required autocomplete="tel"></label><label>Endereço de entrega<input name="address" required autocomplete="street-address"></label><label>Forma de pagamento<select name="payment"><option>Pix</option><option>Cartão de crédito</option><option>Boleto bancário</option></select></label><button class="button button-dark" type="submit">Confirmar pedido <span>→</span></button></form><aside class="checkout-summary"><h2>Resumo do pedido</h2><ul>${items}</ul><div><span>Total</span><strong>${money(total*.95)}</strong></div><small>Desconto de 5% aplicado no PIX.</small></aside></div>`:'<div class="favorite-empty"><h2>Seu carrinho está vazio.</h2><button class="button button-dark" data-view="promotions">Ver produtos →</button></div>';
  $('#checkoutForm')?.addEventListener('submit',event=>{event.preventDefault();submitOrder()});
}

// ===== PC GAMER MONTADO (apenas produtos com categoria "PC Gamer Montado") =====
function renderGaming(){
    const pcs = products.filter(p => p.category === 'PC Gamer Montado');
    
    if(pcs.length === 0){
        $('#gamingProducts').innerHTML = '<div class="favorite-empty"><h2>Nenhum PC montado disponível</h2><p>Adicione um produto com a categoria "PC Gamer Montado" para exibi-lo aqui.</p></div>';
        return;
    }

    $('#gamingProducts').innerHTML = pcs.map((p) => {
        const specs = p.specs || [];
        const cpu = specs[0] || '—';
        const gpu = specs[1] || '—';
        const ram = specs[2] || '—';
        const storage = specs[3] || '—';
        const psu = specs[4] || '—';

        const imageHtml = p.image 
            ? `<img src="${imgSrc(p)}" alt="${p.name}">` 
            : `<span style="font-size:80px">${p.visual || '◈'}</span>`;

        return `<article class="gaming-card">
            <div class="gaming-image">
                ${imageHtml}
                <span class="product-tag">READY TO SHIP</span>
            </div>
            <h3>${p.name}</h3>
            <div class="gaming-specs">
                <span>PROCESSADOR<b>${cpu}</b></span>
                <span>GPU<b>${gpu}</b></span>
                <span>MEMÓRIA<b>${ram}</b></span>
                <span>ARMAZENAMENTO<b>${storage}</b></span>
                <span>FONTE<b>${psu}</b></span>
                <span>GARANTIA<b>12 meses ZipZap</b></span>
            </div>
            <div class="gaming-price">
                ${money(p.price)}
                <small>${money(p.price * 0.95)} no PIX</small>
            </div>
            <footer>
                <button class="outline-button" data-product="${p.id}">Ver detalhes</button>
                <button class="button button-dark" data-add="${p.id}">Comprar →</button>
            </footer>
        </article>`;
    }).join('');
}

function partSelect([key,label,cat]){
  const selected=products.find(p=>p.id==state.builder[key]);
  const thumb=selected?`<img src="${imgSrc(selected)}" alt="${selected.name}">`:`<span class="part-thumb-empty">${label.charAt(0)}</span>`;
  const price=selected?`<b>${money(selected.price)}</b><small>${money(Math.round(selected.price*.95))} no PIX</small>`:`<b>Escolher peça</b><small>Veja foto, nome e preço</small>`;
  return `<button type="button" class="part-select ${selected?'chosen':''}" data-open-picker="${key}">
    <div class="part-thumb">${thumb}</div>
    <div class="part-copy">
      <span class="part-label">${label}</span>
      <strong>${selected?selected.name:`Nenhum ${label.toLowerCase()} selecionado`}</strong>
      <em>${selected?selected.brand:'Toque para escolher com imagem'}</em>
      <div class="part-price">${price}</div>
    </div>
    <span class="part-icon" aria-hidden="true"></span>
  </button>`;
}
function closeBuilderPicker(){ $('#builderPicker')?.classList.remove('open'); }
function openBuilderPicker(key){
  const part=[...builderParts,...builderAccessories].find(item=>item[0]===key);
  if(!part) return;
  const [,label,cat]=part;
  $('#builderPickerTitle').textContent=`Escolher ${label}`;
  const list=products.filter(p=>p.category===cat);
  const cards=list.length?list.map(p=>`<button type="button" class="builder-pick-card ${state.builder[key]==p.id?'selected':''}" data-pick-part="${key}" data-pick-id="${p.id}">
    <span class="builder-pick-image"><img src="${imgSrc(p)}" alt="${p.name}"></span>
    <span class="builder-pick-brand">${p.brand}</span>
    <strong>${p.name}</strong>
    ${p.sale&&p.old?`<s>${money(p.old)}</s>`:''}
    <b>${money(p.price)}</b>
    <small>${money(Math.round(p.price*.95))} no PIX</small>
  </button>`).join(''):'<p class="empty-builder">Nenhum produto nesta categoria ainda.</p>';
  const clear=state.builder[key]?`<button type="button" class="builder-pick-clear" data-pick-part="${key}" data-pick-id="">Remover ${label.toLowerCase()}</button>`:'';
  $('#builderPickerGrid').innerHTML=cards+clear;
  $('#builderPicker').classList.add('open');
}
document.addEventListener('click',e=>{
  const pick=e.target.closest('[data-pick-part]');
  const open=e.target.closest('[data-open-picker]');
  if(pick){
    e.preventDefault(); e.stopImmediatePropagation();
    const id=pick.dataset.pickId;
    state.builder[pick.dataset.pickPart]=id?Number(id):null;
    closeBuilderPicker(); renderBuilder(); return;
  }
  if(e.target.closest('#closeBuilderPicker')||e.target.id==='builderPicker'){
    e.preventDefault(); closeBuilderPicker(); return;
  }
  if(e.target.closest('#addBuilder')){
    e.preventDefault(); e.stopImmediatePropagation(); addBuilderToCart(); return;
  }
  const removeBtn=e.target.closest('[data-remove]');
  if(removeBtn){
    e.preventDefault(); e.stopImmediatePropagation();
    state.cart=state.cart.filter(item=>String(item.id)!==String(removeBtn.dataset.remove));
    save(); panel('cart'); return;
  }
  const qtyBtn=e.target.closest('[data-qty]');
  if(qtyBtn){
    e.preventDefault(); e.stopImmediatePropagation();
    const item=state.cart.find(entry=>String(entry.id)===String(qtyBtn.dataset.qty));
    if(!item) return;
    item.qty+=Number(qtyBtn.dataset.change);
    if(item.qty<1) state.cart=state.cart.filter(entry=>entry!==item);
    save(); panel('cart'); return;
  }
  if(open){
    e.preventDefault(); e.stopImmediatePropagation(); openBuilderPicker(open.dataset.openPicker);
  }
},true);
function selectedBuilderParts(){return Object.values(state.builder).map(id=>products.find(p=>p.id==id)).filter(Boolean)}
function builderCompatibility(selected){
  const errors=[];
  const cpu=selected.find(p=>p.category==='Processadores');
  const board=selected.find(p=>p.category==='Placas-mãe');
  const ram=selected.find(p=>p.category==='Memórias RAM');
  const psu=selected.find(p=>p.category==='Fontes');
  const cooler=selected.find(p=>p.category==='Coolers');
  const coreCategories=new Set(builderParts.map(part=>part[2]));
  const power=selected.filter(p=>coreCategories.has(p.category)&&p.category!=='Fontes').reduce((n,p)=>n+(p.power||0),0);
  if(cpu&&board&&cpu.socket&&board.socket&&cpu.socket!==board.socket) errors.push(`Socket incompatível: ${cpu.socket} e ${board.socket}.`);
  if(ram&&board&&ram.ram&&board.ram&&ram.ram!==board.ram) errors.push('Tipo de memória incompatível com a placa-mãe.');
  if(psu&&power>psu.power) errors.push(`A fonte escolhida não suporta o consumo estimado de ${power}W.`);
  if(cpu&&cooler&&cooler.sockets&&cpu.socket&&!cooler.sockets.includes(cpu.socket)) errors.push('Cooler incompatível com o socket do processador.');
  return {errors,power,cpu,board};
}
function addBuilderToCart(){
  const selected=selectedBuilderParts();
  if(!selected.length){ showToast('Escolha pelo menos uma peça para montar o PC'); return; }
  const {errors}=builderCompatibility(selected);
  if(errors.length){ showToast(errors[0]); return; }
  const total=selected.reduce((n,p)=>n+p.price,0);
  const image=selected.find(p=>p.category==='Gabinetes')?.image||selected[0].image;
  const custom={ id:'build-zipzap', qty:1, name:'PC personalizado ZipZap', price:total, image, visual:'◈', parts:selected.map(p=>({name:p.name,category:p.category,price:p.price,image:p.image})) };
  state.cart=state.cart.filter(item=>item.id!=='build-zipzap'); state.cart.push(custom);
  save(); showToast('PC personalizado adicionado ao carrinho'); panel('cart');
}
function renderBuilder(){$('#builderParts').innerHTML=builderParts.map(partSelect).join('');$('#builderAccessories').innerHTML=builderAccessories.map(partSelect).join('');updateBuilder()}
function updateBuilder(){
  const selected=selectedBuilderParts(); const coreSelected=builderParts.filter(([key])=>state.builder[key]).length;
  const total=selected.reduce((n,p)=>n+p.price,0); const {errors,power,cpu,board}=builderCompatibility(selected);
  const missing=!cpu||!board;
  $('#builderProgress').textContent=`${coreSelected} / 9`; $('#builderTotalTop').textContent=money(total);
  $('#builderPix').textContent=money(total*.95); $('#powerEstimate').textContent=power+'W';
  $('#selectedParts').innerHTML=selected.length?selected.map(p=>`<div class="selected-part"><img src="${imgSrc(p)}" alt="${p.name}"><div><span>${p.category}</span><strong>${p.name}</strong></div><b>${money(p.price)}</b></div>`).join(''):'<p class="empty-builder">Comece escolhendo um processador.</p>';
  const status=$('#compatibility'); status.className='compatibility'+(errors.length?' error':'');
  status.innerHTML=`<span class="status-dot"></span><span>${errors.length?errors.join(' '):!selected.length?'Escolha componentes para montar o seu PC.':missing?'Você já pode adicionar. Para um PC completo, inclua processador e placa-mãe.':'Compatibilidade verificada. Tudo certo até agora.'}</span>`;
  const addButton=$('#addBuilder'); addButton.disabled=!selected.length||errors.length>0;
  addButton.onclick=event=>{event.preventDefault();addBuilderToCart()};
  const totalElement=$('#builderSummaryTotal'),installment=$('#builderSummaryInstallment'),label=$('#builderProgressLabel'),percent=$('#builderProgressPercent'),bar=$('#builderProgressBar');
  if(totalElement) totalElement.textContent=money(total*.95); if(installment) installment.textContent=money(total/10);
  if(label) label.textContent=`${coreSelected} de 9 componentes obrigatórios`; if(percent) percent.textContent=`${Math.round(coreSelected/9*100)}%`; if(bar) bar.style.width=`${Math.round(coreSelected/9*100)}%`;
}
function initFilters(){const cats=[...new Set(products.map(p=>p.category))].sort(),brands=[...new Set(products.map(p=>p.brand))].sort();$('#categoryFilter').innerHTML='<option value="">Todas as categorias</option>'+cats.map(x=>'<option>'+x+'</option>').join('');$('#brandFilter').innerHTML='<option value="">Todas as marcas</option>'+brands.map(x=>'<option>'+x+'</option>').join('');}
function storeModal(){
  return '<button class="close-panel" id="closeModal">×</button><p class="panel-eyebrow">ZIPZAP / PRESENÇA</p><h2 class="panel-title">Encontre-nos.</h2><div class="store-grid"><div class="store-detail"><strong>ENDEREÇO</strong><a class="store-address" href="https://www.google.com/maps/search/?api=1&query=Avenida+Marechal+Tito%2C+7579%2C+Jardim+Miragaia%2C+S%C3%A3o+Paulo+-+SP" target="_blank" rel="noopener noreferrer">Avenida Marechal Tito, 7579<br>Jardim Miragaia, São Paulo - SP</a></div><div class="store-detail"><strong>HORÁRIO</strong><span>Seg a Sex: 9h às 19h<br>Sáb: 9h às 15h</span></div><div class="store-detail"><strong>CONTATO</strong><span>(11) 3081-2048<br>WhatsApp: (11) 99812-7734</span></div><div class="store-detail"><strong>EMAIL</strong><span>oi@zipzap.com.br</span></div></div><a class="map-placeholder" href="https://www.google.com/maps/search/?api=1&query=Avenida+Marechal+Tito%2C+7579%2C+Jardim+Miragaia%2C+S%C3%A3o+Paulo+-+SP" target="_blank" rel="noopener noreferrer"><img src="https://staticmap.openstreetmap.de/staticmap.php?center=-23.4705,-46.4245&zoom=15&size=600x240&maptype=mapnik&markers=-23.4705,-46.4245,red-pushpin" alt="Mapa da Avenida Marechal Tito, 7579"><span>ABRIR NO GOOGLE MAPS<br>Avenida Marechal Tito, 7579<br>Jardim Miragaia, São Paulo - SP</span></a>';
}
document.addEventListener('click',e=>{
  if(e.target.closest('[data-remove],[data-qty],[data-open-picker],[data-pick-part],#addBuilder,#closeBuilderPicker') || e.target.id==='builderPicker') return;
  const view=e.target.closest('[data-view]')?.dataset.view; const cat=e.target.closest('[data-category]')?.dataset.category;
  const product=e.target.closest('[data-product]')?.dataset.product; const fav=e.target.closest('[data-favorite]')?.dataset.favorite;
  const add=e.target.closest('[data-add]')?.dataset.add; const panelType=e.target.closest('[data-panel]')?.dataset.panel;
  if(view) showView(view); if(cat) showView('catalog',{category:cat}); if(product) openProduct(Number(product));
  if(fav){ e.stopPropagation(); toggleFavorite(Number(fav)); } if(add){ e.stopPropagation(); addCart(Number(add)); }
  if(panelType) panel(panelType);
  if(e.target.closest('[data-modal="store"]')){ $('#modalContent').innerHTML=storeModal(); $('#modalBackdrop').classList.add('open'); }
  if(e.target.closest('#closePanel')) closePanels(); if(e.target.closest('#closeModal')) $('#modalBackdrop').classList.remove('open');
  if(e.target.closest('#checkout')){closePanels();showView('checkout');}
});
$('#overlay').addEventListener('click',closePanels);
$('#searchForm').addEventListener('submit',e=>{e.preventDefault();state.search=$('#searchInput').value.trim();showView('catalog',{search:state.search})});
$('#searchInput').addEventListener('input',e=>{if(e.target.value.length>2){state.search=e.target.value;showView('catalog',{search:state.search})}});
['categoryFilter','brandFilter','priceFilter','ratingFilter','saleFilter','bestFilter','sortFilter'].forEach(id=>$('#'+id).addEventListener('change',()=>renderCatalog()));
$('#priceFilter').addEventListener('input',e=>$('#priceValue').textContent='Até '+money(Number(e.target.value)));
$('#clearFilters').addEventListener('click',()=>{['categoryFilter','brandFilter','ratingFilter','sortFilter'].forEach(id=>$('#'+id).selectedIndex=0);$('#priceFilter').value=10000;$('#saleFilter').checked=false;$('#bestFilter').checked=false;renderCatalog()});
renderCategories(); renderFeatured(); initFilters(); updateBadges();