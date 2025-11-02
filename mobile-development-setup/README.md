# 📱 0x00 - Create Your First Mobile App

## 🎯 Objective

Set up your first mobile application using the **Expo Router** template. Document the scaffolding process and understand the file structure of a React Native application using Expo.

---

## 🧭 Steps to Follow

### 1️⃣ Navigate to Your Project Directory

Open your terminal and move to your parent project directory:

```bash
cd prodev-mobile-setup
```

### 2️⃣ Set Up Your Project

Initialize a new Expo project using the **latest Expo Router** template:

```bash
npx create-expo-app@latest .
```

This command sets up a new Expo app in your current directory and automatically installs all dependencies.

---

## 🗂️ Project Structure After Setup

After running the command, you should see a structure like this:

```
prodev-mobile-app-0x00/
│
├── app/
│   ├── (tabs)/
│   │   └── index.tsx
│   ├── _layout.tsx
│   └── other default screens...
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── package.json
├── app.json
├── babel.config.js
└── README.md
```

### Key Files:

- **app/** → Contains screens and routes.
- **assets/** → Stores static files like images and fonts.
- **index.tsx** → Default entry screen.
- **app.json** → Expo project configuration.

---

## ✏️ Modify the Home Screen

1. Open the file:

   ```bash
   app/(tabs)/index.tsx
   ```

2. Find the line that contains:

   ```tsx
   <Text>Welcome!</Text>
   ```

3. Replace it with:

   ```tsx
   <Text>** First App Created**</Text>
   ```

4. Save your changes.

---

## ▶️ Run and Test Your Application

Start the Expo development server:

```bash
npx expo start
```

### 📱 On Your Device

- **iOS Users:** Scan the QR code in the terminal using your Camera app.
- **Android Users:** Scan the QR code using the **Expo Go** app.

You should see the message displayed as:

```
** First App Created**
```

---

## ♻️ Reset the Application

To test the reset script, run:

```bash
npm run reset-project
```

You will see a prompt like this:

```
Do you want to move existing files to /app-example instead of deleting them? (Y/n):
```

### 🧠 Observations:

- If you choose **Y** or press **Enter**:
  Your current project files (like `/app`, `/assets`, etc.) are moved into `/app-example/` for safekeeping.
- If you choose **n**:
  The files are deleted and replaced with a fresh Expo setup.

After running the reset command, a new clean Expo app structure appears, while the old files are saved inside the `app-example` directory if you chose to move them.

---

## ✅ Summary

| Step | Description                           | Status |
| ---- | ------------------------------------- | ------ |
| 1    | Initialized Expo Router project       | ✅     |
| 2    | Modified home screen text             | ✅     |
| 3    | Ran and tested app in Expo Go         | ✅     |
| 4    | Executed and documented reset process | ✅     |

---

## 📚 Repository Information

**Repository:** prodev-mobile-setup
**Directory:** `prodev-mobile-app-0x00`
**Files Modified:**

- `README.md`
- `app-example/app/(tabs)/index.tsx`
- `app-example/constants/Colors.tsx`

---

**Author:** Iddrisu Sulemana
**Program:** ALX ProDev Frontend (Mobile Module)
**Project:** 0x00 - Create Your First Mobile App
