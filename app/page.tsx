/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const events = [
  ["28", "серп", "Останній вихід", "Новий джаз · ламаний ритм", "20:30"],
  ["29", "серп", "Глибокий грув", "Соул · фанк · диско", "21:00"],
  ["04", "вер", "Голка й дим", "Блюз · жива труба", "20:00"],
];
const records = [
  ["МАРА ВЕЛ", "Після півночі", "1 480 ₴", "cover-one"],
  ["ПІВНІЧНА КІМНАТА", "Сигнали диму", "1 650 ₴", "cover-two"],
  ["ЛЕО АРДЕН", "Тихе світло", "1 390 ₴", "cover-three"],
];

export default function Home() {
  const [cartItems, setCartItems] = useState<string[]>([]), [notice, setNotice] = useState(""), [menu, setMenu] = useState(false), [panel, setPanel] = useState<"cart"|"menu"|"gift"|"ticket"|"privacy"|"terms"|null>(null), [selectedEvent, setSelectedEvent] = useState("");
  const ping = (text: string) => { setNotice(text); window.setTimeout(() => setNotice(""), 2600); };
  return <main>
    <header className="nav">
      <a className="brand" href="#top" aria-label="SIDE B, на початок">SIDE<span>/</span>B</a>
      <button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? "закрити" : "меню"}</button>
      <nav className={menu ? "open" : ""}>{[["Події","events"],["Вініл","vinyl"],["Бар","bar"],["Контакти","contacts"]].map(x=><a key={x[1]} href={`#${x[1]}`} onClick={()=>setMenu(false)}>{x[0]}</a>)}</nav>
      <button className="cart" onClick={() => setPanel("cart")}>Кошик <b>{String(cartItems.length).padStart(2,"0")}</b></button>
    </header>

    <section className="hero" id="top"><div className="hero-grain"/><div className="hero-copy">
      <p className="eyebrow">Вініловий бар · крамниця платівок · Київ</p>
      <h1>Музика, яку<br/>не ставлять<br/><i>на фон.</i></h1>
      <p className="hero-lead">Платівки без шафлу. Коктейлі без поспіху. 42 місця для тих, хто справді слухає.</p>
      <div className="hero-actions"><a className="button primary" href="#booking">Забронювати стіл</a><a className="text-link" href="#events">Афіша цього тижня ↘</a></div>
    </div><div className="now-playing"><span>Зараз грає</span><strong>Сторона А · 33⅓ об/хв</strong></div></section>
    <div className="ticker"><div>ЛИШЕ ВІНІЛ <i>●</i> ДОБРІ КОКТЕЙЛІ <i>●</i> БЕЗ ЗАМОВЛЕНЬ ПІСЕНЬ <i>●</i> ГЛИБОКЕ СЛУХАННЯ <i>●</i> ЛИШЕ ВІНІЛ</div></div>

    <section className="events section" id="events"><div className="section-head"><p className="kicker">01 / Афіша</p><h2>Три вечори.<br/><i>Жодного повтору.</i></h2></div><div className="event-list">
      {events.map(e=><article className="event" key={e[2]}><div className="date"><strong>{e[0]}</strong><span>{e[1]}</span></div><div><h3>{e[2]}</h3><p>{e[3]}</p></div><time>{e[4]}</time><button onClick={()=>{setSelectedEvent(e[2]);setPanel("ticket")}}>Взяти квиток ↗</button></article>)}
    </div></section>

    <section className="manifesto"><img src="/images/jazz.webp" width="816" height="1456" loading="lazy" alt="Вечірній джазовий сет у барі"/><div><p className="kicker">Маніфест</p><blockquote>«Ми не вмикаємо добірку. Ми ставимо платівку — від першої доріжки до останньої.»</blockquote><p>Без екранів над баром і випадкових треків. Тут музика має вагу, паузи й правильну гучність.</p></div></section>

    <section className="vinyl section" id="vinyl"><div className="section-head split"><div><p className="kicker">02 / Крамниця платівок</p><h2>Знайди свою<br/><i>наступну сторону А.</i></h2></div><p>Невеликий каталог, який ми слухаємо самі. Усі платівки можна поставити за баром до покупки.</p></div><div className="records">
      {records.map((r,i)=><article className="record" key={r[1]}><div className={`record-cover ${r[3]}`}><span>{r[0]}</span><b>{r[1]}</b><em>SB—0{i+7}</em></div><div className="record-info"><div><small>{r[0]}</small><h3>«{r[1]}»</h3></div><strong>{r[2]}</strong></div><button onClick={()=>{setCartItems([...cartItems,r[1]]);ping(`«${r[1]}» додано в кошик`)}}>Додати до кошика <span>＋</span></button></article>)}
    </div></section>

    <section className="bar-grid" id="bar"><div className="bar-image"><img src="/images/cocktail.webp" width="480" height="720" loading="lazy" alt="Коктейль SIDE B з великим кубом льоду"/></div><div className="bar-menu"><p className="kicker">03 / Бар</p><h2>У склянці —<br/><i>та сама глибина.</i></h2><div className="drinks">
      {[["01","Падіння голки","бурбон · вермут · апельсин","380"],["02","Тихий шторм","ром · кава · какао","360"],["03","Остання доріжка","джин · херес · виноград","390"]].map(d=><div key={d[1]}><span>{d[0]}</span><p><b>{d[1]}</b><small>{d[2]}</small></p><strong>{d[3]}</strong></div>)}
    </div><button className="text-link pale" onClick={()=>setPanel("menu")}>Дивитися повне меню ↗</button></div></section>

    <section className="booking" id="booking"><img src="/images/crowd.webp" width="853" height="1280" loading="lazy" alt="Гості SIDE B під час вечірньої події"/><div className="booking-panel"><p className="kicker">04 / Бронювання</p><h2>Твій стіл.<br/>Твоя <i>сторона B.</i></h2><p>Бронь тримаємо 20 хвилин. У п’ятницю та суботу депозит — 600 ₴ з гостя, повністю в рахунок бару.</p><form onSubmit={e=>{e.preventDefault();ping("Запит прийнято. Підтвердження надійде на вказану пошту.")}}><label>Дата<input type="date" required/></label><label>Час<select defaultValue="20:30"><option>19:00</option><option>20:30</option><option>22:00</option></select></label><label>Гості<select><option>2 гості</option><option>3 гості</option><option>4 гості</option><option>5–6 гостей</option></select></label><label className="wide">Email<input type="email" autoComplete="email" placeholder="name@example.com" required/></label><button className="button primary" type="submit">Надіслати запит</button></form></div></section>

    <section className="gift section"><div><p className="kicker">Подарунковий сертифікат</p><h2>Даруй вечір,<br/><i>а не ще одну річ.</i></h2><p>На бар, вініл або квитки. Номінал від 1 000 ₴, діє 12 місяців.</p><button className="button outline" onClick={()=>setPanel("gift")}>Обрати номінал</button></div><div className="gift-card"><small>SIDE / B</small><strong>ВЕЧІР<br/>ПОЗА ПОВТОРОМ</strong><span>СЕРТИФІКАТ · 1000 ₴</span></div></section>

    <footer id="contacts"><div className="footer-brand">SIDE<span>/</span>B</div><div><small>Адреса</small><p><a href="https://maps.google.com/?q=Рейтарська+18+Київ" target="_blank" rel="noreferrer">Київ, вул. Рейтарська, 18 ↗</a></p></div><div><small>Години</small><p>вт–чт 18:00–00:00<br/>пт–нд 18:00–02:00</p></div><div><small>Зв’язок</small><p><a href="mailto:hello@sideb.bar">hello@sideb.bar</a><br/><a href="https://instagram.com/sideb.bar" target="_blank" rel="noreferrer">Instagram ↗</a></p></div><p className="copy">© 2026 SIDE B · 18+ · Слухай відповідально · <button onClick={()=>setPanel("privacy")}>Конфіденційність</button> · <button onClick={()=>setPanel("terms")}>Умови</button></p></footer>
    {panel&&<div className="overlay" role="dialog" aria-modal="true" aria-label="Вікно дії" onMouseDown={e=>{if(e.target===e.currentTarget)setPanel(null)}}><section className="modal"><button className="close" onClick={()=>setPanel(null)} aria-label="Закрити">×</button>
      {panel==="cart"&&<><p className="kicker">Кошик</p><h2>Твої платівки</h2>{cartItems.length===0?<p className="empty">Кошик порожній. Знайди платівку, з якої почнеться твій наступний вечір.</p>:<><div className="cart-lines">{cartItems.map((item,i)=><div key={`${item}-${i}`}><span>«{item}»</span><button onClick={()=>setCartItems(cartItems.filter((_,n)=>n!==i))}>Прибрати</button></div>)}</div><button className="button primary full" onClick={()=>{setPanel(null);ping("Замовлення прийнято. Ми зв’яжемося для підтвердження.")}}>Оформити замовлення</button></> }</>}
      {panel==="menu"&&<><p className="kicker">Повне меню</p><h2>До музики</h2><div className="modal-list"><p><b>Платівка №7</b><span>бурбон · вишня · біттер — 410 ₴</span></p><p><b>Теплий шум</b><span>мескаль · груша · сіль — 390 ₴</span></p><p><b>Чиста пауза</b><span>безалкогольний джин · тонік — 260 ₴</span></p></div><a className="button primary full" href="#booking" onClick={()=>setPanel(null)}>Забронювати вечір</a></>}
      {panel==="gift"&&<><p className="kicker">Сертифікат</p><h2>Обери враження</h2><div className="amounts">{["1 000 ₴","2 000 ₴","3 000 ₴"].map(a=><button key={a} onClick={()=>{setCartItems([...cartItems,`Сертифікат ${a}`]);setPanel("cart");ping(`Сертифікат на ${a} додано`)}}>{a}</button>)}</div><p className="empty">Електронний сертифікат надійде на пошту одразу після підтвердження.</p></>}
      {panel==="ticket"&&<><p className="kicker">Квиток</p><h2>«{selectedEvent}»</h2><p className="empty">Вхід — 450 ₴. Місце за баром входить у вартість. Кількість гостей обмежена.</p><button className="button primary full" onClick={()=>{setCartItems([...cartItems,`Квиток: ${selectedEvent}`]);setPanel("cart");ping("Квиток додано до кошика")}}>Додати квиток</button></>}
      {panel==="privacy"&&<><p className="kicker">Конфіденційність</p><h2>Твої дані — не товар</h2><p className="empty">Ми використовуємо email лише для підтвердження бронювання або замовлення. Не передаємо дані третім особам і не використовуємо рекламні файли cookie.</p></>}
      {panel==="terms"&&<><p className="kicker">Умови</p><h2>Без дрібного шрифту</h2><p className="empty">Бронь тримаємо 20 хвилин. Квиток можна повернути не пізніше ніж за 24 години до події. Платівки приймаємо до повернення протягом 14 днів, якщо пакування не відкрито. Сертифікат діє 12 місяців і не обмінюється на готівку.</p></>}
    </section></div>}
    {notice&&<div className="toast" role="status">{notice}</div>}
  </main>;
}
