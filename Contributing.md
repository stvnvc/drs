# Smernice za doprinos projektu

Hvala što želite da doprinesete ovom projektu!  
Da bi rad bio organizovan i jasan, molimo vas da pratite sledeća pravila.

---

## 🪝 1. Forkujte repozitorijum

1. Otvorite GitHub repozitorijum.
2. Kliknite na **Fork** (u gornjem desnom uglu).
3. GitHub će napraviti kopiju repozitorijuma na vašem nalogu.
---
## 🛠️ 2. Izaberite issue na kojem radite

1. Otvorite listu **Issues** na GitHub.
2. Nađite issue koji želite da radite.
3. Ostavite komentar tipa:
   
    ```bash
    # Primer:
    Preuzimam ovaj issue.
    # Ili
    Želim da radim na ovom issue.
    # Ili
    Voleo bih rešavam ovaj issue. Da li mi možete dodeliti?
    ```
 4. Čekate da vam asistent dodeli zadatak
---
## 🌿 3. Kreirajte novi branch

Pre nego što počnete sa radom, **nemojte raditi direktno na `main` branch-u**.

1. Klonirajte vaš fork:
   ```bash
   git clone https://github.com/<vas-username>/<ime-repozitorijuma>.git
   ```
   
2. Uđite u folder projekta:
   ```bash
   cd <ime-repozitorijum>
   ```
   
3. Kreirajte branch za svoj zadatak/issue:
   ```bash
   git checkout -b <issue>-<broj>-<opis>
   # Npr. git checkout -b issue-169-incomplete-error-handling
   ```
---
## ✏️ 4. Implementirajte svoje izmene

Radite lokalno u svom branch-u.
Koristite **jasne `commit` poruke** u present tense (npr. add, fix, update).

Primer: 
   ```bash
   git add .
   git commit -m <message>
   # Npr. git commit -m "Add error handling in report_chart.py"
   ```
---
## 📤 5. Pushujte vaš branch

Prvi push na neki branch:
   ```bash
   git push -u origin <branch>
   # Npr. git push -u origin issue-169-incomplete-error-handling
   ```
Sledeći put na tom branchu:
   ```bash
   git push
   ```
---
## 🔃 6. Kreirajte Pull Request (PR)

1. Otvorite vaš fork na GitHubu.

2. Videćete obaveštenje “Compare & pull request” – kliknite.

3. Popunite PR opis:

    - Šta ste uradili
  
    - Na koji issue se odnosi (issue #ID)
  
    - Kratko objašnjenje implementacije
      
4. Pošaljite PR i sačekajte pregled.
---
## ✔️ 7. Čekajte pregled (review)

Asistent pregleda kod:
  - Ako je sve dobro -> PR će biti spojen (merged)
  - Ako postoje predlozi/sugestije -> biće ostavljen komentar šta treba ispraviti
---

## 🔄 8. Sinhronizujte vaš fork

Pre nego što počnete novi zadatak ili kreirate PR, **uvek sinhronizujte** svoj fork sa glavnim repozitorijumom kako bi radili na poslednjoj verziji projekta:

  ```bash
  # Pre nego što počneš novi zadatak ili PR, idi na main branch
  git checkout main
  # Povuci najnovije promene iz glavnog repozitorijuma
  git pull upstream main  
  # Prebaci se na svoju radnu granu (branch)
  git checkout <vaš-branch>
  # Spoji glavnu verziju u svoj branch
  git merge main
  ```
---
## 📌 Pravila kodiranja

  - Poštujte postojeću strukturu projekta

  - Pratite konvenciju imenovanja

  - Ne dodavati nepotrebne fajlove (npr. node_modules)
---
## ❓ Pitanja

Ako imate bilo kakvo pitanje, pitajte u „Discussions“ ili otvorite novi issue.
