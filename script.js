const products = [
  {id:1,name:"👼Stone Island Stone Wash Tee" ,price: 2499,img:"images/photo_2026-02-28_21-06-46.jpg", description:"<p>🔒 Оригінал (Certilogo)</p> <p>Преміальна якість, що відчувається з першого дотику. Тканина не розтягується та не кошлатиться навіть після багаторазового прання.</p> <p>🔥 Унікальний ефект Stone Wash надає футболці автентичного вигляду, а фірмова бірка підтверджує належність до культового бренду!</p><p>Матеріал: 95% бавовна, 5% еластан — ідеальна посадка по фігурі.</p><p>✅ Верифікація: QR-код на білках перекидає на офіційні ресурси certilogo.tech та certilogo.online.</p>"},
  
  {id:2,name:"👼 C.P. Company Nylon B-Messenger Bag",price:1399,img:"images/photo_2026-03-01_15-02-51.jpg",description:"<p>⚜️ Кольори: Чорний, Темно-синій, Оливковий, Світло-сірий</p>  <p>🔒 Якість 1:1 (преміум)</p>  <p>🔥 <p>Особливості: Культова вишивка C.P. Company на фронтальній частині</p> <p>Надійна фурнітура та функціональні відділення для щоденного використання Регульований ремінець для максимального комфорту</p>  <p>📭Доставка 1-2 дні</p>"},

  {id:3,name:"👼Weekend Offender Cargo Shorts (Green/Olive)",price:2699,img:"images/photo_2026-02-28_19-54-33.jpg",description:"<p>✨Розмір: S, M</p>  <p>🔒Оригінал Універсальність та британський характер. Виготовлені з високоякісного нейлону, що забезпечує легкість та довговічність навіть при активному використанні.</p>  <p>🔥Мілітарі-естетика: Практичні карго-кишені та знаковий Prison Logo роблять цю модель базою для будь-якого casual-образу!</p>"},

  {id:5,name:"👼Gucci Interlocking G Leather Belt",price:1799,img:"images/photo_2026-03-01_15-19-20.jpg",description:"<p>✨ Розмір: 105-110 см</p>  <p>🔒 Якість: 1:1 (преміум)  Втілення розкоші та італійського стилю. Ремінь, який миттєво робить будь-який образ більш вишуканим та завершеним.</p>  <p>🔥 Легендарна пряжка Interlocking G та преміальна шкіра з фірмовим тисненням — аксесуар для тих, хто не  звик до компромісів у стилі!</p>  <p>🎁 Повна комплектація — фірмова коробка та пильник у комплекті, ідеально для подарунка.</p>"},

  {id:6,name:"Ellesse",price:1290,img:"images/photo_2026-03-01_15-24-28.jpg",description:"<p>📏 Розмір: #S</p> 💎 Оригінал ✅"},

  {id:7,name:"👼Lyle & Scott Vintage Bucket Hat (Dark Grey)",price:1649,img:"images/photo_2026-03-01_15-32-48.jpg",description:"<p>✨Розмір: One Size (регулюється)</p>  <p>🔒 Оригінал Класичний британський стиль, перевірений часом. Надійна якість для щоденного носіння.</p>  <p>🔥 Культовий золотий орел на фронтальній частині, що додає впізнаваності та акценту вашому образу!</p>"},

  {id:8,name:"Lonsdale Black",price:1440,img:"images/photo_2026-03-01_16-21-55.jpg",description:"<p>📏 Розмір: L , XL</p> <p>🔒 Оригінал 👌</p> <p>Ідеальний варіант для повсякденного одягу</p>"},

  {id:9,name:"Weekend Offender Black",price:1820,img:"images/photo_2026-03-01_16-34-56.jpg",description:"<p>📏 Розмір: L</p> <p>🔒 Оригінал 👌</p> <p>Стильний та універсальний вибір для тих, хто цінує якість і комфорт.</p> <p>🔥 Лаконічний дизайн, який легко поєднується з будь-яким образом!</p>"},

  {id:10,name:"👼POLO RALPH LAUREN",price:1999,img:"images/photo_2026-03-01_21-42-59.jpg",description:"<p>🔥Розміри S/XL</p> <p>🔒  Якість 1:1(Преміум)</p>  <p>📦 Доставка 1-2 днів</p>  <p>📭 Відправка Накладним платежем</p>"},
  
  {id:11,name:"STONE ISLAND",price:2399,img:"images/photo_2026-03-01_22-08-41.jpg",description:"<p>+1  КОМПЛЕКТІ КЛАСИЧНИЙ БАЗОВИЙ ПАТЧ (кількість обмежена)</p>  <p>🔥 Розміри Xs-S-M-L-XL-XXL 🔒</p>   <p>Приємний матеріал 95%бавовна 5%еластат,тканина не розтягується,не кошлатиться.Йдуть на бірках,які по qr перекидають на certilogo.tech. та certilogo.online)</p> <p>📦  Доставка 1-2 днів  📭</p>  <p>Відправка Накладним платежем</p>"},
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
  const count = cart.reduce((a,b)=>a+b.quantity,0);
  if(document.getElementById("cart-count")){
    document.getElementById("cart-count").innerText = count;
  }
}
saveCart();

