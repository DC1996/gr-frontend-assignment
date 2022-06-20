# Zadanie Frontend developer GoodRequest

Cieľom zadania je vytvoriť jednoduchú aplikáciu v Reacte, ktorá slúži ako formulár pre nadáciu GoodBoy na podporu slovenských útulkov pre psy. 

**Aplikácia by mala umožňovať potenciálnym podporovateľom:**

*  zvoliť si formu pomoci - všeobecný príspevok pre nadáciu alebo príspevok pre konkretný útulok (povinné pole)
*  vybrať si konkrétny útulok zo zoznamu zapojených útulkov (nepovinné v prípade všeobecného príspevku, v opačnom prípade povinné pole)
*  zvoliť si výšku príspevku, pričom je možné nastaviť aj vlastnú hodnotu (povinné pole)
*  vyplniť svoje osobné údaje:

    *  meno - nepovinné pole (2-20 znakov)
    *  priezvisko - povinné pole (2-30 znakov)
    *  e-mail - validný formát e-mailovej adresy
    *  telefón - slovenské alebo české číslo s predvoľbou +420 / +421 so zobrazením zvolenej krajiny vo forme vlajky štátu
    *  potvrdiť súhlas so spracovaním osobných údajov (povinné pole)
    *  odoslať zvalidovaný formulár, prípadne zrozumiteľne oznámiť používateľovi chybový stav

Pre účely zadania sme vytvorili 2 jednoduché API endpointy - GET zoznamu útulkov zapojených do projektu a POST na odoslanie obsahu formuláru. Dokumentáciu k nim nájdete na nasledovnom odkaze: https://frontend-assignment-api.goodrequest.dev/apidoc/

Grafické podklady pre zadanie nájdete na nasledovnom odkaze (registrácia do toolu Figma je zdarma):
https://www.figma.com/file/FyxU4Zzp54tOrmQBNTly7G/GoodRequest-Frontend-Assignment

Vizuálna kvalita spracovania aplikácie a štýlovanie je tiež predmetom hodnotenia. Plynulé a user friendly UI s peknými prechodmi a animáciami sú plusový bod.

**Kritériá na použité technológie:**

*  Aplikácia musí byť napísaná v React.js, na setup projektu odporúčame create-react-app https://github.com/facebook/create-react-app
*  Na state management musí byť použitý Redux https://redux.js.org/ 
*  Štruktúru projektu nechávame kompletne na vás
*  Nice to have (nepovinné kritériá):

    *  Použiť TypeScript
    *  Použiť lokalizačnú knižnicu na stringy (napr. i18next)
    *  Použiť styled-components
    
*  Ak vám ostane čas alebo chuť :):

    *  Responzívne zobrazenie
    *  SEO (implementovať og:image a rôzne titles a descriptions na jednotlivých stepoch formuláru)
    
**Postup odovzdania zadania:**

* Naklonujte si tento repozitár k sebe
* Umiestnite ho do verejného github / bitbucket repozitáru a svoju prácu priebežne commitujte
* Do repozitáru udeľte prístup kontu peter.reguli@goodrequest.com (v prípade súkromného repo na bitbucket) alebo pošlite link na verejné github repo na tento e-mail
* Commit messages a spôsob commitovania budú tiež predmetom hodnotenia

**Ak by ste mali hocijaké otázky alebo ste sa niekde zasekli:**

* Kedykoľvek napíšte otázky alebo nás požiadajte o pomoc na peter.reguli@goodrequest.com - radi vám poradíme ;)

# Assignement for Frontend developer - GoodRequest

The aim of the assignment is to create a simple application in React that serves as a form for the GoodBoy Foundation to support Slovak shelters for dogs. 

**The application should allow potential supporters to:**

* choose the form of help – general contribution for the foundation or contribution for specific shelter (mandatory field)
* choose a specific shelter from the list of involved shelters (optional in the case of the general contribution, otherwise mandatory field)
* choose the amount of the contribution, while it is possible to set your own value (mandatory field)
* fill in your personal data:

    *  name - optional field (2-20 characters)
    *  surname - mandatory field (2-30 characters)
    *  e-mail - valid format of the e-mail address
    *  telephone - Slovak or Czech number with area code +420 / +421 with a display of the selected country in the form of the flag
    *  confirm consent to the processing of personal data (mandatory field)
    *  send a validated form, or clearly inform the user about an error condition
    
For the purposes of the assignment, we created 2 simple API endpoints - GET the list of shelters involved in the project and POST to submit the content of the form. Documentation for them can be found at the following link: https://frontend-assignment-api.goodrequest.dev/apidoc/

Graphic materials for the assignment can be found at the following link (registration in Figma tool is free): https://www.figma.com/file/FyxU4Zzp54tOrmQBNTly7G/GoodRequest-Frontend-Assignment

Visual quality of the application and styling is also a part of the evaluation. Smooth and user friendly UI with nice transitions and animations is a plus.

**Criteria for the technologies used:**

* The application must be written in React.js, for project setup we recommend create-react-app https://github.com/facebook/create-react-app
* Redux must be used for state management https://redux.js.org/
* We leave the structure of the project completely to you
* Nice to have (optional criteria):

    *  Use TypeScript
    *  Use localization library for strings (e.g. i18next)
    *  Use styled-components
    
* If you have some spare time :):

    *  Responsive design
    *  SEO (implement og:image and various titles and descriptions on individual steps of the form)
    
**To submit an assignment:**

* Clone this repository to you
* Put it in public github / bitbucket repository and commit your work continuously
* Grant access to the repository to the account peter.reguli@goodrequest.com (in case of the private repo on bitbucket) or send a link to public github repo to this email.

Commit messages and the way of commmiting will also be evaluated.

**If you have any questions or are stuck somewhere:**

* Write your questions at any time or ask us for help at peter.reguli@goodrequest.com - we will be happy to help you ;)