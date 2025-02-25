# Heart_disease_predictor

### Technologies used -
Model - python , pkl file   
backend - flask    
database - postgreSQL   
frontend - react, tailwind

### File stucture
Heart_disease_predictor/  
├── backend/                 # Flask Backend  
│   ├── app.py               # Main Flask app (entry point)  
│   ├── config.py            # Configuration settings (PostgreSQL, env variables)  
│   ├── model.pkl            # Serialized ML model   
│   ├── requirements.txt     # Python dependencies   
│   ├── migrations/          # Flask-Migrate for database migrations   
│   ├── models.py            # Database models (SQLAlchemy)   
│   ├── routes.py            # API routes for frontend interaction  
│   ├── utils.py             # Helper functions   
│   ├── database.py          # PostgreSQL database connection  
│   ├── .env                 # Environment variables (DB URL, secret keys)   
│   ├── static/              # Static files (if needed)   
│   ├── templates/           # HTML templates (if using Jinja2)   
│   └── __init__.py          # App initialization   
├── frontend/                # React Frontend   
│   ├── src/    
│   │   ├── components/      # Reusable UI components   
│   │   ├── pages/           # Page components     
│   │   ├── App.js           # Main React app   
│   │   ├── index.js         # Entry point   
│   │   ├── api.js           # API calls to Flask backend    
│   │   └── styles.css       # Tailwind styles   
│   ├── public/              # Static assets (icons, manifest.json, etc.)   
│   ├── package.json         # Frontend dependencies   
│   ├── tailwind.config.js   # Tailwind CSS configuration  
│   └── postcss.config.js    # PostCSS configuration  
├── docker-compose.yml       # Docker setup (optional)  
├── Dockerfile               # Backend Dockerfile (optional)  
├── nginx.conf               # Reverse proxy for deployment (optional)  
├── .gitignore  
├── README.md  
└── Procfile               # Deployment (Heroku or Render)  


