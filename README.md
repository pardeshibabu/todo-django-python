# Todo Django Project

A simple Todo List application built with Django that allows users to add, view, update, and delete tasks. The project includes a beautiful dashboard using HTML, CSS, and JavaScript.

---

## Features

- Add new tasks
- Mark tasks as completed
- Edit task details
- Delete tasks
- Responsive design with a user-friendly dashboard

---

## Requirements

- Python 3.8+
- Django 5.1.4
- A virtual environment (recommended)

---

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone git@github.com:pardeshibabu/todo-django-python.git
   cd todo-django-python
   ```

2. **Create a Virtual Environment**

   ```bash
   python3 -m venv myenv
   source myenv/bin/activate
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Migrations**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Run the Development Server**

   ```bash
   python manage.py runserver
   ```

6. **Access the Application**

   Open your browser and navigate to:
   [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

## Directory Structure

```
todo-django-python/
├── todo/
│   ├── static/             # Static files (CSS, JS, images)
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── scripts.js
│   │   └── images/
│   ├── templates/         # HTML templates
│   │   └── todo/
│   │       └── home.html
│   ├── views.py           # App views
│   ├── models.py          # Database models
│   ├── urls.py            # App-specific URLs
├── todoproject/
│   ├── settings.py        # Project settings
│   ├── urls.py            # Project URLs
├── manage.py               # Django management script
├── requirements.txt        # Python dependencies
```

---

## Static Files

1. Add static files like CSS and JS in the `todo/static/` directory.
2. Use the `{% static %}` template tag in HTML to include static files.
   Example:

   ```html
   <link rel="stylesheet" href="{% static 'css/styles.css' %}">
   <script src="{% static 'js/scripts.js' %}" defer></script>
   ```

---

## Key URLs

- **Dashboard:** [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- **Add Task:** [http://127.0.0.1:8000/add](http://127.0.0.1:8000/add)
- **Update Task:** [http://127.0.0.1:8000/update/<task_id>](http://127.0.0.1:8000/update/<task_id>)
- **Delete Task:** [http://127.0.0.1:8000/delete/<task_id>](http://127.0.0.1:8000/delete/<task_id>)

---

## Contribution

Feel free to fork this repository and submit pull requests for new features or bug fixes.

---

## License

This project is licensed under the MIT License.

---

## Contact

- **Author:** Pardeshi Kumar Mahato
- **GitHub:** [pardeshibabu](https://github.com/pardeshibabu)

---

### Happy Coding! 🚀

