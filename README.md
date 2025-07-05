# Portal de Emendas Municipais

Este é um projeto React limpo e bem estruturado para o Portal de Emendas Municipais.

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (recomendado) ou npm

### Instalação e execução

1. **Instalar dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

3. **Fazer build para produção:**
   ```bash
   pnpm run build
   # ou
   npm run build
   ```

## 📁 Estrutura do projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes de UI (shadcn/ui)
│   ├── Header.jsx       # Cabeçalho do site
│   ├── BrazilMap.jsx    # Componente do mapa do Brasil
│   └── FeatureCard.jsx  # Card de funcionalidades
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários e configurações
├── assets/              # Imagens e outros assets
├── App.jsx              # Componente principal
├── App.css              # Estilos principais
├── index.css            # Estilos globais
└── main.jsx             # Ponto de entrada
```

## 🎨 Tecnologias utilizadas

- **React** - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de CSS utilitário
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Ícones
- **Framer Motion** - Animações (disponível)

## ✏️ Como editar

### Modificar conteúdo

1. **Textos principais:** Edite o arquivo `src/App.jsx`
2. **Estilos:** Use classes do Tailwind CSS ou edite `src/App.css`
3. **Componentes:** Modifique os arquivos em `src/components/`

### Personalizar o mapa

O mapa do Brasil está no componente `src/components/BrazilMap.jsx`. Você pode:
- Modificar a forma do SVG
- Adicionar interatividade
- Mudar cores e estilos

### Adicionar novas funcionalidades

1. **Novos componentes:** Crie arquivos em `src/components/`
2. **Novas páginas:** Use React Router (já instalado)
3. **Novos estilos:** Use Tailwind CSS ou adicione CSS customizado

### Modificar cores e tema

As cores principais estão definidas usando classes do Tailwind:
- `text-blue-900` - Azul escuro (títulos)
- `bg-teal-500` - Verde azulado (botões)
- `text-gray-600` - Cinza (textos)

## 📦 Componentes principais

### Header
Localizado em `src/components/Header.jsx`
- Título do site
- Botão de login

### BrazilMap
Localizado em `src/components/BrazilMap.jsx`
- Mapa SVG do Brasil
- Controles de zoom
- Interatividade (hover)

### FeatureCard
Localizado em `src/components/FeatureCard.jsx`
- Cards das funcionalidades
- Ícones, títulos e descrições

## 🔧 Comandos úteis

```bash
# Instalar nova dependência
pnpm add nome-da-biblioteca

# Executar com host (para acesso externo)
pnpm run dev --host

# Verificar build
pnpm run preview

# Limpar cache
pnpm store prune
```

## 📝 Dicas para edição

1. **Hot Reload:** O servidor de desenvolvimento recarrega automaticamente quando você salva arquivos
2. **Tailwind:** Use o [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) no VS Code
3. **Componentes UI:** Consulte a [documentação do shadcn/ui](https://ui.shadcn.com/) para componentes prontos
4. **Ícones:** Use [Lucide React](https://lucide.dev/) para ícones consistentes

## 🚀 Deploy

O projeto já está buildado na pasta `dist/`. Você pode:
1. Fazer upload dos arquivos da pasta `dist/` para qualquer servidor web
2. Usar serviços como Vercel, Netlify ou GitHub Pages
3. Usar o comando `pnpm run build` para gerar uma nova build

---

**Desenvolvido com código limpo e modular para facilitar manutenção e edição.**

