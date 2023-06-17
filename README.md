# IQchnia
Projekt na uczelnie, który ma za zadanie stworzenie Inteligentnej Ksiązki Kucharskiej

## Instalacja

W głównym folderze projektu stwórz środowisko pythona

```bash
python -m venv .venv
```

Aktywuj środowisko

```bash
source .venv/bin/activate
```

Zainstaluj wymagane biblioteki

```bash
pip install -r requirements.txt
```

Przejdź do katalogu `frontend/` i wpisz:
```bash
yarn
```

## Frontend

Uruchomienie 

Css: [Tailwind](https://tailwindcss.com/)

Biblioteka Komponentow: [MUI](https://mui.com/)

Uruchomienie frontu w trybie deweloperskim

```bash
cd frontend
yarn dev
```
Budowanie do plików statycznych

```bash
cd frontend
yarn build
```

## Backend

Uruchamianie serwera. Serwer uruchomi się lokalnie na porcie 8000.
Na froncie zawsze odnosimy się do localhost. Nie ma bawimy się w CORSy i zmiany adresów.

```bash
cd backend
python manage.py runserver
```

## Instalowanie bibliotek Python

Jeśli instalujesz bibliotekę python za pomocą `pip install`
to pamiętaj aby zaktualizować plik `requirements.txt`. Możesz to zrobić za pomocą
     
```bash
pip freeze > requirements.txt
```
