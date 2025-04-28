# React + TypeScript + Webpack + SCSS Boilerplate

> 🛠️ Starter template for building modern, scalable and maintainable React applications with TypeScript and Webpack 5.

---

## 🚀 Features

- ⚡ **React 19** + **TypeScript 5**
- 📦 **Webpack 5** custom configuration
- 🎨 **SASS/SCSS** support
- 🧹 **ESLint** + **Prettier** + **Stylelint**
- 🔥 **Hot Module Replacement** (Webpack Dev Server)
- 🛡️ **Strict mode** TypeScript
- 🧪 **Testing ready** (Testing Library + Jest) *(to be installed later if needed)*
- 📄 Easy to extend and customize

---

## 📂 Project Structure

```
my-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── features/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.js
├── .prettierrc
├── .stylelintrc
├── tsconfig.json
├── webpack.config.js
└── package.json
```

---

## 🛠️ Setup & Installation

1. Clone the repository :

```bash
git clone https://github.com/joscar11/react-ts-starter.git
cd react-ts-starter
```

2. Install dependencies :

```bash
npm install
```

3. Start the development server :

```bash
npm run start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📦 Build for Production

```bash
npm run build
```

The production files will be created in the `/dist` folder.

---

## ✅ Available Scripts

| Command | Description |
|:---|:---|
| `npm run start` | Start development server |
| `npm run build` | Build production bundle |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## 🥩 Code Quality

- Linting with **ESLint** and **Stylelint**
- Autoformatting with **Prettier**
- Preconfigured rules for React, TypeScript, and SCSS

---

## ✨ Customization

This project is fully customizable :
- Add your own features in `/features`
- Add global styles in `/styles`
- Configure paths with `tsconfig.json` (`baseUrl`, `paths`)
- Add plugins/loaders in `webpack.config.js`

---

## 👌 Contribution

Feel free to fork the project and submit pull requests if you want to contribute.

---

# 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

# 📢 Notes

- Follow accessibility guidelines (a11y) for a better user experience.
- Keep your code clean and modular for long-term maintainability.

---

# 🔥 Badges

![npm](https://img.shields.io/badge/react-19.1.2-blue)
![npm](https://img.shields.io/badge/typescript-5.8.3-blue)
![npm](https://img.shields.io/badge/webpack-5.99.7-blue)

