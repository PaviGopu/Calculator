# Calculator

The calculator is served by a Django project in `django_calculator/`. Its HTML
template and static CSS/JavaScript are stored in the `calculator` app.

## Run locally

```powershell
cd django_calculator
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python manage.py runserver
```

Open http://127.0.0.1:8000/ in your browser.
