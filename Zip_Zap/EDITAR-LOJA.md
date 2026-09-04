# Como editar a ZipZap

## Produtos

Abra `app.js` e procure por `const products`.

Cada produto possui estes campos principais:

- `name`: nome exibido no card e na página de detalhes
- `brand`: marca
- `category`: categoria usada nos filtros
- `price`: preço atual
- `old`: preço antigo riscado
- `sale`: `true` mostra o produto em promoção; `false` remove a promoção
- `best`: `true` coloca o produto em Mais vendidos
- `image`: endereço da imagem do produto
- `description`: descrição na página do produto
- `specs`: lista de especificações técnicas
- `rating`: nota do produto
- `reviews`: quantidade de avaliações

Exemplo:

```js
{
  id: 21,
  name: 'Meu novo produto',
  brand: 'Minha marca',
  category: 'SSDs',
  price: 599,
  old: 699,
  rating: 4.8,
  reviews: 42,
  sale: true,
  best: false,
  image: 'https://endereco-da-imagem.jpg',
  description: 'Descrição do produto.',
  specs: ['1 TB', 'NVMe', 'PCIe 4.0'],
  power: 8
}
```

Para trocar uma imagem, altere somente o conteúdo de `image`. Use uma URL direta terminando em `.jpg`, `.png` ou `.webp`.

## Categorias

No mesmo arquivo, procure por `const categories`.

O primeiro valor é o nome exibido e usado no filtro. O segundo é um símbolo reserva. Os ícones principais são definidos em `categoryIcons`.

## Textos do dashboard

Abra `index.html` e procure por:

- `Recomendados para você`
- `Placas de vídeo`
- `PC gamer`
- `Mais vendidos em SSD`

Esses textos ficam nos quatro blocos inferiores da página inicial.

## Promoções do dashboard

A faixa de promoções usa os 5 primeiros produtos que tenham `sale: true` em `app.js`. Para trocar os produtos exibidos, altere `sale` nos produtos.

## PC Builder

No `app.js`, procure por `builderParts` e `builderAccessories`.

Os campos de compatibilidade ficam no produto:

- `socket`: socket do processador ou placa-mãe
- `ram`: tipo de memória
- `power`: consumo estimado
- `sockets`: sockets aceitos pelo cooler

## Estilo

As cores e tamanhos gerais ficam em `style.css`. Há alguns ajustes finais do cabeçalho e dashboard dentro de blocos `<style>` no `index.html`, colocados no final do `<head>` para facilitar alterações visuais rápidas.