if(document.getElementById("products")){
  const container = document.getElementById("products");
  products.forEach(p=>{
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} грн</p>
        <button class="btn" onclick="openProduct(${p.id})">Докладніше</button>
      </div>
    `;
  });
}

function openProduct(id){
  window.location.href="product.html?id="+id;
}

if(document.getElementById("product-page")){
  const id=new URLSearchParams(window.location.search).get("id");
  const p=products.find(x=>x.id==id);
  document.getElementById("product-page").innerHTML=`
    <img src="${p.img}" width="300">
    <h2>${p.name}</h2>
    <h3>${p.price} грн</h3>
    <p>${p.description}</p>
    <button class="btn" onclick="addToCart(${p.id})">В кошик</button>
  `;
}

function addToCart(id){
  const existing=cart.find(x=>x.id==id);
  if(existing){existing.quantity++;}
  else{
    const p=products.find(x=>x.id==id);
    cart.push({...p,quantity:1});
  }
  saveCart();
}

if(document.getElementById("cart-items")){
  const itemsDiv=document.getElementById("cart-items");
  const receiptDiv=document.getElementById("receipt-items");
  let total=0;

  cart.forEach((item,i)=>{
    total+=item.price*item.quantity;

    itemsDiv.innerHTML+=`
      <div class="cart-item">
        <strong>${item.name}</strong><br>
        ${item.price} грн

        <div class="quantity-controls">
          <button class="btn small" onclick="decrease(${i})">−</button>
          <span>${item.quantity}</span>
          <button class="btn small" onclick="increase(${i})">+</button>
        </div>

        <button class="trash-btn" onclick="removeItem(${i})">🗑</button>
        <hr>
      </div>
    `;

    receiptDiv.innerHTML+=`
      <div>${item.name} x${item.quantity} — ${item.price*item.quantity} грн</div>
    `;
  });

  document.getElementById("total-price").innerText="Сума: "+total+" грн";
}

function changeQuantity(i,value){
  cart[i].quantity=parseInt(value);
  saveCart();
  location.reload();
}

function removeItem(i){
  cart.splice(i,1);
  saveCart();
  location.reload();
}

function checkout(){
  document.getElementById("checkout-message").innerHTML=
  '<p>Для оформлення замовлення вам необхідно скинути менеджеру наступні 🚚Данні для відправки: </p> <p>Місто:</p><p>№ Відділення:</p> <p>Номер телефону:</p> <p>ПІБ:</p> <p>Повна оплата або оплата на пошті</p><p>Скрін чека</p> <a href="https://t.me/menegerXs" target="_blank" style="color:red;">Зв*язок з менеджером</a>';
}

// Анімація логотипа від мишки
document.addEventListener("mousemove", (e) => {
  const logo = document.querySelector(".logo");
  if (!logo) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  logo.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

function increase(i){
  cart[i].quantity++;
  saveCart();
  location.reload();
}

function decrease(i){
  if(cart[i].quantity > 1){
    cart[i].quantity--;
  }
  saveCart();
  location.reload();
}







