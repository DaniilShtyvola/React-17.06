import React from 'react';
import Card from '../Card/Card';
import RichCard from '../RichCard/RichCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='cards'>
        <Card cost='31 999₴' description={`Ноутбук ASUS TUF Gaming A15 FA506NC-HN026 (90NR0JF7-M004N0) Graphite Black`} imageUrl='https://content2.rozetka.com.ua/goods/images/big_tile/410768844.jpg' />
        <Card cost='24 499₴' description={`Мобільний телефон Samsung Galaxy S23 FE 8/256GB Graphite (SM-S711BZAGSEK)`} imageUrl='https://content2.rozetka.com.ua/goods/images/big/388640614.jpg' />
        <Card cost='8 999₴' description={`Телевізор Ergo 43GUS8500`} imageUrl='https://content1.rozetka.com.ua/goods/images/big/442736107.jpg' />
        <Card cost='12 999₴' description={`Пральна машина вузька WHIRLPOOL WRBSB 6228 B UA`} imageUrl='https://content.rozetka.com.ua/goods/images/big/286602036.jpg' />
        <Card cost='5 499₴' description={`Телевізор LG OLED55C36LC`} imageUrl='https://content.rozetka.com.ua/goods/images/big/351025401.jpg' />
        <Card cost='5 499₴' description={`Навушники Marshall Major IV Bluetooth Black (1005773)`} imageUrl='https://content1.rozetka.com.ua/goods/images/big/62124885.jpg' />
        <Card cost='25 999₴' description={`Мобільний телефон Apple iPhone 13 128GB Midnight (MLPF3HU/A)`} imageUrl='https://content.rozetka.com.ua/goods/images/big/364824471.jpg' />
        <Card cost='15 999₴' description={`Телевізор LG 43UR78006LK`} imageUrl='https://content1.rozetka.com.ua/goods/images/big/388497296.jpg' />
        <Card cost='24 499₴' description={`Мобільний телефон Samsung Galaxy S23 FE 8/256GB Mint (SM-S711BLGGSEK)`} imageUrl='https://content1.rozetka.com.ua/goods/images/big/388640046.jpg' />
      </div>

      <div className='richCards'>
        <RichCard cost='500грн.' description={`Чехол-сумка для шахмат и нард под заказ (1001rich)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Shahy/Chehly/chehol_50-65/chehol_for_shess-196x196.webp' stars={0} />
        <RichCard cost='350грн.' description={`Фишки для нард N5, 26мм`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f26005/fishki26005-196x196.webp' stars={0} />
        <RichCard cost='220грн.' description={`Фишки для нард N6, 26мм`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f26060/fishki-26mm-N6-1-196x196.webp' stars={0} />
        <RichCard cost='750грн.' description={`Фишки для нард Корона`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Ta-Decor/td31202/31202-196x196.webp' stars={0} />
        <RichCard cost='250грн.' description={`Фишки для нард N1, 30мм`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f30001/fishki-30mm-N1-196x196.webp' stars={0} />
        <RichCard cost='1450грн.' description={`Фишки для нард в шкатулке (Корона)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/td31053-01/fishki-korona-1-196x196.webp' stars={0} />
        <RichCard cost='4700грн.' description={`Нарды деревянные резные Элегия (50х46см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50021/nardi-50-elegiya-196x196.webp' stars={0} />
        <RichCard cost='2435грн.' description={`Нарды большие Madon (48х57см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Madon/c-181/Nardi-bolshie-BACKGAMMON-large-196x196.webp' stars={5} />
        <RichCard cost='3000грн.' description={`Нарды деревянные резные Орнамент (50х44см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NKU/nku-0001/nardi-rizbleni-ornament-196x196.webp' stars={0} />
        <RichCard cost='4700грн.' description={`Нарды деревянные резные Гладиатор (50х46см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Shahy/Chehly/chehol_50-65/chehol_for_shess-196x196.webp' stars={0} />
        <RichCard cost='1640грн.' description={`Нарды малые Madon (28x33см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Madon/c-182/Nardi-malie-BACKGAMMON%20small-196x196.webp' stars={5} />
        <RichCard cost='4700грн.' description={`Нарды деревянные резные Элегия N2 (50х46см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50022/nardi-50-elegiya-N2-1-196x196.webp' stars={0} />
        <RichCard cost='4700грн.' description={`Нарды деревянные резные Трезуб (50х46см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50019-tizub/nardi-rizni-trizub-196x196.webp' stars={5} />
        <RichCard cost='4700грн.' description={`Нарды деревянные резные Тигр (50х46см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50014-tigr/nardi-rizni-tigr-bb-196x196.webp' stars={0} />
        <RichCard cost='4700грн.' description={`Нарды деревянные резные Слава Героям (50х46см)`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50020-slava-ukr/nardi-rizbleni-slava-geroyam-196x196.webp' stars={0} />
        <RichCard cost='4700грн.' description={`Нарды деревянные резные Запорожская сечь`} imageUrl='https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50011-zapor-sich/nardi-ruchnoi-roboti-zaporizhska-sich-196x196.webp' stars={0} />
      </div>
    </div>
  );
}

export default App;
