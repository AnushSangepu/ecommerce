<p align="center">
  <p align="center">
    <a href="https://justdjango.com/?utm_source=github&utm_medium=logo" target="_blank">
      <img src="https://assets.justdjango.com/static/branding/logo.svg" alt="JustDjango" height="72">
    </a>
  </p>
  <p align="center">
    The Definitive Django Learning Platform.
  </p>
</p>

# Django React Ecommerce

<p align="center">
  <a href="https://youtu.be/RG_Y7lIDXPM"><img src="https://github.com/justdjango/django-react-ecommerce/blob/master/thumbnail.png" width="290"></a>
</p>

This repository contains a Django and React ecommerce project. Among other functionality, users can create their account, add items to their cart and purchase those items using Stripe.

[Watch the tutorials on how to build this project](https://youtu.be/RG_Y7lIDXPM)

## Backend development workflow

```json
virtualenv env
source env/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

## Frontend development workflow

```json
npm i
npm start
```

## For deploying

```json
npm run build
```

---

<div align="center">

<i>Other places you can find us:</i><br>

<a href="https://www.youtube.com/channel/UCRM1gWNTDx0SHIqUJygD-kQ" target="_blank"><img src="https://img.shields.io/badge/YouTube-%23E4405F.svg?&style=flat-square&logo=youtube&logoColor=white" alt="YouTube"></a>
<a href="https://www.twitter.com/justdjangocode" target="_blank"><img src="https://img.shields.io/badge/Twitter-%231877F2.svg?&style=flat-square&logo=twitter&logoColor=white" alt="Twitter"></a>

</div>

cd dj

nohup python3 manage.py runserver 0.0.0.0:8000 > server.log 2>&1 &
[07/Dec/2023 13:21:21] "GET /media/pants_7vaSjxH.jpg HTTP/1.1" 404 1843
[07/Dec/2023 13:21:21] "GET /media/shir_ep9dm97.jpg HTTP/1.1" 404 1840
[07/Dec/2023 13:21:24] "GET /api/products/1/ HTTP/1.1" 200 609
Not Found: /media/shir_ep9dm97.jpg
Not Found: /media/red-shirt_sPaQs3y.jpg
Not Found: /media/blue_shirt_rpVhH35.jpeg
[07/Dec/2023 13:21:24] "GET /media/red-shirt_sPaQs3y.jpg HTTP/1.1" 404 1855
Not Found: /media/green-shirt_04aMMMW.jpg
[07/Dec/2023 13:21:24] "GET /media/shir_ep9dm97.jpg HTTP/1.1" 404 1840
[07/Dec/2023 13:21:24] "GET /media/blue_shirt_rpVhH35.jpeg HTTP/1.1" 404 1861
[07/Dec/2023 13:21:24] "GET /media/green-shirt_04aMMMW.jpg HTTP/1.1" 404 1861
[07/Dec/2023 13:21:30] "GET /api/products/ HTTP/1.1" 200 426
Not Found: /media/shir_ep9dm97.jpg
[07/Dec/2023 13:21:30] "GET /media/shir_ep9dm97.jpg HTTP/1.1" 404 1840
Not Found: /media/pants_7vaSjxH.jpg
[07/Dec/2023 13:21:30] "GET /media/pants_7vaSjxH.jpg HTTP/1.1" 404 1843
