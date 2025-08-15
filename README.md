# @codebayu/react-native-toast

A lightweight and customizable toast notification component for React Native and Expo, with simple API hooks for programmatic control.

## ✨ Features
- 📌 Show toast notifications globally from anywhere in your app.
- 🎨 Fully customizable colors & icons.
- ⏱ Adjustable display duration and animation speed.
- 🔄 Programmatic API with `useToast` hook.
- 🪶 Lightweight & simple integration.

## 📦 Installation

```bash
npm install @codebayu/react-native-toast
# or
yarn add @codebayu/react-native-toast
```

## 🚀 Usage
```ts
import React from 'react';
import { Toaster } from '@codebayu/react-native-toast';
import MainComponent from './MainComponent';

export default function App() {
  return (
    <>
      <Toaster />
      <MainComponent />
    </>
  );
}
```

## 🎯 Programmatic Control

You can show or hide toasts anywhere using the useToast hook.

```ts
import React from 'react';
import { useToast } from '@codebayu/react-native-toast';
import { Button } from 'react-native';

export default function Example() {
  const { showToast, hideToast } = useToast();

  return (
    <>
      <Button
        title="Show Success Toast"
        onPress={() =>
          showToast('Operation successful', 'success', { duration: 3000 })
        }
      />
      <Button title="Hide Toast" onPress={() => hideToast()} />
    </>
  );
}
}
```

## 🛠 API (useToast)

#### showToast(message, type?, options?)

- message (string) – The text to display.
- type (“warning” | “success” | “error”) – Defaults to "warning".
- options.duration (number) – Override display duration.
- options.animationDuration (number) – Override animation speed.

#### hideToast(callback?)

- callback (function) – Optional callback after toast is dismissed.


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.
