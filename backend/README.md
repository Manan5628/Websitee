# Hackhertz API

A FastAPI application for the Hackhertz project.

## Deployment on Render.com

### Manual Deployment

1. Create a new Web Service on Render.com
2. Link your GitHub repository
3. Use the following settings:
   - **Environment**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
4. Add the following environment variables:
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: Your MongoDB database name
5. Click "Create Web Service"

### Using render.yaml

If you prefer to use Infrastructure as Code, you can use the provided `render.yaml` file:

1. Push your code to GitHub
2. Log in to Render.com
3. Go to "Blueprints" and click "New Blueprint Instance"
4. Connect your repository
5. Render will automatically detect the `render.yaml` file and create the necessary services
6. Add your environment variables in the Render dashboard

## Local Development

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Create a `.env` file with your environment variables:
   ```
   MONGO_URL=your_mongodb_connection_string
   DB_NAME=your_database_name
   ```

3. Run the server:
   ```
   uvicorn server:app --reload
   ```

4. Access the API at http://localhost:8000

## API Endpoints

- `GET /api/`: Hello World endpoint
- `POST /api/status`: Create a status check
- `GET /api/status`: Get all status checks
